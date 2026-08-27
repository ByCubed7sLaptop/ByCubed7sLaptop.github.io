import os
import re

target = r"./src/data/projects.js"
directory = r"./src/data/projects"

importString = "import _DISPLAY from \"./projects/NAME\";\n"
exportString = "export var DISPLAY = _DISPLAY;\n\n"
projectString = "DISPLAY,\n"

fileDisplayNames = []

contents = "import {Project} from \"./data\";\n\n"
for e in os.scandir(directory):
    if e.is_file():
        with open(e.path, "r") as f:
            fileName = e.name.replace(".jsx", "")
            fileDisplayName = re.sub("[^A-Za-z]+", "", re.search("displayName: \".*\"", f.read()).group().replace("displayName: \"", ""))

            contents += importString.replace("NAME", fileName).replace("DISPLAY", fileDisplayName)
            contents += exportString.replace("NAME", fileName).replace("DISPLAY", fileDisplayName)

            fileDisplayNames.append(fileDisplayName)

contents += "export var projects = ["

for fileDisplayName in fileDisplayNames:
    contents += "\t"+fileDisplayName+",\n"

contents += "].sort((a,b) => b.startDate - a.startDate);"

print(contents)

with open(target, "w") as f:
    f.write(contents)
