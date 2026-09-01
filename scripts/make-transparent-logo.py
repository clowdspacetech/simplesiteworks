from PIL import Image

src = r"public/branding/logo-mark-source.png"
dst = r"public/branding/logo-mark-transparent.png"

img = Image.open(src).convert("RGBA")
pixels = img.load()
width, height = img.size
threshold = 35
feather = 25

for y in range(height):
    for x in range(width):
        r, g, b, a = pixels[x, y]
        brightness = max(r, g, b)
        if brightness <= threshold:
            pixels[x, y] = (0, 0, 0, 0)
        elif brightness <= threshold + feather:
            alpha = int(255 * (brightness - threshold) / feather)
            pixels[x, y] = (r, g, b, alpha)

img.save(dst, "PNG")
print(f"Saved {dst} ({width}x{height})")
