from imageMetaDataToJSON import generate_metadata_json

if __name__ == "__main__":
    generate_metadata_json("./public/fanart", "./src/data/fanart.json")
    generate_metadata_json("./public/art and design/art", "./src/data/art.json")
