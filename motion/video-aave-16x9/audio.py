"""Genera la banda sonora del video (WAV estéreo 44,1 kHz) con la misma rejilla de tiempos que el HTML.

Música: beat instrumental de hip-hop electrónico a 120 BPM en half-time (snare en el tiempo 3),
Re menor, 808 saturado. SFX de interfaz pegados a cada acción visible de timeline.js.
Uso: python3 motion/video-aave-16x9/audio.py salida.wav
"""
import json
import re
import sys
from pathlib import Path

import numpy as np
from scipy.io import wavfile
from scipy.signal import butter, sosfilt

SR = 44100
HERE = Path(__file__).parent
TL = json.loads(re.search(r"window\.TL\s*=\s*(\{.*\});", (HERE / "timeline.js").read_text(), re.S).group(1))
T, DUR, BPM = TL["t"], TL["duration"], TL["bpm"]
BEAT = 60 / BPM
N = int(DUR * SR)
rng = np.random.default_rng(7)


def t_axis(sec):
    return np.arange(int(sec * SR)) / SR


def env(sec, decay):
    return np.exp(-t_axis(sec) / decay)


def filt(x, kind, freq, order=2):
    return sosfilt(butter(order, freq, kind, fs=SR, output="sos"), x)


def noise(sec):
    return rng.standard_normal(int(sec * SR))


def add(buf, sig, at, gain=1.0, pan=0.0):
    """Suma una señal mono en buf (estéreo) en el segundo `at`, con paneo -1..1."""
    i = int(at * SR)
    if i >= N:
        return
    sig = sig[: N - i] * gain
    buf[i:i + len(sig), 0] += sig * np.sqrt((1 - pan) / 2) * np.sqrt(2)
    buf[i:i + len(sig), 1] += sig * np.sqrt((1 + pan) / 2) * np.sqrt(2)


def note(midi):
    return 440 * 2 ** ((midi - 69) / 12)


# --- instrumentos ---------------------------------------------------------------------
def kick():
    t = t_axis(.45)
    f = 45 + 85 * np.exp(-t / .035)
    body = np.sin(2 * np.pi * np.cumsum(f) / SR) * env(.45, .16)
    click = filt(noise(.45), "highpass", 3000) * env(.45, .004) * .3
    return np.tanh(2.2 * (body + click)) * .9


def snare():
    n = filt(noise(.3), "bandpass", [1500, 6000]) * env(.3, .06)
    body = np.sin(2 * np.pi * 190 * t_axis(.3)) * env(.3, .04) * .6
    return np.tanh(1.8 * (n + body)) * .55


def hat(open_=False):
    d = .12 if open_ else .035
    return filt(noise(.2), "highpass", 7500) * env(.2, d) * .22


def bass808(freq, sec):
    t = t_axis(sec)
    f = freq * (1 + .6 * np.exp(-t / .02))
    s = np.sin(2 * np.pi * np.cumsum(f) / SR) * env(sec, .55)
    s *= np.minimum(1, t / .004)
    return np.tanh(3.0 * s) * .45      # saturado: armónicos audibles en celular


def pad(freqs, sec, cutoff):
    t = t_axis(sec)
    out = np.zeros_like(t)
    for f in freqs:
        for det in (-.12, .12):
            ph = (f * 2 ** (det / 12)) * t
            out += 2 * (ph - np.floor(ph + .5))           # sierra
    out = filt(out / (len(freqs) * 2), "lowpass", cutoff, 2)
    a = np.minimum(1, t / .4) * np.minimum(1, (sec - t) / .5)
    return out * a * .22


# --- SFX de interfaz ---------------------------------------------------------------------
def sfx_click():
    hi = filt(noise(.06), "highpass", 2500) * env(.06, .003)
    body = np.sin(2 * np.pi * 140 * t_axis(.06)) * env(.06, .012) * .7
    return (hi + body) * .8


def sfx_tick():
    return np.sin(2 * np.pi * 3800 * t_axis(.05)) * env(.05, .008) * .35


def sfx_pop(f0=380, f1=900):
    t = t_axis(.14)
    f = f0 + (f1 - f0) * np.minimum(1, t / .06)
    return np.sin(2 * np.pi * np.cumsum(f) / SR) * env(.14, .04) * .5


def sfx_chime(midi):
    t = t_axis(.7)
    f = note(midi)
    s = sum(a * np.sin(2 * np.pi * f * k * t) for k, a in ((1, 1), (2, .35), (3, .12)))
    return s * env(.7, .22) * np.minimum(1, t / .003) * .3


def sfx_whoosh(sec=.55, lo=300, hi=5000, gain=.35):
    n = noise(sec)
    out = np.zeros_like(n)
    seg = int(.01 * SR)
    for i in range(0, len(n), seg):
        p = i / len(n)
        fc = lo * (hi / lo) ** np.sin(np.pi * p)            # barrido que sube y baja
        out[i:i + seg] = filt(n[max(0, i - seg * 4):i + seg], "bandpass", [fc * .6, min(fc * 1.6, 18000)])[-len(n[i:i + seg]):]
    return out * np.hanning(len(out)) * gain


def sfx_snap():
    return filt(noise(.03), "bandpass", [2000, 7000]) * env(.03, .005) * .7


def sfx_impact():
    t = t_axis(2.5)
    f = 30 + 60 * np.exp(-t / .05)
    sub = np.tanh(2.5 * np.sin(2 * np.pi * np.cumsum(f) / SR)) * env(2.5, .7) * .8
    shimmer = sum(np.sin(2 * np.pi * fr * t) for fr in (3136, 4186, 5274)) * env(2.5, .5) * .05
    burst = filt(noise(2.5), "lowpass", 3000) * env(2.5, .06) * .4
    return sub + shimmer + burst


def sfx_riser(sec):
    t = t_axis(sec)
    n = noise(sec)
    out = np.zeros_like(n)
    seg = int(.01 * SR)
    for i in range(0, len(n), seg):
        fc = 400 * (8000 / 400) ** (i / len(n))
        out[i:i + seg] = filt(n[max(0, i - seg * 4):i + seg], "bandpass", [fc * .7, fc * 1.4])[-len(n[i:i + seg]):]
    return out * (t / sec) ** 2 * .25


# --- música ----------------------------------------------------------------------------------
music = np.zeros((N, 2))
back = np.zeros((N, 2))          # capa de fondo que se duckea con cada kick (sidechain)
kick_env = np.zeros(N)
END = T["closing"]               # golpe final con el logo
GROOVE = 4.0                     # intro filtrada de 2 compases
BUILD = END - 2.0

# Re menor: Dm - Bb - F - C (un acorde por compás)
CHORDS = [[62, 65, 69], [58, 62, 65], [57, 60, 65], [60, 64, 67]]
ROOTS = [38, 34, 41, 36]
bar = 2 * BEAT * 2               # 4 tiempos
for b in range(int(END / bar)):
    t0 = b * bar
    ch = CHORDS[b % 4]
    cutoff = 350 + 900 * min(1, t0 / GROOVE) if t0 < GROOVE else 1400
    add(back, pad([note(m) for m in ch], bar, cutoff), t0, 2.6 if t0 < GROOVE else 1.0, 0)
    if t0 < GROOVE:
        for k in range(8):
            add(back, hat() * .5, t0 + k * BEAT / 2, 1, .3)
        continue
    # batería half-time: kick en 1 y en el "y" del 2, snare en el 3
    for kt in (0, BEAT * 1.5, BEAT * 3.5 if b % 2 else None):
        if kt is None:
            continue
        add(music, kick(), t0 + kt)
        i = int((t0 + kt) * SR)
        kick_env[i:i + int(.25 * SR)] = np.maximum(kick_env[i:i + int(.25 * SR)], env(.25, .09)[: len(kick_env[i:i + int(.25 * SR)])])
    add(music, snare(), t0 + BEAT * 2, 1, -.05)
    for k in range(8):
        sw = .02 if k % 2 else 0
        add(back, hat(open_=(k == 7 and b % 2 == 1)), t0 + k * BEAT / 2 + sw, .9, .25)
    # 808 siguiendo la raíz
    root = note(ROOTS[b % 4])
    add(music, bass808(root, BEAT * 1.4), t0)
    add(music, bass808(root, BEAT * 1.2), t0 + BEAT * 1.5)
    add(music, bass808(root * (1.5 if b % 2 else 1), BEAT * 1.4), t0 + BEAT * 3)
    if t0 >= BUILD:                                            # build: hats en semicorcheas y redoble
        for k in range(16):
            add(back, hat() * .6, t0 + k * BEAT / 4, 1, -.25)
        for k in range(8):
            add(music, snare() * (.25 + .1 * k), t0 + BEAT * 2 + k * BEAT / 4)
add(music, sfx_riser(2.0), BUILD, 1.0)

# cola: acorde final que se desvanece después del golpe
tail = pad([note(m) for m in CHORDS[0]] + [note(50)], DUR - END, 900)
tail *= np.linspace(1, 0, len(tail)) ** .8
add(back, tail, END, 2.8)
add(music, bass808(note(38), 2.5), END)

duck = 1 - .35 * kick_env
music += back * duck[:, None]

# --- SFX en la misma rejilla -------------------------------------------------------------------
sfx = np.zeros((N, 2))
add(sfx, sfx_snap(), T["logoIn"]); add(sfx, sfx_pop(300, 700), T["logoIn"] + .05, .6)
add(sfx, sfx_whoosh(), T["s1In"] - .05)
for c in ("clickComposer", "clickSend", "clickChip", "clickFlash", "clickNext"):
    add(sfx, sfx_click(), T[c])
for h in ("hoverSend", "hoverChip", "hoverFlash", "hoverCallout"):
    add(sfx, sfx_tick(), T[h])
for w in ("clickSend", "scrollInv", "clickChip", "clickNext", "scrollTiming"):   # cambio de pantalla
    add(sfx, sfx_whoosh(), T[w] + .02, .9)
add(sfx, sfx_pop(), T["callout"])
add(sfx, sfx_pop(), T["ringPrice"], .6)
add(sfx, sfx_pop(), T["badge"])
c0 = T["badge"] + .3                                         # sube el puntaje: ticks rápidos + chime
for k in range(12):
    add(sfx, sfx_tick(), c0 + k * .085, .5)
add(sfx, sfx_chime(81), c0 + 1.0); add(sfx, sfx_chime(86), c0 + 1.06, .7)
add(sfx, sfx_pop(), T["ringTiming"], .6)
add(sfx, sfx_impact(), T["closing"], 1.0)
add(sfx, sfx_snap(), T["closeLogo"])
for ln in T["closeLines"]:
    add(sfx, sfx_whoosh(.35, 800, 6000, .25), ln)

# --- mezcla: música por debajo de los SFX, pico ≈ -1 dBFS con limitador suave ---------------------
fade = np.ones(N); fl = int(.4 * SR); fade[-fl:] = np.linspace(1, 0, fl)
mix = (music / np.max(np.abs(music)) * .5 + sfx / np.max(np.abs(sfx)) * .55) * fade[:, None]
mix = np.tanh(mix * 1.2) / np.tanh(1.2)
mix = mix / np.max(np.abs(mix)) * .89

out = sys.argv[1] if len(sys.argv) > 1 else "audio.wav"
wavfile.write(out, SR, (mix * 32767).astype(np.int16))

# verificación por código: nivel RMS por segundo (Claude no puede escuchar)
rms = [20 * np.log10(np.sqrt(np.mean(mix[int(s * SR):int((s + 1) * SR)] ** 2)) + 1e-9) for s in range(int(DUR))]
print(out, f"{DUR}s", "pico", round(float(np.max(np.abs(mix))), 3))
print("RMS dBFS por segundo:", " ".join(f"{r:.0f}" for r in rms))
