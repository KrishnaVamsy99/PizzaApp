import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import App from "./App";
import reportWebVitals from "./reportWebVitals";

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

function App1() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header() {
  // const style = {color: 'red', fontFamily: 'cursive', fontSize: '3em', textTransform:"uppercase"}
  const style={};
  return (
    <header className="header">
    <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {

  const pizzas = pizzaData;
  //const pizzas = []
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numPizzas > 0 ? (  
      <React.Fragment >
        <p>
          Authentic Italin cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.
        </p>
        
        <ul className="pizzas">
          {pizzaData.map(pizza => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
      </ul>
      </React.Fragment>
      ):<p>We're still working on our menu. Please come back later</p>}
      
      
      {/* <Pizza 
        name='Pizza Spinaci' 
        ingredient='Tomato, Mozarella, spinach, and ricotta cheese'
        photoName='Pizzas/spinaci.jpg'
        price={10}
      />

      <Pizza 
      name='Pizza Funghi'
      ingredient='Tomato, mushrooms'
      price={12}
      photoName='Pizzas/funghi.jpg'
      /> */}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  //console.log(props)
  console.log(pizzaObj);

  //if(pizzaObj.soldOut) return null;

  return (
    <li className={`pizza ${pizzaObj.soldOut?'sold-out':''}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredient}</p>
        {pizzaObj.soldOut ? 
          (<span>SOLD OUT</span>
          ):(<span>{pizzaObj.price}$</span>)
          }
      </div>
    </li>
  );
}

function Footer(props) {
  console.log(props);
  const hour = new Date().getHours();
  const openHour = 9;
  const closeHour = 23;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  // if(hour>= openHour && hour<=closeHour){
  //   alert("We're currently open!");
  // }else{
  //   alert("Sorry we are closed");
  // }

  if(!isOpen){
    return(
      <div className="footer">     
         <p>CLOSED</p>
      </div>

    );
  }
  return (
    // React.createElement("footer", null, "we are currently open!")
    <footer className="footer">
    {/* {new Date().toLocaleTimeString()}. We are currently Open */}
    {
      isOpen ? <Order closeHour={closeHour} openHour={openHour} /> : (<p>We're Happy to Welcome you between {openHour}:00 and {closeHour}:00</p>)
    }
    </footer>
  );
}

function Order({ closeHour, openHour }){
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 to {closeHour}:00 Come visit us or order Online
      </p>
      <button className="btn">Order</button>
    </div>
  );
}



const root = ReactDOM.createRoot(document.getElementById("root1"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <App1 />
    {/* <Pizza /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
