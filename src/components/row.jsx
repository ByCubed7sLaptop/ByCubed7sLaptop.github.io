export default function Row({children, style}) {
    const styleC = {
        ...style,
        display: "flex",
        justifyContent: "space-around"
    };

    return <div style={styleC}>{children}</div>;
}
