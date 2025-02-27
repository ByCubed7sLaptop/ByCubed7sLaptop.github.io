import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

export default function DropdownC({chapters}) {
    return (
        <DropdownButton
            key="chapters"
            id={`dropdown-variants-${"chapters"}`}
            title="chapters"
            autoClose={false}
        >
            {chapters.map((chapter, index) => (
                <Dropdown.Item eventKey={index} key={index} href={chapter.link}>
                    {chapter.title}
                </Dropdown.Item>
            ))}
        </DropdownButton>
    );
}
