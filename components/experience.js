export default function Experience({
    title,
    workplace,
    start,
    end,
    children,
    style
}) {
    const styleC = {...style, marginBottom: "2em", maxWidth: "50%"};

    return (
        <div style={styleC}>
            <h3>
                <strong>
                    {title}{" "}
                    <i>
                        - {workplace}{" "}
                        <small>
                            ({start}, {end})
                        </small>
                    </i>
                </strong>
            </h3>
            <h5>{children}</h5>
        </div>
    );
}
