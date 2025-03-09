import {useState, useEffect} from "react";

function randomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function Card({src, style, back = "cards/back.png", ...rest}) {
    const [rotation, setRotation] = useState(randomNumberInRange(0, 180));

    useEffect(() => {
        const interval = setInterval(() => {
            setRotation(prev => {
                var dip = Math.abs(Math.sin(prev)) / 10;
                return (prev + dip + 0.0001) % (Math.PI * 2);
            });
        }, 16); // ~60*4fps

        return () => clearInterval(interval);
    }, []);

    const cardStyle = {
        backfaceVisibility: "revert-layer",
        transform: `rotate3d(2, 7, 2, ${rotation}rad)`,
        transformStyle: "preserve-3d",
        ...style
    };

    const frontStyle = {
        backgroundPosition: "center",
        backgroundImage: `url('${src}')`,
        backgroundSize: "cover",
        width: "100%",
        height: "100%",
        position: "relative",
        backfaceVisibility: "hidden"
    };

    const backStyle = {
        backgroundPosition: "center",
        backgroundImage: `url('${back}')`,
        backgroundSize: "cover",
        width: "100%",
        height: "100%",
        position: "absolute",
        top: "0",
        left: "0",

        backfaceVisibility: "hidden",
        transform: `rotateY(180deg)`
    };

    // width: "123px",
    // height: "175px",
    return (
        <div style={cardStyle} {...rest}>
            <div style={frontStyle}>
                <div style={{paddingBottom: `${(175 / 123) * 100}%`}} />
            </div>
            <div style={backStyle}>
                <div style={{paddingBottom: `${(175 / 123) * 100}%`}} />
            </div>
        </div>
    );
}
