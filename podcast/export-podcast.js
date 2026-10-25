// Exporta el podcast como video MP4 1920x1080 a 30 fps, con el audio ya montado.
// Igual que export.js: congela las animaciones y captura cuadro por cuadro.
//
// Uso (parado en la raíz del repo):
//   node podcast/export-podcast.js
// Resultado: podcast/export/GRUPO8-podcast-TPACK.mp4
//
// Versión liviana para Moodle (menos de 5 MB: 720p, 15 fps, audio mono):
//   node podcast/export-podcast.js liviano
// Resultado: podcast/export/GRUPO8-podcast-TPACK-liviano.mp4

const { chromium } = require('playwright');
const ffmpegPath = require('ffmpeg-static');
const { spawn } = require('child_process');
const { pathToFileURL } = require('url');
const path = require('path');
const fs = require('fs');

const LITE = process.argv[2] === 'liviano';
const FPS = LITE ? 15 : 30;
const SCALE = LITE ? 1 : 1.5;   // 1280x720 (liviano) o 1920x1080
const END = 195;            // corta la cola de silencio del audio (dura 3:20)
const FADE_OUT = 3;         // fundido de audio al final

const dir = __dirname;
const outDir = path.join(dir, 'export');
fs.mkdirSync(outDir, { recursive: true });
const silent = path.join(outDir, LITE ? 'video-sin-audio-liviano.mp4' : 'video-sin-audio.mp4');
const out = path.join(outDir, LITE ? 'GRUPO8-podcast-TPACK-liviano.mp4' : 'GRUPO8-podcast-TPACK.mp4');
const MAX_BYTES = 4.7e6;      // margen bajo el límite de 5 MB del aula

const run = (args) => new Promise((res, rej) => {
  const p = spawn(ffmpegPath, args, { stdio: ['ignore', 'inherit', 'inherit'] });
  p.on('close', c => c === 0 ? res() : rej(new Error('ffmpeg salió con código ' + c)));
});

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 }, deviceScaleFactor: SCALE });
  await page.goto(pathToFileURL(path.join(dir, 'podcast.html')).href, { waitUntil: 'load' });
  await page.evaluate(() => document.fonts.ready);
  await page.evaluate(() => {
    window.__anims = document.getAnimations();
    window.__anims.forEach(a => a.pause());
    document.querySelectorAll('svg').forEach(s => s.pauseAnimations && s.pauseAnimations());
    window.__seek = t => {
      window.__anims.forEach(a => { a.currentTime = t * 1000; });
      document.querySelectorAll('svg').forEach(s => s.setCurrentTime && s.setCurrentTime(t));
      window.render(t);
    };
  });

  const ff = spawn(ffmpegPath, [
    '-y', '-loglevel', 'error',
    '-f', 'image2pipe', '-framerate', String(FPS), '-i', '-',
    '-c:v', 'libx264', '-preset', 'medium', '-crf', '18', '-pix_fmt', 'yuv420p', silent
  ], { stdio: ['pipe', 'inherit', 'inherit'] });
  const done = new Promise((res, rej) => ff.on('close', c => c === 0 ? res() : rej(new Error('ffmpeg ' + c))));

  const total = END * FPS;
  for (let f = 0; f < total; f++) {
    await page.evaluate(t => window.__seek(t), f / FPS);
    const img = await page.screenshot({ type: 'jpeg', quality: 92 });
    if (!ff.stdin.write(img)) await new Promise(r => ff.stdin.once('drain', r));
    if (f % (FPS * 5) === 0) console.log(`  ${Math.round(f / total * 100)}%  (${(f / FPS).toFixed(0)} s)`);
  }
  ff.stdin.end();
  await done;
  await browser.close();

  // Montar el audio: recorte en END y fundido de salida
  const audioFx = `atrim=0:${END},afade=t=out:st=${END - FADE_OUT}:d=${FADE_OUT}`;
  if (!LITE) {
    await run(['-y', '-loglevel', 'error', '-i', silent, '-i', path.join(dir, 'podcast.mp3'),
      '-map', '0:v', '-map', '1:a', '-c:v', 'copy', '-af', audioFx,
      '-c:a', 'aac', '-b:a', '192k', '-shortest', '-movflags', '+faststart', out]);
  } else {
    // Presupuesto: 4,7 MB en total. Audio mono 48 kbps, el resto para el video (2 pasadas).
    const A_KBPS = 48;
    const vKbps = Math.floor(MAX_BYTES * 8 / END / 1000 - A_KBPS - 6);  // 6 kbps de margen del contenedor
    const log = path.join(outDir, 'pass');
    const v = ['-c:v', 'libx264', '-preset', 'veryslow', '-tune', 'animation', '-b:v', vKbps + 'k',
               '-maxrate', (vKbps * 2) + 'k', '-bufsize', (vKbps * 4) + 'k', '-pix_fmt', 'yuv420p', '-passlogfile', log];
    await run(['-y', '-loglevel', 'error', '-i', silent, ...v, '-pass', '1', '-an', '-f', 'mp4', '/dev/null']);
    await run(['-y', '-loglevel', 'error', '-i', silent, '-i', path.join(dir, 'podcast.mp3'),
      '-map', '0:v', '-map', '1:a', ...v, '-pass', '2', '-af', audioFx,
      '-c:a', 'aac', '-b:a', A_KBPS + 'k', '-ac', '1', '-shortest', '-movflags', '+faststart', out]);
    fs.readdirSync(outDir).filter(f => f.startsWith('pass')).forEach(f => fs.unlinkSync(path.join(outDir, f)));
    const mb = fs.statSync(out).size / 1e6;
    console.log(`Tamaño: ${mb.toFixed(2)} MB (video ${vKbps} kbps)`);
    if (mb > 5) throw new Error('Se pasó de 5 MB');
  }
  fs.unlinkSync(silent);
  console.log('Listo →', out);
})();
