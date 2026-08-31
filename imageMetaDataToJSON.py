import json
from pathlib import Path
from PIL import Image
from PIL.ExifTags import TAGS
from datetime import datetime


def get_image_metadata(image_path):
    stat = image_path.stat()

    metadata = {
        "author": None,
        "title": None,
        "filename": image_path.name,
        "format": None,
        "mode": None,
        "width": None,
        "height": None,
        "file_size_bytes": stat.st_size,
        "created": None,
        "modified": datetime.fromtimestamp(stat.st_mtime).isoformat(),
        "accessed": datetime.fromtimestamp(stat.st_atime).isoformat(),
        "exif": {},
    }

    # True creation time where supported (e.g. macOS)
    if hasattr(stat, "st_birthtime"):
        metadata["created"] = datetime.fromtimestamp(stat.st_birthtime).isoformat()
    else:
        # Windows: st_ctime is creation time.
        # Linux: st_ctime is metadata change time, not creation time.
        metadata["created"] = datetime.fromtimestamp(stat.st_ctime).isoformat()

    try:
        with Image.open(image_path) as img:
            metadata["author"] = image_path.name.split(" by ")[1].split(".")[0].title()
            metadata["title"] = image_path.name.split(" by ")[0].replace("_", " ").title()

            metadata["format"] = img.format
            metadata["mode"] = img.mode
            metadata["width"], metadata["height"] = img.size

            exif = img.getexif()
            if exif:
                metadata["exif"] = {
                    TAGS.get(tag, str(tag)): value
                    for tag, value in exif.items()
                }

    except Exception as e:
        metadata["error"] = str(e)

    return metadata


def generate_metadata_json(directory, output_file="images_metadata.json"):
    image_extensions = {
        ".jpg", ".jpeg", ".png", ".bmp", ".gif",
        ".tiff", ".tif", ".webp", ".heic", ".heif"
    }

    directory = Path(directory)

    images = []
    for path in directory.rglob("*"):
        if path.is_file() and path.suffix.lower() in image_extensions:
            images.append(get_image_metadata(path))

    with open(output_file, "w", encoding="utf-8") as f:
        json.dump(images, f, indent=4, ensure_ascii=False)

    print(f"Saved metadata for {len(images)} images to {output_file}")


if __name__ == "__main__":
    generate_metadata_json("./public/fanart",
                           "./src/data/fanart.json")
