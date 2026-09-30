// Exporta una pieza de motion a MP4 cuadro por cuadro (1080×1920, 30 fps).
// Uso:
//   node motion/render.mjs motion/video-1-ia/index.html salida.mp4 [--draft=0] [--frames=0,3.5,9]
// Con --frames solo guarda PNG de esos segundos (para revisar sin renderizar todo).
// Requiere playwright y ffmpeg (FFMPEG=/ruta/a/ffmpeg si no está en el PATH).
import { spawn } from 'node:child_process';
import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { chromium } = require('playwright');

const [input, output = 'salida.mp4', ...flags] = process.argv.slice(2);
if (!input) { console.error('Uso: node motion/render.mjs <index.html> [salida.mp4] [--draft=0] [--frames=a,b]'); process.exit(1); }
const opt = Object.fromEntries(flags.map(f => f.replace(/^--/, '').split('=')));

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1080, height: 1920 } });
const url = pathToFileURL(resolve(input)).href + `?render=1&draft=${opt.draft ?? '1'}`;
await page.goto(url, { waitUntil: 'networkidle' });
await page.waitForFunction(() => window.ready === true);
const { duration, fps } = await page.evaluate(() => ({ duration: window.DURATION, fps: window.FPS }));

const grab = t => page.evaluate(t => {
  window.renderAt(t);
  return document.getElementById('stage').toDataURL('image/png').split(',')[1];
}, t);

if (opt.frames) {
  for (const t of opt.frames.split(',').map(Number)) {
    const file = output.replace(/\.mp4$/, '') + `-${t.toFixed(2)}s.png`;
    writeFileSync(file, Buffer.from(await grab(t), 'base64'));
    console.log(file);
  }
} else {
  const ff = spawn(process.env.FFMPEG || 'ffmpeg', [
    '-y', '-f', 'image2pipe', '-framerate', String(fps), '-i', '-',
    '-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-crf', '18', '-preset', 'medium', '-movflags', '+faststart', output,
  ], { stdio: ['pipe', 'ignore', 'inherit'] });
  const total = Math.round(duration * fps);
  for (let f = 0; f < total; f++) {
    const buf = Buffer.from(await grab(f / fps), 'base64');
    if (!ff.stdin.write(buf)) await new Promise(r => ff.stdin.once('drain', r));
    if (f % fps === 0) process.stdout.write(`\r${(f / fps).toFixed(0)}s / ${duration}s`);
  }
  ff.stdin.end();
  await new Promise((r, j) => ff.on('close', c => c === 0 ? r() : j(new Error(`ffmpeg salió con ${c}`))));
  console.log(`\n${output}`);
}
await browser.close();
