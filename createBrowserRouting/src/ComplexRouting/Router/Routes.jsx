import { Children } from "react";
import { createBrowserRouter } from "react-router-dom";
import MainContent from "../MainContent";
import App from "../../App";
import HTML from "../Subjects/HTML";
import CSS from "../Subjects/CSS";
import Javascript from "../Subjects/Javascript";
import ReactJS from "../Subjects/ReactJS";


let routes=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"/",
                element:<MainContent/>,
                children:[
                    {
                        index:true,
                        element:<HTML/>
                            
                    },
                    {
                        path:"/css",
                        element:<CSS/>
                    },
                    {
                        path:"/javascript",
                        element:<Javascript/>
                    },
                    {
                        path:"/reactjs",
                        element:<ReactJS/>
                    },
                ]
            }
        ]
    }
])

export default routes