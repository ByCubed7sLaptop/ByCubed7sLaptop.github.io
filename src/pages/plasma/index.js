"use client";
import {useState, useEffect, useRef} from "react";

import Image from "next/image";
import ProjectBox from "../../../components/projectbox";
import ImageCollectionRow from "../../../components/imageCollectionRow";
import Part from "../../../components/part";
import Article from "../../../components/article";
import Row from "../../../components/row";
import Subtitle from "../../../components/subtitle";
import Experience from "../../../components/experience";
import BackgroundImage from "../../../components/backgroundImage";
import Itchio from "../../../components/itchio";
import Youtube from "../../../components/youtube";

import Caption from "../../../components/blog/caption";
import Code from "../../../components/blog/code";
import TitleCard from "../../../components/blog/titleCard";
import Timeline from "../../../components/blog/timeline";

import {DesktopCapybara} from "../../../data/projects";

import styles from "./blog.module.css";

import Button from "react-bootstrap/Button";
import Overlay from "react-bootstrap/Overlay";

// -
import React from "react";
import {createRoot} from "react-dom/client";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
// -

import markdown from "../../../data/plasmaBlog";

export default function Index() {
    const events = [
        {date: "Oct 12, 2021", title: "Starting out"},
        {date: "Oct 26, 2021", title: "ECSs, Tiles & Pain"}
    ];

    const [headings, setHeadings] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            const foundHeadings = Array.from(
                document.querySelectorAll(
                    `.${styles.subtitle}, .${styles.caption}`
                )
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
        }, 0); // Let React finish rendering first
    }, []);

    const [show, setShow] = useState(false);
    const target = useRef(null);

    return (
        <>
            <BackgroundImage src="projects/plasma/imgs/Capybara%20Wallpaper.png" />
            {/*<Timeline events={events} /> */}

            <Article>
                <TitleCard
                    project={DesktopCapybara}
                    dateClassName={styles.date}
                />

                <div
                    style={{
                        textAlign: "center",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        marginTop: "-3rem"
                    }}
                >
                    <Button
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
                    </Button>

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
                                margin: "0 8rem",
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
                                        <a href={`#${chapter.id}`}>
                                            {chapter.text}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                <Part contentClassName={styles.part}>
                    <Markdown
                        remarkPlugins={[[remarkGfm, {singleTilde: false}]]}
                        components={{
                            h1(props) {
                                const {node, ...rest} = props;
                                return (
                                    <>
                                        <hr className={styles.hr} />
                                        <Subtitle
                                            className={styles.subtitle}
                                            {...rest}
                                        />
                                    </>
                                );
                            },

                            h2(props) {
                                const {node, ...rest} = props;
                                return (
                                    <Caption
                                        className={styles.caption}
                                        {...rest}
                                    />
                                );
                            },

                            p(props) {
                                const {node, children, ...rest} = props;

                                var match = "";

                                match = /ITCH@(.+)/.exec(children || "");
                                if (match)
                                    return (
                                        <Itchio
                                            embed={match[1]}
                                            className={styles.img}
                                            {...rest}
                                        />
                                    );

                                match = /YOUTUBE@(.+)/.exec(children || "");
                                if (match)
                                    return (
                                        <Youtube
                                            embed={match[1]}
                                            className={styles.img}
                                            {...rest}
                                        />
                                    );

                                return (
                                    <div
                                        className={styles.text}
                                        children={children}
                                        {...rest}
                                    />
                                );
                            },

                            img(props) {
                                const {node, ...rest} = props;

                                if (props.alt == "video")
                                    return (
                                        <video
                                            muted
                                            autoPlay="autoplay"
                                            className={styles.img}
                                            loop
                                            {...rest}
                                        />
                                    );

                                return <img className={styles.img} {...rest} />;
                            },

                            ul(props) {
                                const {node, ...rest} = props;
                                return (
                                    <ul
                                        style={{
                                            color: "#ff9999",
                                            backgroundColor: "black"
                                        }}
                                        {...rest}
                                    />
                                );
                            },

                            // custom elements
                            code(props) {
                                const {
                                    children,
                                    className,
                                    node,
                                    ...rest
                                } = props;
                                const match = /language-(\w+)/.exec(
                                    className || ""
                                );
                                return match ? (
                                    <Code
                                        {...rest}
                                        PreTag="div"
                                        children={String(children).replace(
                                            /\n$/,
                                            ""
                                        )}
                                        language={"language-" + match[1]}
                                    />
                                ) : (
                                    <code {...rest} className={className}>
                                        {children}
                                    </code>
                                );
                            }
                        }}
                    >
                        {markdown}
                    </Markdown>
                </Part>
            </Article>
        </>
    );
}
