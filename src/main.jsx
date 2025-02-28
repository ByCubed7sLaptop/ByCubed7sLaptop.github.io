import {StrictMode} from "react";
import ReactDOM from "react-dom/client";
import {createRoot} from "react-dom/client";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./pages/home";
import Plasma from "./pages/plasma";

import Banner from "./components/banner";
import Footer from "./components/footer";
import Blog from "./components/blog/blog";

import "./index.css";

import {projects} from "./data/projects";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <>
            <BrowserRouter>
                <Banner style={{backgroundColor: "var(--accent)"}}>
                    <a href="./">Home</a>
                    <a href="debug">Debug</a>
                    <a href="blog">Blog</a>
                </Banner>

                <Routes>
                    <Route exact path="/" element={<Home />} />
                    {projects.map(project => (
                        <Route
                            key={`${project.projectName}`}
                            path={`${project.projectName}`}
                            element={<Blog project={project} />}
                        />
                    ))}
                </Routes>

                <Footer />
            </BrowserRouter>
        </>
    </StrictMode>
);
