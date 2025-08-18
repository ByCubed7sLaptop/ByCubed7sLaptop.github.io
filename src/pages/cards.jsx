import ProjectBox from "../components/projectBox.jsx";
import ImageCollectionRow from "../components/imageCollectionRow.jsx";
import Part from "../components/part.jsx";
import Article from "../components/article.jsx";
import Row from "../components/row.jsx";
import Subtitle from "../components/subtitle.jsx";
import Experience from "../components/experience.jsx";
import BackgroundImage from "../components/backgroundImage.jsx";
import Dots from "../components/dots.jsx";
import Card from "../components/card.jsx";

import {Me} from "../data/socials.js";

export default function Index() {
    return (
        <>
            <BackgroundImage src="pom/pom.png" />

            <Article>
                <Part
                    style={{backgroundColor: "var(--accent)"}}
                    contentStyle={{maxWidth: "1150px", margin: "auto"}}
                >
                    <Subtitle>Digital Art & TTRPG</Subtitle>
                    I love digital art. It's my second favourite medium to
                    exress myself.
                    <br />
                    ...
                    <br />
                    I offered to draw a few cards for a freind who was running a
                    new tabletop roleplaying game. This quickly spiraled out of
                    control and I havent been able to stop doing cards since.
                    <br />
                    <br />
                    Here are a few of my favourites:
                    <div
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            filter: "blur(0.8px)"
                        }}
                    >
                        <Card
                            src="cards/Rina the Wanted Vagabond.png"
                            back="cards/Demon Lord.png"
                            style={{width: "22%"}}
                        />
                        <Card
                            src="cards/Altar of the Mad God.png"
                            back="cards/Delusion.png"
                            style={{width: "22%"}}
                        />
                        <Card
                            src="cards/Destroy Example.png"
                            back="cards/FinallyAWorthyChallenge.png"
                            style={{width: "22%"}}
                        />
                        <Card
                            src="cards/HeartscaleShowstopper.png"
                            back="cards/HighTide.png"
                            style={{width: "22%"}}
                        />
                        <Card
                            src="cards/NowItsMyTurn.png"
                            back="cards/RedStripedLionfish.png"
                            style={{width: "22%"}}
                        />
                        <Card
                            src="cards/SmolCreature.png"
                            back="cards/Whirling of The Engine.png"
                            style={{width: "22%"}}
                        />
                        <Card
                            src="cards/SnakeTwist Motor p1.png"
                            back="cards/SnakeTwist Motor p2.png"
                            style={{width: "22%"}}
                        />
                        <Card
                            src="cards/ZacharyZipper.png"
                            back="Court%20Jester.png"
                            style={{width: "22%"}}
                        />
                    </div>
                </Part>
            </Article>
        </>
    );
}
