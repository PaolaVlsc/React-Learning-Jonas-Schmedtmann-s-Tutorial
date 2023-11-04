import {useState} from "react";

const initialItems = [
    {id: 1, description: "Passports", quantity: 2, packed: false},
    {id: 2, description: "Socks", quantity: 12, packed: false},
    {id: 3, description: "Charger", quantity: 1, packed: true},
];


function App() {

    const [items, setItems] = useState([]);


    function handleAddItems(item) {
        setItems(items => [...items, item]); // new array doesn't affect the old array
    }

    return (
        <div className="app">
            <Logo/>
            <Form onAddItems={handleAddItems}/>
            <PackingList items={items}/>
            <Stats/>
        </div>
    );
}


function Logo() {
    return (
        <h1>🌴 Far Away 🌴</h1>
    );
}


function Form({onAddItems}) {

    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);


    // event handler
    function handleSubmit(e) {
        e.preventDefault();
        console.log(e);

        // if there's nothing written by the user on the input then do not submit
        if (!description) return;
        const newItem = {description, quantity, packed: false, id: Date.now()};

        console.log(newItem);

        onAddItems(newItem);

        // reset the form
        setDescription("");
        setQuantity(1);
    }

    return (
        // <div className="add-form" onSubmit={  handleSubmit }>
        <form className="add-form" onSubmit={(e) => handleSubmit(e)}>
            <h3>What do you need for your trip? 😍</h3>
            <select value={quantity} onChange={e => setQuantity(Number(e.target.value))}>
                {/*<option value={1}>1</option>*/}
                {/*<option value={2}>2</option>*/}
                {/*<option value={3}>3</option>*/}

                {Array.from({length: 20}, (_, i) => i + 1).map((num) =>
                    <option
                        value={num} key={num}>{num}
                    </option>)
                }

            </select>
            <input
                type={"text"} placeholder={"Item..."}
                value={description}
                onChange={e => setDescription(e.target.value)}/>
            <button>Add</button>
        </form>
    );
}


// RENDER LIST ITEM
function PackingList({items}) {
    return (
        <div className={"list"}>
            <ul>
                {
                    items.map(item =>
                        <Item item={item} key={item.id}/>)
                }
            </ul>
        </div>
    );
}

function Item({item}) {
    return (
        <li>
            <span style={item.packed ? {textDecoration: "line-through"} : {}}>
                {item.quantity} {item.description}
            </span>
            <button>❌</button>
        </li>);
}

function Stats() {
    return (
        <footer className="stats">
            <em>You have X items on your list, and you've already packed X (X%)</em>
        </footer>
    );
}

export default App;
