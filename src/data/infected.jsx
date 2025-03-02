import {Project} from "./data";
var project = Project.Create({
    startDate: new Date(2023, 1, 13),
    endDate: new Date(),
    displayName: "Infected",
    projectName: "infected",
    description:
        "The colaberative virtual reality, open world survival shooter with multiplayer!",
    tags: "Godot 4, VR, Multiplayer"
});

project.markdown = `
![video](projects/${project.projectName}/VR_Gun.mp4)

# Summary

## What



## Goals

# Starting out
Oct 12

## AAAAAAA
`;

export default project;
