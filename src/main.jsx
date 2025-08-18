import {StrictMode} from "react";
import ReactDOM from "react-dom/client";
import {createRoot} from "react-dom/client";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./pages/home";
import Projects from "./pages/projects";
import It from "./pages/it";
import Cards from "./pages/cards";

import Banner from "./components/banner";
import Footer from "./components/footer";
import Blog from "./components/blog";
import Showcase from "./components/showcase";

import "./index.css";

import {projects} from "./data/projects";
import {Me} from "./data/socials";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <>
            <BrowserRouter>
                <Banner
                    style={{backgroundColor: "var(--accent)"}}
                    name={Me.name}
                >
                    <a href="./">Home</a>
                </Banner>

                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/it" element={<It />} />
                    <Route exact path="/projects" element={<Projects />} />
                    <Route exact path="/cards" element={<Cards />} />
                    {projects.map(project => (
                        <Route
                            key={project.projectName}
                            path={project.showcasePath}
                            element={<Showcase project={project} />}
                        />
                    ))}
                    {projects.map(project => (
                        <Route
                            key={project.projectName + "blog"}
                            path={project.blogPath}
                            element={<Blog project={project} />}
                        />
                    ))}
                </Routes>

                <Footer />
            </BrowserRouter>
        </>
    </StrictMode>
);
