import sys
from PIL import Image

src = "src/assets/kverra-logo.jpg"
out = "src/assets/kverra-logo.png"

img = Image.open(src).convert("RGBA")
w, h = img.size
px = img.load()

# Remove near-white background with soft-edge alpha falloff so the logo
# can sit directly on the blue navbar without a white box behind it.
WHITE_THRESHOLD = 235
FALLOFF = 40  # brightness range over which alpha fades in

for y in range(h):
    for x in range(w):
        r, g, b, a = px[x, y]
        brightness = (r + g + b) / 3
        if brightness >= WHITE_THRESHOLD:
            px[x, y] = (r, g, b, 0)
        elif brightness >= WHITE_THRESHOLD - FALLOFF:
            # linear falloff between (THRESHOLD-FALLOFF) -> 255 alpha, THRESHOLD -> 0 alpha
            t = (WHITE_THRESHOLD - brightness) / FALLOFF  # 0 at threshold, 1 at threshold-falloff
            px[x, y] = (r, g, b, int(255 * t))

# crop to bounding box of visible content with padding
bbox = img.getbbox()
if bbox:
    pad = 14
    l, t, r, b = bbox
    l = max(0, l - pad)
    t = max(0, t - pad)
    r = min(w, r + pad)
    b = min(h, b + pad)
    img = img.crop((l, t, r, b))

img.save(out, "PNG")
print("saved", out, img.size)
