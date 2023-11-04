import "./index.css";
import {useState} from "react";

function Counter() {

    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);

    const date = new Date("November 04 2023");
    date.setDate(date.getDate() + count);


    return (
        <div>

            <div>
                <button onClick={() => setStep((count) => count - 1)}>-</button>
                <span>Step: {step}</span>
                <button onClick={() => setStep((c) => c + 1)}>+</button>
            </div>

            <div>
                <button onClick={() => setCount((c) => c - step)}>-</button>
                <span>Count: {count}</span>
                <button onClick={() => setCount((c) => c + step)}>+</button>
            </div>

            <p>
                <span>
                    {/* Conditional rendering*/}
                    {count === 0 ?
                        "Today is "
                        : count > 0 ?
                            `${count} days from today is `
                            : `${Math.abs(count)} days ago was:`}

                </span>
                <span>{date.toDateString()}</span>
            </p>
        </div>
    );
}

export default function App() {
    return (
        <div className="App">
            <Counter/>
        </div>
    );
}

