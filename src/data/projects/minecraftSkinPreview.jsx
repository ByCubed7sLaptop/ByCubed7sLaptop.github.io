import {Project} from "../data";
var project = Project.Create({
    startDate: new Date(2024, 8, 24),
    endDate: new Date(),
    displayName: "Minecraft Skin Preview",
    projectName: "minecraftSkinPreview",
    description: "Minecraft texture painting tool for making custom skins and assets.",
    tags: "Java, Modding, Godot, C#",
    imgPath: "card",
    backgroundPath: "default"
});

project.blog = ``;

export default project;
