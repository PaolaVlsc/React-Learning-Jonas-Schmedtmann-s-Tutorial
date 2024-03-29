// data
import {useState} from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import Stats from "./components/Stats";
import PackingList from "./components/PackingList";
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



export default App;
