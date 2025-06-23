import React, { useCallback, useState } from 'react'
import Button from './Button'

const CallbackParent = () => {

    let [count,setCount]=useState(0)

    let Increment=useCallback(()=>{
        console.log("state updated from Increment function");
        setCount((prev)=>{setCount(prev+1)});
    },[count])
    let Decrement=useCallback(()=>{
        console.log("state updated from Decrement function");
        setCount((prev)=>{setCount(prev-1)});
    },[count])
  return (
    <div>
        <h1>Count: {count}</h1>
        <Button handleClick={Increment}>Increment</Button>
        <Button handleClick={Decrement}>Decrement</Button>
    </div>
  )
}

export default CallbackParent