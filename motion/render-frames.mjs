// Renderiza cuadros JPEG de una página controlada por render(t) (1920×1080 o 1080×1920).
// Uso: node motion/render-frames.mjs <index.html> <carpeta> <desde> <hasta> [ancho] [alto]
//      node motion/render-frames.mjs <index.html> <carpeta> --at=1.5,9,22.8   (capturas sueltas)
// Divide el render en tandas (desde/hasta en cuadros) para no superar el límite de tiempo por comando.
import { mkdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { createRequire } from 'node:module';

const { chromium } = createRequire(import.meta.url)('playwright');
const [input, outDir, a, b, w = '1920', h = '1080'] = process.argv.slice(2);
mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: +w, height: +h } });
await page.goto(pathToFileURL(resolve(input)).href + '#render');
await page.waitForFunction(() => window.ready === true);
const fps = await page.evaluate(() => window.TL.fps);

const shot = async (t, file) => {
  await page.evaluate(t => window.render(t), t);
  await page.screenshot({ path: file, type: 'jpeg', quality: 92 });
};
if (a?.startsWith('--at=')) {
  for (const t of a.slice(5).split(',').map(Number)) await shot(t, `${outDir}/t${t.toFixed(2).padStart(5, '0')}.jpg`);
} else {
  for (let f = +a; f < +b; f++) await shot(f / fps, `${outDir}/f${String(f).padStart(4, '0')}.jpg`);
}
await browser.close();
