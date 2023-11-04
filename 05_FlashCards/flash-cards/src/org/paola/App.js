/* data */

import {useState} from "react";

const questions = [
    {
        id: 3457,
        question: "What language is React based on?",
        answer: "JavaScript"
    },
    {
        id: 7336,
        question: "What are the building blocks of React apps?",
        answer: "Components"
    },
    {
        id: 8832,
        question: "What's the name of the syntax we use to describe a UI in React?",
        answer: "JSX"
    },
    {
        id: 1297,
        question: "How to pass data from parent to child components?",
        answer: "Props"
    },
    {
        id: 9103,
        question: "How to give components memory?",
        answer: "useState hook"
    },
    {
        id: 2002,
        question:
            "What do we call an input element that is completely synchronised with state?",
        answer: "Controlled element"
    }
];


function App() {
    return (
        <FlashCards/>
    );
}

const FlashCards = () => {

    // States
    const [selectedId, setSelectedId] = useState(null);

    function handleClick(id) {
        setSelectedId(id !== selectedId ? id : null);
    }

    return (
        <div className={"flashcards"}>
            {/*Render List*/}
            {questions.map(x =>
                <div
                    key={x.id}
                    className={x.id === selectedId ? "selected" : ""}
                    onClick={() => handleClick(x.id)}
                >
                    <p>{x.id === selectedId ? x.answer : x.question}</p>
                </div>)}
        </div>);
}
export default App;
