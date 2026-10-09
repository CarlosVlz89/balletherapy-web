import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const publicDir = path.resolve(rootDir, 'public');

// SVG oficial con identidad "Warm Editorial" para Balletherapy
// Fondo en terracota semántico (#A05255 / #8E4A49) y letra "B" en alabastro (#FAF7F5) estilo Playfair Display
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%">
  <defs>
    <linearGradient id="warmTerracotta" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#A05255" />
      <stop offset="100%" stop-color="#8E4A49" />
    </linearGradient>
  </defs>
  <!-- Fondo terracota editorial con curvatura suave tipo squircle -->
  <rect width="512" height="512" rx="112" fill="url(#warmTerracotta)"/>
  
  <!-- Letra 'B' esculpida con proporciones editoriales Playfair Display -->
  <path fill="#FAF7F5" fill-rule="evenodd" d="
    M 134 124
    H 192
    C 192 134, 196 142, 204 142
    H 206
    V 142
    H 274
    C 326 142, 360 166, 360 206
    C 360 238, 336 258, 300 264
    C 348 270, 378 296, 378 340
    C 378 386, 340 412, 280 412
    H 134
    C 134 412, 134 398, 148 398
    C 160 398, 164 390, 164 378
    V 158
    C 164 146, 160 138, 148 138
    C 134 138, 134 124, 134 124
    Z
    M 206 158
    V 256
    H 270
    C 308 256, 330 236, 330 206
    C 330 176, 308 158, 270 158
    Z
    M 206 272
    V 396
    H 276
    C 320 396, 346 374, 346 338
    C 346 302, 320 272, 276 272
    Z
  "/>
</svg>`;

const svgPath = path.join(publicDir, 'favicon.svg');
const appleTouchIconPath = path.join(publicDir, 'apple-touch-icon.png');
const icoPath = path.join(publicDir, 'favicon.ico');
const oldViteSvgPath = path.join(publicDir, 'vite.svg');

console.log('1. Escribiendo favicon.svg...');
fs.writeFileSync(svgPath, svgContent.trim() + '\n', 'utf-8');

console.log('2. Generando apple-touch-icon.png (180x180 px)...');
execSync(`sips -s format png -z 180 180 "${svgPath}" --out "${appleTouchIconPath}"`, { stdio: 'inherit' });

console.log('3. Generando favicon.ico (32x32 y 16x16 px)...');
// Generación de formato estándar .ico multiplataforma con Pillow
const pythonIcoCommand = `python3 -c "from PIL import Image; img = Image.open('${appleTouchIconPath}'); img.save('${icoPath}', format='ICO', sizes=[(32, 32), (16, 16)])"`;
execSync(pythonIcoCommand, { stdio: 'inherit' });

// Eliminar vite.svg si existe
if (fs.existsSync(oldViteSvgPath)) {
  console.log('4. Eliminando icono genérico vite.svg...');
  fs.unlinkSync(oldViteSvgPath);
}

console.log('¡Activos de Favicon generados con éxito en public/!');
