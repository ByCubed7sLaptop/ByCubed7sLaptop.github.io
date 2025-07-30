import {Project} from "./data";

import _DesktopCapybara from "./projects/plasma";
export var DesktopCapybara = _DesktopCapybara;

import _WizardRogue from "./projects/wizardRogue";
export const WizardRogue = _WizardRogue;

import _Infected from "./projects/infected";
export const Infected = _Infected;

export var projects = [DesktopCapybara, WizardRogue, Infected];
