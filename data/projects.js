import {Project, TimeSpan} from "./data";

export const Projects = [];

export const DesktopCapybara = new Project(
    new Date(2021, 9, 12),
    new Date(2023, 2, 3),
    "Plasma Engine",
    "plasma",
    "Game Engine Library & Desktop Capybara Simulator.",
    "C++, OpenGL, Programming",
    "projects/plasma/imgs/SS Capybara wander2.gif"
);
Projects.push(DesktopCapybara);

export const Infected = new Project(
    new Date(2023, 1, 13),
    new Date(),
    "Infected",
    "infected",
    "The colaberative virtual reality, open world survival shooter with multiplayer!",
    "Godot 4, VR, Multiplayer"
);
Projects.push(Infected);

export const WizardRogue = new Project(
    new Date(2023, 1, 13),
    new Date(),
    "Wizard Rogue",
    "wizardrogue",
    "A 2D action roguelite focusing on code modulization.",
    "Unity, Godot 3, Tiled, C#"
);
Projects.push(WizardRogue);
