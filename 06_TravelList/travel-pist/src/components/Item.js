


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


export default Item;