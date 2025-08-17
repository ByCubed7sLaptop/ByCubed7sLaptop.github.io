import Article from "../components/article.jsx";
import BackgroundImage from "../components/backgroundImage.jsx";
import Part from "../components/part.jsx";
import ProjectBox from "../components/projectBox.jsx";

import {DesktopCapybara, Infected, WizardRogue} from "../data/projects.js";

export default function Index() {
    return (
        <>
            <BackgroundImage src="pom/pom.png" />

            <div
                style={{
                    display: "flex",
                    flex: "0 1 auto",
                    flexDirection: "row",
                    flexWrap: "wrap"
                }}
            >
                <ProjectBox
                    fromProject={DesktopCapybara}
                    style={{width: "32%"}}
                />
            </div>
        </>
    );
}
