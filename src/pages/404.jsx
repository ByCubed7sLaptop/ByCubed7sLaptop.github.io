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
                    style={{textAlign: "center"}}
                    contentStyle={{maxWidth: "1150px", margin: "auto"}}
                >
                    <Subtitle>404</Subtitle>

                    <img style={{width:"50%"}} src="/404.png"/>
                    <br />
                    <small>Art by <a href="https://ko-fi.com/lo_">Lo</a>!</small>
                </Part>
            </Article>
        </>
    );
}
