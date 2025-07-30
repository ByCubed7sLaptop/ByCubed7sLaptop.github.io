import {Project} from "../data";
var project = Project.Create({
    startDate: new Date(2023, 1, 13),
    endDate: new Date(),
    displayName: "Infected",
    projectName: "infected",
    description:
        "The collaborative virtual reality, open world survival shooter with multiplayer!",
    tags: "Godot 4, VR, Multiplayer"
});

project.blog = `
![video](projects/${project.projectName}/VR_Gun.mp4)

# Summary

## What

Infected is an immersive open-world survival game set in a post-apocalyptic world where players must navigate treacherous landscapes, scavenge for resources, and fight to survive. This ambitious project combines cutting-edge procedural generation techniques with dynamic weather patterns and day-night cycles that draws inspiration from classic survival games.

## Goals

The primary goal is to create an engaging and immersive experience that challenges players to survive in a hostile world where resources are scarce and danger lurks around every corner. To achieve this, we aim to develop a robust game mechanic system that incorporates crafting, resource management, and combat, all while utilizing procedural generation to create a vast open world filled with diverse landscapes and weather patterns.

# Starting out
Oct 12

# AAAAAAA

When it comes to creating immersive open-world survival games, I'm drawn to the
idea of crafting an experience that's both challenging and rewarding for players.
For me, the inspiration behind this type of game lies in the concept of
resilience – the ability to thrive in a hostile environment where resources are
scarce and danger lurks around every corner.

To bring this vision to life, I'd focus on several key features and mechanics
that would work together to create a captivating experience for players. One
crucial aspect is procedural generation, which would allow me to dynamically
create a vast open world filled with diverse landscapes, weather patterns, and
day-night cycles. This approach would not only ensure that each playthrough feels
unique but also enables the creation of an ever-changing environment that
responds to player actions.

Design documents would be instrumental in fleshing out the game's mechanics and
features. I'd start by outlining the core systems, such as crafting, resource
management, and combat, to create a solid foundation for the game. These
documents would serve as a blueprint for implementing procedural generation,
allowing me to balance the level of complexity with the need for player agency.

Concept art would play a vital role in visualizing the world and its inhabitants.
I'd focus on creating detailed illustrations that capture the essence of the
game's atmosphere, from the eerie glow of luminescent mushrooms in a dark forest
to the imposing grandeur of a ruined cityscape. These visuals would not only set
the tone for the game but also provide valuable insights into the world's lore
and mechanics.

To implement procedural generation, I'd draw inspiration from existing games that
have successfully utilized this technique, such as Minecraft or No Man's Sky. By
leveraging algorithms and data structures, I could create a system that generates
terrain, vegetation, waterways, and other environmental features on the fly,
resulting in an endless variety of biomes.

The procedural generation system would also need to take into account factors
like resource availability, climate, and weather patterns. This would enable
players to adapt their strategies accordingly, whether they choose to focus on
agriculture or scavenging for supplies. The dynamic nature of this world would
keep players engaged and invested in their survival journey.

Ultimately, the goal is to create an immersive experience that not only
challenges players but also rewards them with a sense of accomplishment and pride
in their ability to survive against all odds. By combining robust mechanics,
procedural generation, and captivating visuals, I'm confident that we can craft
an open-world survival game that will leave players breathless and eager for more.

In terms of specific design documents, concept art, or initial ideas on
implementation, here are some rough outlines:

* Design Document: Core Mechanics Overview
	+ Crafting System: Resource Gathering, Tool Creation, Item Crafting
	+ Resource Management: Food, Water, Health, Energy
	+ Combat System: Melee, Ranged, Stealth
	+ Procedural Generation Algorithm: Terrain Generation, Vegetation Growth, Waterway Formation
* Initial Implementation Ideas:
	+ Utilize Perlin noise to generate natural terrain features like mountains and valleys.
	+ Implement a resource availability system that adapts to climate and weather patterns.
	+ Create a modular architecture for the game world, allowing players to build structures and interact with them.

`;

export default project;
