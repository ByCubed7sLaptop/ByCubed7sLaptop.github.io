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

const imageModules = import.meta.glob("./fanart/*.{png,webp,jpg,jpeg,svg}", {
  eager: true,
});


const images = Object.entries(imageModules)
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
    .map(([mod]) => mod);

const imagesToFilename = images.map((path, index) => {
    return path.split('\/').pop();
});

const imagesToName = imagesToFilename.map((name, index) => {
    return name.split(" by ")[0].split(".")[0];
});

const imagesToAuthor = imagesToFilename.map((name, index) => {
    return name.split(" by ").pop().split(".")[0];
});


export default function Index() {
    
    return (
        <>
            <BackgroundImage src={images[7]} />

            <Article>
                <div style={{columnCount: "5", columnGap: "15px", padding: "15px"}}>
                    {images.map((src, index) => (
                        <div style={{breakInside: "avoid", marginBottom: "15px", background: "rgba(255, 255, 255, 0.1)", borderRadius: "10px", overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.1)"}}>
                            <img style={{imageRendering: "pixelated", width:"100%", maxWidth:"50vh", minWidth:"20vh", display: "block"}} key={index} src={src} alt={`img-${index}-${src}`} />
                            <div style={{textAlign:"center", width:"100%"}}>"{imagesToName[index]}" - {imagesToAuthor[index]}</div>
                        </div>
                    ))}

                </div>

                <Part>
                    <Subtitle>Want add to this?</Subtitle>
                    Ping me a dm on Discord!
                </Part>

            </Article>
        </>
    );
}
