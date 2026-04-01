import {Project} from "../data";

var project = Project.Create({
    startDate: new Date(2022, 4, 10),
    endDate: new Date(2023, 2, 3),
    displayName: "Mario Project",
    projectName: "mario",
    description: "University SDL Mario Platformer.",
    tags: "C++, OpenGL, Programming",
    backgroundPath: "default"
});

project.blog = `


`;

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
project.showcase = `
![](${project.imgPath})

`;

export default project;
