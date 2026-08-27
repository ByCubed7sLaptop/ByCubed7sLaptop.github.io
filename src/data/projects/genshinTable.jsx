import {Project} from "../data";
var project = Project.Create({
    startDate: new Date("2026-06-14"),
    endDate: new Date("2026-08-21"),
    displayName: "Genshin Tabletop Simulator Table",
    projectName: "genshinTable",
    description: "A collection of assets for a Genshin inspired TTRPG with 3rd party integrations.",
    tags: "Python, Lua, Javascript, HTML, CSS, HTTP",
    imgPath: "card",
    backgroundPath: "default"
});

project.blog = ``;

export default project;
