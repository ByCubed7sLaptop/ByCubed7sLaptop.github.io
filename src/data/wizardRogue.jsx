import {Project} from "./data";
var project = Project.Create({
    startDate: new Date(2023, 1, 13),
    endDate: new Date(),
    displayName: "Wizard Rogue",
    projectName: "wizardrogue",
    description: "A 2D action roguelite focusing on code modulization.",
    tags: "Unity, Godot 3, Tiled, C#",
    imgPath: "default",
    backgroundPath: "default"
});

project.markdown = `
##### Writing in progress
-
##### TODO:
##### Convert old site into markdown
##### Add images / videos / code snippets
##### Add dates
##### Break down into smaller sections
##### Finish conclusion

![](${project.imgPath})

# Summary

## What

Wizard Rogue was the first game project I started dedicating my personal time to,
it was a fundemental step in my education process in game engines and design.

It was orginally a Unreal 4 procedual dungeon simulation for college, to showcase
how games can use very simple room generation to add replayability into its
experience.


## Goals

Initially, the goal was to create an easy to use library for myself to deploy a
method to create procedually generating dungeons, using either a puzzle pieces
or mathematical functions; And to be able to use it to make a simple game in
another project.

Then it was to transfer it to another engine that was more fitting for me, in
this case to Unity, and then to Godot Mono.

And now, it is to create a procedually generated prototype for creating huge
tile-based worlds.


##### Find Unreal builds and development from 6? years ago

# Breaking down the structure
??

Initially, the original game's code was a monolithic mess, with various features and
systems intertwined in a way that made it difficult to modify or extend certain
aspects of the game without affecting others.

One key strategy I used was to separate the game's logic into distinct layers,
each responsible for a specific aspect of gameplay. This included:

1. **Game Logic Layer**: Handles core game mechanics, such as character movement, combat, and inventory management.
2. **Graphics Layer**: Responsible for rendering the game world, including 2D and 3D graphics, animations, and special effects.
3. **User Interface Layer**: Manages user input, displaying menus, HUD elements, and other UI components.

Within each layer, I applied modular design principles to further break down the
code into smaller, reusable modules. This allowed me to:

* Reduce complexity by isolating specific features and systems
* Improve maintainability by making it easier to modify or update individual modules without affecting others
* Enhance efficiency by reducing coupling between modules and minimizing dependencies

Some of the design patterns I employed include:

1. **Model-View-Controller (MVC)**: A popular pattern for separating concerns
in applications, where the model represents data, the view handles rendering,
and the controller mediates interactions.
2. **Observer Pattern**: Allows objects to notify each other of changes,
enabling loose coupling between dependent components.

To further solidify the game's modular structure, I implemented dependency
injection using a service locator pattern. This allowed me to decouple
dependencies between modules, making it easier to swap out or replace individual
components as needed.


# Procedural generation
??

Procedural generation is a fascinating aspect of game development that allows
for the creation of unique, dynamic content on the fly.

I chose to use a combination of algorithms and techniques from the field of
mathematical generation. My approach can be broken down into three main components:

1.  **Level Layout Generation**: This involves creating the underlying structure of the level, including the placement of walls, corridors, and rooms.
2.  **Content Placement**: Once the level layout is established, I used algorithms to randomly place enemies, treasure, and other features within the generated environment.
3.  **Tuning and Balancing**: The final step involved fine-tuning the procedural generation process to ensure levels remained balanced and fun for players.

To implement these components, I employed various techniques, including:

1.  **Perlin Noise**: A noise function commonly used in procedural generation to create natural-looking patterns.
2.  **Midpoint Displacement**: An algorithm for generating fractal-like structures by iteratively displacing points on a grid.
3.  **Random Walks**: Used to simulate the movement of enemies and other entities within the level, creating a sense of randomness and unpredictability.

I also made use of data structures like graphs and adjacency matrices to
efficiently store and manipulate level data. This allowed me to quickly
generate new levels and modify existing ones without incurring significant
performance costs.

To balance the game's difficulty and keep players engaged, I implemented
various heuristics and rules to govern content placement. Such as:

*   **Enemy density**: Ensuring that enemies were spaced at an optimal distance from each other to maintain tension and challenge.
*   **Treasure distribution**: Randomly placing treasure throughout the level to encourage exploration and reward players for venturing off the beaten path.

Throughout the development process, I continuously monitored the generated
levels and made adjustments as needed. This involved tweaking algorithm
parameters, modifying level layouts, or introducing new content types to
keep the game fresh and exciting.


# Enemy AI
??

Developing an effective enemy AI system is crucial for creating an engaging roguelike
experiences, such as the ones found in Wizard Rogue. In this post, I'll delve
into my journey of implementing a robust enemy AI system, discussing the
challenges I faced and how I overcame them using a combination of techniques
like A\* and raycasting.

Initially, I experimented with various pathfinding algorithms to enable enemies
to navigate through the game's procedurally generated levels. However, I
encountered several issues that hindered my progress:

1.  **Performance concerns**: The use of traditional pathfinding algorithms
resulted in significant performance drops when dealing with complex level
geometries and multiple enemies.
2.  **Limited flexibility**: These algorithms often failed to accommodate
the unique characteristics of Wizard Rogue's roguelike setting, such as
procedurally generated levels and varying enemy behaviours.

To address these issues, I began exploring alternative techniques, including:

1.  **A\***: A popular pathfinding algorithm that uses heuristics to efficiently
find the shortest path between two points.
2.  **Raycasting**: A technique used in computer graphics to determine whether
a point lies within a given region or not.

I integrated these techniques into Wizard Rogue's enemy AI system, which enabled
enemies to navigate through levels using optimized paths. This significantly
improved performance and allowed for more complex-level designs without
sacrificing gameplay quality.

However, I soon realized that simply implementing pathfinding was not enough;
the AI needed more sophisticated to create engaging interactions between
players and enemies. To achieve this, I incorporated additional features:

*   **Patrolling behaviours**: Enemies would now follow predetermined patrol
routes within levels, providing a sense of structure and anticipation for players.
*   **Ambush tactics**: Enemies could employ ambushes by hiding in hard-to-reach
areas or using environmental obstacles to their advantage, making encounters
more challenging and dynamic.
*   **Adaptive difficulty**: The AI system would adjust its difficulty based on
player performance, ensuring that the game remains engaging but not overwhelming.

To ensure seamless integration with Wizard Rogue's procedural generation and
other core features, I also implemented various heuristics and optimizations:

*   **Enemy placement**: Enemies were strategically placed within levels to
maximize gameplay opportunities and challenge players.
*   **Level geometry consideration**: The AI system took into account the
unique characteristics of each procedurally generated level, including
obstacles, traps, and environmental hazards.

# Migration from Unity & Unreal 4
??

As a developer, making tough decisions about game engines can be daunting,
especially when your project is already established on another platform.
In my case, Wizard Rogue started its life in Unreal Engine 4, but after
struggling with performance and visual scripting issues, I decided to make
the bold move to Godot.

## The Journey Begins

When I began working on Wizard Rogue, it was built using Unreal Engine 4.
While UE4 offered a robust set of features and tools, I found its visual
scripting system to be overly complex and difficult to manage. As the project
grew in scope and scale, these issues became increasingly apparent.

After weighing my options, I decided to migrate Wizard Rogue from Unreal Engine
4 to Godot. My primary goal was to simplify the game's development process,
improve performance, and enhance the overall player experience.

As you might expect, migrating a complex project like Wizard Rogue wasn't without its challenges:

*   **Learning Curve**: I had to familiarize myself with Godot's unique features, architecture, and scripting language (GDScript).
*   **Asset Conversion**: Porting assets from Unreal Engine 4 to Godot required careful attention to detail and some creative problem-solving.
*   **Performance Optimizations**: As the game's engine changed, I had to re-tune its performance settings for optimal results.


Throughout this process, I gained valuable insights into game development and migration strategies:

1.  **Plan Thoroughly**: Before making any major changes, it's essential to have a clear understanding of your project's architecture, dependencies, and potential pitfalls.
2.  **Test Early and Often**: Regular testing helps identify issues early on, saving time and effort in the long run.
3.  **Be Prepared for the Unexpected**: Migration is inherently unpredictable; being flexible and willing to adapt will serve you well.

## The Benefits of Godot

After completing the migration, I was pleased to discover that Godot offered:

*   **Improved Performance**: Wizard Rogue now runs smoother than ever, with enhanced frame rates and reduced latency.
*   **Simplified Development**: Godot's intuitive interface and lightweight architecture make it easier for me to work on the game without unnecessary complexity.
*   **Enhanced Player Experience**: The migration allowed me to focus on refining the game's core mechanics and story, leading to a more engaging experience for players.

Migrating Wizard Rogue from Unreal Engine 4 to Godot was a bold decision that
ultimately paid off. By embracing this change, I've improved the game's performance,
streamlined its development process, and created a better overall experience for
players.

This journey serves as a testament to the power of adapting to new tools and
technologies in pursuit of creating exceptional gaming experiences. If you're
considering migrating your project, remember that it's okay to take risks and
try new things – sometimes the best outcomes come from stepping outside your
comfort zone.





# Optimizations
??

Developing games that deliver exceptional performance is crucial for ensuring an
immersive player experience. In this post, I'll share the various optimizations
and techniques I employed to improve Wizard Rogue's performance, ultimately
achieving a silky-smooth 60 FPS frame rate.

## Understanding Performance Bottlenecks

To optimize Wizard Rogue effectively, it was essential to identify its primary
performance bottlenecks. Through a combination of profiling tools and manual
testing, I pinpointed several areas that required attention:

*   **Excessive Calculations**: Wizard Rogue's AI system was performing an
excessive number of calculations each frame, leading to a significant CPU
bottleneck.
*   **Texture Management**: The game was using multiple texture atlases, which
resulted in inefficient texture loading and unloading.

## Optimization Techniques

To address these performance bottlenecks, I employed several optimization techniques:

1.  **Reducing Unnecessary Calculations**: By implementing a more efficient AI
algorithm, I significantly reduced the number of calculations performed in each
frame.
2.  **Improving Texture Management**: I merged the multiple texture atlases into
a single, larger atlas, reducing texture loading and unloading overhead.
3.  **Utilizing Godot's Profiling Tools**: Godot provides an extensive range of
profiling tools that enable developers to identify performance bottlenecks and
optimize their code accordingly.

## Profiling and Testing

To ensure the effectiveness of these optimizations, I utilized Godot's built-in profiling tools to monitor Wizard Rogue's performance:

*   **Frame Rate Monitoring**: I tracked the game's frame rate in real time to verify the impact of each optimization.
*   **CPU and Memory Profiling**: By analyzing CPU and memory usage, I identified areas where further optimization was possible.

## Achieving 60 FPS

Through a combination of these optimizations and profiling techniques, I successfully improved Wizard Rogue's performance, ultimately achieving a silky-smooth 60 FPS frame rate. This significant improvement resulted from:

*   **Reduced CPU Utilization**: By optimizing the AI system and texture management, I reduced CPU utilization, allowing the game to run more efficiently.
*   **Improved Texture Loading**: Merging the texture atlases into a single, larger atlas streamlined texture loading and unloading.



# Conclusion
By ByCubed7

Wizard Rogue's development has been an incredible journey, with .....

Overall ....

`;

export default project;
