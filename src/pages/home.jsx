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

import {DesktopCapybara, Infected, WizardRogue, Mario, PaperRogue} from "../data/projects.js";

export default function Index() {
    // <Part>
    //
    //     <ImageCollectionRow
    //         style={{maxWidth: "1150px", margin: "auto"}}
    //         images={[
    //             "games/Jak 3.png",
    //             "games/Paper Mario.png",
    //             "games/Terraria.png",
    //             "games/Minecraft.png",
    //             "games/Brawlhalla.png",
    //             "games/Noita.png"
    //         ]}
    //     />
    // </Part>

    return (
        <>
            <BackgroundImage src="pom/pom.png" />
            <Dots style={{opacity: "0.7"}} />

            <Article>
                <Part contentStyle={{minHeight: "10em"}}>
                    <div
                        style={{
                            float: "left",
                            width: "48%",
                            height: "100%",
                            marginTop: "4em",
                            marginRight: "2%"
                        }}
                    >
                        <h1
                            style={{
                                fontSize: "3em",
                                letterSpacing: "-0.05em",
                                float: "right",
                                lineHeight: "50px",
                                textAlign: "right"
                            }}
                        >
                            <span style={{}}>{Me.name}</span>
                            <br />
                            <span style={{color: "purple", fontSize: "0.8em"}}>
                                {Me.title}
                            </span>
                        </h1>
                    </div>

                    <div style={{float: "left", width: "50%"}}>
                        <img
                            src="./Court Jester.png"
                            style={{
                                borderRadius: "15em",
                                border: "groove 1em",
                                objectFit: "cover",
                                width: "25em",
                                height: "25em"
                            }}
                        />
                    </div>
                </Part>

                <Part style={{backgroundColor: "var(--accent)"}}>
                    <Row>
                        <div style={{padding: "1em", minWidth: "60%"}}>
                            <Subtitle style={{color: "purple"}}>
                                Hello!
                            </Subtitle>
                            I'm {Me.name}, an archetype developer & software
                            engineer with a passion for programming innovation
                            and collaboration. With a background in computer
                            science and game development, I have developed a
                            diverse set of skills that enable me to tackle
                            complex projects across various domains.
                            <br />
                            <br />
                            My journey has encompassed the creation of
                            high-performance applications utilizing C++ and .NET
                            Core, as well as the development of games and applications using
                            Unity and Godot.
                            <br />
                            <br />
                            I have consistently pursued the latest advancements
                            in my field, leading me to explore web development, 
                            machine learning frameworks, rendering pipelines, 
                            statitics, and so much more.
                        </div>
                        <div style={{padding: "1em", paddingTop: "3em"}}>
                            My experience also extends to cloud development,
                            where I have effectively utilized platforms like AWS
                            and Azure to design scalable and secure applications
                            capable of accommodating high traffic volumes. I
                            have also engaged with innovative projects in the
                            realm of VR using OpenVR, demonstrating my
                            commitment to integrating cutting-edge technologies
                            into my work.
                            <br />
                            <br />
                            This portfolio showcases some examples of my work,
                            highlighting my technical skills, creativity, and
                            ability to drive projects forward. Feel free to
                            explore, and I look forward to connecting with you!
                        </div>
                    </Row>
                </Part>

                <Part>
                    <ImageCollectionRow
                        style={{
                            justifyContent: "space-evenly",
                            maxWidth: "1150px",
                            margin: "auto"
                        }}
                        images={[
                            "languages/Unity.png",
                            "languages/Godot.png",
                            "languages/Unreal.png",
                            "languages/CPlusCSharpPythonJava.png",
                            "languages/HtmlCssJs.png",
                            "languages/DirectXOpenGL.png"
                        ]}
                    />
                </Part>

                <Part
                    style={{backgroundColor: "var(--accent)"}}
                    contentStyle={{maxWidth: "1500px"}}
                >
                    <Subtitle>Projects</Subtitle>

                    <Row
                        style={{
                            minHeight: "350px",
                            marginBottom: "2em"
                        }}
                    >
                        <ProjectBox
                            fromProject={DesktopCapybara}
                            style={{width: "32%"}}
                        />

                        <ProjectBox
                            fromProject={WizardRogue}
                            style={{width: "32%"}}
                        />

                        <ProjectBox
                            fromProject={Infected}
                            style={{width: "32%"}}
                        />
                    </Row>

                    <Row
                        style={{
                            height: "200px",
                            marginBottom: "2em",
                            justifyContent: "center"
                        }}
                    >
                        <ProjectBox
                            fromProject={Mario}
                            style={{width: "20%", marginRight: "1em"}}
                        />

                        <ProjectBox
                            fromProject={PaperRogue}
                            style={{width: "20%", marginLeft: "1em"}}
                        />
                    </Row>

                    <div>
                        <a href="projects">SEE MORE ✨</a>
                    </div>
                </Part>

                <Part contentStyle={{maxWidth: "1500px"}}></Part>
                
                <Part
                    style={{backgroundColor: "var(--accent)"}}
                    contentStyle={{maxWidth: "1500px"}}
                >
                    <Subtitle>Art & Design</Subtitle>

                    <Row>

                    <div style={{width:"32%", textAlign:"center"}}>
                        <a href="cards">
                        <div style={{width:"100%", textAlign:"center", height:"340px", overflow: "hidden"}}>
                            <img src="art and design/TTRPG Cards/SnakeTwist Motor.png" style={{width:"100%", height:"100%", objectFit: "cover"}}/>
                        </div>
                        </a>
                        TTRPG Cards
                    </div>

                    <div style={{width:"32%", textAlign:"center"}}>
                        <a href="posters">
                        <div style={{width:"100%", textAlign:"center", height:"340px", overflow: "hidden"}}>
                            <img src="art and design/Posters/The Gang Poster.png" style={{width:"100%", height:"100%", objectFit: "cover"}}/>
                        </div>
                        </a>
                        Posters
                    </div>  

                    <div style={{width:"32%", textAlign:"center"}}>
                        <a href="https://vgen.co/ByCubed7">
                        <div style={{width:"100%", textAlign:"center", height:"340px", overflow: "hidden"}}>
                            <img src="art and design/Commissions/GrayXAppity.png" style={{width:"100%", height:"100%", objectFit: "cover"}}/>
                        </div>
                        </a>
                        Commissions
                    </div>
                    </Row>

                    <br />

                    <Row style={{justifyContent: "space-evenly"}}>

                    <div style={{width:"32%", textAlign:"center"}}>
                        <a href="https://vgen.co/ByCubed7/service/minecraft-skin/453823d1-432d-4be3-bf0d-7fcae192e204">
                        <div style={{width:"100%", textAlign:"center", height:"340px", overflow: "hidden"}}>
                            <img src="art and design/Minecraft Skins/Render5.png" style={{width:"100%", height:"100%", objectFit: "cover"}}/>
                        </div>
                        </a>
                        Minecraft Skins
                    </div>

                    <div style={{width:"32%", textAlign:"center"}}>
                        <a href="https://vgen.co/ByCubed7">
                        <div style={{width:"100%", textAlign:"center", height:"340px", overflow: "hidden"}}>
                            <img src="art and design/Emotes and Stickers/Stickers Stare crop.png" style={{width:"100%", height:"100%", objectFit: "cover"}}/>
                        </div>
                        </a>
                        Emotes & Stickers
                    </div>
                        
                    </Row>
                
                </Part>

                <Part contentStyle={{maxWidth: "1500px"}}></Part>
                
                <Part
                    style={{backgroundColor: "var(--accent)"}}
                    contentStyle={{maxWidth: "1500px"}}
                >
                    <Subtitle>3D modeling</Subtitle>

                    <Row>

                    <div style={{width:"32%", textAlign:"center"}}>
                        <img src="models/Me/Render 1.png" style={{maxWidth:"100%"}}/>
                        VRMs & Me
                    </div>

                    <div style={{width:"32%", textAlign:"center"}}>
                        <img src="models/2026 Tabletop/DC Table 1.jpg" style={{maxWidth:"100%"}}/>
                        Tabletop models
                    </div>

                    <div style={{width:"32%", textAlign:"center"}}>
                        <img src="models/2024 Furret mod/Render 1.png" style={{maxWidth:"100%"}}/>
                        Games & Modding
                    </div>    
                    </Row>

                    <br />

                    <Row style={{justifyContent: "space-evenly"}}>

                    <div style={{width:"32%", textAlign:"center"}}>
                        <img src="models/2021 Weapons/Katana Render 2.png" style={{maxWidth:"100%"}}/>
                        Weapons
                    </div>

                    <div style={{width:"32%", textAlign:"center"}}>
                        <img src="models/2022 Minecraft/Grayscaped.png" style={{maxWidth:"100%"}}/>
                        Minecraft Renders
                    </div>    
                        
                    </Row>
                
                </Part>
            </Article>
        </>
    );
}
