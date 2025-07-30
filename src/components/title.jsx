export default function Title({children, style}) {
    const styleC = {
        textAlign: "center",
        marginBottom: "0.5em",
        fontSize: "3rem",
        ...style
    };

    return (
        <h2 style={styleC}>
            <strong>{children}</strong>
        </h2>
    );
}
