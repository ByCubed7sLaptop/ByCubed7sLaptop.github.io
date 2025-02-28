import {Project, TimeSpan} from "./data";

import _DesktopCapybara from "./plasma";
export var DesktopCapybara = _DesktopCapybara;

import _WizardRogue from "./wizardRogue";
export const WizardRogue = _WizardRogue;

export const Infected = new Project(
    new Date(2023, 1, 13),
    new Date(),
    "Infected",
    "infected",
    "The colaberative virtual reality, open world survival shooter with multiplayer!",
    "Godot 4, VR, Multiplayer",
    "default",
    "default",
    "a"
);

export var projects = [DesktopCapybara, WizardRogue, Infected];
