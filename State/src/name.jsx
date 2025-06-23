import { React } from 'react';
import { useState } from 'react';

const Name = () => {
let [name,setName]=useState("Rapolu")
console.log(name);

let Update=()=>{
    setName("Rekha")
}


  return (
    <div>
        <h1>{name}</h1>
        <button onClick={Update}>Submit</button>
    </div>
  )
}

export default Name