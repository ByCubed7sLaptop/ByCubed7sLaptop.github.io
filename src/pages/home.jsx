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

import {DesktopCapybara, Infected, WizardRogue} from "../data/projects.js";

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
                            Core, as well as the development of games using
                            Unity and Godot.
                            <br />
                            <br />
                            I have consistently pursued the latest advancements
                            in my field, which has led me to explore web
                            development frameworks such as React.js and Angular
                            as well as machine learning frameworks like
                            TensorFlow and PyTorch.
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

                    <div>
                        <a href="projects">SEE MORE ✨</a>
                    </div>
                </Part>
            </Article>
        </>
    );
}
