import {Project} from "../data";
var project = Project.Create({
    startDate: new Date(2023, 1, 13),
    endDate: new Date(),
    displayName: "Elderwilds",
    projectName: "elderwilds",
    description: "Website and Plugins for a survival minecraft MMO.",
    tags: "Java, Modding",
    imgPath: "card",
    backgroundPath: "default"
});

project.blog = `



# Trials Villager
~~~markdown
/summon villager ~ ~3 ~ {VillagerData:{type:savanna,profession:armorer,level:2},CustomName:[Trials],CustomNameVisible:1b,Invulnerable:1b,attributes:[{id:gravity,base:10f}],Offers:{Recipes:[
{buy:{id:trial_key,count:1}, sell:{id:trial_key,count:1}, maxUses:5000, rewardExp:0b},
{buy:{id:ominous_trial_key,count:1}, sell:{id:trial_key,count:4}, maxUses:5000, rewardExp:0b},

{buy:{id:trial_key,count:1}, sell:{id:emerald,count:16}, rewardExp:0b},
{buy:{id:trial_key,count:1}, sell:{id:iron,count:16}, rewardExp:0b},
{buy:{id:trial_key,count:1}, sell:{id:diamond,count:2}, rewardExp:0b},

{buy:{id:trial_key,count:1}, sell:{id:lingering_potion,count:1, components:{potion_contents:{potion:healing}}}, rewardExp:0b},
{buy:{id:trial_key,count:1}, sell:{id:lingering_potion,count:1, components:{potion_contents:{potion:poison}}}, rewardExp:0b},
{buy:{id:trial_key,count:1}, sell:{id:lingering_potion,count:1, components:{potion_contents:{potion:slowness}}}, rewardExp:0b},
{buy:{id:trial_key,count:1}, sell:{id:lingering_potion,count:1, components:{potion_contents:{potion:weakness}}}, rewardExp:0b},

{buy:{id:trial_key,count:2}, sell:{id:wind_charge,count:24}},
{buy:{id:trial_key,count:3}, sell:{id:flow_armor_trim_smithing_template,count:1}},
{buy:{id:trial_key,count:3}, sell:{id:bolt_armor_trim_smithing_template,count:1}},
{buy:{id:trial_key,count:4}, sell:{id:golden_apple,count:4}},
{buy:{id:trial_key,count:6}, sell:{id:flow_banner_pattern,count:1}},
{buy:{id:trial_key,count:6}, sell:{id:guster_banner_pattern,count:1}},
{buy:{id:trial_key,count:20}, sell:{id:enchanted_golden_apple,count:1}},

{buy:{id:trial_key,count:7 }, sell:{id:ominous_bottle,count:1, components:{ominous_bottle_amplifier:4}}},
{buy:{id:trial_key,count:13}, sell:{id:music_disc_precipice,count:1}},
{buy:{id:trial_key,count:13}, sell:{id:music_disc_creator,count:1}},
{buy:{id:trial_key,count:13}, sell:{id:music_disc_creator_music_box,count:1}},

{buy:{id:trial_key,count:3}, sell:{id:enchanted_book, components:{stored_enchantments:{breach:1}}}},
{buy:{id:trial_key,count:5}, buyB:{id:enchanted_book,components:{stored_enchantments:{breach:1}}}, sell:{id:enchanted_book, components:{stored_enchantments:{breach:2}}}},
{buy:{id:trial_key,count:10}, buyB:{id:enchanted_book,components:{stored_enchantments:{breach:2}}}, sell:{id:enchanted_book, components:{stored_enchantments:{breach:3}}}},
{buy:{id:trial_key,count:14}, buyB:{id:enchanted_book,components:{stored_enchantments:{breach:3}}}, sell:{id:enchanted_book, components:{stored_enchantments:{breach:4}}}},

{buy:{id:trial_key,count:3}, sell:{id:enchanted_book, components:{stored_enchantments:{density:1}}}},
{buy:{id:trial_key,count:5}, buyB:{id:enchanted_book,components:{stored_enchantments:{density:1}}}, sell:{id:enchanted_book, components:{stored_enchantments:{density:2}}}},
{buy:{id:trial_key,count:6}, buyB:{id:enchanted_book,components:{stored_enchantments:{density:2}}}, sell:{id:enchanted_book, components:{stored_enchantments:{density:3}}}},
{buy:{id:trial_key,count:7}, buyB:{id:enchanted_book,components:{stored_enchantments:{density:3}}}, sell:{id:enchanted_book, components:{stored_enchantments:{density:4}}}},
{buy:{id:trial_key,count:11}, buyB:{id:enchanted_book,components:{stored_enchantments:{density:4}}}, sell:{id:enchanted_book, components:{stored_enchantments:{density:5}}}},

{buy:{id:trial_key,count:6}, sell:{id:enchanted_book, components:{stored_enchantments:{wind_burst:1}}}},
{buy:{id:trial_key,count:12}, buyB:{id:enchanted_book,components:{stored_enchantments:{wind_burst:1}}}, sell:{id:enchanted_book, components:{stored_enchantments:{wind_burst:2}}}},
{buy:{id:trial_key,count:15}, buyB:{id:enchanted_book,components:{stored_enchantments:{wind_burst:2}}}, sell:{id:enchanted_book, components:{stored_enchantments:{wind_burst:3}}}},

{buy:{id:trial_key,count:64}, sell:{id:heavy_core,count:1}}
]}}
~~~

`;

export default project;
