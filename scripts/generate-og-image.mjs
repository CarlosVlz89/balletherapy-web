import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const publicDir = path.resolve(rootDir, 'public');
const heroImgPath = path.resolve(rootDir, 'src/assets/hero-bg.jpg');

if (!fs.existsSync(heroImgPath)) {
  console.error(`Error: No se encontró la imagen base en ${heroImgPath}`);
  process.exit(1);
}

// Convertir la imagen a base64 para incrustación directa autónoma
const heroBase64 = fs.readFileSync(heroImgPath).toString('base64');
const heroDataUri = `data:image/jpeg;base64,${heroBase64}`;

const htmlTemplate = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Balletherapie Open Graph Preview</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&display=swap" rel="stylesheet">
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      width: 1200px;
      height: 630px;
      overflow: hidden;
      background-color: #FAF7F5;
      background-image: 
        radial-gradient(circle at 10% 20%, rgba(160, 82, 85, 0.07) 0%, transparent 45%),
        radial-gradient(circle at 90% 85%, rgba(234, 223, 217, 0.7) 0%, transparent 55%),
        radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.5) 0%, transparent 70%);
      font-family: 'Montserrat', sans-serif;
      color: #2A2421;
      position: relative;
    }

    .container {
      width: 1200px;
      height: 630px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 50px 75px;
      position: relative;
      z-index: 10;
    }

    /* Columna izquierda editorial */
    .left-col {
      width: 630px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .brand-header {
      display: flex;
      align-items: center;
      gap: 14px;
      margin-bottom: 24px;
    }

    .badge {
      display: inline-flex;
      align-items: center;
      padding: 5px 14px;
      border-radius: 9999px;
      background: rgba(234, 223, 217, 0.65);
      border: 1px solid #EADFD9;
      color: #8E4A49;
      font-size: 12px;
      font-weight: 500;
      letter-spacing: 0.08em;
    }

    .wordmark {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-size: 30px;
      color: #2A2421;
      letter-spacing: 0.02em;
    }

    .wordmark-dot {
      color: #A05255;
      font-style: normal;
    }

    .main-title {
      font-family: 'Playfair Display', serif;
      font-size: 46px;
      line-height: 1.15;
      font-weight: 600;
      color: #2A2421;
      margin-bottom: 18px;
    }

    .main-title-accent {
      font-style: italic;
      font-weight: 400;
      color: #A05255;
      display: block;
    }

    .subtitle {
      font-size: 17px;
      line-height: 1.55;
      color: #685D57;
      font-weight: 300;
      max-width: 560px;
      margin-bottom: 26px;
    }

    .pillars-pill {
      display: inline-flex;
      align-items: center;
      background: rgba(255, 255, 255, 0.85);
      backdrop-filter: blur(10px);
      border: 1px solid #EADFD9;
      box-shadow: 0 4px 16px rgba(42, 36, 33, 0.04);
      padding: 10px 20px;
      border-radius: 9999px;
      gap: 10px;
      margin-bottom: 20px;
      width: fit-content;
    }

    .pillar-item {
      font-size: 13px;
      font-weight: 500;
      color: #2A2421;
    }

    .pillar-dot {
      color: #A05255;
      font-size: 12px;
    }

    .social-proof {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 13px;
      color: #8E4A49;
      font-weight: 400;
    }

    .pulse-dot {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: #A05255;
      display: inline-block;
    }

    /* Columna derecha: Marco abovedado editorial */
    .right-col {
      width: 410px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
    }

    .arch-frame {
      width: 360px;
      height: 490px;
      border-radius: 180px 180px 32px 32px;
      overflow: hidden;
      border: 3px solid #FFFFFF;
      box-shadow: 0 24px 48px rgba(42, 36, 33, 0.12);
      position: relative;
      background-color: #EADFD9;
    }

    .arch-frame img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center 20%;
      display: block;
    }

    .arch-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(to top, rgba(42, 36, 33, 0.35) 0%, transparent 50%);
      pointer-events: none;
    }

    .floating-card {
      position: absolute;
      bottom: 22px;
      left: 50%;
      transform: translateX(-50%);
      width: 310px;
      background: rgba(255, 255, 255, 0.92);
      backdrop-filter: blur(12px);
      border: 1px solid rgba(234, 223, 217, 0.9);
      border-radius: 20px;
      padding: 12px 18px;
      box-shadow: 0 10px 24px rgba(42, 36, 33, 0.1);
      text-align: center;
    }

    .floating-card p {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-size: 15px;
      color: #2A2421;
      font-weight: 500;
    }

    .floating-card span {
      display: block;
      font-family: 'Montserrat', sans-serif;
      font-style: normal;
      font-size: 11px;
      color: #685D57;
      font-weight: 400;
      margin-top: 2px;
    }
  </style>
</head>
<body>
  <div class="container">
    <!-- Columna Izquierda -->
    <div class="left-col">
      <div class="brand-header">
        <h2 class="wordmark">Balletherapie<span class="wordmark-dot">.</span></h2>
        <span class="badge">Wellness studio</span>
      </div>

      <h1 class="main-title">
        Horas sentada. Días iguales.
        <span class="main-title-accent">Balletherapie.</span>
      </h1>

      <p class="subtitle">
        El espacio donde el barre activa, el journaling libera y tu sistema nervioso se regula.
      </p>

      <div class="pillars-pill">
        <span class="pillar-item">Barre somático</span>
        <span class="pillar-dot">•</span>
        <span class="pillar-item">Journaling terapéutico</span>
        <span class="pillar-dot">•</span>
        <span class="pillar-item">Meditación aplicada</span>
      </div>

      <div class="social-proof">
        <span class="pulse-dot"></span>
        <span>Sesiones 100% en vivo vía Zoom • Atención somática personalizada</span>
      </div>
    </div>

    <!-- Columna Derecha -->
    <div class="right-col">
      <div class="arch-frame">
        <img src="${heroDataUri}" alt="Elizabeth Caballero - Balletherapie" />
        <div class="arch-overlay"></div>
        <div class="floating-card">
          <p>"Tu pausa en medio del ruido"</p>
          <span>Movimiento somático restaurativo</span>
        </div>
      </div>
    </div>
  </div>
</body>
</html>
`;

const tempHtmlPath = path.resolve(rootDir, 'temp-og-render.html');
const tempPngPath = path.resolve(rootDir, 'temp-og-render.png');
const targetOgV2 = path.join(publicDir, 'og-image-v2.jpg');
const targetOgV1 = path.join(publicDir, 'og-image.jpg');

fs.writeFileSync(tempHtmlPath, htmlTemplate, 'utf-8');
console.log('1. Plantilla HTML generada en temp-og-render.html');

console.log('2. Renderizando tarjeta Open Graph a 1200x630 con Google Chrome headless...');
const chromePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const chromeCmd = `"${chromePath}" --headless=new --disable-gpu --screenshot="${tempPngPath}" --window-size=1200,630 --hide-scrollbars --virtual-time-budget=4000 "file://${tempHtmlPath}"`;

try {
  execSync(chromeCmd, { stdio: 'inherit' });
} catch (err) {
  console.error('Error al invocar Google Chrome:', err.message);
  process.exit(1);
}

console.log('3. Optimizando a formato JPEG de alta fidelidad con sips...');
execSync(`sips -s format jpeg -s formatOptions 92 -z 630 1200 "${tempPngPath}" --out "${targetOgV2}"`, { stdio: 'inherit' });

// Mantener og-image.jpg sincronizado también
fs.copyFileSync(targetOgV2, targetOgV1);
console.log(`4. Activo guardado en:
   - ${targetOgV2}
   - ${targetOgV1}`);

// Limpiar archivos temporales
if (fs.existsSync(tempHtmlPath)) fs.unlinkSync(tempHtmlPath);
if (fs.existsSync(tempPngPath)) fs.unlinkSync(tempPngPath);

console.log('5. Verificando dimensiones finales con sips...');
execSync(`sips -g pixelWidth -g pixelHeight "${targetOgV2}"`, { stdio: 'inherit' });
console.log('¡Proceso completado exitosamente!');
