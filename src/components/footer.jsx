import {Github} from "../data/socials";

export default function Footer({style, children}) {
    return (
        <div
            style={{
                backgroundColor: "var(--accent)",
                color: "#fff",
                padding: "2rem 1rem",
                marginTop: "12rem"
            }}
        >
            <div
                style={{
                    flexGrow: "1",
                    margin: "0 auto",
                    position: "relative",
                    width: "auto"
                }}
            >
                <div style={{textAlign: "center"}}>
                    <a href={Github.link}>
                        <img
                            src={Github.img}
                            alt="Logo"
                            style={{maxWidth: "5em"}}
                        />
                    </a>
                    <div>{Github.username}</div>
                </div>
            </div>
        </div>
    );
}
