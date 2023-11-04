// data
import * as PropTypes from "prop-types";

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
    return (<div className={"add-form"}>
        <h3>What do you need for your trip?</h3>
    </div>);
}

// TODO 4.02: Item Component in the list
function Item({item}) {
    return (
        <li>
            <span>
                {item.quantity} {item.description}
            </span>
            <button>❌</button>
        </li>);
}

Item.propTypes = {item: PropTypes.any};
// TODO 4: Packing List Component
const PackingList = () => {
    return (<div className={"list"}>
        <ul>

            {/*TODO 04.01: Render List*/}
            {initialItems.map(item => <Item item={item}/>)}
        </ul>
    </div>);
}

// TODO 5: Stats
const Stats = () => {
    return (<footer className={"stats"}>
        <em>You have X items on your list, and you've already packed X (X%)</em>
    </footer>);
}
export default App;
