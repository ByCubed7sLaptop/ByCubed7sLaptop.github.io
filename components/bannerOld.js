// TODO: Change name, insert styles
export default function Banner({style}) {
    const styleC = {
        ...style,
        fontFamily: '"Lato", sans-serif',
        color: "var(--title-color)"
    };

    const barStyle = {
        width: "90%",
        margin: "0 auto",
        height: "80px"
    };

    const brandStyle = {
        marginTop: "22px",
        fontSize: "42px",
        fontStyle: "normal",
        fontWeight: "700",
        letterSpacing: "-0.035em",
        textTransform: "uppercase",
        display: "block",
        float: "left",
        lineHeight: "0.8"
    };

    const navigationStyle = {
        marginTop: "22px",
        fontSize: "42px",
        float: "right",
        display: "block",
        lineHeight: "0.8",
        alignContent: "end",
        fontSize: "15px"
    };

    return (
        <header role="banner" style={styleC}>
            <div style={barStyle}>
                <a href="./" style={brandStyle}>
                    ETHAN THOMAS
                </a>

                <div style={navigationStyle}>
                    <a href="./">Home</a> <span />
                    <a href="./projects/">Projects</a>
                </div>
            </div>
        </header>
    );
}
