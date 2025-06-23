import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Contact from "../Components/Contact";
import About from "../Components/About";
import Register from "../Components/Register";
import Home from './../Components/Home';
import Login from './../Components/Login';
import AllUsers from "../Components/AllUsers";
import UserDetails from './../Components/UserDetails';

let routes=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                index:true,     //! to set the default component to render first
                element:<Home/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/register",
                element:<Register/>
            },
            {
                path:"/login",
                element:<Login/>
            },
            {
                path:"/allusers",
                element:<AllUsers/>
            },
            {
                path:"/allusers/:id",
                element:<UserDetails/>
            }
        ]
    }
])

export default routes