const heading=React.createElement("h1",
    {id:"heading"},
    "Hello World! Here We Have Learnt The Core Of The React."
);
    const demo=ReactDOM.createRoot(document.getElementById("demo"));
    // create a react app in the div with id "root".
    demo.render(heading);


const parent=React.createElement("div",
    {id:"parent"},
    [React.createElement("div",
    {id:"child1"}, [
    React.createElement("h1",{},"I'm H1 Tag!"),
    React.createElement("h2",{},"I'm H2 Tag!")]
    ),
    React.createElement("div",
    {id:"child2"}, [
    React.createElement("h1",{},"I'm H1 Tag!"),
    React.createElement("h2",{},"I'm H2 Tag!")]
    )]
    
);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

