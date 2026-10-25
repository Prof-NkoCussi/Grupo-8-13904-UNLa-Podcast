# Contenido y guion — Podcast TPACK (Grupo 8)

**Título:** TPACK: enseñar con tecnología, pero con sentido
**Consigna:** opción A — podcast destinado a docentes para informar, comentar y
persuadir acerca de las ventajas del modelo TPACK para integrar la tecnología en el aula.
**Duración final:** 3:15 (audio original 3:20, se recorta el silencio de la cola).

## Sistema visual (mismo que el TP Grupal Nº1)

- Fondo: `linear-gradient(135deg, #0d2440 0%, #163a63 55%, #0d2440 100%)`
- Acento: `#0cc0df` (cian) — highlight de nodos: `#7fe3f4`
- Texto: `#f5f7fa`
- Tipografía: Manrope (local, en `podcast/fonts/`) — pesos 400 a 800
- Artboard: 1280×720 (16:9), exportado a 1920×1080 o 1280×720
- Fondo animado: red de nodos y líneas SVG + luciérnagas (igual que las slides del TP)
- Ecualizadores: siguen el volumen real del audio (`podcast/envelope.js`)

---

## Placa 1 — Portada (0:00 → 0:36)

- Logo UNLa arriba a la izquierda · badge "Podcast · Grupo 8" arriba a la derecha
- Kicker: "Para docentes · Integrar tecnología en el aula"
- Título: **TPACK**
- Subtítulo: Enseñar con tecnología, pero con sentido
- Micrófono con ecualizador circular
- Fila con las 4 fotos: se ilumina la de quien habla

## Placa 2 — El modelo (0:36 → 3:15)

- Kicker: "Modelo TPACK · Mishra y Koehler"
- Título: Integrar tecnología con sentido
- Arriba a la derecha: foto + nombre de quien habla + ecualizador
- Izquierda: diagrama de 3 círculos que se arma mientras se nombra cada conocimiento
  - Disciplinar — Qué enseñamos
  - Pedagógico — Cómo enseñamos
  - Tecnológico — Con qué herramientas
  - Centro: TPACK
- Derecha: filas de palabras clave que se suman por tramo (la activa se resalta)
  1. Tres conocimientos que se articulan — Partir de contenidos y objetivos
  2. Sentido pedagógico — Actividad · Preguntas · Exploración
  3. Desafíos — Recursos · Tiempo · Formación · Resistencias
  4. Acompañamiento directivo — Condiciones institucionales
  5. Diseño curricular — Enriquecer la enseñanza
  6. Planificar · Desarrollar · Evaluar — Decisiones pedagógicas
- Cierre: las filas se reemplazan por la frase final destacada

---

## Línea de tiempo

| Tiempo | Voz | En pantalla |
| --- | --- | --- |
| 0:00 – 0:04 | Música de apertura | Placa 1 |
| 0:04 – 0:37 | Silvana — Introducción | Placa 1, foto de Silvana resaltada |
| 0:37 – 1:11 | Nicolás — ¿Qué es el modelo TPACK? | Entra placa 2 · fila 1 (0:41) · círculos: Disciplinar 0:44, Pedagógico 0:48, Tecnológico 0:52, centro TPACK 0:57 |
| 1:11 – 1:46 | Rocío — Un ejemplo en el aula | Fila 2 |
| 1:46 – 2:23 | Maxi — Desafíos y acompañamiento | Fila 3 · fila 4 (2:13) |
| 2:23 – 2:38 | Silvana — Relación con el currículum | Fila 5 |
| 2:38 – 2:51 | Nicolás — Reflexión final | Fila 6 |
| 2:51 – 2:57 | Rocío | Fila 6 + "Decisiones pedagógicas" |
| 2:57 – 3:09 | Maxi — Cierre | Frase final (3:02) |
| 3:09 – 3:15 | Música de cierre | Fundido de salida |

Los tiempos exactos están en el `<script>` de `podcast/podcast.html`
(`VOICES`, `P2_IN`, `CIRCLES`, `ROWS`, `ROW_K`, `QUOTE_IN`).

---

## Guion

**[Música instrumental de apertura – 4 segundos. Baja suavemente.]**

**VOZ 1 – Introducción (Silvana Gandur)**
> ¿Alguna vez incorporaste una herramienta digital a tu clase y sentiste que, a
> pesar de ser novedosa, no aportó demasiado al aprendizaje?
> Hoy queremos compartir una propuesta que puede ayudarnos a pensar mejor nuestras
> clases: el modelo TPACK.
> Porque integrar tecnología no significa simplemente utilizar computadoras,
> aplicaciones o plataformas digitales. La pregunta es: ¿para qué las usamos y qué
> queremos que aprendan nuestros estudiantes?

**VOZ 2 – ¿Qué es el modelo TPACK? (Nicolás A. Cussi)**
> El modelo TPACK, desarrollado por Mishra y Koehler, propone relacionar tres
> conocimientos fundamentales.
> El disciplinar, es decir, qué enseñamos.
> El pedagógico, que tiene que ver con cómo enseñamos.
> Y el tecnológico, que nos permite seleccionar y utilizar diferentes herramientas.
> Lo importante es que estos conocimientos se articulen. No se trata de elegir
> primero una aplicación y después pensar qué hacer con ella, sino de partir de los
> contenidos y los objetivos de aprendizaje.

**VOZ 3 – Un ejemplo en el aula (Rocío Belén Gómez)**
> Pensemos en una clase de Matemática donde queremos trabajar las propiedades de las
> figuras geométricas.
> Podemos utilizar GeoGebra para que los estudiantes construyan figuras, las
> modifiquen, observen qué sucede y formulen sus propias conclusiones.
> Pero lo que hace valiosa la propuesta no es solamente el programa.
> Es la actividad que planificamos, las preguntas que hacemos y las oportunidades
> que ofrecemos para explorar, intercambiar ideas y aprender.
> Eso es integrar tecnología con sentido pedagógico.

**VOZ 4 – Desafíos y acompañamiento institucional (Maxi Garay)**
> Claro que no siempre es fácil.
> A veces faltan recursos, conectividad, capacitación o tiempo para planificar.
> También aparecen dudas y resistencias frente a herramientas que todavía no
> conocemos.
> Pero no necesitamos dominar todas las tecnologías.
> Podemos comenzar con pequeños cambios, compartir experiencias con otros docentes y
> aprovechar los espacios de formación.
> Y acá también es fundamental el acompañamiento de los equipos directivos,
> generando condiciones para que estas propuestas puedan desarrollarse.

**VOZ 1 – Relación con el currículum (Silvana Gandur)**
> Además, las tecnologías deben integrarse a los contenidos y objetivos establecidos
> en los diseños curriculares.
> No se trata de sumar actividades digitales porque sí, sino de enriquecer nuestras
> propuestas de enseñanza.

**VOZ 2 – Reflexión final (Nicolás A. Cussi)**
> El modelo TPACK nos ayuda a planificar, desarrollar y evaluar nuestras clases,
> considerando qué enseñamos, cómo lo hacemos y qué tecnologías pueden aportar.

**VOZ 3 (Rocío Belén Gómez)**
> Porque tener tecnología disponible no garantiza mejores aprendizajes.

**VOZ 4 (Maxi Garay)**
> La diferencia está en las decisiones pedagógicas que tomamos.

**VOZ 4 – Cierre (Maxi Garay)**
> ¡La tecnología no transforma la enseñanza por sí sola: somos los docentes quienes
> podemos darle sentido!

**[Música instrumental de cierre – 4 segundos.]**
