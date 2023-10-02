import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

//One Way:
// import { Title } from "./components/Header"; //Name Import
// import Header from "./components/Header"; //Default Import

//Second Way:
// import Header, { Title } from "./components/Header";

const AppLayout=()=>{
    return (
    <React.Fragment>
        <Header />
        <Body />
        <Footer />
    </React.Fragment>
    );
};


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);