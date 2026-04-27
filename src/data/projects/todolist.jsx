import {Project} from "../data";

var project = Project.Create({
    startDate: new Date(2021, 9, 12),
    endDate: new Date(2023, 2, 3),
    displayName: "Cubeds Todolist",
    projectName: "todolist",
    description: "A Todolist for my todolist so I can todo all of my lists on the todolist.",
    tags: "Unity, Programming",
    imgPath: "card",
    backgroundPath: "default"
});

project.blog = ``;

export default project;
