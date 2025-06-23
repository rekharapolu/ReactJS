import React, { useContext } from 'react'
import { myContext } from './CounterContext';

const Increment = () => {
    let {count,setCount}=useContext(myContext);
    let handleIncrement=()=>{
        setCount(count+1)
    }
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={handleIncrement}>Increment</button>
    </div>
  )
}

export default Increment