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

import Fanart from "../data/fanart.json"

const images = Fanart.sort((a, b) => Date.parse(a.created) - Date.parse(b.created));
const head = images.slice(0, -3).reverse();
//  .map(value => ({ value, sort: Math.random() }))
//  .sort((a, b) => a.sort - b.sort)
//  .map(({ value }) => value);
const tail = images.slice(-3).reverse();

const imagesToSrc = (image) => {
    return "fanart/" + image.filename;
};

const imagesToSocials = (image) => {
    return Friends[image.author.toLowerCase()]
};

export default function Index() {

    return (
        <>
            <BackgroundImage src={head[7]} />

            <Article>

                <h2>New!</h2>
                <div style={{display: "flex", justifyContent: "space-around"}}>
                    {tail.map((src, index) => (
                        <div style={{width: "30%"}}>
                            <a href={imagesToSocials(src)} style={{textDecoration: "none"}}>
                                <div style={{breakInside: "avoid", marginBottom: "15px",  background: "rgba(255, 255, 255, 0.1)", borderRadius: "10px", overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.1)"}}>
                                        <img style={{imageRendering: "pixelated", display: "block", width: "auto", height: "auto", margin:"auto", maxHeight: "70vh", maxWidth: "100%"}} key={index} src={imagesToSrc(src)} alt={`${src}`} />
                                        <div style={{textAlign:"center", width:"100%"}}>"{src.title}" - {src.author}</div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>

                <h3 style={{margin: "0"}}>And more!</h3>
                <div style={{columnCount: "5", columnGap: "15px", padding: "15px"}}>
                    {head.map((src, index) => (
                            <a href={imagesToSocials(src)} style={{textDecoration: "none"}}>
                                <div style={{breakInside: "avoid", marginBottom: "15px", background: "rgba(255, 255, 255, 0.1)", borderRadius: "10px", overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.1)"}}>
                                        <img style={{imageRendering: "pixelated", width:"100%", maxWidth:"50vh", minWidth:"20vh", display: "block"}} key={index} src={imagesToSrc(src)} alt={`${src}`} />
                                        <div style={{textAlign:"center", width:"100%"}}>"{src.title}" - {src.author}</div>
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
