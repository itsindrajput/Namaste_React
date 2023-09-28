import React from 'react';
import ReactDOM from 'react-dom/client';
import Logo from "./public/cover.png";

const AppLayout=()=>{
    return (
    <React.Fragment>
        <Header />
        <Body />
        <Footer />
    </React.Fragment>
    );
};


const Title=()=>(
    < a href='/'>
    <img className="logo" src={Logo} alt="Taste Me Best" />
    </a>
);

const Header=()=>{
    // Earlier Header was HeaderComponent
    // return is optional here, but it's good practice to have one
    return (
        <div id="heading">
        <Title />
        <div className="nav-items">
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Support</li>
            <li>Cart</li>
        </ul>
        </div>
        </div>
    );
};

const restaurentList=[{
    name: "Burger King",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf",
    cusines: ["Burgers","American"],
    // cusines: ["Burgers","American"].join(", "),
    rating: "4.5"
},

{
    name: "Pizza Hut",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/db40cb52b0f5a2d3753356c5a88c09ce",
    cusines: ["Pizzas", "Fast Food"],
    rating: "3.8"
},

{
    name: "Biryani Blues",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/so3xjrdjiihywm8hk9ig",
    cusines: ["Biryani", "Hyderabadi"],
    rating: "4.3"
},

{
    name: "Cafe Coffee Day",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/yf5jsyj14ngofifztopb",
    cusines: ["Beverages", "Cafe"],
    rating: "3.7"
},

{
    name: "KFC",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/56c9ab92bd79745fd152a30fa2525426",
    cusines: ["Burgers", "Biryani"],
    rating: "4.1"
},

{
    name: "Bakingo",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/n4xvcdzsvfqanje59xml",
    cusines: ["Bakery", "Desserts"],
    rating: "4.4"
},

{
    name: "Chennai Express",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/d23a117cac5393897574d52100a08170",
    cusines: ["North Indian", "Chinese"],
    rating: "3.6"
},

{
    name: "Domino's Pizza",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/s9b10f1bfgjtjie3wmwx",
    cusines: ["Pizzas", "Italian"],
    rating: "4.4"
},

{
    name: "The Good Bowl",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/0b3356a88b6fc5966c452c4c9b1b5e4a",
    cusines: ["Biryani", "North Indian"],
    rating: "4.2"
},

{
    name: "The LunchBox",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ehuumajovdh0qu396khx",
    cusines: ["Biryani", "North Indian"],
    rating: "4.0"
}


];



const RestaurantCard=(props)=>{
    return (
        <div className="card">
            <img src={props.restraunt.image} />
            <h3>{props.restraunt.name}</h3>
            <h4>{props.restraunt.cusines.join(", ")}</h4>
            <h5>{props.restraunt.rating} Stars</h5>
        </div>
    );
};

const Body=()=>{
    return (
        <div className="Restaurant-List">
        <RestaurantCard restraunt={restaurentList[0]} />
        <RestaurantCard restraunt={restaurentList[1]} />
        <RestaurantCard restraunt={restaurentList[2]} />
        <RestaurantCard restraunt={restaurentList[3]} />
        <RestaurantCard restraunt={restaurentList[4]} />
        <RestaurantCard restraunt={restaurentList[5]} />
        <RestaurantCard restraunt={restaurentList[6]} />
        <RestaurantCard restraunt={restaurentList[7]} />
        <RestaurantCard restraunt={restaurentList[8]} />
        <RestaurantCard restraunt={restaurentList[9]} />
        </div>
    );
};

const Footer=()=>{
    return <h4 className="footer">Footer</h4>;
};



const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);