# Campaña herramientas Finanflix — paquete de preproducción

Resumen del documento del 29-sep-2026 (@Facu), con precisiones de Facu del 30-sep.
Originales en esta carpeta: `paquete-preproduccion.pdf` (30 págs.) y
`paquete-preproduccion-texto-completo.txt` (texto extraído, para buscar con grep).

## Recomendación ejecutiva
- Producir ya la **Calculadora** (Video 3) y el **Conjunto** (Video 4). **IA** y **Tracker** se cierran cuando haya acceso a la plataforma / cuenta demo y se elijan los casos del flash crash.
- Tracción: **~500 accesos nuevos a la IA por semana** (Facu, 30-sep) y **716 suscriptores pagos** al 29-sep (452 en junio).

## Reglas de redacción de cifras (críticas)
- "~500 accesos nuevos a la IA por semana" — **nunca** "500 usuarios nuevos de Finanflix" (free trials: 56 → 193/semana en sep).
- Suscriptores pagos: 452 (jun) → 498 (jul) → 571 (ago) → 716 (29-sep). Altas pagas: 57, 90, 111, 194. Fuente: dashboard.
- Objetivo "Road to 700" (700 pagos a dic-2026) ya superado; usar solo si Facu lo quiere público.
- "Casi una década **en el mercado cripto**" — **nunca** "Finanflix tiene casi una década" (la empresa cumplió 7 años el 08-abr-2026; la IA existe desde el 11-jun-2026).
- **USD 5.200 millones: NO se usa** (tres versiones contradictorias: capital administrado / volumen en futuros / dato de Iñaki).
- "+6.000 flixers": sin fuente única (vault dice 4.000+ y +4.800). Solo si se confirma la definición.
- IA: decir "Responde con el material del programa Finanflix"; **no decir "entrenada"**.
- Cifras de negocio del vault congeladas desde el 04-sep; no usarlas.

## URLs
- Calculadora real: **plataforma.finanflix.com/calculadora** (pública, sin login). **Nunca** calculadora.finanflix.com (copia vieja del 10-ago; Lenny debe redirigir).
- Finanflix IA: plataforma.finanflix.com/asistente-af
- Portfolio Tracker: soldier-trades.trade (SSO desde menú Finanflix)
- CTA landing: finanflix.com/Aprende-Nuestro-metodo/ con `ref` por canal (Facu: 9–16; Finanflix: 1–8; Eric confirma formato).

## Decisiones
| Tema | Estado | Decisión |
|---|---|---|
| Objetivo | Resuelto | Deseo y FOMO basado en pruebas |
| Versión calculadora | Resuelto | Producción en plataforma |
| Tracción | Resuelto | 452 → 716 pagos |
| 500 por semana | Resuelto | Accesos a la IA |
| Casi una década | Resuelto | Referido al mercado cripto |
| Casos de bottoms | En curso | Existen; falta elegir 2–3 con fecha |
| Canal/formato | Provisional | Reels IG 9:16 master; 4:5 y 16:9 derivados |
| CTA | Provisional | Landing 30 días gratis; calculadora sin registro |
| Acceso IA/Tracker | Pendiente | Landing dice incluidos desde día 1; inventario dice cupo de 200 |
| USD 5.200 M | Pendiente | Falta medida, período y equipo |

## Tres preguntas abiertas para Facu
1. ¿IA y Tracker incluidos para todo suscriptor desde el día 1 del trial, o sigue el cupo de 200?
2. USD 5.200 M: ¿qué mide, de quién, qué período?
3. Casos de flash crash: ¿monedas puntuales o los busca Claude en la plataforma?

## Audiencia y canal
- Hispanohablantes LatAm que invierten o quieren invertir, foco cripto, siguen a Facu/Finanflix y no son suscriptores. Secundario: suscriptores que no activaron IA ni Tracker.
- Canal: Reels de Instagram (89% de free trials de sep fue orgánico: 505/568). Meta Ads como segundo canal (sin cambios grandes en campañas activas).

## Formatos e identidad
- Master 9:16 1080×1920 30 fps; zona segura: sin texto en 250 px arriba ni 400 px abajo. 4:5 1080×1350; 16:9 1920×1080 rediagramado.
- Capturas: desktop 1440×900 y mobile 390×844, 60 fps, cursor visible, zoom 100%.
- Colores: fondo **#1A1A23**, superficie **#282844**, acento naranja **#FF3F00**, violeta **#5328C1**. Tipografía **Sharp Grotesk**. Un solo acento por plano.
- Sonido: electrónica sobria, golpes en cada número, tecleo real. Todo debe entenderse sin sonido.
- Lectura: máx. 7 palabras por texto, ≥1 s cada 3 palabras. Cada cifra con fuente y fecha en el pie.
- Prohibido: cupos, contadores de escasez, urgencia, "tiempo real" no visible, retornos como promesa, IA infalible, frases atribuidas a Facu, usuarios fabricados. Aciertos = casos fechados, nunca tasa de precisión.

## Escenas reutilizables
E1 Contador de tracción · E2 Tarjeta de caso · E3 Capa de método (chips) · E4 Pantalla demo · E5 Pastilla de estado ("Leyendo tu cartera…") · E6 Cierre y CTA · E7 Pie legal · E8 Hilo naranja (une IA ↔ Tracker; la Calculadora no está integrada).

## Las cuatro piezas
| # | Pieza | Promesa | Demo principal | Dur. | CTA |
|---|---|---|---|---|---|
| 1 | Finanflix IA | Preguntale al método | Caso fechado: mecha del flash crash + 0.786 y la suba posterior | 40 s | Probala 30 días gratis → landing |
| 2 | Portfolio Tracker | Toda tu cartera, una sola lectura | Calculadora de escenarios de liquidez | 30 s | Probalo 30 días gratis → landing |
| 3 | Calculadora | Viví la decisión antes de tomarla | Simulador "¿Te bancabas 2008?" | 30 s | Gratis, sin registrarte → plataforma.finanflix.com/calculadora |
| 4 | Conjunto | Casi una década en cripto, en tres herramientas | Entender → seguir → explorar | 55 s | Probá 30 días gratis → landing |

### Video 1 · IA (40 s)
Apertura recomendada A: respuesta real de la IA con fecha, mecha y 0.786 dibujados, el precio entra a la zona y explota. Estructura: gancho (0–3) → zona E2 (3–7) → suba "+[Z]% desde la zona" (7–12) → 2 casos más (12–15) → "~500 accesos" (15–18) → método E3 (18–22) → demo de hoy (22–30) → cartera −20% con Tracker (30–34) → "La lectura es del método. La decisión, tuya." (34–37) → CTA (37–40).
Casos: respuesta posterior al 27-jul-2026 (función flash crash, PR #35), fecha/hora visibles, niveles explícitos, suba medida desde el nivel marcado; mejor 3 monedas distintas.
Legal: "Respuestas generadas con IA. No es recomendación de inversión. Rendimientos pasados no garantizan resultados futuros."

### Video 2 · Tracker (30 s)
Apertura A: "¿Cuánto tenés invertido?" → "En total." sobre fragmentos de apps. Consolidación → solo lectura / importar CSV → liquidez, riesgo, rendimiento vs BTC → calculadora de escenarios (18–25) → puente a la IA (25–27) → CTA. Legal: "Herramienta de seguimiento. No ejecuta operaciones." Necesita cuenta demo con semanas de historia.

### Video 3 · Calculadora (30 s) — lista para producir
Apertura A: "2008. El S&P 500 cayó 37%." → "Vos aportabas US$ 833 por mes." → "¿Qué hacés?" → "Sigo aportando" → 2009→2025 → barras: Seguiste aportando **US$ 820.598** · Dejaste de aportar **US$ 320.226** · Vendiste todo **US$ 184.341** · Pusiste lo mismo en las tres **US$ 190.000** (valores del 29-sep, aporte desde ene-2007; regrabar) → "En esta ventana el mercado se recuperó. No siempre pasa." → "Proyectá. Poné una meta. Calculá tus rentas." → CTA. Legal: "Simulación con datos históricos del S&P 500. Rendimientos pasados no garantizan resultados futuros." Números en formato argentino con "US$".
Otros datos: plan por defecto US$ 10.000 en 12 aportes, S&P 500, 5 años → US$ 16.351; Big Macs "64% más hamburguesas" (2.275 vs 1.391).

### Video 4 · Conjunto (55 s)
Apertura A: "Junio: 452 suscriptores pagos." → "Hoy: 716." → "~500 accesos nuevos a la IA por semana" → caso flash crash (8–14) → "Casi una década en el mercado cripto" + chips "Harvard · Chicago Booth · CFA · IAE" (confirmar a quién corresponde cada una) → negro "Ahora, en tres herramientas." → Entendé / Seguí / Explorá → clase en vivo → CTA donde el 716 se transforma en el isologo. Locución es propuesta; si Facu no la graba, va solo con texto y música.

## Inventario (estado al 29-sep)
- **Calculadora**: observada en producción (simulador 2008, titulares históricos/ETF bitcoin, tres recorridos, proyección DCA, Big Macs, meta con presets, ingresos pasivos regla 4%, plan compartible, revisión humana >US$ 50.000).
- **Finanflix IA**: documentada, no observada. Lanzamiento 11-jun-2026. RAG con material del curso (216 reglas en 15 dimensiones, 20-jun), gráfico Fibonacci + estocástico, lectura de cartera vía Tracker (PR #52), importación por captura/CSV, xStocks, memoria, imágenes, créditos (cupo 200 contradice landing).
- **Portfolio Tracker**: documentado. Lanzamiento 01-jun-2026 (25 cupos), demo 17-jun por Santiago Castillo. Tablero consolidado, API solo lectura, CSV, liquidez/drawdown, benchmark, calculadora de escenarios, tesis/watchlist, bonos y FCI. 194 cuentas (193 activas) al 02-jul.

## Datos de demo
Titular "Flixer Demo". Cartera "Demo — Cripto": 55% cripto / 45% USDT (BTC 25%, ETH 15%, SOL 8%, LINK 7%). 6 meses de compras escalonadas, 2 posiciones en pérdida y 2 en ganancia. CSV con plantilla genérica del Tracker (trk #302). Reset: incógnito (calc), chat nuevo + borrar memoria (IA), reimportar con "Reemplazar" (trk #310) en Tracker.

## Personas y responsables
- **Facu**: aprueba guiones, responde preguntas, crea carpeta Drive, licencia tipográfica, permiso de clase en vivo.
- **Lenny**: producto, cuenta demo, redirección de calculadora.finanflix.com, graba IA y Tracker.
- **Santiago Castillo**: Tracker (admin, valida CSV).
- **Eric**: logos SVG/AI, formato del parámetro `ref`.
- **Claude**: inventario, guiones, CSV demo, revisión de números.
- **Editor**: styleframes, animatic, piezas, exportes.

## Roadmap (7 etapas, 1 gate solo para IA y Tracker)
1. Inventario y oferta (1–2 d) · 2. Guiones (1–2 d) · 3. Styleframes + 5 s animados (3–5 d) · 4. Animatic (3–4 d) · 5. Piezas: Calculadora → IA → Tracker (5–8 d) · 6. Conjunto 9:16 y 16:9 (2–3 d) · 7. Revisión y entrega: exportes 9:16, 4:5, 16:9 + proyectos editables (2 d).
Checklist final: cifras coinciden con fuente el día de exportación, sin datos reales de clientes, legible sin sonido en zona segura, legales ≥2 s, Lenny confirma pantallas, audio con licencia.

## No encontrado (al cierre del doc)
Fuente de 500 usuarios/semana, respuestas fechadas de la IA con bottoms, definición de USD 5.200 M, uso actual de IA y Tracker.

## Referencia audiovisual
Higgsfield × OpenAI Dots (x.com/higgsfield/status/2104989726604484946, 59,6 s, 16:9). Adaptar: un mensaje por plano, pastillas de estado, escala con números reales, corte seco a negro, cierre que repite apertura. No adaptar: fondo blanco, mascotas, "make no mistakes", números ilustrativos, muro de caras, 16:9 como master.
