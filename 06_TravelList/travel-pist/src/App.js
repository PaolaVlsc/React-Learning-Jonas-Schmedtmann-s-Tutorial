// data
import {useState} from "react";

/*
const initialItems = [{id: 1, description: "Passports", quantity: 2, packed: false}, {
    id: 2,
    description: "Socks",
    quantity: 12,
    packed: false
}, {id: 3, description: "Charger", quantity: 1, packed: true},];
*/


// TODO 1: App Component
const App = () => {

    const [items, setItems] = useState([]); // empty array because the first time we open it we want it empty
    function handleAddItems(item) {
        // the new state depends on the CURRENT state, therefore we need to use a callback function
        // we shouldn't t use items.push(item) because it will mutate the array and REACT is all about immutability
        // The goal is to create a new array
        setItems((items) => [...items, item]);
    }

    function handleDeleteItem(id) {
        console.log(id);
        setItems(items => items.filter(item => item.id !== id));
    }

    function handleToggleItem(id) {
        setItems(items => items.map(item => item.id === id ? {...item, packed: !item.packed} : item));
    }

    function handleClearList() {
        console.log("heiuheu", items.length)
        if (items.length !== 0) {
            const confirmed = window.confirm("Are you sure you want to delete all items?");
            if (confirmed)
                setItems([]);
        }
    }

    // TODO on delete event - handler

    return (<div className={"app"}>
        <Logo/>
        <Form onAddItems={handleAddItems}/>
        <PackingList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem}
                     onClearList={handleClearList}/>
        <Stats items={items}/>
    </div>);
}


// TODO 2: Logo Component
const Logo = () => {
    return (<h1>🌴 Far Away 🌴</h1>);
}


// TODO 3: Form Component
const Form = ({onAddItems}) => {

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
function Item({item, onDeleteItem, onToggleItem}) {
    return (
        <li>
            <input type={"checkbox"} value={item.packed} onChange={() => onToggleItem(item.id)}
            />

            {/*Conditionally styling*/}
            <span style={item.packed ? {textDecoration: "line-through"} : {}}>
                {item.quantity} {item.description}
            </span>
            <button onClick={() => onDeleteItem(item.id)}>❌</button>
        </li>);
}

// TODO 4: Packing List Component
const PackingList = ({items, onDeleteItem, onToggleItem, onClearList}) => {

    // state
    const [sortBy, setSortBy] = useState("input");

    // derive state
    let sortedItems;

    // 1st option
    if (sortBy === "input")
        sortedItems = items;

    // 2nd option
    if (sortBy === "description")
        sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description)); // sort alphabetically using localeCompare

    // 3rd option
    if (sortBy === "packed")
        sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));
    return (
        <div className={"list"}>
            <ul>
                {/*TODO 04.01: Render List*/}
                {sortedItems.map(item => <Item item={item} key={item.id} onDeleteItem={onDeleteItem}
                                               onToggleItem={onToggleItem}/>)}
            </ul>

            <div className={"actions"}>
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value={"input"}> Sort by input order</option>
                    <option value={"description"}> Sort by description</option>
                    <option value={"packed"}>Sort by packed status</option>
                </select>
                <button onClick={onClearList}> Clear List</button>
            </div>
        </div>
    );
}

// TODO 5: Stats
const Stats = ({items}) => {
    if (!items.length)
        return (
            <p className="stats">
                <em>Start adding some items to your packing list 🚀</em>
            </p>
        );

    const numItems = items.length;
    const numPacked = items.filter((item) => item.packed).length;
    const percentage = Math.round((numPacked / numItems) * 100);

    return (
        <footer className="stats">
            <em>
                {percentage === 100
                    ? "You got everything! Ready to go ✈️"
                    : ` 💼 You have ${numItems} items on your list, and you already packed ${numPacked} (${percentage}%)`}
            </em>
        </footer>
    );
}
export default App;
