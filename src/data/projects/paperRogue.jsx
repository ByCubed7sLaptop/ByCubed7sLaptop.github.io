import {Project} from "../data";
var project = Project.Create({
    startDate: new Date(2021, 9, 12),
    endDate: new Date(),
    displayName: "Paper Rogue",
    projectName: "paperrogue",
    description: "A 3D Dungeon Generator library turned 2.5 adventure game!",
    tags: "Unreal, Unity, Game Development",
    imgPath: "default",
    backgroundPath: "default"
});

project.blog = `

# Summary

## What

Paper Rogue was one of my first experiences with creating projects in Unreal 4.
In which I got distracted with, and started adding RPG elements and other elements -
This all eventually lead me to creating the small combat game.


## Goals

The project was originally planned to be a small 3D dungeon generator,
to educate me in creating modulized packages in the engine.


# Starting out
May 15 -> ?????

![](projects/paperrogue/doc/V5/215015%20Start.png)

Unity's animation system I used from my last project was a pain so I decided I
would be going to be using Aarthificials Reanimation Package:

GITHUB CARD

This allows for a more traditional pixel animation, after adding a Reanimator
component, linking a root animation, and states, it's pretty much ready to go!


![](projects/paperrogue/doc/V5/215015%20ReanimatorScript.png)

`;

export default project;
