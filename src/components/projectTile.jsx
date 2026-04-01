import styles from "./projectTile.module.css";

export default function ProjectTile({project}) {
    return (
        // Tile
        <div className={styles.container}>
            <div className={styles.containerInner}>
                <a href={project.getFullPath()}>
                    <img
                        src={project.getFullImgPath()}
                        className={styles.display}
                    />
                    <div className={styles.overlay}>
                        <div className={styles.overlayInner}>AAAAAAAAA</div>
                    </div>
                </a>
            </div>
        </div>
    );
}
