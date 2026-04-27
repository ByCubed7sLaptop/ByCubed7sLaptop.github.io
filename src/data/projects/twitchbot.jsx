import {Project} from "../data";

var project = Project.Create({
    startDate: new Date(2022, 4, 10),
    endDate: new Date(2023, 2, 3),
    displayName: "Twitch IRC Bot",
    projectName: "twitchbot",
    description: "Twitch games, quotes, currency and more!",
    tags: "IRC, Python",
    imgPath: "card",
    backgroundPath: "default"
});

project.blog = ``;

export default project;
