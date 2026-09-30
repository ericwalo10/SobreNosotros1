# Motion — Campaña herramientas Finanflix

Piezas animadas en código, renderizadas cuadro por cuadro a 30 fps.

- `video-1-ia/index.html`: Video 1 · Finanflix IA (40 s). Abrir en el navegador para reproducir, recorrer por escena y ver la zona segura de Reels.
- `video-1-ia/video-1-ia-animatic.mp4`: exportación actual (borrador, serie de precios y valores ilustrativos).
- `render.mjs`: exporta a MP4 o a PNG sueltos.

```bash
NODE_PATH=$(npm root -g) node motion/render.mjs motion/video-1-ia/index.html salida.mp4 --draft=0
NODE_PATH=$(npm root -g) node motion/render.mjs motion/video-1-ia/index.html frames.mp4 --frames=1.5,16,39
```

Para cerrar la pieza: completar el objeto `CASE` al inicio de `index.html` con los datos literales del caso elegido y reemplazar la serie ilustrativa (`candles`) por la serie de precios real.

## Video AAVE · Finanflix IA (16:9, 36 s)

Hecho según la guía "Estilo Apple + Brand Finanflix", solo con las capturas reales de la conversación
(`video-aave-16x9/assets/`, sin recortar ni recrear; el logo es un recorte de la captura 1).

- `video-aave-16x9/index.html`: página con `render(t)`; abrirla en el navegador para reproducir.
- `video-aave-16x9/timeline.js`: tiempos compartidos por el HTML y el audio.
- `video-aave-16x9/audio.py`: banda sonora por código (120 BPM half-time, Re menor, 808 saturado + SFX).
- `render-frames.mjs`: cuadros JPEG por tandas (o capturas sueltas con `--at=`).

```bash
F=frames; for i in 0 1 2 3; do NODE_PATH=$(npm root -g) node motion/render-frames.mjs motion/video-aave-16x9/index.html $F $((i*270)) $((i*270+270)) & done; wait
python3 motion/video-aave-16x9/audio.py audio.wav
ffmpeg -y -framerate 30 -i $F/f%04d.jpg -i audio.wav -c:v libx264 -preset medium -crf 17 -pix_fmt yuv420p -profile:v high \
  -c:a aac -b:a 256k -shortest -movflags +faststart salida.mp4
```
