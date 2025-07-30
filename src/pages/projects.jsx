import Article from "../components/article";
import BackgroundImage from "../components/backgroundImage";
import Part from "../components/part";
import ProjectBox from "../components/ProjectBox";

import {DesktopCapybara, Infected, WizardRogue} from "../data/projects";

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
