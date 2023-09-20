import React from 'react';
import ReactDOM from 'react-dom/client';


const Title=()=>(
    <h1 className="title" key="h1">Chapter - 03</h1>
);

/*
Functional Components
*/
const HeaderComponents=()=>{
    // return is optional here, but it's good practice to have one
    return(<h1>
        <h1 className="title">Laying The Foundation !</h1>
        <Title />
        <ul>
            <li className="heading"><img src="https://unsplash.com/photos/_Fqoswmdmoo"></img></li>
            <li className="heading">Home</li>
            <li className="heading">About</li>
            <li className="heading">Support</li>
        </ul>
    </h1>
    );
};

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponents />);