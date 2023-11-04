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

    // TODO 3.02 Logic
    function handleSubmit(event) {
        event.preventDefault();
        console.log(event);

    }

    return (
        // <div className="add-form" onSubmit={  handleSubmit }>
        <form className={"add-form"} onSubmit={(event) => handleSubmit(event)}>
            <h3>What do you need for your trip?</h3>
            <select>
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
            <input type={"text"} placeholder={"Item..."} value={description}/>
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
        <div className={"list"}  >
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
