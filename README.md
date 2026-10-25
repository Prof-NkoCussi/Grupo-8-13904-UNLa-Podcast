# TP Grupal — Video "Aprender más allá del aula" (Grupo 8)

Slides animadas hechas en HTML/CSS puro, grabadas como MP4 con Chromium
headless (Playwright) + ffmpeg. Sirven para importar como clips de fondo
en el editor de video y sumar la narración grabada por cada integrante.

## 1. Instalar lo necesario en tu compu

**Claude Code** (para seguir trabajando con Claude acá):
```
npm install -g @anthropic-ai/claude-code
```
Después corré `claude` adentro de esta carpeta para arrancar una sesión.

**Node.js** (v18 o superior) — bajalo de https://nodejs.org si no lo tenés.

**ffmpeg**:
- Mac: `brew install ffmpeg`
- Windows: `choco install ffmpeg` (o bajalo de ffmpeg.org y agregalo al PATH)
- Linux: `sudo apt install ffmpeg`

## 2. Instalar dependencias del proyecto

Parado en esta carpeta:
```
npm install
npx playwright install chromium
```

## 3. Estructura

```
tp-video-starter/
├── slides/
│   └── slide2/
│       ├── slide2.html      ← la slide en HTML/CSS puro (ya armada)
│       └── record.js        ← graba slide2.html como video
├── assets/
│   └── fotos/               ← poné acá las fotos de cada integrante
├── package.json
└── README.md
```

Cada slide nueva va en su propia carpeta `slides/slideN/` con su `.html`
y una copia de `record.js`.

## 4. Grabar una slide como video

Parado en la carpeta de la slide (ej. `slides/slide2/`):
```
node record.js slide2.html slide2 25000
```
Args: archivo html, nombre de salida, duración en milisegundos (25000 = 25 seg).

Esto genera un `.webm`. Convertilo a mp4:
```
ffmpeg -y -i slide2.webm -c:v libx264 -pix_fmt yuv420p -crf 18 -preset medium slide2.mp4
```

## 5. Fotos de los integrantes

Poné las fotos en `assets/fotos/` con este nombre (para que Claude las
encuentre sin preguntar):
```
assets/fotos/nicolas.jpg
assets/fotos/silvana.jpg
assets/fotos/rocio.jpg
assets/fotos/maximiliano.jpg
```
Fotos cuadradas o lo más cuadradas posible dan mejor resultado recortadas
en círculo.

## 6. Dónde quedó el trabajo — contexto para retomar con Claude Code

Pegale esto a Claude apenas abras la sesión acá, para que no tengas que
re-explicar todo:

> Estamos armando un video de 5 slides para un TP grupal universitario
> (Sociedad, Cultura, Educación y Tecnologías, UNLa). Cada slide es HTML/CSS
> puro con una animación de fondo tipo "red de nodos" minimalista (paleta
> azul marino #0d2440 / #163a63 con acento cian #0cc0df), que se graba como
> MP4 con Playwright + ffmpeg (ver record.js). Slide 2 (`slides/slide2/slide2.html`)
> ya está terminada y sirve de referencia de estilo para las otras 4.
>
> Pendiente:
> 1. Armar las slides 1, 3, 4 y 5 con el mismo estilo visual y las animaciones
>    de red de fondo.
> 2. En cada slide, agregar la foto circular del integrante que narra esa
>    parte, en el lugar donde antes decía "N / 5" (arriba a la derecha).
>    Al lado de la foto, una animación decorativa de "ecualizador" (barras
>    verticales animadas en loop, no sincronizada a audio real) que simule
>    que se está reproduciendo audio.
> 3. Reparto de narradores por slide: Slide 1 y 5 = Nicolás, Slide 2 =
>    Silvana, Slide 3 = Rocío, Slide 4 = Maximiliano.
> 4. Las fotos están en assets/fotos/<nombre>.jpg
>
> El contenido de texto de cada slide (títulos, bullets, citas) ya está
> definido — está en la conversación anterior con Claude en la nube, o te
> lo puedo volver a pasar.

Si querés, pegame ese contexto en el chat de acá y seguimos desde donde
quedamos.

---

# Podcast "TPACK: enseñar con tecnología, pero con sentido" (Clase 6)

Versión en video del podcast del Grupo 8 (opción A: destinado a docentes).
Usa el mismo sistema visual que las slides del TP y las fotos de `assets/fotos/`.

## Qué hay en `podcast/`

```
podcast/
├── podcast.html         ← las 2 placas (portada + modelo TPACK) con la línea de tiempo
├── podcast.mp3          ← audio editado del grupo (3:20)
├── envelope.js          ← volumen del audio por cuadro (mueve los ecualizadores)
├── export-podcast.js    ← exporta el video con el audio montado
└── fonts/               ← Manrope en local (no depende de internet)
```

- **Placa 1 (0:00–0:36):** portada con las 4 fotos; se ilumina quien habla.
- **Placa 2 (0:36–3:15):** diagrama TPACK que se arma mientras se nombra cada
  conocimiento, filas de palabras clave por tramo y la frase final al cierre.
- Los tiempos de cada voz y de cada aparición están al principio del `<script>`
  de `podcast.html` (`VOICES`, `CIRCLES`, `ROWS`, `QUOTE_IN`).
- Para ver un momento puntual en el navegador: abrir `podcast.html#t=120`.

## Exportar

Parado en la raíz del repo (con las dependencias del punto 2 instaladas):

```
node podcast/export-podcast.js            # 1080p, 30 fps (~24 MB) → para YouTube / Drive
node podcast/export-podcast.js liviano    # 720p, 15 fps (< 5 MB) → para subir al Moodle
```

Los videos quedan en `podcast/export/` (no se suben al repo: `*.mp4` está en `.gitignore`).
El audio se corta en 3:15 con un fundido de salida (el MP3 original tiene ~7 s de silencio al final).
