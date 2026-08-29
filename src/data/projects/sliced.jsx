import {Project} from "../data";

var project = Project.Create({
    startDate: new Date("2023-01-16"),
    endDate: new Date("2023-02-10"),
    displayName: "Sliced: A Story Of Pizza",
    projectName: "sliced",
    description: "Uni satire hack-and-slash game.",
    tags: "Unity, Game, Programming",
    imgPath: "default",
    backgroundPath: "default"
});

project.blog = ``;

export default project;