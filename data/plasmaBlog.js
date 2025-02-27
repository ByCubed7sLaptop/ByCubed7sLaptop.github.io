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

 ![](https://learnopengl.com/img/getting-started/hellotriangle.png)

## Fonts and Text

TODO

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


![](./projects/plasma/imgs/20211125.png)

The 600+ fps here isn't particularly great on the grounds
that we're only rendering a single stationary sprite.
Idealy, the player texture would be loaded in and
referenced, rather than using a lookup table in the Resource
instance every draw; And there are plenty more optimizations
I can do in the renderer before that--

But it gets the job done for now.

# ECSs, Tiles & Pain

## Sprites and Animations

Created a generic Renderable class to be used in
renderable objects, like textures and fonts.

TODO: Add to

~~~cpp
class Texture2D
: public Resource<Texture2D>, public Renderable<Texture2D>
...
~~~

Which changes our usage from:

~~~cpp
renderer.sprite.DrawSprite(...);
renderer.text.DrawText(...);
~~~

to

~~~cpp
Texture2D::Draw(...);
Text::Draw(...);
~~~

Now we no longer need a referenced SpriteRenderer
instance in order to render a texture on to the screen.
Also making it easier to read. 😄

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

"projects/plasma/imgs/20211126.gif",
"projects/plasma/imgs/20211127.png",
"projects/plasma/imgs/20211128%20abc.png"

## Tiled, Rotations and Save data!

![](./projects/plasma/imgs/20211202.png)

After some tilemap rework, I implemented pellets pickups
and a simple score display. By around I had finished
this, the deadline of the assignment was within a few
days.

![](projects/plasma/imgs/20211225.gif)


# Hwnd, transparency and window styles!

Nov 30

## Messing around with Hwnd

- Inspired by the python tkinter snake game in
highschool
- Trying to make pacman transparent
- Tab management

![](./projects/plasma/imgs/20220227%20wind.png)

Notice how mouse events now go straight through the
pacman window and interacts with Visual Studio behind
it.

![video](./projects/plasma/imgs/20220227%20click%20through.mp4)

Getting the window to run fullscreen, the red here
defines the windows bounds, so you can see it's working
as intended~

![](./projects/plasma/imgs/20220227%20fullscreen.png)

# Later Inspiration!

??

## Capybaras

Over the course of the few weeks that I was working on
the window management, my friends and community had
became very passionate about capybaras, the cute social
rodent native to South America; And I had mentioned on
occation that I would add them to a project...
eventually.

![](./projects/plasma/imgs/capybara.png)

## Desktop Goose

Desktop Goose is a popular desktop buddy windows/mac
application made by samperson. Which is one of the many
things that inspired me to take my learning in
programming further. See: 👇

YOUTUBE@EQx6fyrZDWM

This, and the ongoing popularity of Capybaras, inspired
me to make a Capybara desktop buddy!

# Desktop Capybara

??

## Here comes the boi

Drew up a small pixelated sprite for the capybara, I
went for this style to synergize with it's potentially
untidy movement and current lack of animations.

![](./projects/plasma/imgs/20220227%20the%20boi.png)

I found it overly saturated here and later softed the
fur colour to a more lighter blonde.

Gave the capybara a GameObject and a SpriteComponent for
now, ready to be rendered on the screen~ Below, I had
forgotten about setting a colour and scale, making our
boy into a cute small silhouette.

![](./projects/plasma/imgs/20220227%20small.png)

## AI

![](./projects/plasma/imgs/20220303.gif)

## Hats & variety

I wanted to add some customization to each of the
capybaras, every time you open the application a new
kind of capybara would spawn: Slightly different size,
fur colour, and most importantly a different hat. I
designed a few hats.

![](./projects/plasma/imgs/20220603%20hats.png)


# Release!

March 5, 2022

![](./projects/plasma/imgs/20220303%20itchiobanner.png)

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
<br /> <br />
One thing I hope to improve on in the future is my
routine in publishing content and my social media usage
in general. I will aim to work on this in my next
project.

`;

export default blog;
