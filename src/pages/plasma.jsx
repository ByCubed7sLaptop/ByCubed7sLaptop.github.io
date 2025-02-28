import React from "react";
import {useState, useEffect, useRef} from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

import ProjectBox from "../components/projectbox";
import ImageCollectionRow from "../components/imageCollectionRow";
import Part from "../components/part";
import Article from "../components/article";
import Row from "../components/row";
import Subtitle from "../components/subtitle";
import Experience from "../components/experience";
import BackgroundImage from "../components/backgroundImage";
import Itchio from "../components/itchio";
import Youtube from "../components/youtube";

import Caption from "../components/blog/caption";
import Code from "../components/blog/code";
import TitleCard from "../components/blog/titleCard";
import Contents from "../components/blog/contents";

import styles from "./blog.module.css";

import {DesktopCapybara} from "../data/projects";
import markdown from "../data/plasmaBlog";

export default function Index() {
    return (
        <>
            <BackgroundImage src="../../projects/plasma/imgs/Capybara%20Wallpaper.png" />
            <Article>
                <TitleCard
                    project={DesktopCapybara}
                    dateClassName={styles.date}
                />

                <Contents
                    querySelector={`.${styles.subtitle}, .${styles.caption}`}
                />

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
                                const {node, src, ...rest} = props;

                                if (props.alt == "video")
                                    return (
                                        <video
                                            muted
                                            autoPlay="autoplay"
                                            className={styles.img}
                                            src={`../../${src}`}
                                            loop
                                            {...rest}
                                        />
                                    );

                                if (props.alt == "row4")
                                    return (
                                        <img
                                            className={styles.img}
                                            src={`../../${src}`}
                                            style={{
                                                width: "25%",
                                                margin: "0",
                                                float: "left"
                                            }}
                                            {...rest}
                                        />
                                    );

                                if (props.alt == "row3")
                                    return (
                                        <img
                                            className={styles.img}
                                            src={`../../${src}`}
                                            style={{
                                                width: "33%",
                                                margin: "0",
                                                float: "left"
                                            }}
                                            {...rest}
                                        />
                                    );

                                if (props.alt == "row2")
                                    return (
                                        <img
                                            className={styles.img}
                                            src={`../../${src}`}
                                            style={{
                                                width: "50%",
                                                margin: "0",
                                                float: "left"
                                            }}
                                            {...rest}
                                        />
                                    );

                                return (
                                    <img
                                        className={styles.img}
                                        src={`../../${src}`}
                                        {...rest}
                                    />
                                );
                            },

                            h5(props) {
                                const {node, ...rest} = props;

                                return (
                                    <div
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
