import {Project} from "./data";

import _CubedsTodolist from "./projects/todolist";
export var CubedsTodolist = _CubedsTodolist;

import _TwitchIRCBot from "./projects/twitchbot";
export var TwitchIRCBot = _TwitchIRCBot;

import _CurlingDucks from "./projects/curlingDucks";
export var CurlingDucks = _CurlingDucks;

import _WizardRogue from "./projects/wizardRogue";
export var WizardRogue = _WizardRogue;

import _GenshinTabletopSimulatorTable from "./projects/genshinTable";
export var GenshinTabletopSimulatorTable = _GenshinTabletopSimulatorTable;

import _ClockworkAngel from "./projects/clockworkAngel";
export var ClockworkAngel = _ClockworkAngel;

import _Infected from "./projects/infected";
export var Infected = _Infected;

import _PlasmaEngine from "./projects/plasma";
export var PlasmaEngine = _PlasmaEngine;

import _MinecraftSkinPreview from "./projects/minecraftSkinPreview";
export var MinecraftSkinPreview = _MinecraftSkinPreview;

import _PaperRogue from "./projects/paperRogue";
export var PaperRogue = _PaperRogue;

import _SlicedAStoryOfPizza from "./projects/sliced";
export var SlicedAStoryOfPizza = _SlicedAStoryOfPizza;

import _Elderwilds from "./projects/elderwilds";
export var Elderwilds = _Elderwilds;

import _CardGambit from "./projects/cardGambit";
export var CardGambit = _CardGambit;

import _DynamicAudio from "./projects/dynamicAudio";
export var DynamicAudio = _DynamicAudio;

import _DesktopSnake from "./projects/desktopsnake";
export var DesktopSnake = _DesktopSnake;

import _MarioProject from "./projects/mario";
export var MarioProject = _MarioProject;

export var projects = [	CubedsTodolist,
	TwitchIRCBot,
	CurlingDucks,
	WizardRogue,
	GenshinTabletopSimulatorTable,
	ClockworkAngel,
	Infected,
	PlasmaEngine,
	MinecraftSkinPreview,
	PaperRogue,
	SlicedAStoryOfPizza,
	Elderwilds,
	CardGambit,
	DynamicAudio,
	DesktopSnake,
	MarioProject,
].sort((a,b) => b.startDate - a.startDate);