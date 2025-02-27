export default function Youtube({embed, ...rest}) {
    return (
        <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${embed}`}
            frameBorder="0"
            {...rest}
        />
    );
}
