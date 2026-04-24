export default function ImageCollectionRow({
    images,
    style,
    imgStyle,
    children,
    ...rest
}) {
    const imageStyle = {
        height: "100%",
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
