export default function Row({children, style}) {
    const styleC = {
        display: "flex",
        justifyContent: "space-around",
        ...style
    };

    return <div style={styleC}>{children}</div>;
}
