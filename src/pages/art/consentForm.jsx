import Article from "../../components/article.jsx";
import BackgroundImage from "../../components/backgroundImage.jsx";
import Part from "../../components/part.jsx";
import ProjectBox from "../../components/projectBox.jsx";

import {projects} from "../../data/projects.js";

import React, {useState} from "react";

export default function Index() {
    const levels = [
        "I hate ",
        "I'm not interested in ",
        "I like ",
        "I love ",
        "PLEASE "
    ];
    const levelColors = ["#f44336", "#9e9e9e", "#ff9800", "#4caf50", "#37fcf2"];

    const questions = ["Romance", "Hugging"];

    const categorys = [
        {
            name: "intimacy",
            groups: ["general"],
            contents: [
                "romance",
                "hand holding",
                "hugging",
                "kissing",
                "spooning",
                "petnames",
                "sleeping with"
            ],
            help: [
                "an emotional attachment between people",
                "holding other peoples hands",
                "embracing other people",
                "planting kisses on various bodyparts",
                "holding my partner close, embracing them from behind while laying down",
                "calling my partner nicknames",
                "sleeping in the same bed"
            ]
        },
        {
            name: "clothing",
            groups: [""],
            contents: [
                "clothed",
                "lingerie",
                "heels",
                "stockings",
                "leather",
                "latex",
                "uniform",
                "cosplay",
                "cross-dressing",
                "formal clothing"
            ],
            help: [
                "being clothed normally",
                "undergarments or sleepwear designed to be visually or sexually alluring",
                "shoes with moderately high heels",
                "close-fitting coverings for the foot and lower leg",
                "being clothed in leather",
                "being clothed in latex",
                "a set of clothing intended to identify the members of a specific group, eg: police, emergency services, security guards",
                "costumes that imitates a (usually fictional) character",
                "dressing with the nature of the opposite sex",
                "business atire eg: suits and blazers"
            ]
        },

        {
            name: "fluids",
            groups: ["self", "partner"],
            contents: ["blood", "piss", "scat", "cum", "slime"],
            help: [
                "seeing my GROUP covered or messing with CONTENT",
                "my GROUP being pissed on",
                "my GROUP being covered or messing with faeces",
                "my GROUP being covered or messing with CONTENT",
                "my GROUP being covered or messing with CONTENT"
            ]
        },

        {
            name: "niche",
            groups: ["self", "partner"],
            contents: ["spiders"],
            help: [""]
        }
    ];

    const getHelp = (q, rIndex, g, r, i) =>
        levels[i] + q.help[rIndex].replace("GROUP", g).replace("CONTENT", r);

    const [responses, setResponses] = useState({});

    const handleSelect = (q, g, r, value) => {
        setResponses(prev => {
            if (prev[`${q} ${g} ${r}`] === value) {
                const updated = {...prev};
                delete updated[`${q} ${g} ${r}`]; // or: updated[questionIndex] = null;
                return updated;
            }

            return {
                ...prev,
                [`${q} ${g} ${r}`]: value
            };
        });
    };

    const getResponse = (q, g, r) => {
        return responses[`${q} ${g} ${r}`];
    };

    const handleSubmit = async e => {
        e.preventDefault();

        if (Object.keys(responses).length !== questions.length) {
            alert("Please answer all questions before submitting.");
            return;
        }

        alert("res.data.message");
    };

    return (
        <>
            <BackgroundImage src="pom/pom.png" />

            <Article>
                <form onSubmit={handleSubmit}>
                    <h2>Artist Consent Form</h2>

                    <div
                        style={{
                            width: "25%",
                            float: "left",
                            boxSizing: "border-box",
                            margin: "0px",
                            paddingRight: "5px"
                        }}
                    >
                        {categorys.map((q, index) => (
                            <div key={index} style={{marginBottom: "30px"}}>
                                <h2
                                    style={{
                                        padding: "6px",
                                        backgroundColor: "gray",
                                        color: "white",
                                        marginBottom: "0px",
                                        textTransform: "uppercase"
                                    }}
                                >
                                    <strong>{q.name}</strong>
                                </h2>
                                <table
                                    style={{
                                        borderCollapse: "collapse",
                                        marginBottom: "10px",
                                        width: "100%"
                                    }}
                                >
                                    <thead>
                                        <tr>
                                            {q.groups.map((g, gIndex) => {
                                                return (
                                                    <th key={gIndex}>{g}</th>
                                                );
                                            })}
                                            <th />
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {q.contents.map((r, rIndex) => {
                                            return (
                                                <tr key={rIndex}>
                                                    {q.groups.map(
                                                        (g, gIndex) => {
                                                            return (
                                                                <td
                                                                    key={gIndex}
                                                                >
                                                                    {levels.map(
                                                                        (
                                                                            label,
                                                                            i
                                                                        ) => {
                                                                            const isSelected =
                                                                                getResponse(
                                                                                    q,
                                                                                    g,
                                                                                    r
                                                                                ) ===
                                                                                i +
                                                                                    1;

                                                                            return (
                                                                                <button
                                                                                    key={
                                                                                        i
                                                                                    }
                                                                                    type="button"
                                                                                    style={{
                                                                                        padding:
                                                                                            "8px 10px",
                                                                                        backgroundColor: isSelected
                                                                                            ? levelColors[
                                                                                                  i
                                                                                              ]
                                                                                            : "#f0f0f0",
                                                                                        color: isSelected
                                                                                            ? "#fff"
                                                                                            : "#000",
                                                                                        border:
                                                                                            "1px solid #ccc",
                                                                                        borderRadius:
                                                                                            "4px",
                                                                                        cursor:
                                                                                            "pointer",
                                                                                        whiteSpace:
                                                                                            "nowrap"
                                                                                    }}
                                                                                    title={getHelp(
                                                                                        q,
                                                                                        rIndex,
                                                                                        g,
                                                                                        r,
                                                                                        i
                                                                                    )}
                                                                                    onClick={() =>
                                                                                        handleSelect(
                                                                                            q,
                                                                                            g,
                                                                                            r,
                                                                                            i +
                                                                                                1
                                                                                        )
                                                                                    }
                                                                                />
                                                                            );
                                                                        }
                                                                    )}
                                                                </td>
                                                            );
                                                        }
                                                    )}
                                                    <td>{r}</td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        ))}
                    </div>

                    <button type="submit">Submit</button>
                </form>
            </Article>
        </>
    );
}
