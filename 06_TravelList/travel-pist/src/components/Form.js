

// TODO 3: Form Component
import {useState} from "react";

const Form = ({onAddItems}) => {

    // what is in the description is being saved in DOM but we want it to be saved in React
    // that's why we have to use states

    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);


    // TODO 3.02 Logic
    function handleSubmit(event) {
        event.preventDefault();
        console.log(event);

        // if there's nothing written by the user on the input then do not submit
        if (!description) return;
        const newItem = {description, quantity, packed: false, id: Date.now()};

        console.log(newItem);

        // on submit we want to mutate the array list of items
        onAddItems(newItem);

        // reset the form
        setDescription("");
        setQuantity(1);

    }

    return (
        // <div className="add-form" onSubmit={  handleSubmit }>
        // remember that we dont write handleSubmit() but only handleSubmit because React will call it , we dont do it by ourselves
        <form className={"add-form"} onSubmit={(event) => handleSubmit(event)}>
            <h3>What do you need for your trip?</h3>
            <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
                {/*TODO 3.01 Layout */}
                {/*<option value={1}>1</option>*/}
                {/*<option value={2}>2</option>*/}
                {/*<option value={3}>3</option>*/}

                {/*Create an array from 1 to 20 and then traverse it with map*/}
                {Array.from({length: 20}, (_, i) => i + 1).map
                ((num) => (
                    <option
                        value={num} key={num}>
                        {num}
                    </option>
                ))
                }
            </select>
            <input
                type={"text"}
                placeholder={"Item..."}
                value={description}
                onChange={(e) => {
                    console.log(e.target.value);
                    setDescription(e.target.value);
                }}/>
            <button>Add</button>
        </form>
    );
}

export default Form;