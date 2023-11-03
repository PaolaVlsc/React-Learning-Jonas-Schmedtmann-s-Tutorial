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
    return (
        <header className="header">
            <h1>Fast React Pizza Co.</h1>
        </header>
    );
};

function Pizza() {
    return (
        <div>
            <img src={"pizzas/spinaci.jpg"} alt={"Pizza spinachi"}/>
            <h2>Pizza Spinachi</h2>
            <p>Tomato, mozarella, spinach, and ricotta cheese</p>
        </div>
    );
}

// TODO: 05.01 Menu function- component
const Menu = () => {
    return (<div><h2>Our menu</h2><Pizza/></div>);
};


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
