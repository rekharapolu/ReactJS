import { React } from 'react';
import { useState } from 'react';

const Count = () => {
let [count,setCount]=useState(0)
console.log(count);

let Increment=()=>{
    setCount(count+10)
}

let Decrement=()=>{
    setCount(count-20)
}

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
    </div>
  )
}

export default Count