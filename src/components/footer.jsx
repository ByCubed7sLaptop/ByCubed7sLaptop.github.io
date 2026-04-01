import {Github} from "../data/socials";

import styles from "./footer.module.css";
import utilityStyles from "./utility.module.css";

export default function Footer({style, children}) {
    return (
        <div className={[styles.footer, utilityStyles.unselectable].join(" ")}>
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
