from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
BRANDING = ROOT / "public" / "branding"
SOURCE = BRANDING / "logo-mark-transparent.png"


def crop_to_content(img: Image.Image, padding_ratio: float = 0.06) -> Image.Image:
    rgba = img.convert("RGBA")
    alpha = rgba.split()[-1]
    bbox = alpha.getbbox()
    if not bbox:
        return rgba

    left, top, right, bottom = bbox
    width = right - left
    height = bottom - top
    pad_x = int(width * padding_ratio)
    pad_y = int(height * padding_ratio)

    left = max(0, left - pad_x)
    top = max(0, top - pad_y)
    right = min(rgba.width, right + pad_x)
    bottom = min(rgba.height, bottom + pad_y)
    return rgba.crop((left, top, right, bottom))


def fit_in_square(img: Image.Image, size: int) -> Image.Image:
    canvas = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    scale = min(size / img.width, size / img.height)
    new_w = max(1, int(img.width * scale))
    new_h = max(1, int(img.height * scale))
    resized = img.resize((new_w, new_h), Image.Resampling.LANCZOS)
    offset = ((size - new_w) // 2, (size - new_h) // 2)
    canvas.paste(resized, offset, resized)
    return canvas


def main() -> None:
    img = Image.open(SOURCE)
    cropped = crop_to_content(img)

    cropped_path = BRANDING / "logo-mark-cropped.png"
    cropped.save(cropped_path, "PNG", optimize=True)

    fit_in_square(cropped, 16).save(BRANDING / "favicon-16.png", "PNG", optimize=True)
    fit_in_square(cropped, 32).save(BRANDING / "favicon-32.png", "PNG", optimize=True)
    fit_in_square(cropped, 180).save(BRANDING / "apple-touch-icon.png", "PNG", optimize=True)

    favicon_ico = BRANDING / "favicon.ico"
    Image.open(BRANDING / "favicon-32.png").save(
        favicon_ico,
        format="ICO",
        sizes=[(16, 16), (32, 32)],
    )

    ratio = cropped.height / cropped.width
    print(f"Cropped {SOURCE.name} -> {cropped_path.name} ({cropped.width}x{cropped.height}, ratio={ratio:.4f})")
    print("Generated favicon-16.png, favicon-32.png, apple-touch-icon.png, favicon.ico")


if __name__ == "__main__":
    main()
