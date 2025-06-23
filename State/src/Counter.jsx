import { React } from 'react';
import { useState } from 'react';

const Counter = () => {
let [count,setCount]=useState(0)
console.log(count);

let Increment=()=>{
    setCount(count+1)
}

let Decrement=()=>{
    setCount(count-1)
}

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
    </div>
  )
}

export default Counter