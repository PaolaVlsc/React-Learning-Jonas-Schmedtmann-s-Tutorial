import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";


// Database of skills

const skills = [
    {
        skill: "HTML+CSS",
        level: "beginner",
        color: "#2662EA",
    },
    {
        skill: "JavaScript",
        level: "beginner",
        color: "#EFD81D",
    },
    {
        skill: "Web Design",
        level: "beginner",
        color: "#C3DCAF",
    },
    {
        skill: "Git and GitHub",
        level: "beginner",
        color: "#E84F33",
    },
    {
        skill: "React",
        level: "beginner",
        color: "#60DAFB",
    },
    {
        skill: "JAVA",
        level: "intermediate",
        color: "#FF3B00",
    },
];

/*
A card consists of
Avatar / cover pic
Introduction
Skills
*/
function App() {
    return (
        <div className={"card"}>
            <Avatar/>
            <Introduction/>
            <SkillList/>
        </div>
    );
}

const Avatar = () => {
    return <img className={"avatar"} src="test01.png" alt={"Paola Vlsc dk"}/>;
};

const Introduction = () => {
    return (
        <div>
            <h1 style={{textAlign:"center"}}>Paola Velasco</h1>
            <p>
                I am an engineering student at Informatics Computer Engineering at University of West Attica.
                I've just started my journey and diving into React lessons. Thank you Jonas Schmedtmann for all those
                tutorials.
            </p>
        </div>
    );
};

const Skill = ({ skillObject }) => {
    return (
        <div className="skill" style={{ backgroundColor: skillObject.color}}>
            <span>{skillObject.skill}</span>
            <span>
        {skillObject.level === "beginner" && "👶"}
                {skillObject.level === "intermediate" && "👍"}
                {skillObject.level === "advanced" && "💪"}
      </span>
        </div>
    );
};


const SkillList = () => {
    return (
        <div className="skill-list">
            {skills.map((x) => (
                <Skill skillObject={x} key={x.skill} />
            ))}
        </div>
    );
};


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);
