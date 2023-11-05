// TODO 4: Packing List Component
import {useState} from "react";

import Item from "./Item";

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
export default PackingList;