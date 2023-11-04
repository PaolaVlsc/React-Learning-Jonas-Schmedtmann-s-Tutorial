// data
const initialItems = [
    {id: 1, description: "Passports", quantity: 2, packed: false},
    {id: 2, description: "Socks", quantity: 12, packed: false},
    {id: 3, description: "Charger", quantity: 1, packed: true},
];


// TODO 1: App Component
const App = () => {

    return (
        <div className={"app"}>
            <Logo/>
            <Form/>
            <PackingList/>
            <Stats/>
        </div>
    );
}


// TODO 2: Logo Component
const Logo = () => {
    return (
        <h1>🌴 Far Away 🌴</h1>
    );
}


// TODO 3: Form Component
const Form = () => {

}


// TODO 4: Packing List Component
const PackingList = () => {

}

// TODO 5: Stats
const Stats = () => {

}
export default App;
