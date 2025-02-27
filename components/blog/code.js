import Highlight from "react-highlight";

export default function Code({
    children,
    style,
    caption,
    language = "language-cpp"
}) {
    const styleC = {
        borderRadius: "30px",
        overflow: "hidden",
        ...style
    };

    return (
        <div style={styleC}>
            <Highlight className={language}>{children}</Highlight>
        </div>
    );
}
