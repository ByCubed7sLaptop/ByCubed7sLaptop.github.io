import styles from "./part.module.css";

export default function Part({
    children,
    padding = "small",
    style,
    contentStyle,
    contentClassName
}) {
    var styleC = {
        position: "relative",
        width: "calc(100% + 324.5px * 2 + 15px * 2)",
        left: "-324.5px",
        paddingLeft: "324.5px",
        paddingRight: "324.5px",
        marginLeft: "-15px",
        marginRight: "-15px",
        ...style
    };

    if (padding == "small")
        styleC = {
            ...styleC,
            paddingTop: "35px",
            paddingBottom: "35px"
        };

    var contentStyleC = {};
    if (contentClassName == undefined) {
        contentStyleC = {flexGrow: "1", maxWidth: "1720px", ...contentStyle};
    }

    return (
        <div style={styleC} className={styles.part}>
            <div
                style={{
                    alignContent: "center",
                    display: "flex",
                    justifyContent: "space-evenly"
                }}
            >
                <div
                    style={contentStyleC}
                    className={styles.content + " " + contentClassName}
                >
                    {children}
                </div>
            </div>
        </div>
    );
}
