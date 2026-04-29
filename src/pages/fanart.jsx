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

import {Friends, SocialToLink} from "../data/socials.js";

const imageNames = [
    "3D grem Cube by Grem.gif",
    "Birthday card 2 by delta.webp",
    "Birthday card by delta.webp",
    "ByCubed Snail emoteozaza by Grem.png",
    "Cat Art Request by Phay.png",
    "chair catboy by OceanDayz.png",
    "Cube 2 by Dana.jpg",
    "Cube by Grayscaped.png",
    "Cube by HauntedLuna.png",
    "cube_cheesecake trans by Oddballmax.webp",
    "Cubed_404_Error by Lo.png",
    "cubed_the_fag by Aether.webp",
    "cube_fan_art by Oddballmax.webp",
    "Cube legs by Caspian.png",
    "Cube milk by Dana.png",
    "Cube on 4 legs by HauntedLuna.png",
    "Cube Pinned by IcePrincess129.png",
    "Cursed Cube by Caspian.png",
    "CutieCubie by Grayscaped.png",
    "Happy born day by Bean.webp",
    "magic cube taco with taco toppings by Grem.png",
    "Merry Cubemas by Connor.webp",
    "Miscarriage Apology by Aether.png",
    "ms paint drawing by captain_salsa.png",
    "Spheal by Tutt.png",
    "the_cube by Oddballmax.jpg",
    "The gang by Meow.png",
    "Untitled890_20250804220043 by Meow.png",
    "Untitled925_20250902142752 by Meow.png",
    "Untitled959_20251001081553 by Meow.png",
    "Wizard by Seaphoenix.png",
    "CUBIEE by Aether.png",
    "Mii by Aether.jpg"
]


const images = imageNames
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

const imagesToSrc = (image) => {
    return "fanart/" + image;
};

const imagesToName = (image) => {
    return image.split(" by ")[0].split(".")[0];
};

const imagesToAuthor = (image) => {
    return image.split(" by ").pop().split(".")[0];
};

const imagesToSocials = (image) => {
    let author = imagesToAuthor(image);
    return Friends[author.toLowerCase()]
};

export default function Index() {

    return (
        <>
            <BackgroundImage src={images[7]} />

            <Article>
                <div style={{columnCount: "5", columnGap: "15px", padding: "15px"}}>
                    {images.map((src, index) => (
                            <a href={imagesToSocials(src)} style={{textDecoration: "none"}}>
                        <div style={{breakInside: "avoid", marginBottom: "15px", background: "rgba(255, 255, 255, 0.1)", borderRadius: "10px", overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.1)"}}>
                                <img style={{imageRendering: "pixelated", width:"100%", maxWidth:"50vh", minWidth:"20vh", display: "block"}} key={index} src={imagesToSrc(src)} alt={`${src}`} />
                                <div style={{textAlign:"center", width:"100%"}}>"{imagesToName(src)}" - {imagesToAuthor(src)}</div>
                        </div>
                            </a>
                    ))}

                </div>

                <Part>
                    <h3>Want add to this? Already made art for me but I've forgotten to add it?</h3>
                    <a href={SocialToLink.discord}>Ping me on Discord!</a>
                </Part>

            </Article>
        </>
    );
}
