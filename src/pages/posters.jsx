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
            {/* <BackgroundImage src="pom/pom.png" /> */}

            <Article>
                <Part contentStyle={{maxWidth: "1150px"}}></Part>

                <Part
                    style={{backgroundColor: "var(--accent)"}}
                    contentStyle={{maxWidth: "1150px", margin: "auto"}}
                >
                    <h2>The Havenhand Crew</h2>
                    <div style={{display:"flex"}}>

                        <img src="art and design/Posters/The Gang Poster.png" style={{height:"100vh", float:"left", margin:"1em"}} />
                        <div style={{float:"left", margin:"1em"}} >
                            Poster made for my friends on the <a href="https://www.youtube.com/@Havenhand">Havenhand Crew</a>. 
                            To celebrate him achieving 100k subscribers on Youtube.
                        
                            <br/>
                            <br/>

                            Made in Krita, the 400ppi piece took around 12 hours to make and was an orderable print for the community as merch for some time.


                            <br/>
                            <br/>
                            <i>"Haven and I look like team rocket with that fuck ass pose"</i><br/> 
                            - <a href="https://www.twitch.tv/Grayscaped">Gray</a>
                            
                            <br/>
                            <br/>
                            <i>"I look like I'm radiating Michael Jackson swag"</i><br/> 
                            - <a href="https://www.youtube.com/@TicedUp">TicedUp</a>
                            

                            <br/>
                            <br/>
                            <i>"My slut levels are maxed out in that omg"</i><br/>
                            - <a href="https://www.youtube.com/@JustKerp">Kerp</a>
                        </div>

                    </div>

                </Part>
                
                <Part contentStyle={{maxWidth: "1150px"}}></Part>

                <Part
                    style={{backgroundColor: "var(--accent)"}}
                    contentStyle={{maxWidth: "1150px", margin: "auto"}}
                >
                    <h2>The TreasureTales Team</h2>
                    <div style={{display:"flex"}}>

                        <div style={{float:"left", margin:"1em"}} >
                            Poster for the team at <a href="https://www.youtube.com/@treasuredtalesrpg">Treasuredtales</a>. 
                            For reaching their recent goal.
                        
                            <br/>
                            <br/>

                            Made in Clipstudio, then transfered and finished on Krita, this 400ppi piece went through 4 interations and took around 16 hours to make.

                            <br/>
                            <br/>
                            <i>"Now I can open my phone, and my friends will always be there to greet me~"</i><br/> 
                            - <a href="https://throne.com/scornxiii">Scorn</a>
                            
                            <br/>
                            <br/>
                            <i>"Cubed this is MASSIVE"</i><br/>
                            - <a href="https://www.twitch.tv/heyphayphay">Phay</a>
                        </div>
                        <img src="art and design/Posters/The rogues hideout Poster.png" style={{height:"100vh", float:"left", margin:"1em"}} />

                    </div>

                </Part>
                
                <Part contentStyle={{maxWidth: "1150px"}}></Part>

                <Part
                    style={{backgroundColor: "var(--accent)"}}
                    contentStyle={{maxWidth: "1150px", margin: "auto"}}
                >
                    <h2>Want your own?</h2>
                    <a href="https://vgen.co/ByCubed7">Contact me here!</a>

                </Part>
            </Article>
        </>
    );
}
