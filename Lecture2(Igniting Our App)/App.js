import React from "react";
import ReactDOM  from "react-dom/client";

const heading=React.createElement("h1",
    {id:"heading"},
    "Here We Are Creating React From Scratch."
);
    const demo=ReactDOM.createRoot(document.getElementById("demo"));
    // create a react app in the div with id "root".
    demo.render(heading);


const parent=React.createElement("div",
    {id:"parent"},
    [React.createElement("div",
    {id:"child1"}, [
    React.createElement("h1",{},"From Basic Html File To React App"),
    React.createElement("h2",{},"Creating and linking to each other index.html, index.css, App.js")]
    ),
    React.createElement("div",
    {id:"child2"}, [
    React.createElement("h1",{},"Run this command in terminal: npm init and then npm install -D parcel"),
    React.createElement("h2",{},"Run this command in terminal: npm i react and then npm i react-dom"),
    React.createElement("h3",{},"Remove cdn links from index.html and give attribute with type as key and module as value."),
    React.createElement("h3",{},"Write this at top of App.js file: import React from react and import ReactDOM  from react-dom"),]
    )]
    
);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

