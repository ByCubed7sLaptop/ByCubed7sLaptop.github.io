const blog = `
# Summary

## What

## Goals

# Starting out
Oct 12

## AAAAAAA
`;

import {Project} from "./data";
var Infected = Project.Create({
    startDate: new Date(2023, 1, 13),
    endDate: new Date(),
    displayName: "Infected",
    projectName: "infected",
    description:
        "The colaberative virtual reality, open world survival shooter with multiplayer!",
    tags: "Godot 4, VR, Multiplayer",
    markdown: blog
});

export default Infected;
