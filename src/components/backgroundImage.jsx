export default function BackgroundImage({src, style, children}) {
    const styleC = {
        position: "fixed",
        left: "0",
        right: "0",
        top: "0",
        bottom: "0",
        width: "110%",
        height: "110%",
        objectFit: "cover",
        objectPosition: "center",
        zIndex: "-10",
        opacity: ".2",
        filter: "blur(1vmax)",
        ...style
    };

    return (
        <img src={src} style={styleC}>
            {children}
        </img>
    );
}
