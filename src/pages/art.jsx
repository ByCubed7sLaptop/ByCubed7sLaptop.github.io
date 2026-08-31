import Part from "../components/part.jsx";
import Article from "../components/article.jsx";
import BackgroundImage from "../components/backgroundImage.jsx";

import {Friends, SocialToLink} from "../data/socials.js";

import Art from "../data/art.json"

const images = Art.sort((a, b) => Date.parse(b.created) - Date.parse(a.created));
const head = images.reverse();

const imagesToSrc = (image) => {
    return "art and design/art/" + image.filename;
};

export default function Index() {

    return (
        <>
            <BackgroundImage src={head[7]} />

            <Article>

                <h3 style={{margin: "0"}}>And more!</h3>
                <div style={{columnCount: "2", columnGap: "15px", padding: "15px"}}>
                    {head.map((src, index) => (
                            <a style={{textDecoration: "none"}}>
                                <div style={{breakInside: "avoid", marginBottom: "15px", background: "rgba(255, 255, 255, 0.1)", borderRadius: "10px", overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.1)"}}>
                                        <img style={{imageRendering: "pixelated", width:"100%",  minWidth:"20vh", display: "block"}} key={index} src={imagesToSrc(src)} alt={`${src}`} />
                                        <div style={{textAlign:"center", width:"100%"}}>{src.filename}</div>
                                </div>
                            </a>
                    ))}

                </div>

            </Article>
        </>
    );
}
