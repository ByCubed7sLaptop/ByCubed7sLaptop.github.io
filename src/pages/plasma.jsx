import Blog from "../components/blog/blog";
import {DesktopCapybara} from "../data/projects";

export default function Index() {
    return <Blog project={DesktopCapybara} />;
}
