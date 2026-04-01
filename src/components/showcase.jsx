import BackgroundImage from "./backgroundImage";
import Article from "./article";
import Part from "./part";
import MDDisplay from "./mdDisplay";

import styles from "./showcase.module.css";

import {useNavigate} from "react-router-dom";

export default function Showcase({project}) {
    if (project.showcase == "") window.location = project.getFullBlogPath();

    return (
        <>
            <BackgroundImage src={`../../${project.backgroundPath}`} />
            <Article>
                <Part contentClassName={styles.part}>
                    <MDDisplay text={project.showcase} />
                </Part>
                <Part
                    contentClassName={styles.part}
                    style={{
                        textAlign: "center"
                    }}
                >
                    <a href={project.getFullBlogPath()}>
                        You can see the full blog here
                        <br />
                        <img
                            src="../more.png"
                            style={{
                                width: "10%"
                            }}
                        />
                    </a>
                </Part>
            </Article>
        </>
    );
}
