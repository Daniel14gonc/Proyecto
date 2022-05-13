# Proyecto Web 2022
***
## Introducción
Siempre me he sentido bastante atraído por el arte y por los museos.
Ahora que tenía la oportunidad de copiar un sitio web pixel perfect,
decidí inspirarme en el sitio del Museo del Louvre, en París.

Para el proyecto se usó una resolución de 1608 x 1080.

## Tecnologías
Este sitio está construido con Server Side Rendering, sin usar ningún
Framework como Next.js. Para construirlo se usaron las siguientes
herramientas.
- ⚛ **React**  - 18.1.0
- 🛠 **Babel** - 8.2.5
- 🚀 **Webpack**  — Hot Reloading, Optimizado para Server y Client Side.
- 💅 **CSS** — Componentes estilizados.
- 💖 **Lint** — ESlint
- 🧠 **Express** - Server Side Rendering

## Inicia
Si quieres construir el sitio localmente.
1. Clona el repositorio usando. `https://github.com/Daniel14gonc/Proyecto.git`.
2. Muevete al directorio `cd Proyecto`.
3. Ejecuta el comando `npm install` o `npm i`.
4. Ejecuta el comando `npm run all`.
5. Dirigete a `http://localhost:3000` donde podrás ver el proyecto.

Puedes visitar el sitio en: `http://proyecto.danielgcarrillo.xyz`

## Comandos
- `dev` permite crear el sitio usando solo babel, pero sin cargar imágenes ni estilos.
- `build` permite construir el sitio, sin necesidad de usar un servidor.
- `build-server` permite construir los recursos necesarios para el servidor de SSR.
- `dev-server` permite construir el sitio sin SSR.
- `all` permite constuir el lado del cliente, del servidor y usar SSR en el puerto 3000.
- `start` permite construir el sitio sin SSR.