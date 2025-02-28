const blog = `
# Summary

## What



## Goals


# Starting out
Oct 12

## AAAAAAA
`;

import {Project} from "./data";
var WizardRogue = Project.Create({
    startDate: new Date(2023, 1, 13),
    endDate: new Date(),
    displayName: "Wizard Rogue",
    projectName: "wizardrogue",
    description: "A 2D action roguelite focusing on code modulization.",
    tags: "Unity, Godot 3, Tiled, C#",
    imgPath: "default",
    backgroundPath: "default",
    markdown: blog
});

export default WizardRogue;
