import React from 'react';
import ReactDOM from 'react-dom/client';

/*
One way to write code in React Is using React.createElement()
*/

const heading=React.createElement("div",
    {id:"heading",key:"100"},
    ["Laying The Foundation !", React.createElement("ul",{},
    [React.createElement("li",{id:"header"},"About"),
    React.createElement("li",{id:"header"},"Support"),
    React.createElement("li",{id:"header"},"Home")])]);
    
/*
Other way to write code in React Is using JSX
*/

    const navbar=<h1>Hello!</h1>

/*
Functional Components
*/
// const HeaderComponent=()=>{
//     // return is optional here, but it's good practice to have one
//     return(<h1>
//         <h1>Laying The Foundation !</h1>
//         <ul>
//             <li>Home</li>
//             <li>About</li>
//             <li>Support</li>
//         </ul>
//     </h1>
//     );
// };

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);