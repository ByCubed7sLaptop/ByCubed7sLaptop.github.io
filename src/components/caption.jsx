import styles from "./caption.module.css";

export default function Caption({children, style, className}) {
    return (
        <h3 style={style} className={className}>
            <strong>{children}</strong>
        </h3>
    );
}
