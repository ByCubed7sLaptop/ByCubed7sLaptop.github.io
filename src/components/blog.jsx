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
                    <img
                        src={`../../${project.imgPath}`}
                        style={{
                            margin: "1em auto",
                            display: "block",
                            maxwidth: "100%"
                        }}
                    />
                    <MDDisplay text={project.blog} />
                </Part>
            </Article>
        </>
    );
}
