import { Fragment } from "react";
import { createRoot } from "react-dom/client";


let NavBar = ()=>{
    return <Fragment>
        <nav>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="">Register</a></li>
                <li><a href="">Login</a></li>
                <li><a href="">About</a></li>
            </ul>
        </nav>
    </Fragment>
}


export default NavBar