import React, {useEffect, useState} from "react";

export default function ResponsiveGrid({
    children,
    gridTemplateAreas,
    gridTemplateAreasMobile,
    style,
    ...rest
}) {
    //const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const gridStyle = {
        display: "grid",
        gridTemplateAreas: isMobile
            ? gridTemplateAreasMobile
            : gridTemplateAreas,
        ...style
    };

    return (
        <div style={gridStyle} {...rest}>
            {children}
        </div>
    );
}
