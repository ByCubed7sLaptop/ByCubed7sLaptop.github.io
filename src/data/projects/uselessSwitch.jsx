import {Project} from "../data";

var project = Project.Create({
    startDate: new Date("10-08-2019"),
    endDate: new Date("21-09-2019"),
    displayName: "Useless Switch",
    projectName: "uselessSwitch",
    description: "A useless switch to learn Unreal 4.",
    tags: "Unreal, Programming",
    imgPath: "card",
    backgroundPath: "default"
});

project.blog = `
# Summary

## What

A small switch is placed in front of the player, once the switch is pressed or flipped: a compartment opens and a small robotic arm appears from the wall, moving to flip it back.
The main idea of the toy is the fight between the Player and a small robotic arm over the state of the switch.
The Arm is personified (reflects feelings such as anger depending on the reaction of the arm) and flips the switch back differently, for example:

![](projects/uselessSwitch/SS230920AddedScore.png)
![](projects/uselessSwitch/SS230920BoxOpen.png)

- The compartment opens, the Arm stares at you for a few seconds, before flipping the switch and quickly hiding
- The compartment opens, the Arm slowly flips the switch back and quickly hides
- The compartment opens, the Arm quickly flips the switch back, hides and double backs after a short while

![](projects/uselessSwitch/UselessSwitch.png)

## Objects included:
- A switch that the Player (and Arm) can flip
- An Arm that flips the switch back
- A compartment where the arm hides in

## Sounds included:
- The switch being flipped
- The compartment opening and closing
- The Arm moving
- Airy backtrack


# Inspiration:
- YOUTUBE@6xCd55oSgO4

- YOUTUBE@8gKpCouH2lw

- YOUTUBE@eLtUB8ncEnA


Another compartment could open to reveal other objects, such as a waving white flag to mark the end of the 'loop'
`;

export default project;
