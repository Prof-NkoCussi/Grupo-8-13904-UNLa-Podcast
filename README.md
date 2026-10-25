# Podcast "TPACK: enseñar con tecnología, pero con sentido" — Grupo 8

Licenciatura en Tecnologías Digitales para la Educación — UNLa
Sociedad, Cultura, Educación y Tecnologías · Podcast (opción A: destinado a docentes)

Integrantes: Silvana Gandur · Nicolás A. Cussi · Rocío Belén Gómez · Maximiliano Garay

## ▶️ [Escuchar y ver el podcast](https://prof-nkocussi.github.io/Grupo-8-13904-UNLa-Podcast/)

**https://prof-nkocussi.github.io/Grupo-8-13904-UNLa-Podcast/**

Se abre en el navegador (compu o celular): tocá play y las placas se animan
sincronizadas con el audio. Duración: 3:15.

---

Versión en video del podcast: dos placas animadas en HTML/CSS que se reproducen
en vivo con el audio del grupo, o se exportan como MP4 con el audio ya montado.

## Estructura

```
├── index.html               ← reproductor (la página de GitHub Pages)
├── CONTENIDO.md             ← guion completo, línea de tiempo y sistema visual
├── podcast/
│   ├── podcast.html         ← las 2 placas (portada + modelo TPACK) con la línea de tiempo
│   ├── podcast.mp3          ← audio editado del grupo (3:20)
│   ├── envelope.js          ← volumen del audio por cuadro (mueve los ecualizadores)
│   ├── export-podcast.js    ← exporta el video con el audio montado
│   └── fonts/               ← Manrope en local
├── assets/fotos/            ← fotos de los integrantes y logo UNLa
└── package.json
```

- **Placa 1 (0:00–0:36):** portada con las 4 fotos; se ilumina quien habla.
- **Placa 2 (0:36–3:15):** diagrama TPACK que se arma mientras se nombra cada
  conocimiento, filas de palabras clave por tramo y la frase final al cierre.
- Los tiempos de cada voz y de cada aparición están al principio del `<script>`
  de `podcast.html` (`VOICES`, `CIRCLES`, `ROWS`, `QUOTE_IN`).
- Para ver un momento puntual en el navegador: abrir `podcast/podcast.html#t=120`.

## Exportar

Requiere Node.js 18 o superior.

```
npm install
npx playwright install chromium

npm run export            # 1080p, 30 fps (~24 MB) → para YouTube / Drive
npm run export:liviano    # 720p, 15 fps (< 5 MB) → para subir al Moodle
```

Los videos quedan en `podcast/export/` (no se suben al repo).
El audio se corta en 3:15 con un fundido de salida (el MP3 original tiene ~7 s de silencio al final).
