export default function Itchio({embed, ...rest}) {
    return (
        <iframe
            src={`https://itch.io/embed/${embed}`}
            width="700"
            height="167"
            frameBorder="0"
            {...rest}
        />
    );
}
