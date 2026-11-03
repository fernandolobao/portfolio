"""
Generates the Open Graph / Twitter share images (1200x630 JPEG, < 300 KB for WhatsApp)
from the hero render poster and the copy in copy.json.

    pip install pillow fonttools brotli numpy
    python scripts/og/generate.py
        # home:      public/og/og-<locale>.jpg
        # projects:  public/og/work-<project>-<locale>.jpg  (uses scripts/og/covers/<project>.png)

Keep `copy.json` in sync with the site copy (hero title, years of experience).
"""
import json, os, io
import numpy as np
from PIL import Image, ImageDraw, ImageFilter, ImageFont
from fontTools.ttLib import TTFont

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
W, H = 1200, 630
LIME, WHITE, MUTED, LINE = (200, 241, 105), (244, 244, 240), (176, 182, 192), (58, 84, 104)

def ttf_from_woff2(path):
    f = TTFont(path); f.flavor = None
    buf = io.BytesIO(); f.save(buf); buf.seek(0); return buf

HEAD = lambda size: ImageFont.truetype(ttf_from_woff2(os.path.join(ROOT, "assets/fonts/SpaceGrotesk-SemiBold-Latin.woff2")), size)
BOLD = lambda size: ImageFont.truetype(os.path.join(ROOT, "assets/fonts/Inter-Bold.ttf"), size)
REG  = lambda size: ImageFont.truetype(os.path.join(ROOT, "assets/fonts/Inter-Regular.ttf"), size)

def background():
    poster = Image.open(os.path.join(ROOT, "public/hero/hole-poster-1600.webp")).convert("RGB")
    s = W / poster.width
    poster = poster.resize((W, int(poster.height * s)), Image.LANCZOS)
    y0 = max(0, int(poster.height * 0.47 - H * 0.52))
    bg = np.asarray(poster.crop((0, y0, W, y0 + H))).astype(np.float32) / 255.0
    x = np.linspace(0, 1, W, dtype=np.float32)[None, :, None]
    y = np.linspace(0, 1, H, dtype=np.float32)[:, None, None]
    left = np.clip(1.0 - (x - 0.0) / 0.62, 0, 1) ** 1.1             # darken the text side
    dark = np.array([10, 10, 10], np.float32) / 255.0
    bg = bg * (1 - 0.93 * left) + dark * 0.93 * left
    bg *= (1 - 0.35 * np.clip((y - 0.72) / 0.28, 0, 1))              # soft bottom shade
    return Image.fromarray((np.clip(bg, 0, 1) * 255).astype(np.uint8))

def wrap(draw, text, font, max_w):
    lines, cur = [], ""
    for word in text.split():
        trial = (cur + " " + word).strip()
        if draw.textlength(trial, font=font) <= max_w: cur = trial
        else: lines.append(cur); cur = word
    lines.append(cur); return lines

def render(locale, c):
    img = background().convert("RGBA")
    glow = Image.new("RGBA", (W, H), (0, 0, 0, 0)); gd = ImageDraw.Draw(glow)
    d = ImageDraw.Draw(img)
    # brand mark
    f = HEAD(46); gd.text((72, 58), "FC", font=f, fill=(0, 0, 0, 255))
    d.text((72, 58), "FC", font=f, fill=WHITE); d.text((72 + d.textlength("FC", font=f), 58), ".", font=f, fill=LIME)
    # headline
    ft = HEAD(70); lines = wrap(d, c["title"], ft, 620); y = 128
    for ln in lines:
        gd.text((72, y), ln, font=ft, fill=(0, 0, 0, 255)); d.text((72, y), ln, font=ft, fill=WHITE); y += 78
    # name + line
    y += 24
    gd.text((72, y), c["name"], font=BOLD(30), fill=(0, 0, 0, 255)); d.text((72, y), c["name"], font=BOLD(30), fill=WHITE)
    fl = REG(25); gd.text((72, y + 44), c["line"], font=fl, fill=(0, 0, 0, 255)); d.text((72, y + 44), c["line"], font=fl, fill=MUTED)
    # chips
    cx, cy = 72, y + 100; fc = BOLD(21)
    for chip in c["chips"]:
        tw = d.textlength(chip, font=fc); box = (cx, cy, cx + tw + 36, cy + 44)
        d.rounded_rectangle(box, radius=22, outline=LINE, width=2, fill=(10, 10, 10, 150))
        d.text((cx + 18, cy + 9), chip, font=fc, fill=LIME); cx += tw + 36 + 12
    # domain
    gd.text((72, 572), "fernandocamilotti.com", font=BOLD(26), fill=(0, 0, 0, 255)); d.text((72, 572), "fernandocamilotti.com", font=BOLD(26), fill=LIME)
    img = Image.alpha_composite(img, glow.filter(ImageFilter.GaussianBlur(10)))   # soft dark halo under the text
    d = ImageDraw.Draw(img)
    # redraw crisp text on top of the halo
    f = HEAD(46); d.text((72, 58), "FC", font=f, fill=WHITE); d.text((72 + d.textlength("FC", font=f), 58), ".", font=f, fill=LIME)
    y = 128
    for ln in lines: d.text((72, y), ln, font=ft, fill=WHITE); y += 78
    y += 24
    d.text((72, y), c["name"], font=BOLD(30), fill=WHITE); d.text((72, y + 44), c["line"], font=fl, fill=MUTED)
    cx, cy = 72, y + 100
    for chip in c["chips"]:
        tw = d.textlength(chip, font=fc); d.rounded_rectangle((cx, cy, cx + tw + 36, cy + 44), radius=22, outline=LINE, width=2, fill=(10, 10, 10, 150))
        d.text((cx + 18, cy + 9), chip, font=fc, fill=LIME); cx += tw + 36 + 12
    d.text((72, 572), "fernandocamilotti.com", font=BOLD(26), fill=LIME)
    out = os.path.join(ROOT, "public/og", f"og-{locale}.jpg")
    img.convert("RGB").save(out, "JPEG", quality=82, optimize=True, progressive=True, subsampling="4:2:0")
    print(locale, os.path.getsize(out) // 1024, "KB ->", out)

def render_project(locale, key, c):
    from PIL import ImageChops
    W_, H_ = W, H
    # dark backdrop with a soft accent glow behind the cover
    base = np.zeros((H_, W_, 3), np.float32) + np.array([10, 10, 10], np.float32) / 255.0
    yy, xx = np.mgrid[0:H_, 0:W_].astype(np.float32)
    r = np.sqrt(((xx - 880) / 520) ** 2 + ((yy - 300) / 330) ** 2)
    glow = np.clip(1 - r, 0, 1)[..., None] ** 2
    base = base + glow * np.array([0.16, 0.24, 0.06], np.float32)
    img = Image.fromarray((np.clip(base, 0, 1) * 255).astype(np.uint8)).convert("RGBA")

    # cover with rounded corners and a hairline border
    cover = Image.open(os.path.join(ROOT, "scripts/og/covers", f"{key}.png")).convert("RGBA")
    cw = 528; ch = int(cover.height * cw / cover.width)
    cover = cover.resize((cw, ch), Image.LANCZOS)
    mask = Image.new("L", (cw, ch), 0); ImageDraw.Draw(mask).rounded_rectangle((0, 0, cw - 1, ch - 1), radius=18, fill=255)
    cx, cy = W - 72 - cw, (H - ch) // 2 + 6
    shadow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    ImageDraw.Draw(shadow).rounded_rectangle((cx, cy + 14, cx + cw, cy + ch + 14), radius=18, fill=(0, 0, 0, 170))
    img = Image.alpha_composite(img, shadow.filter(ImageFilter.GaussianBlur(22)))
    img.paste(cover, (cx, cy), mask)
    d = ImageDraw.Draw(img)
    d.rounded_rectangle((cx, cy, cx + cw - 1, cy + ch - 1), radius=18, outline=(70, 96, 116), width=2)

    # text
    f = HEAD(46); d.text((72, 58), "FC", font=f, fill=WHITE); d.text((72 + d.textlength("FC", font=f), 58), ".", font=f, fill=LIME)
    d.text((72, 168), c["eyebrow"].upper(), font=BOLD(20), fill=LIME)
    ft = HEAD(64); lines = wrap(d, c["title"], ft, 460); y = 206
    for ln in lines:
        d.text((72, y), ln, font=ft, fill=WHITE); y += 72
    y += 12
    for ln in wrap(d, c["line"], REG(27), 440):
        d.text((72, y), ln, font=REG(27), fill=MUTED); y += 36
    y += 14
    d.text((72, y), c["by"], font=BOLD(22), fill=WHITE)
    cxp, cyp = 72, y + 52; fc = BOLD(20)
    for chip in c["chips"]:
        tw = d.textlength(chip, font=fc)
        d.rounded_rectangle((cxp, cyp, cxp + tw + 32, cyp + 40), radius=20, outline=LINE, width=2, fill=(10, 10, 10, 150))
        d.text((cxp + 16, cyp + 8), chip, font=fc, fill=LIME); cxp += tw + 32 + 10
    d.text((72, 572), "fernandocamilotti.com", font=BOLD(26), fill=LIME)
    out = os.path.join(ROOT, "public/og", f"work-{key}-{locale}.jpg")
    img.convert("RGB").save(out, "JPEG", quality=84, optimize=True, progressive=True, subsampling="4:2:0")
    print(f"work/{key}", locale, os.path.getsize(out) // 1024, "KB ->", out)


if __name__ == "__main__":
    copy = json.load(open(os.path.join(ROOT, "scripts/og/copy.json")))
    for locale, c in copy["home"].items(): render(locale, c)
    for key, per_locale in copy["projects"].items():
        for locale, c in per_locale.items(): render_project(locale, key, c)
