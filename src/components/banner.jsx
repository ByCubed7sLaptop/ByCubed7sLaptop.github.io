import styles from "./banner.module.css";

export default function Banner({style, children}) {
    return (
        <header role="banner" className={styles.nav} style={style}>
            <input type="checkbox" className={styles.navCheck} id="navCheck" />
            <div className={styles.navHeader} />
            <div className={styles.navBtn}>
                <label htmlFor="navCheck">
                    <span />
                    <span />
                    <span />
                </label>
            </div>
            <div className={styles.navLinks}>{children}</div>
            <h1 className={styles.brand}>ETHAN THOMAS</h1>
        </header>
    );
}
