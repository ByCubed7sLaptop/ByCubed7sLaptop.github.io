import React from "react";
import { useState } from "react";

import "./rimworld.css";

export default function App() {

  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };
      		// <style>
      		// body { background-color: #15181d; color: #fff; }
      		// .container {
      		//   display: grid;
      		//   background-color: #2a2b2f;
      		//   padding: 10px;
      		//   place-content: normal;
      		//   gap: 10px;
      		//   border: 1px solid #f1f1f1;
      		// }
      		// .container > div {
      		//   font-family: Arial, Helvetica, sans-serif;
      		//   font-size: 1em;
      		//   background-color: #242527;
      		//   padding: 10px;
      		//   border-radius: 5px;
      		// }
          // .innergrid > div {
          //   padding: 4px;
          //   text-align: center;
          // }
      		// </style>





              // {
              //   "id": "???",
              //   "name": {
              //     "first": "firstname",
              //     "nick": "nickname",
              //     "last": "lastname"
              //   },
              //   "gender": "male",
              //   "age": {
              //     "biological": {"years": 0, "days": 0},
              //     "chronological": {"years": 0, "days": 0}
              //   },
              //   "xenotype": "human",
              //   "backstory": {"childhood": "childhood", "adulthood": "adulthood"},
              //   "traits": [],
              //   "health": [],
              //   "clothing": [],
              //   "skills": {
              //     "shooting": 0,
              //     "melee": 0,
              //     "construction": 0,
              //     "mining": 0,
              //     "cooking": 0,
              //     "plants": 0,
              //     "animals": 0,
              //     "crafting": 0,
              //     "artistic": 0,
              //     "medical": 0,
              //     "social": 0,
              //     "intellectual": 0
              //   },
              //   "passions": {
              //     "shooting": 0,
              //     "melee": 0,
              //     "construction": 0,
              //     "mining": 0,
              //     "cooking": 0,
              //     "plants": 0,
              //     "animals": 0,
              //     "crafting": 0,
              //     "artistic": 0,
              //     "medical": 0,
              //     "social": 0,
              //     "intellectual": 0
              //   },
              //   "appeal": {},
              //   "equipment": {},
              //   "relations": [],
              //   "timetable": {}
              // }

  var skills = [
    "Shooting",
    "Melee",
    "Construction",
    "Mining",
    "Cooking",
    "Plants",
    "Animals",
    "Crafting",
    "Artistic",
    "Medical",
    "Social",
    "Intellectual",
  ];

  var json = { "id": "???", "name": { "first": "first name", "nick": "nickname", "last": "lastname" }, "gender": "male", "age": { "biological": {"years": 0, "days": 0}, "chronological": {"years": 0, "days": 0} }, "xenotype": "human", "backstory": {"childhood": "childhood", "adulthood": "adulthood"}, "traits": [], "health": [], "clothing": [], "skills": { "shooting": 0, "melee": 0, "construction": 0, "mining": 0, "cooking": 0, "plants": 0, "animals": 0, "crafting": 0, "artistic": 0, "medical": 0, "social": 0, "intellectual": 0 }, "passions": { "shooting": 0, "melee": 0, "construction": 0, "mining": 0, "cooking": 0, "plants": 0, "animals": 0, "crafting": 0, "artistic": 0, "medical": 0, "social": 0, "intellectual": 0 }, "appeal": {}, "equipment": {}, "relations": [], "timetable": {} };

  var code = `!me ${btoa(JSON.stringify(json))}`;

  json = JSON.stringify(json);

  return (
  <div className="container">

    <div className="score">
      <small></small>
    </div>

    <div className="character">
      <h4 className="title">Character</h4>
      <img src="https://placehold.co/160x240"
        alt="Character"
        className="character-img" />
    </div>

    <div className="name">
      <h4 className="title">Name</h4>
    </div>
    <div className="randomise">
      <h4 className="title">Randomise</h4>
    </div>

    <div className="age">
      <h4 className="title">Age</h4>
    </div>
    <div className="xeno">
      <h4 className="title">Xeno</h4>
    </div>
    <div className="backstory">
      <h4 className="title">Backstory</h4>
    </div>
    <div className="traits">
      <h4 className="title">Traits</h4>
    </div>
    <div className="health">
      <h4 className="title">Health</h4>
    </div>

    <div className="skills">
      <h4 className="title">Skills</h4>
      <div className="innergrid skills-grid">
        {skills.map((skill) => (
        <React.Fragment key={skill}>
          <div>{skill}</div>
          <div><img src="https://placehold.co/32x32"
            alt="passion"/></div>
            <div style={{textAlign: "end"}}>&lt;</div>
          <div>Amount</div>
          <div style={{textAlign: "start"}}>&gt;</div>
        </React.Fragment>
        ))}
      </div>
    </div>

    <div className="appeal">
      <h4 className="title">Appeal</h4>
    </div>
    <div className="equipment">
      <h4 className="title">Equipment</h4>
    </div>

    <div className="relations">
      <h4 className="title">Relations</h4>
      <div className="innergrid relations-grid">
        {[...Array(6)].map((_, i) => (
        <React.Fragment key={i}>
          <div>ICO</div>
          <div>Name</div>
          <div>Amount</div>
        </React.Fragment>
        ))}
      </div>
    </div>

    <div className="command readonly">
      <h4 className="title">Command</h4>
      <div style={{maxWidth: "100%", margin: "auto"}}
        onClick={handleCopy}
        title="Click to copy!">
        <code style={{backgroundColor: "#000", display: "block", wordBreak: "break-all", padding: "0.5%"}}>
          {code}
        </code>
      </div>
      <small style={{display:"block", textAlign: "center"}}>Click 👆 to copy and paste in twitch chat to create your pawn.</small>
    </div>
    <div className="command" style={{background: "unset", pointerEvents: "none", textAlign: "end"}}>
        {copied ? "✔" : "📋"}
    </div>

    <div className="data readonly">
      <h4 className="title">Data</h4>

      <div style={{maxWidth: "100%", margin: "auto"}}>
        <code style={{backgroundColor: "#000", display: "block", wordBreak: "break-all", padding: "0.5%"}}>
          {json}
        </code>
      </div>
    </div>

  </div>
  )
}
