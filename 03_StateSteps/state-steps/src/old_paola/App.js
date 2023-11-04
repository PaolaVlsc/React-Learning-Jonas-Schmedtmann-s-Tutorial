// array of texts (additional)
import {useState} from "react";

const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
];

function App() {
    // let step = 1; // Try 01
    // use of states - re-rendering

    // destructuring
    const [step, setStep] = useState(1); // Try 02


    // add another for toggle state variable
    const [isOpen, setIsOpen] = useState(true);


    function handlePrevious() {
        // does not work because React doesnt know that it is a state varible
        // if (step > 1) step++; // Try 01

        // This does not work instead use below
        // if(step>1){
        //     setStep(step-1);// Try 01
        //     setStep(step-1);
        // }

        //use callback function when we want to update state based on the current value of the state
        if (step > 1) {
            setStep(step => step - 1)
        }

    }

    function handleNext() {
        // step +1
        // if (step < 3) step--; // Try 01

        // if(step<3)
        //     setStep(step+1); // Try 01

        if (step < 3) {
            setStep(step => step + 1)
        }
    }

    return (
        <>
            {/* <button className="close" onClick={() => setIsOpen(!isOpen)}> */}
            <button onClick={() => setIsOpen(isOpen => !isOpen)} className={"close"}>&times;</button>

            {// circut
                isOpen && (<div className={"steps"}>
                    {/* numbers */}
                    <div className={"numbers"}>
                        <div className={step >= 1 ? "active" : ""}>1</div>
                        <div className={step >= 2 ? "active" : ""}>2</div>
                        <div className={step >= 3 ? "active" : ""}>3</div>
                    </div>


                    {/* text */}

                    <p className={"message"}>
                        Step {step}: {messages[step - 1]}
                    </p>


                    {/* buttons */}

                    <div className={"buttons"}>
                        <button onClick={handlePrevious} style={{backgroundColor: "#7950f2", color: "#fff"}}>Previous
                        </button>
                        <button onClick={handleNext} style={{backgroundColor: "#7950f2", color: "#fff"}}>Next</button>
                    </div>

                </div>)}
        </>
    );
}

export default App;
