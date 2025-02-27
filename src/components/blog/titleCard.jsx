import Title from "./title";
import Part from "../part";

export default function TitleCard({children, style, project, dateClassName}) {
    return (
        <Part
            contentStyle={{
                margin: "auto",
                maxWidth: "900px",
                textAlign: "center"
            }}
        >
            {/* date */}
            <div style={{fontSize: "14px"}} className={dateClassName}>
                {project.getStartTimeAbbreviation()}
            </div>

            {/* title */}
            <Title>{project.displayName}</Title>

            {/* description */}
            <div
                style={{
                    border: "2px solid #252e3f",
                    borderRadius: "8px",

                    lineHeight: "1.75rem",
                    color: "var(--text)",
                    fontSize: "1rem",
                    margin: "1rem 8rem",
                    backgroundColor: "rgba(0,0,0,.1)",
                    padding: "16px"
                }}
            >
                {project.description}
            </div>
        </Part>
    );
}
