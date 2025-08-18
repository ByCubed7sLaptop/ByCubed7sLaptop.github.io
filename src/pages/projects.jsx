import Article from "../components/article.jsx";
import BackgroundImage from "../components/backgroundImage.jsx";
import Part from "../components/part.jsx";
import ProjectBox from "../components/projectBox.jsx";

import {DesktopCapybara, Infected, WizardRogue} from "../data/projects.js";

export default function Index() {
    return (
        <>
            <BackgroundImage src="pom/pom.png" />

            <Article>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        justifyContent: "space-evenly"
                    }}
                >
                    <ProjectBox
                        fromProject={DesktopCapybara}
                        style={{width: "21%"}}
                    />

                    <ProjectBox
                        fromProject={WizardRogue}
                        style={{width: "21%"}}
                    />

                    <ProjectBox fromProject={Infected} style={{width: "21%"}} />
                </div>
            </Article>
        </>
    );
}
