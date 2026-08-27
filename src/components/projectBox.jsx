import styles from "./projectBox.module.css"
import { useState } from "react";

export default function ProjectBox({ fromProject, style, insideStyle }) {
    const [isHovered, setIsHovered] = useState(false);

    if (fromProject === undefined) return <></>;

    const hasBlog = fromProject.blog != "";

    const backgroundImageStyle = {
        backgroundImage: `url('${fromProject.imgPath}')`,
        transform: isHovered ? "rotateY(180deg)" : "rotateY(0deg)"
    };

    const textStyle = {
        transform: !isHovered ? "rotateY(180deg)" : "rotateY(0deg)"
    };

    return (
        <div className={`${styles.projectBox} ${hasBlog ? styles.hasBlog : ""}`} style={style}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <a href={hasBlog ? fromProject.getFullShowcasePath() : undefined}>
                <div className={styles.inside} style={insideStyle}>
                    <div className={styles.flipped}>
                        <div className={[styles.insideContainer, styles.backgroundImage].join(" ")} style={backgroundImageStyle} />
                        <div className={styles.insideContainer} style={textStyle}>
                            <div className={styles.insideContainerText}>
                                <h2>{fromProject.displayName}</h2>
                                <p>{fromProject.description}</p>
                                <p style={{ fontSize: "1em" }}>
                                    <strong>{fromProject.tags}</strong>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
            {
                hasBlog ? "" : "Docs in progress!"
            }
        </div>
    );
}
