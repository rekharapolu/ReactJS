import React from "react";
import ReactDOM from "react-dom/client"
import { createRoot } from "react-dom/client";
import { createElement } from "react";
import { Fragment } from "react";
import App from "./App.jsx";


createRoot(document.querySelector("#root")).render(
        <App/>
)

// let element=React.createElement("h1",null,"Hello Peoples")
// let element=createElement("h1",{className:"demo"},"Hello People")
// createRoot(document.getElementById("root")).render(element)

// createRoot(document.getElementById("root")).render(<h1>Hello World</h1>)

// createRoot(document.getElementById("root")).render(<div><h1>Hello World</h1><h2>Hello Peoples</h2></div>)


// createRoot(document.getElementById("root")).render(
//     <nav>
//         <article className="left-nav">
//             <div className="logo">
//                 <h1>Logo</h1>
//                 <label htmlFor="">For attribute</label>
//             </div>
//         </article>
//         <article className="right-nav">
//             <ul>
//                 <li><a href="">Home</a></li>
//                 <li><a href="">About</a></li>
//                 <li><a href="">Contact Us</a></li>
//                 <li><a href="">Login</a></li>
//                 <li><a href="">Register</a></li>
//             </ul>
//         </article>
//     </nav>
// )


// function NavBar() {
//     return <nav>
//     <article className="left-nav">
//         <div className="logo">
//             <h1>Logo</h1>
//             <label htmlFor="">For attribute</label>
//         </div>
//     </article>
//     <article className="right-nav">
//         <ul>
//             <li><a href="">Home</a></li>
//             <li><a href="">About</a></li>
//             <li><a href="">Contact Us</a></li>
//             <li><a href="">Login</a></li>
//             <li><a href="">Register</a></li>
//         </ul>
//     </article>
// </nav>
// }
// createRoot(document.getElementById("root")).render(<NavBar/>)


//? JSX Expression 
// whenever we are defining the { } inside the JSX Element
//used to display the dynamic values on the UI

// let FirstName="Rekha";
// let age=22

// createRoot(document.querySelector("#root")).render(<Fragment>
//     <h1>my name is {FirstName}</h1>
//     <h2>my age is {age}</h2>
// </Fragment>)

// let arr=["HTML","CSS","JS"]
// createRoot(document.querySelector("#root")).render(<Fragment>
//     <ul>
//         <li>{arr[0]}</li>
//         <li>{arr[1]}</li>
//         <li>{arr[2]}</li>
//     </ul>
// </Fragment>)


//!rules of JSX Element
//? We cannot use the conditional statements
    // if (true) {    
    // }

    // for (let index=0; index< Array.length;index++) {
    //     const element=array[index]
    // }

    // undefined

    // null

    // true
    // false

    //! using map() we can access all the array elementss
    // let arr=["HTML","CSS","JAVASCRIPT"];
    //     createRoot(document.querySelector("#root")).render(
    //         <Fragment>
    //             <ul>{
    //                     arr.map((element,index) => {
    //                         return <li key={index}> {element}</li>
    //                     })
    //                 }
    //             </ul>
    //         </Fragment>)


    //!access all the objects
// let employee={
//     eid:100,
//     ename:"raj",
//     eage:30
// }
// //! first convert the object into array
// let emparr=Object.values(employee)
// console.log(emparr);

// createRoot(document.querySelector("#root")).render(
//     <Fragment>
//         <ul>
//             {
//                 emparr.map((element)=>{
//                     return <li>{element}</li>
//                 })
//             }
//         </ul>
//     </Fragment>
// )

//!to access array of object
// let products=[
//     {
//     brand:"samsung",
//     model:"A13s",
//     price:54000
//     },
//     {
//         brand:"Nokia",
//         model:"c200",
//         price:90000
//     }
// ]
// createRoot(document.querySelector("#root")).render(
//     <Fragment>
//         <table>
//             <tr>
//                 <td>brand</td>
//                 <td>model</td>
//                 <td>price</td>
//             </tr>
//             {
//             products.map((element)=>{
//                 let {brand,model,price}=element
//                 return (<tr>
//                     <td>{brand}</td>
//                     <td>{model}</td>
//                     <td>{price}</td>
//                 </tr>)
//             })
//             }

//         </table>
//     </Fragment>
// )



