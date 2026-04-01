import {Project} from "./data";

import _DesktopCapybara from "./projects/plasma";
export var DesktopCapybara = _DesktopCapybara;

import _WizardRogue from "./projects/wizardRogue";
export const WizardRogue = _WizardRogue;

import _Infected from "./projects/infected";
export const Infected = _Infected;

import _Mario from "./projects/mario";
export const Mario = _Mario;

import _PaperRogue from "./projects/paperRogue";
export const PaperRogue = _PaperRogue;

import _CardGambit from "./projects/cardGambit";
export const CardGambit = _CardGambit;

import _DynamicAudio from "./projects/dynamicAudio";
export const DynamicAudio = _DynamicAudio;

export var projects = [
    DesktopCapybara,
    WizardRogue,
    Infected,
    CardGambit,
    DynamicAudio
    //Mario,
    //PaperRogue
];
