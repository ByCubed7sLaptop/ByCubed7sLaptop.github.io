export default function Article({children}) {
    const style = {
        width: "90vw",
        padding: "0",
        margin: "0 auto",
        alignContent: "center"
    };

    return <article style={style}>{children}</article>;
}
