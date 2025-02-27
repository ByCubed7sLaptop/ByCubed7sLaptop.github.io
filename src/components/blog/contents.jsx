import {useState, useEffect, useRef} from "react";

export default function Contents({querySelector}) {
    //return <div />;

    const target = useRef(null);
    const [show, setShow] = useState(true);
    const [headings, setHeadings] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            const foundHeadings = Array.from(
                document.querySelectorAll(querySelector)
            ).map((heading, index) => {
                const text = heading.innerText;
                heading.id = index; // Assign an ID for linking
                heading.innerHTML = `<a href="#${index}">${
                    heading.innerHTML
                }</a>`;
                return {
                    id: heading.id,
                    text: text,
                    isBold: heading.nodeName === "H2"
                };
            });

            console.log(foundHeadings);
            setHeadings(foundHeadings);
        }, 10); // Let React finish rendering first
    }, []);

    return (
        <div
            style={{
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                marginTop: "-3rem"
            }}
        >
            <button
                style={{
                    minWidth: "200px",
                    maxWidth: "200px",
                    margin: "1rem auto 0 auto",
                    top: "-100%",
                    position: "relative",
                    zIndex: "100"
                }}
                ref={target}
                onClick={() => setShow(!show)}
            >
                Contents
            </button>

            {show ? (
                <div />
            ) : (
                <div
                    style={{
                        border: "2px solid #252e3f",
                        borderRadius: "8px",
                        padding: "1.5rem 3rem",
                        lineHeight: "1.75rem",
                        color: "var(--text)",
                        fontSize: "1rem",
                        backgroundColor: "rgba(0,0,0,.1)",
                        textAlign: "left",
                        minWidth: "500px",
                        margin: "1rem auto"
                    }}
                >
                    <ul>
                        {headings.map(chapter => (
                            <li
                                key={chapter.id}
                                style={
                                    chapter.isBold
                                        ? {color: "white"}
                                        : {
                                              fontSize: "0.7em",
                                              lineHeight: "0.99em",
                                              textIndent: "5px",
                                              listStyleType: "none"
                                          }
                                }
                            >
                                <a href={`#${chapter.id}`}>{chapter.text}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
