import {Project} from "../data";
var project = Project.Create({
    startDate: new Date(2024, 3, 9),
    endDate: new Date(),
    displayName: "Clockwork Angel",
    projectName: "clockworkangels",
    description: "Technical design finals audio project!",
    tags: "Unity, C#, Lethal Company, Audio",
    imgPath: "card",
    backgroundPath: "default"
});

project.blog = ``;

export default project;
