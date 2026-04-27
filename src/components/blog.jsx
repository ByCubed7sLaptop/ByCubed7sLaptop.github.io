import BackgroundImage from "./backgroundImage";
import Article from "./article";
import Part from "./part";
import MDDisplay from "./mdDisplay";

import styles from "./blog.module.css";

export default function Blog({project}) {


    let displayEmpty = project.blog == "";

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
                            maxWidth: "100%"
                        }}
                    />
                    {
                        displayEmpty ? 
                        <div style={{"textAlign":"center"}}>This section hasnt been finished yet. But we're sure it's pretty interesting...</div> : 
                        <MDDisplay text={project.blog} />
                    }
                </Part>
            </Article>
        </>
    );
}
