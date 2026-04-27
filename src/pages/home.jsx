import ProjectBox from "../components/projectBox.jsx";
import ImageCollectionRow from "../components/imageCollectionRow.jsx";
import Part from "../components/part.jsx";
import Article from "../components/article.jsx";
import Row from "../components/row.jsx";
import Subtitle from "../components/subtitle.jsx";
// import Experience from "../components/experience.jsx";
import BackgroundImage from "../components/backgroundImage.jsx";
import Dots from "../components/dots.jsx";
// import Card from "../components/card.jsx";
import Socials from "../components/socialIcons.jsx";
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
                            and collaboration; With a background in computer
                            science, game development and scripting, I have developed a
                            diverse set of skills that enable me to tackle
                            complex projects across various domains.
                            
                            <br />
                            <br />
                            My journey has encompassed the creation of
                            high-performance applications utilizing C++ and .NET
                            Core, as well as the development of games and applications using
                            Unity and Godot. This has also lead me to explore web development, 
                            machine learning frameworks, rendering pipelines, 
                            statitics, and so.. so much more.
                            
                            <br />
                            <br />
                            I look forward to connecting with you!
                        </div>
                        <div style={{padding: "1em", paddingTop: "3em"}}>
                        </div>
                    </Row>
                </Part>

                <Part>
                    <ImageCollectionRow
                        style={{
                            justifyContent: "space-evenly",
                            maxWidth: "1150px",
                            margin: "1em auto",
                            height: "10em"
                        }}
                        images={[
                            "languages/Unity.png",
                            "languages/Godot.png",
                            "languages/Unreal.png",
                            "languages/CPlusCSharpPythonJava.png",
                            "languages/HtmlCssJs.png",
                            "languages/DirectXOpenGL.png",
                        ]}
                    />
                    <ImageCollectionRow
                        style={{
                            justifyContent: "space-evenly",
                            maxWidth: "1150px",
                            margin: "0.5em auto",
                            height: "3em"
                        }}
                        imgStyle={{height: "100%", filter: "brightness(0) invert()"}}
                        images={[
                            "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
                            "https://camo.githubusercontent.com/d301c9e3a1d71bd0d78474a7083e834bf077ec8e6a8b36b784b8c421f1c9ef21/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f707074726465762f707074726465762d6f6666696369616c2e737667",
                            "https://camo.githubusercontent.com/31c41a7e1d08f46fb7e204ee09c48c8697b69616c44d87e9fd51c3108679b6eb/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f7079746f7263682f7079746f7263682d69636f6e2e737667",
                            "https://camo.githubusercontent.com/48d901d5fed509b5f2dd13ecb8246653f66e655d5e7838450460b04360942a43/68747470733a2f2f63646e2e776f726c64766563746f726c6f676f2e636f6d2f6c6f676f732f61726475696e6f2d312e737667",
                            "https://raw.githubusercontent.com/devicons/devicon/7330accdbc47e2dc0c19789a48533c4a3c50fe58/icons/yaml/yaml-plain.svg",
                            "https://raw.githubusercontent.com/devicons/devicon/7330accdbc47e2dc0c19789a48533c4a3c50fe58/icons/yarn/yarn-original.svg",
                            "https://raw.githubusercontent.com/devicons/devicon/7330accdbc47e2dc0c19789a48533c4a3c50fe58/icons/linuxmint/linuxmint-plain.svg",
                            "https://raw.githubusercontent.com/devicons/devicon/7330accdbc47e2dc0c19789a48533c4a3c50fe58/icons/windows11/windows11-original.svg",
                            "https://raw.githubusercontent.com/devicons/devicon/7330accdbc47e2dc0c19789a48533c4a3c50fe58/icons/wolfram/wolfram-plain.svg",
                            "https://raw.githubusercontent.com/devicons/devicon/7330accdbc47e2dc0c19789a48533c4a3c50fe58/icons/vulkan/vulkan-original.svg",
                            "https://raw.githubusercontent.com/devicons/devicon/7330accdbc47e2dc0c19789a48533c4a3c50fe58/icons/visualbasic/visualbasic-plain.svg",
                            "https://raw.githubusercontent.com/devicons/devicon/7330accdbc47e2dc0c19789a48533c4a3c50fe58/icons/typescript/typescript-plain.svg",
                            "https://raw.githubusercontent.com/devicons/devicon/7330accdbc47e2dc0c19789a48533c4a3c50fe58/icons/twilio/twilio-original.svg",
                            "https://raw.githubusercontent.com/devicons/devicon/7330accdbc47e2dc0c19789a48533c4a3c50fe58/icons/threejs/threejs-original.svg",
                            "https://raw.githubusercontent.com/devicons/devicon/7330accdbc47e2dc0c19789a48533c4a3c50fe58/icons/tensorflow/tensorflow-original.svg",
                            "https://raw.githubusercontent.com/devicons/devicon/7330accdbc47e2dc0c19789a48533c4a3c50fe58/icons/vscode/vscode-plain.svg",
                            "https://raw.githubusercontent.com/devicons/devicon/7330accdbc47e2dc0c19789a48533c4a3c50fe58/icons/visualstudio/visualstudio-plain.svg",
                            "https://raw.githubusercontent.com/devicons/devicon/7330accdbc47e2dc0c19789a48533c4a3c50fe58/icons/vite/vite-original.svg",
                            "https://raw.githubusercontent.com/devicons/devicon/7330accdbc47e2dc0c19789a48533c4a3c50fe58/icons/vitejs/vitejs-plain.svg",
                        ]}
                        />
                    <ImageCollectionRow
                        style={{
                            justifyContent: "space-evenly",
                            maxWidth: "1150px",
                            margin: "0.5em auto",
                            width: "100%",
                            height: "3em"
                        }}
                        imgStyle={{height: "100%", filter: "brightness(0) invert()"}}
                        images={[
                            "https://raw.githubusercontent.com/devicons/devicon/7330accdbc47e2dc0c19789a48533c4a3c50fe58/icons/sqlite/sqlite-plain.svg",
                            "https://raw.githubusercontent.com/devicons/devicon/7330accdbc47e2dc0c19789a48533c4a3c50fe58/icons/spyder/spyder-plain.svg",
                            "https://raw.githubusercontent.com/devicons/devicon/7330accdbc47e2dc0c19789a48533c4a3c50fe58/icons/rust/rust-original.svg",
                            "https://raw.githubusercontent.com/devicons/devicon/7330accdbc47e2dc0c19789a48533c4a3c50fe58/icons/ruby/ruby-plain.svg",
                            "https://raw.githubusercontent.com/devicons/devicon/7330accdbc47e2dc0c19789a48533c4a3c50fe58/icons/renpy/renpy-plain.svg",
                            "https://raw.githubusercontent.com/devicons/devicon/7330accdbc47e2dc0c19789a48533c4a3c50fe58/icons/react/react-original.svg",
                            "https://raw.githubusercontent.com/devicons/devicon/7330accdbc47e2dc0c19789a48533c4a3c50fe58/icons/pyscript/pyscript-plain-wordmark.svg",
                            "https://raw.githubusercontent.com/devicons/devicon/7330accdbc47e2dc0c19789a48533c4a3c50fe58/icons/pypi/pypi-plain.svg",
                            "https://raw.githubusercontent.com/devicons/devicon/7330accdbc47e2dc0c19789a48533c4a3c50fe58/icons/pycharm/pycharm-plain.svg",
                            "https://raw.githubusercontent.com/devicons/devicon/7330accdbc47e2dc0c19789a48533c4a3c50fe58/icons/opentelemetry/opentelemetry-plain.svg",
                            "https://raw.githubusercontent.com/devicons/devicon/7330accdbc47e2dc0c19789a48533c4a3c50fe58/icons/openapi/openapi-plain.svg",
                            "https://raw.githubusercontent.com/devicons/devicon/7330accdbc47e2dc0c19789a48533c4a3c50fe58/icons/openal/openal-plain.svg",
                            "https://raw.githubusercontent.com/devicons/devicon/7330accdbc47e2dc0c19789a48533c4a3c50fe58/icons/numpy/numpy-plain.svg",
                            "https://raw.githubusercontent.com/devicons/devicon/7330accdbc47e2dc0c19789a48533c4a3c50fe58/icons/nuget/nuget-original.svg",
                            "https://raw.githubusercontent.com/devicons/devicon/7330accdbc47e2dc0c19789a48533c4a3c50fe58/icons/npm/npm-plain.svg",
                            "https://raw.githubusercontent.com/devicons/devicon/7330accdbc47e2dc0c19789a48533c4a3c50fe58/icons/nodejs/nodejs-plain.svg",
                            "https://raw.githubusercontent.com/devicons/devicon/7330accdbc47e2dc0c19789a48533c4a3c50fe58/icons/maven/maven-plain.svg",
                            "https://raw.githubusercontent.com/devicons/devicon/7330accdbc47e2dc0c19789a48533c4a3c50fe58/icons/matplotlib/matplotlib-plain.svg",
                            "https://raw.githubusercontent.com/devicons/devicon/7330accdbc47e2dc0c19789a48533c4a3c50fe58/icons/markdown/markdown-original.svg",

                        ]}
                    />
                    <h3 style={{textAlign:"center"}}>144+ Projects deployed across so <i>so</i> many environments<br/><small>(help)</small></h3>
                </Part>

                <Part
                    style={{backgroundColor: "var(--accent)"}}
                    contentStyle={{maxWidth: "1500px"}}
                >
                    <Subtitle>Game Dev</Subtitle>

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

                <Part contentStyle={{maxWidth: "1500px"}}></Part>

                <Part
                    style={{backgroundColor: "var(--accent)"}}
                    contentStyle={{maxWidth: "1500px"}}
                >
                <h3 style={{textAlign:"center",marginTop:"0"}}>Come find me!</h3>
                    <Socials />
                </Part>

            </Article>
        </>
    );
}
