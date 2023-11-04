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

// TODO: 05.01 Menu function- component
// Menu component displays the pizzas and those that are not available are shown as grayed
// To implement that we need to get a list of the pizzas data. So we need like an OOP object/ class pizza
const Menu = () => {
    // get array
    const pizzas = pizzaData;

    // get array's length
    const numPizzas = pizzas.length;

    // We know that from a component we can only return one JSX

    return (
        <main className="menu">
            <h2>Our Menu</h2>

            {
                // rendering optimization - remember that JSX only accepts expressions so an conditional statement is not allowed

                // check if pizza array is empty
                // we want to render two elements seperately. React Fragment. Otherwise if div was to be used then it would render only one component and that would mess up the css- styling
                numPizzas > 0 ? (
                    // if yes then return this component
                    <React.Fragment key="test">
                        <p>
                            Authentic Italian cuising. 6 createive dishes to choose from. All
                            from our stone over, all organice, all delicious.
                        </p>
                        {/* display pizza in a list */}

                        {/*// traverse a list using map*/}

                        <ul className="pizzas">
                            {
                                // render each pizza by map method and calling function Pizza
                                // each time we render a list with the map menthod, each of the iteams that gets rendered needs a unique id


                                // pizzaData.map(pizza => (<Pizza name={pizza.name} ingredients={pizza.ingredients}/>))
                                // we usually pass the object itself


                                // copying pizza
                                pizzas.map((x) => (
                                    <Pizza pizzaObject={x} key={x.name}/> // pass a pizza object and a unique key
                                ))
                            }

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
                        </ul>
                    </React.Fragment>
                ) : (
                    // if no then return this component

                    <p>We are still working on our menu. Please come back later!</p>
                )
            }
        </main>
    );
};

// TODO: 07 Pizza
const Pizza = ({pizzaObject}) => {
    return (
        // check if pizza is available if not then the className should be pizza sold-out, if not then just pizza
        <li className={`pizza ${pizzaObject.soldOut ? "sold-out" : ""}`}>
            <img src={pizzaObject.photoName} alt={pizzaObject.name}/>
            <div>
                <h3>{pizzaObject.name}</h3>
                <p>{pizzaObject.ingredients}</p>
                <span>{pizzaObject.soldOut ? "SOLD OUT" : pizzaObject.price}</span>
            </div>
        </li>
    );
};

// const Pizza = ({ pizzaObject }) => {
//   const { name, ingredients, soldOut, price, photoName } = pizzaObject;
//   const pizzaClassName = soldOut ? "pizza sold-out" : "pizza";

//   return (
//     <li className={pizzaClassName}>
//       <img src={photoName} alt={name} />
//       <div>
//         <h3>{name}</h3>
//         <p>{ingredients}</p>
//         <span>{soldOut ? "SOLD OUT" : price}</span>
//       </div>
//     </li>
//   );
// };

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

    return (
        <footer className="footer">
            {
                // JS code - misssing alternative
                //isOpen && <Open closingTime={closeHour} openingTime={openHour} />
                isOpen ? (
                    <Open closingTime={closeHour} openingTime={openHour}/>
                ) : (
                    <p>
                        We're happy to welcome you between {openHour}:00 and {closeHour}:00.
                    </p>
                )
            }
        </footer>
    );
};

// TODO: 06 Footer: We create a new function component because we want big different outputs. Also it doesnt render - optimizes this way
// Technique: destructuring
const Open = ({closingTime, openingTime}) => {
    return (
        <div className="open">
            <p>
                We are open from {openingTime}:00 until {closingTime}:00. Come visit us
                or order online.
            </p>
            <button className="btn">Order</button>
        </div>
    );
};

// TODO:02 Render Page / React
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);
