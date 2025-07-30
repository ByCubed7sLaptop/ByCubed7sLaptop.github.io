import BackgroundImage from "./backgroundImage";
import Article from "./article";
import Part from "./part";
import MDDisplay from "./mdDisplay";

import styles from "./blog.module.css";

export default function Blog({project}) {
    return (
        <>
            <BackgroundImage src={`../../${project.backgroundPath}`} />
            <Article>
                <Part contentClassName={styles.part}>
                    <MDDisplay text={project.blog} />
                </Part>
            </Article>
        </>
    );
}
