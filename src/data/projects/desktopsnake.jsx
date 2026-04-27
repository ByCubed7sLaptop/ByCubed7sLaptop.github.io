import {Project} from "../data";

var project = Project.Create({
    startDate: new Date(2022, 4, 10),
    endDate: new Date(2023, 2, 3),
    displayName: "Desktop Snake",
    projectName: "desktopsnake",
    description: "Python snake game on your desktop.",
    tags: "Tkinter, Python",
    imgPath: "card",
    backgroundPath: "default"
});

project.blog = ``;

export default project;
