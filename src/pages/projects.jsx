import Article from "../components/article.jsx";
import BackgroundImage from "../components/backgroundImage.jsx";
import Part from "../components/part.jsx";
import ProjectBox from "../components/projectBox.jsx";

import {projects} from "../data/projects.js";

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
                    {projects.map(function(project, i) {
                        return (
                            <ProjectBox
                                fromProject={project}
                                style={{width: "21%"}}
                            />
                        );
                    })}
                </div>
            </Article>
        </>
    );
}
