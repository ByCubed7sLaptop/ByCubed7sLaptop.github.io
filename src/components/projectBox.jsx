import {useState} from "react";

export default function ProjectBox({fromProject, style, insideStyle}) {
    const [isHovered, setIsHovered] = useState(false);

    if (fromProject === undefined) return <></>;

    var displayName = fromProject.displayName;
    var name = fromProject.projectName;
    var description = fromProject.description;
    var tags = fromProject.tags;
    var path = fromProject.imgPath;

    const styleC = {
        display: "flex",
        alignItems: "stretch",
        position: "relative",
        minHeight: "1px",
        boxSizing: "border-box",
        width: "32%",
        ...style
    };

    const insideStyleC = {
        flexGrow: "1",
        display: "flex",
        flexDirection: "column",
        zIndex: "1",
        minHeight: "250px",
        ...insideStyle
    };

    const flippedStyle = {
        zIndex: "0"
    };

    const insideContainerStyle = {
        height: "100%",
        width: "100%",
        backfaceVisibility: "hidden",
        position: "absolute",
        top: "0",
        left: "0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        transition: "transform .5s ease-in-out",
        transformStyle: "preserve-3d"
    };

    const backgroundImageStyle = {
        ...insideContainerStyle,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url('${path}')`,
        transform: isHovered ? "rotateY(180deg)" : "rotateY(0deg)"
    };

    const textStyle = {
        ...insideContainerStyle,
        transform: !isHovered ? "rotateY(180deg)" : "rotateY(0deg)"
    };

    return (
        <div style={styleC}>
            <div
                style={insideStyleC}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <a href={fromProject.getFullShowcasePath()}>
                    <div style={flippedStyle}>
                        <div style={backgroundImageStyle} />
                        <div style={textStyle}>
                            <div style={{textAlign: "center", color: "white"}}>
                                <h2>{displayName}</h2>
                                <p>{description}</p>
                                <p style={{fontSize: "1.5em"}}>
                                    <strong>{tags}</strong>
                                </p>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
}
