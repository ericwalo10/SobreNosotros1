# Motion — Campaña herramientas Finanflix

Piezas animadas en código (canvas, cuadro por cuadro), 9:16 1080×1920 a 30 fps.

- `video-1-ia/index.html`: Video 1 · Finanflix IA (40 s). Abrir en el navegador para reproducir, recorrer por escena y ver la zona segura de Reels.
- `video-1-ia/video-1-ia-animatic.mp4`: exportación actual (borrador, serie de precios y valores ilustrativos).
- `render.mjs`: exporta a MP4 o a PNG sueltos.

```bash
NODE_PATH=$(npm root -g) node motion/render.mjs motion/video-1-ia/index.html salida.mp4 --draft=0
NODE_PATH=$(npm root -g) node motion/render.mjs motion/video-1-ia/index.html frames.mp4 --frames=1.5,16,39
```

Para cerrar la pieza: completar el objeto `CASE` al inicio de `index.html` con los datos literales del caso elegido y reemplazar la serie ilustrativa (`candles`) por la serie de precios real.
