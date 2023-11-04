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
// Menu component displays the pizzas and those that are not available are shown as grayed
// To implement that we need to get a list of the pizzas data. So we need like an OOP object/ class pizza
const Menu = () => {
    // get array
    const pizzas = pizzaData;

    // get array's length
    const numPizzas = pizzas.length;
    // numPizzas = 0;

    // We know that from a component we can only return one JSX

    return (
        <main className="menu">
            <h2>Our Menu</h2>

            {
                // rendering optimization - remember that JSX only accepts expressions so a  conditional statement is not allowed

                // check if pizza array is empty
                // we want to render two elements seperately. React Fragment. Otherwise, if div was to be used then it would render only one component and that would mess up the css- styling
                numPizzas > 0 ? (
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
                ) : (
                    // if no then return this component
                    <p>We are still working on our menu. Please come back later!</p>
                )

            }
        </main>
    );
};

/*
// TODO: 05.01 Menu function- component
const Menu = () => {

    // get array
    const pizzas = pizzaData;

    // get array's length
    const numPizzas = pizzas.length;

    // We know that from a component we can only return one JSX

    return (
        <main className={"menu"}>
            <h2>Our menu</h2>


            {{/!* Conditional rendering: short-circuiting*!/}}

            {/!* This will render every time even if pizzaData is empty because it returns a truthy value*!/}
            {pizzas && ( <ul className={"pizzas"}>{pizza=>(<Pizza pizzaObject={pizza} key={pizza.name}/>)}</ul>)}

            {/!*!// traverse a list using map*!/}
            {/!*    <ul className={"pizzas"}>
                {
                    // pizzaData.map(pizza => (<Pizza name={pizza.name} ingredients={pizza.ingredients}/>))
                    // we usually pass the object itself
                    pizzaData.map(pizza => (<Pizza pizzaObject={pizza} key={pizza.name}/>))
                }
            </ul>
            *!/}


            {/!*   <Pizza
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
        />*!/}
        </main>);
};
*/

function Pizza(props) {


    // if(props.pizzaObject.soldOut) return null;


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
    const openingHour = 12;
    const closingHour = 22;

    // JS ternary conditional
    const isOpen = localTime >= openingHour && localTime <= closingHour; // true or false
    console.log(isOpen);


    // In this way the footer will not render. It is mostly used if we want to render a whole different component
    if (!isOpen)
        return (
            <p>
                We're happy to welcome you between {openingHour}:00 and {closingHour}:00.
            </p>
        );

    // ternary operator ver
    return (
        <footer className={"footer"}>
            {
                isOpen ? (<Open openingHour={openingHour} closingHour={closingHour}/>) : (
                    <p>
                        We're happy to welcome you between {openingHour}:00 and {closingHour}:00.
                    </p>
                )
            }
        </footer>
    );


    /*  // short-circuiting ver
      return (
          <footer className={"footer"}>
              {
                  /!*short-circuiting, js expression*!/
                  isOpen &&
                  <div className={"open"}>
                      <p>We're open until {closingHour}:00. Come visit us or order online</p>
                      <button className={"btn"}>Order</button>
                  </div>}
          </footer>
      );*/
};

// TODO: 06 Footer: We create a new function component because we want big different outputs. Also it doesnt render - optimizes this way
// Technique: destructuring
const Open = (props) => {
    return (
        <div className="open">
            <p>
                We are open from {props.openingHour}:00 until {props.closingHour}:00. Come visit us
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
