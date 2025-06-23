import React, { useState } from "react";
import Event from './Events/Events';
import EventHandler from "./EventHandler/EventHandler";
import EvenOrOdd from "./Conditional/EvenOrOdd";
import Switch from "./Conditional/Switch";
import Ternery from "./Conditional/Ternery";
import Users from "./Conditional/Users";
import "./Conditional/index.css"
import CheckMarried from "./Conditional/CheckMarried";
import Studentdata from "./Conditional/Studentdata";
import Products from "./Conditional/Products";
import Carts from "./Conditional/Cart";

let App=()=>{
    // let [color,setColor]=useState("aqua");
    return(
        // <section style={{background:`${color}`}}>
        // <Event/>
        // <button onClick={()=>{setColor("hotpink")}}>Change Background</button>
        // </section>
        // <EventHandler/>
        // <EvenOrOdd/>
        // <Switch/>
        // <Ternery/>
        // <Users/>
        // <CheckMarried/>
        // <Studentdata/>
        // <Products/>
        <Carts/>

    )
}
export default App