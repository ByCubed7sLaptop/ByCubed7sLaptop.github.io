const blog = `
# Summary

## What

Plasma was my first university personal project, which I
started for a university assignment around mid October
2021. It was my first large C++ project, which I
committed to over the course of about 8 months. This
project has been instrumental in helping me develop the
skills needed to to take a step forward in creating
intricate and complex systems, and has been a valuable
learning experience for me.

Plasma is a 2D Entity-Component-System simulation library
that enables users to construct and manipulate a simulated
environment through the attachment of components to gameobjects.
Initially, it was designed for use in the development of a Pacman
game using OpenGL, later on the project evolved through the
modularization of its rendering pipeline and eventually resulted
in the modularization of a significant portion of the project.

## Goals

The project was initiatially an assignment where I aimed
to improve my skills in system creation and
C++/programming knowledge, however, as this project
progressed, the focus shifted to the creation and
modularization of a ECS game engine with the purpose of
being easy to use and develop on.

# Starting out
Oct 12

## GLFW, OpenGL and maths

At the start of the assignment we were provided with an
optional template to use, this included the SDL library
and some initiation code that loads in and creates a
window. After a discussion with my lecturer, I decided
not to use the library, template nor the provided
tutorials in order to show myself how far I could go
with left to my own resources, and what level I was at
in the industry. We were given around 9 weeks to learn
C++ and SDL in order to make a Pacman game, or at least
some resembulence of one.

In the end, I decided to use GLFW: a library for the
OpenGL API.

## Vertices and Shaders

Following a getting started tutorial from LearnOpenGL;
I created a program, window and some vertices and then
compiled a vertex & fragment shader to render a triangle
on the screen.

~~~cpp
std::vector<float> vertices = {
    -0.5f, -0.5f, 0.0f,
     0.5f, -0.5f, 0.0f,
     0.0f,  0.5f, 0.0f
};
~~~

![](projects/plasma/learnopengl.com/hellotriangle.png)

## Fonts and Text

I then implemented a system for handling fonts and text. This includes
loading various font types, rendering text on the screen, and even
allowing for dynamic text updates.

One of the key features is the Font class, which serves as a singleton
responsible for managing all font-related operations. It handles tasks such as:

Loading font files from disk
Caching frequently used fonts for improved performance
Rendering text to the screen using advanced techniques
For rendering, we've developed an TextRenderer component that integrates
seamlessly with our ECS (Entity-Component-System) architecture. This allows
us to easily attach this component to any entity in the game world and have
it render text accordingly.

Here's a code snippet demonstrating how you can use the Font class to
display some text:

~~~cpp
void Game::RenderText()
{
    Font* font = Font::GetInstance();
    std::string text = "Hello, World!";

    // Render the text at position (200, 200)
    font->DrawText(text, glm::vec2(200.0f, 200.0f),
                  glm::vec3(1.0f, 1.0f, 1.0f)); // Color
}
~~~
When implementing text rendering, I also considered other aspects such as:
Font sizes and text alignment (centered, left-aligned, right-aligned).
Support for both TTF and OTF font formats.
Eventual styles such as bold, italic, etc.

## GameObjects

Orginally, my plan was for each actor to inherit a
gameObject class and override it's methods in order to
update and render. However, during the development I revised
the design with a friend and came to the conclusion that
using a enetiy component system The App class is responsible
for initializing the window and setting up the environment
for the game to run. It also handles keyboard input and
manages various settings. The Game class is the base class
for the game and serves as the foundation for the gameplay.
Subclasses of the Game class can be created to define the
specific behavior of the game, including loading and saving
data. The Game class also manages GameObjects and
communicates with the App class to determine the next
actions to be taken.

The Input class is responsible for tracking the state of the
keyboard, mouse, and controller (when available). The
Resources class is a singleton class that handles the
loading, caching, and saving of various types of resources,
such as images, audio files, sprite sheets, and text fonts.

The Renderer class is responsible for rendering various
elements of the game, including shaders, textures, fonts,
and sprite sheets. GameObjects are objects that are present
in the game world and have a position, rotation, and scale.
They also contain Components, which are the building blocks
that make up a GameObject. The engine includes a
SpriteComponent and a Rigidbody Component, but custom
Components can also be created.

Now, using the Renderer and Resource class we can easily
draw a sprite to our screen!

~~~cpp
void Game::Render()
{
    Renderer->DrawSprite(
        Resources::GetTexture("Player"),  // Texture data
        glm::vec2(200.0f, 200.0f),        // Position
        glm::vec2(300.0f, 400.0f),        // Size
        45.0f,                            // Rotation
        glm::vec3(0.0f, 1.0f, 0.0f)       // Tint
    );
}
~~~


![](projects/plasma/imgs/20211125.png)

The 600+ fps here isn't particularly great on the grounds
that we're only rendering a single stationary sprite.
Idealy, the player texture would be loaded in and
referenced, rather than using a lookup table in the Resource
instance every draw; And there are plenty more optimizations
I can do in the renderer before that--

But it gets the job done for now.

# ECSs, Tiles & Pain

## Sprites and Animations

I created a generic Renderable class to be used in renderable objects, like
textures and fonts. This change simplifies our usage by removing the need for
a referenced SpriteRenderer instance.

~~~cpp
class Texture2D : public Resource<Texture2D>, public Renderable<Texture2D> {
    // ...
};

class Text : public Resource<Font>, public Renderable<Text> {
    // ...
};
~~~

With this new design, we can now draw textures and text directly using their
respective classes. This modification not only makes our code more readable
but also more maintainable.

~~~cpp
// Old
renderer.sprite.DrawSprite(...);
renderer.text.DrawText(...);

// New
Texture2D::Draw(...);
Text::Draw(...);
~~~

Now we no longer need a referenced SpriteRenderer
instance in order to render a texture on to the screen.
Also making it easier to read. 😄

However, we can further improve the code by adding a Resource manager that
automatically deals with the creation and caching of resources.

~~~cpp
// Resource loads the font into memory
auto* fontA = Font::load("assets/fonts/arial.ttf", "arial");

// ...

// These are equivalent, as font has already been loaded
auto* fontB = Font::load("assets/fonts/arial.ttf", "arial");
auto* fontB = Font::get("arial");
~~~

By doing this, we can decouple the creation of objects from their usage
making the code more modular and easier to extend.


## Component Oriented Programming

When it came to designing the components for the engine,
I took inspiration from the architecture used in Unity,
structuring each component to be self-contained and able
to communicate with others through event handlers.

To keep the design flexible, I made sure to decouple the
components as much as possible so that they can be
easily added, removed or replaced without affecting the
rest of the application. This allows for greater
modularity and reduces the risk of bugs caused by
complex inter-dependencies.

However, it's important to note that the components
currently only support sequential execution and do not
have the capability to handle multi-threaded processing.
This is something I plan to address in future iterations
of the engine, but for now, the focus was on building a
solid foundation for future expansion.

~~~cpp
namespace Engine {

    // Forward Declaration
    class Scene;
    class GameObject;

    class Component : public Object
    {
    public:
        Component(GameObject* gameObject, std::string name = "Component");

        GameObject* gameObject;
        Engine::Scene* scene;

        virtual void Update(double time, double delta, Engine::Scene& game);
        virtual void Draw(Render::Renderers& renderer);
    };
}
~~~


## Colliders and Efficiencies

I began working on the collision dection for detecting
responding to collisions between components. After
researching various methods for implementing Colliders,
I decided to utilize the classical Axis-Aligned Bounding
Box method. These provide sufficient collision
detection, though it should be noted that more advanced
collision detection methods, such as polygonal
colliders, may be required for more complex games in the
future.

## Event Handlers

While researching how one would go about executing
Event-Driven Architecture in C++, I found a well
documented resource on a simple implementation and used
that to implement my basics of the observer pattern.
However there are some severe limitation of the design,
such as the inability to handle events in different
threads; Though, at this point in time, I was not
planning so far ahead just yet.

~~~cpp
template<typename T>
class Event
{
public:
    // Constructors
    Event() = default;
    Event(T type, const std::string& name = "")
        : _type(type), _name(name) {};

    inline const T type() const { return _type; };
    inline const std::string& getName() const { return _name; };
    virtual bool isHandled() { return _handled; };

protected:
    T _type;
    std::string _name;
    bool _handled = false;
};
~~~

## Tilemaps and Instancing

Tilemaps allow for the creation of vast game worlds with
a minimal amount of data. I implemented tilemaps using a
2D array of integers, where each integer represents a
specific tile type. This allows for efficient storage
and fast access to the tile data.

Rendering the tile instances is handled by a separate
componant that takes the tilemap data and creates a
visual representation of the tiles on the screen. The
rendering component uses the tile types to determine
which sprite to use for each tile, ensuring that the
correct visual is applied.

![row3](projects/plasma/imgs/20211126.gif)
![row3](projects/plasma/imgs/20211127.png)
![row3](projects/plasma/imgs/20211128%20abc.png)

Using tilemaps offers several benefits:
- Efficient storage: By using a 2D array to represent tile types, we can store a vast amount of data with minimal memory usage.
- Fast access: With the rendering component, we can quickly retrieve and render tile data on the screen, creating a smooth gaming experience.
- Flexibility: Tilemaps can be used to create a wide range of environments, from simple mazes to complex cityscapes.

# Tiled, Rotations and Save data!
Dec 2, 2021

To make map creation more accessible, I decided to integrate the Tiled editor.
This enables users to create and import maps seamlessly into the simulation library.

Using the Tiled editor's data format, we can load maps into our library and
render them on screen.

~~~cpp
// Load a Tiled map into Plasma
void loadMap(const std::string& filePath) {
    // Parse the Tiled data file
    auto mapData = parseTiledFile(filePath);

    // Create entities and components for each layer in the map
    for (const auto& layer : mapData.layers) {
        createLayerEntities(layer);
    }
}
~~~

With the map data loaded, we can now convert it to a tilemap and render it screen
using our resource manager.

![](projects/plasma/imgs/20211202.png)


# Scoring & Ghosts
December 25, 2021 🎅🎄

## Scoring

The scoring was relativly simple, create a new gameobject, add a text component
Now pacmans checks it's positional tile, if the tile contains a puc,
add to the score and remove the tile.

![](projects/plasma/imgs/20211225.gif)


## Ghosts

## The Pac-Man Dossier

The [Pac-Man Dossier](https://pacman.holenet.info/) by Jamey Pittman contains
everything I could need in order to best replicate the ghosts behavours.
Such as the intersection pathfinding, showcasing how each of the different
ghosts chose different targeting positions, based on the player, state and other
ghosts:

[![row3](projects/plasma/pacman.holenet.info/TieBreakALL.png)](https://pacman.holenet.info/)
[![row3](projects/plasma/pacman.holenet.info/Pinky2.png)](https://pacman.holenet.info/)
[![row3](projects/plasma/pacman.holenet.info/InkyA.png)](https://pacman.holenet.info/)

Implementing the movement was pretty simple, at an intesection find the
direction with the lowest score, based off of certain criteria which differed
depending on the ghost.
Though that didn't stop any bugs from crawling in.

![](projects/plasma/imgs/Ghost_Clip.gif)

After some tilemap rework, I implemented pellets pickups
and a simple score display. By around I had finished
this, the deadline of the assignment was within a few
days. I focused on code, documentation and presentation clean up.

And it was finished! :D

Though I still had another project I wanted to use this engine in but it needed
some more functionality first..

# Hwnd, transparency and window styles!
February 27, 2022

## Messing around with Hwnd

The journey of this idea began with an inspiration during the deep caverns of
the tkinter python documentation. During the time, I was making a snake game that
used tkinter windows to display the snake and fruit on the screen, giving the
effect of a transparent window. I've always wanted to try create it but never had
the chance to mess with the Windows Hwnd API.

My first challenge was to make the window's background transparent. I rearranged
some of the initialization code and added it to the API to allow sending data to
the underlying window.

![](projects/plasma/imgs/20220227%20wind.png)

Next, I tackled the task of hiding the window from the taskbar and making the
window fullscreen, effectively making it invisible apart from the rendered sprites.
This required some documentation digging, but ultimately, I was able to achieve the desired effect.
The red defines the windows bounds, so you can see it's working as intended~

![](projects/plasma/imgs/20220227%20fullscreen.png)

The pièce de résistance was making the window click-through-able. I wanted
users to be able to interact with the underlying desktop without interrupting
the apps behavior.

Notice how mouse events now go straight through the
pacman window and interacts with Visual Studio behind
it.

![video](projects/plasma/imgs/20220227%20click%20through.mp4)



# Later Inspiration!

## Capybaras

Over the course of the few weeks that I was working on
the window management, my friends and community had
became very passionate about capybaras, the cute social
rodent native to South America; And I had mentioned on
occation that I would add them to a project...
eventually.

![](projects/plasma/DesktopCapybara/capybara.png)

## Desktop Goose

Desktop Goose is a popular desktop buddy windows/mac
application made by samperson. Which is one of the many
things that inspired me to take my learning in
programming further. See: 👇

YOUTUBE@EQx6fyrZDWM

This, and the ongoing popularity of Capybaras, inspired
me to make a Capybara desktop buddy!


# Desktop Capybara

## Here comes the boi

Drew up a small pixelated sprite for the capybara, I
went for this style to synergize with it's potentially
untidy movement and current lack of animations.

![](projects/plasma/DesktopCapybara/20220227%20the%20boi.png)

I found it overly saturated here and later softed the
fur colour to a more lighter blonde.

Gave the capybara a GameObject and a SpriteComponent for
now, ready to be rendered on the screen~ Below, I had
forgotten about setting a colour and scale, making our
boy into a cute small silhouette.

![](projects/plasma/DesktopCapybara/20220227%20small.png)

## AI Part 2

The capybara needs some sort of intelligence, to react to the environment
surrounding it and to interact with the user.

First I needed a way to hold it's state, and be able to change that state based
off of some arbitrary actions, a finite state machine seemed to be a good choice
for this.

> "It is an abstract machine that can be in exactly one of a finite number of states at any given time. The FSM can change from one state to another in response to some inputs; [...] called a transition." -
 [Wikipedia.org](https://en.wikipedia.org/wiki/Finite-state_machine)

So I created a template class to easily create a functional FSM so that all of
the state transistions happen under the hood.

~~~cpp
template<typename TStates, typename TActions>
class FiniteStateMachine {
    TStates currentState;
    std::map<std::pair<TStates, TActions>, TStates> stateTable;
    ...
~~~

The FiniteStateMachine class takes an Enum type of States and Actions, then you're
able to define the table of all of the transitions.

This is used in components to easily implement a set amount of states based off
of a specfic value and react to certain events:

~~~cpp
enum CapybaraStates {
	AAAAAAA, WANDER, STAND, FOLLOW, OFFSCREEN, EATING
};

enum CapybaraActions {
	WANDERTICK, FOLLOWTICK, CLICK, WANDERED, OFFSCREENED, DRAGGING, SEEFOOD, ONFOOD
};

class CapybaraAI : public
    Engine::Component,
    Engine::FiniteStateMachine<CapybaraStates, CapybaraActions>
{
    ...
~~~

Adding that and some movement, waddles and turning we get a wonderful lil lad.

![](projects/plasma/DesktopCapybara/20220303.gif)


## Hats & variety

I wanted to add some customization to each of the
capybaras, every time you open the application a new
kind of capybara would spawn: Slightly different size,
fur colour, and most importantly a different hat. I
designed a few hats.

Now each time you open the application, or spawn a new Capybara with different hats,
sizes, and fur colors.

![](projects/plasma/DesktopCapybara/20220603%20hats.png)


## Optimizations

One area where Plasma's performance was bottlenecked was in the component caching
mechanism. When dealing with a vast number of entities, the engine iterated over
each entity's components multiple times per frame. To alleviate this issue,
I started caching frequently accessed components.

Another optimization I added was entity pooling, which reduces the overhead
associated with creating and destroying entities. By pre-allocating a pool of
entities and reusing them as needed, I was able to significantly reduce memory
allocations and deallocations during play.

Stress testing (300k capybaras)

![](projects/plasma/DesktopCapybara/10062022stresstesting.png)

In the future, I eventually plan to implement more optimizations, such as a job
queue or a task scheduler. This would allow the engine to run multiple tasks
concurrently and ensure that updates are applied in the correct order.

Another potential area of improvement is creating a load balancing for tasks and
updates. This would allow the engine to optimize the performance by ensuring
that more computationally expensive tasks are executed less often or over time.


# Release!

March 5, 2022

![](projects/plasma/DesktopCapybara/20220303%20itchiobanner.png)

ITCH@1426955?bg_color=222222&amp;fg_color=ffffff&amp;border_color=363636

You can download and play around with the capybara
above! 👆

If you have any questions or wish to get in contact with
me, you can ping me in discord or see my socials~

# Conclusion

By ByCubed7

In the end, I achieved a plentiful amount of my goals,
creating 2 games over all, and seeing one all the way
from production to release; And I have collected a
substantial amount of knowledge in C++, planning &
design, production management and motivation techniques.

One thing I hope to improve on in the future is my
routine in publishing content and my social media usage
in general. I will aim to work on this in my next
project.

`;

export default blog;
