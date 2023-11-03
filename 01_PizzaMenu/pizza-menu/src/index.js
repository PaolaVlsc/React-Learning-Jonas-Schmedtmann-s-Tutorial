import React from "react";
import ReactDOM from "react-dom/client";

// import style
import "./index.css";

// TODO: 00 Database of pizzas
const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "pizzas/focaccia.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "pizzas/margherita.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "pizzas/spinaci.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "pizzas/funghi.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "pizzas/salamino.jpg",
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "pizzas/prosciutto.jpg",
        soldOut: false,
    },
];

// In JSX we cannot use class but only className

// TODO: 01 Main App
const App = () => {
    return (
        <div className="container">
            {/* TODO: 03 Header */}
            <Header/>
            {/* TODO: 05 Menu */}
            <Menu/>
            {/* TODO: 04 Footer */}
            <Footer/>
        </div>
    );
};

// TODO: 03.01 Header function
const Header = () => {

    // Instead 02:
    // const style = {color: "red", fontSize: "48", textTransform: "uppercase"};

    // in HTML when we want to add inline styling
    // <h1 style="font-size: 10px"></h1>
    return (
        <header className="header">
            {/* Instead 01:
             <h1 style={{color: "red", fontSize: "48", textTransform: "uppercase"}}>Fast React Pizza Co.</h1>
             Instead 02:
             <h1 style={style}>Fast React Pizza Co.</h1>
            */}

            <h1>Fast React Pizza Co.</h1>
        </header>
    );
};


// TODO: 05.01 Menu function- component
const Menu = () => {
    return (
        <main className={"menu"}>
            <h2>Our menu</h2>

            {/*// traverse a list using map*/}
            <ul className={"pizzas"}>
                {
                    // pizzaData.map(pizza => (<Pizza name={pizza.name} ingredients={pizza.ingredients}/>))
                    // we usually pass the object itself
                    pizzaData.map(pizza => (<Pizza pizzaObject={pizza} key={pizza.name}/>))
                }
            </ul>

            {/*   <Pizza
            name={"Pizza Spinaci"}
            ingredients={"Tomato, mozzarella, spinach, and ricotta cheese"}
            photoName={"pizzas/spinaci.jpg"}
            price={10}
        />
        <Pizza
            name={"Pizza Funghi"}
            ingredients={"Tomato, mozarella, mushrooms, and onion"}
            photoName={"pizzas/funghi.jpg"}
            price={12}
        />*/}
        </main>);
};

function Pizza(props) {
    return (
        <li className={"pizza"}>
            <img src={props.pizzaObject.photoName} alt={props.pizzaObject.name}/>
            <div><h3>{props.pizzaObject.name}</h3>
                <p>{props.pizzaObject.ingredients}</p>
                <span>{props.pizzaObject.price}</span>
            </div>
        </li>
    );
}


// TODO: 04.01 Footer function
const Footer = () => {

    // get local real time
    const localTime = new Date().getHours();
    // console.log(localTime);

    // set open and closing hours
    const openHour = 12;
    const closeHour = 22;

    // JS ternary conditional
    const isOpen = localTime >= openHour && localTime <= closeHour; // true or false
    console.log(isOpen);

    return (null);
};


// TODO:02 Render Page / React
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);
