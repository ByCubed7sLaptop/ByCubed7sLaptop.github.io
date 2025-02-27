import styles from "./subtitle.module.css";

export default function Subtitle({children, style, className}) {
    return (
        <h2 style={style} className={className}>
            <strong>{children}</strong>
        </h2>
    );
}
