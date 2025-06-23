import React from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import { Fragment } from "react";
import App from "./App";
import '../src/Course/index.css';

createRoot (document.querySelector("#root")).render(
    <Fragment>
        <App/>
    </Fragment>
)








// //22-01-2025
// // !  Task-1

// createRoot(document.getElementById("root")).render(
//     <div>
//         <h1>FOOD</h1>
//         <p>NON-VEG</p>
//             <ul>
                
//                 <li>Chicken</li>
//                 <li>Fish</li>
//                 <li>Crab</li>
//                 <li>Mutton</li>
//                 <li>Egg</li>
//             </ul>
//         <p>VEG</p>
//             <ul>
//                 <li>Paneer</li>
//                 <li>Potato</li>
//                 <li>Bringle</li>
//                 <li>LadyFinger</li>
//                 <li>BitterGaurd</li>
//             </ul>
//     </div>
// )

// // !   Task-2

// createRoot(document.getElementById("root")).render(
//     <header>
//         <h1>MOVIES</h1>
//             <p>A movie, also known as a film or motion picture, is a visual art form that tells a story using moving images. Movies are usually shown on a screen with sound, and can also include other sensory stimulations.</p>
//             <h2>Types of movies</h2>
//                 <ul>
//                     <li>Action</li>
//                     <li>Comedy</li>
//                     <li>Romance</li>
//                     <li>Thriller</li>
//                     <li>Horror</li>
//                 </ul>
//     </header>
// )

// // !   Task-3

// createRoot(document.getElementById("root")).render(
//     <div>
//         <h1>FAMILY</h1>
//             <p>Family: A family is a group of two or more persons related by birth, marriage, or adoption who live together; all such related persons are considered as members of one family.</p>
//         <h2>Common Family Types</h2>
//             <ol>
//                 <li>Nuclear families</li>
//                 <li>Single-parent families</li>
//                 <li>Extended families</li>
//                 <li>Childless families</li>
//                 <li>Stepfamilies</li>
//                 <li>Grandparent families</li>
//             </ol>
//         <img  src="https://cdn.slidesharecdn.com/ss_thumbnails/classn1familyyyyyy-141110172254-conversion-gate02-thumbnail.jpg?width=640&height=640&fit=bounds" alt="" />
//     </div>
// )

// // !    Task-4

// createRoot(document.getElementById("root")).render(
//     <nav>
//         <h1>THE BOY WITH ONE NAME</h1>
//         <h2>Author:</h2>
//             <p>J.R. Wallis <img src="http://t3.gstatic.com/images?q=tbn:ANd9GcRT_kEkRTt8VQWC6HvtrU4wxbZ84MAtKApEG9WFkeRWzLmaPYJG8qFeNtyMuPwTphmiYsZk07p58OaLLjjQe_cLLJeYAHa_aQ" alt="" /></p>
//         <h2>Description:</h2>
//             <p>Twelve-year-old Jones is an orphan, training as an apprentice hunter alongside his mentor, Maitland, tackling ogres, trolls and all manner of creatures that live in the Badlands – a hidden part of our own world, and which most people think exist only in fairytales and nightmares.</p>
//         <img src="https://images.squarespace-cdn.com/content/v1/587f561929687f1cc0b7f190/1506347551596-AF8MI92GAYUKMP2903X2/BoyWithOneNameCards+3.jpg"alt="" />
//     </nav>
// )

// // !    Task-5
// createRoot(document.getElementById("root")).render(
//     <div>
//         <h1>Animals</h1>
//             <ul>
//                 <li><img src="https://cdn.pixabay.com/photo/2018/08/12/16/59/parrot-3601194_640.jpg" alt="" /></li>
//                 <li><img src="https://cdn.pixabay.com/photo/2023/11/29/21/05/animal-8420313_640.jpg" alt="" /></li>
//                 <li><img src="https://cdn.pixabay.com/photo/2023/05/18/18/54/meerkat-8003062_640.jpg" alt="" /></li>
//                 <li><img src="https://cdn.pixabay.com/photo/2023/09/24/14/05/dog-8272860_640.jpg" alt="" /></li>
//             </ul>
//     </div>
// )


//23-01-2025
// --------Task-1----------
// let books=[
//     {
//         bname:"the lion",
//         bauthor:"anusha",
//         bcost:300
// },
//     {
//         bname:"hide and seek",
//         bauthor:"sireesha",
//         bcost:500
// }
// ]

// createRoot(document.querySelector("#root")).render(
//     <Fragment>
//         <table>
//             <tr>
//                 <td>bname</td>
//                 <td>bauthor</td>
//                 <td>bcost</td>
//             </tr>
//             {
//                 books.map( (element) => {
//                     let {bname,bauthor,bcost}=element
//                     return (<tr>
//                             <td>{bname}</td>
//                             <td>{bauthor}</td>
//                             <td>{bcost}</td>
//                         </tr>
//                     )
//                 })
//             }
//         </table>
//     </Fragment>
// )

// ---------Task-2

// let fruits=[
//     {
//     fname:"Apple",
//     fquantity:"1kg",
//     fcost:200
// },
//     {
//         fname:"Grapes",
//         fquantity:"500gm",
//         fcost:60
// },
//     {
//         fname:"Banana",
//         fquantity:"1kg",
//         fcost:50
//     }
// ]

// createRoot(document.getElementById("root")).render(
//     <Fragment>
//         <table>
//             <tr>
//                 <th>fname</th>
//                 <th>fquantity</th>
//                 <th>fcost</th>
//             </tr>
//             {
//                 fruits.map( (element) => {
//                     let{fname,fquantity,fcost}=element
//                     return(
//                         <tr>
//                             <td>{fname}</td>
//                             <td>{fquantity}</td>
//                             <td>{fcost}</td>
//                         </tr>
//                     )
//                 })
//             }
//         </table>
//     </Fragment>
// )

// --------Task-3

// let vegetables=[
//     {
//         vname:"carrot",
//         vquantity:"500gm",
//         vcost:60
// },
//     {
//         vname:"betroot",
//         vquantity:"300gm",
//         vcost:50
//     },
//     {
//         vname:"tomato",
//         vquantity:"1kg",
//         vcost:40
//     },
//     {
//         vname:"bodyguard",
//         vquantity:"200gm",
//         vcost:70
//     }
// ]
// createRoot(document.getElementById("root")).render(
//     <Fragment>
//         <table>
//             <tr>
//                 <td>vname</td>
//                 <td>vquantity</td>
//                 <td>vcost</td>
//             </tr>
//             {
//                 vegetables.map( (element) => {
//                     let{vname,vquantity,vcost}=element
//                     return(
//                         <tr>
//                             <td>{vname}</td>
//                             <td>{vquantity}</td>
//                             <td>{vcost}</td>
//                         </tr>
//                     )
//                 })
//             }
//         </table>
//     </Fragment>
// )

// -------- task-4

// let cosmetics=[
//     {
//         cname:"Foundation",
//         cbrand:"lakme",
//         ccost:300
// },
//     {
//         cname:"kajal",
//         cbrand:"nybae",
//         ccost:120
//     },
//     {
//         cname:"compact",
//         cbrand:"lakme",
//         ccost:500
//     }
// ]
// createRoot(document.getElementById("root")).render(
//     <Fragment>
//         <h1>COSMETICS</h1>
//         <table border={2}>
//             <tr>
//                 <td>cname</td>
//                 <td>cbrand</td>
//                 <td>ccost</td>
//             </tr>
//             {
//                 cosmetics.map( (element) => {
//                     let{cname,cbrand,ccost}=element
//                     return (
//                         <tr>
//                             <td>{cname}</td>
//                             <td>{cbrand}</td>
//                             <td>{ccost}</td>
//                         </tr>
//                     )
//                 })
//             }
//         </table>
//     </Fragment>
// )

// ----------Task-5
// let bikes=[
//     {
//         bname:"jupiter",
//         bcompany:"T.V.S",
//         bcost:80000
// },
//     {
//         bname:"Acssses 125",
//         bcompany:"suzuki",
//         bcost:85000
// },
//     {
//         bname:"Activa",
//         bcompany:"Honda",
//         bcost:90000
//     }
// ]
// createRoot(document.querySelector("#root")).render(
//     <Fragment>
//         <table>
//             <tr>
//                 <td>bname</td>
//                 <td>bcompany</td>
//                 <td>bcost</td>
//             </tr>
//             {
//                 bikes.map((element)=>{
//                     let{bname,bcompany,bcost}=element
//                     return(
//                         <tr>
//                             <td>{bname}</td>
//                             <td>{bcompany}</td>
//                             <td>{bcost}</td>
//                         </tr>
//                     )
//                 })
//             }
//         </table>
//     </Fragment>
// )

// ---------Task-6

// let electronics=[
//     {
//         ename:"Phone",
//         ebrand:"iphone",
//         ecost:100000
// },
//     {
//         ename:"Laptop",
//         ebrand:"Lenovo",
//         ecost:70000
//     },
//     {
//         ename:"earbuds",
//         ebrand:"realme",
//         ecost:5000
//     }
// ]
// createRoot(document.getElementById("root")).render(
//     <Fragment>
//         <table border={2}>
//             <tr>
//                 <th>ename</th>
//                 <th>ebrand</th>
//                 <th>ecost</th>
//             </tr>
//             {
//                 electronics.map( (element) => {
//                     let{ename,ebrand,ecost}=element
//                     return  (
//                     <tr>
//                         <td>{ename}</td>
//                         <td>{ebrand}</td>
//                         <td>{ecost}</td>
//                     </tr>
//                     )
//                 })
//             }
//         </table>
//     </Fragment>
// )

// ----------Task-7

// let groceries=[
//     {
//         item:"soap",
//         itemname:"santoor",
//         itemcost:60,
//     },
//     {
//         item:"biscuite",
//         itemname:"Hide & Seek",
//         itemcost:30
//     },
//     {
//         item:"detergent",
//         itemname:"surf-XL",
//         itemcost:160
//     },
//     {
//         item:"chocolate",
//         itemname:"diarymilk",
//         itemcost:150
//     }
// ]
// createRoot(document.getElementById("root")).render(
//     <Fragment>
//         <table border={2}>
//             <tr>
//                 <th>item</th>
//                 <th>itemname</th>
//                 <th>itemcost</th>
//             </tr>
//             {
//                 groceries.map((element)=>{
//                     let{item,itemname,itemcost}=element
//                     return(
//                         <tr>
//                             <td>{item}</td>
//                             <td>{itemname}</td>
//                             <td>{itemcost}</td>
//                         </tr>
//                     )
//                 })
//             }
//         </table>
//     </Fragment>
// )

// // ---------Task-8

// let shoes=[
//     {
//         sbrand:"nike",
//         scost:7000,
//         ssize:8,
//         scolor:"white"
//     },
//     {
//         sbrand:"adidas",
//         scost:8000,
//         ssize:6,
//         scolor:"black"
//     },
//     {
//         sbrand:"puma",
//         scost:10000,
//         ssize:9,
//         scolor:"gray"
//     }
// ]
// createRoot(document.getElementById("root")).render(
//     <Fragment>
//         <table border={2}>
//             <tr>
//                 <th>sbrand</th>
//                 <th>scost</th>
//                 <th>ssize</th>
//                 <th>scolor</th>
//             </tr>
//             {
//                 shoes.map((element)=>{
//                     let{sbrand,scost,ssize,scolor}=element
//                     return(
//                         <tr>
//                             <td>{sbrand}</td>
//                             <td>{scost}</td>
//                             <td>{ssize}</td>
//                             <td>{scolor}</td>
//                         </tr>
//                     )
//                 })
//             }
//         </table>
//     </Fragment>
// )

// --------Task-9

// let movies=[
//     {
//         mname:"pushpa",
//         hero:"AlluArjun",
//         heroine:"Rashmika",
//         rating:4.8
// },
//     {
//         mname:"Bahubali",
//         hero:"Prabas",
//         heroine:"Anushka",
//         rating:4.5
//     },
//     {
//         mname:"K.G.F",
//         hero:"Yash",
//         heroine:"tamanna",
//         rating:5
//     },
//     {
//         mname:"Kushi",
//         hero:"Vijaydevarakonda",
//         heroine:"samantha",
//         rating:4
//     }
// ]
// createRoot(document.getElementById("root")).render(
//     <Fragment>
//         <table border={2}>
//             <tr>
//                 <th>mname</th>
//                 <th>hero</th>
//                 <th>heroine</th>
//                 <th>rating</th>
//             </tr>
//             {
//                 movies.map((element)=>{
//                     let{mname,hero,heroine,rating}=element
//                     return(
//                         <tr>
//                             <td>{mname}</td>
//                             <td>{hero}</td>
//                             <td>{heroine}</td>
//                             <td>{rating}</td>
//                         </tr>
//                     )
//                 })
//             }
//         </table>
//     </Fragment>
// )

// -------------Task-10

// let student=[
//     {
//         sname:"anusha",
//         sid:42,
//         scourse:"JAVA",
//         sphno:8897375942
// },
//     {
//         sname:"Gopi",
//         sid:15,
//         scourse:"python",
//         sphno:9676254641
//     },
//     {
//         sname:"sindhu",
//         sid:58,
//         scourse:".NET",
//         sphno:9597624855
//     },
//     {
//         sname:"pavithra",
//         sid:53,
//         scourse:"AI",
//         sphno:9764385249
//     }
// ]
// createRoot(document.getElementById("root")).render(
//     <Fragment>
//         <table border={2}>
//             <tr>
//                 <th>sname</th>
//                 <th>sid</th>
//                 <th>scourse</th>
//                 <th>sphno</th>
//             </tr>
//             {
//                 student.map((element)=>{
//                     let{sname,sid,scourse,sphno}=element
//                     return(
//                         <tr>
//                             <td>{sname}</td>
//                             <td>{sid}</td>
//                             <td>{scourse}</td>
//                             <td>{sphno}</td>
//                         </tr>
//                     )
//                 })
//             }
//         </table>
//     </Fragment>
// )

//Task 11
// let student=[
//         {
//             sname:"anusha",
//             sid:42,
//             scourse:{"JAVA",'SQl'},
//             sphno:8897375942
//     },
//         {
//             sname:"Gopi",
//             sid:15,
//             scourse:"python",
//             sphno:9676254641
//         },
//         {
//             sname:"sindhu",
//             sid:58,
//             scourse:".NET",
//             sphno:9597624855
//         },
//         {
//             sname:"pavithra",
//             sid:53,
//             scourse:"AI",
//             sphno:9764385249
//         }
//     ]
//     createRoot(document.getElementById("root")).render(
//         <Fragment>
//             <table border={2}>
//                 <tr>
//                     <th>sname</th>
//                     <th>sid</th>
//                     <th>scourse</th>
//                     <th>sphno</th>
//                 </tr>
//                 {
//                     student.map((element)=>{
//                         let{sname,sid,scourse,sphno}=element
//                         return(
//                             <tr>
//                                 <td>{sname}</td>
//                                 <td>{sid}</td>
//                                 <td>{scourse}</td>
//                                 <td>{sphno}</td>
//                             </tr>
//                         )
//                     })
//                 }
//             </table>
//         </Fragment>
//     )