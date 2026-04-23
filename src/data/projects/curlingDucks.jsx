import {Project} from "../data";
var project = Project.Create({
    startDate: new Date(2025, 9, 2),
    endDate: new Date(),
    displayName: "Curling Ducks",
    projectName: "curlingducks",
    description: "A duck sliding curling game",
    tags: "Godot, GDScript, Quack, Programming, UI",
    imgPath: "default",
    backgroundPath: "default"
});

project.blog = ``;

export default project;
