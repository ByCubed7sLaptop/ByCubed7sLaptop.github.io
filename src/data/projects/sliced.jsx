import {Project} from "../data";

var project = Project.Create({
    startDate: new Date(2021, 9, 12),
    endDate: new Date(2023, 2, 3),
    displayName: "Sliced: A story of Pizza",
    projectName: "sliced",
    description: "Uni satire hack-and-slash game .",
    tags: "Unity, Game, Programming",
    imgPath: "default",
    backgroundPath: "default"
});

project.blog = ``;

export default project;
