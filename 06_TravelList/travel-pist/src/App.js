// data
import * as PropTypes from "prop-types";
import {useState} from "react";

const initialItems = [{id: 1, description: "Passports", quantity: 2, packed: false}, {
    id: 2,
    description: "Socks",
    quantity: 12,
    packed: false
}, {id: 3, description: "Charger", quantity: 1, packed: true},];


// TODO 1: App Component
const App = () => {

    return (<div className={"app"}>
        <Logo/>
        <Form/>
        <PackingList/>
        <Stats/>
    </div>);
}


// TODO 2: Logo Component
const Logo = () => {
    return (<h1>🌴 Far Away 🌴</h1>);
}


// TODO 3: Form Component
const Form = () => {

    const [description, setDescription] = useState("TEST");
    const [quantity, setQuantity] = useState(1);
    const [items, setItems] = useState([]); // empty array because the first time we open it we want it empty

    function handleAddItems(item) {
        // the new state depends on the CURRENT state, therefore we need to use a callback function
        // we shouldn't t use items.push(item) because it will mutate the array and REACT is all about immutability
        // The goal is to create a new array
        setItems((items) => [...items, item]);
    }

    // TODO 3.02 Logic
    function handleSubmit(event) {
        event.preventDefault();
        console.log(event);

        // if there's nothing written by the user on the input then do not submit
        if (!description) return;
        const newItem = {description, quantity, packed: false, id: Date.now()};

        console.log(newItem);

        // on submit we want to mutate the array list of items
        handleAddItems(newItem);

        // reset the form
        setDescription("");
        setQuantity(1);

    }

    return (
        // <div className="add-form" onSubmit={  handleSubmit }>
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

// TODO 4.02: Item Component in the list
function Item({item}) {
    return (
        <li>
            {/*Conditionally styling*/}
            <span style={item.packed ? {textDecoration: "line-through"} : {}}>
                {item.quantity} {item.description}
            </span>
            <button>❌</button>
        </li>);
}

// TODO 4: Packing List Component
const PackingList = () => {
    return (
        <div className={"list"}>
            <ul>
                {/*TODO 04.01: Render List*/}
                {initialItems.map(item => <Item item={item} key={item.id}/>)}
            </ul>
        </div>
    );
}

// TODO 5: Stats
const Stats = () => {
    return (<footer className={"stats"}>
        <em>You have X items on your list, and you've already packed X (X%)</em>
    </footer>);
}
export default App;
