export default function ImageCollectionRow({
    images,
    style,
    imgStyle,
    children,
    ...rest
}) {
    const containerStyle = {
        display: "flex"
    };

    const imageStyle = {
        width: `${100 / images.length}%`,
        height: "auto",
        objectFit: "cover",
        ...imgStyle
    };

    return (
        <div style={{display: "flex", ...style}} {...rest}>
            {images.map((imageSrc, index) => (
                <img
                    key={index}
                    src={imageSrc}
                    style={imageStyle}
                    loading="lazy"
                    alt={`Image ${index + 1}`}
                />
            ))}
            {children}
        </div>
    );
}
