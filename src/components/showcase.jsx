import BackgroundImage from "./backgroundImage";
import Article from "./article";
import Part from "./part";
import MDDisplay from "./mdDisplay";

import styles from "./showcase.module.css";

export default function Showcase({project}) {
    return (
        <>
            <BackgroundImage src={`../../${project.backgroundPath}`} />
            <Article>
                <Part contentClassName={styles.part}>
                    <MDDisplay text={project.showcase} />
                </Part>
            </Article>
        </>
    );
}
