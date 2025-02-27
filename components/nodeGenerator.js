export default function NodeGenerator({children}) {
    const style = {
        width: "100%",
        padding: "0",
        margin: "0"
    };

    return (
        <canvas style={style} className="background">
            {children}
        </canvas>
    );
}
