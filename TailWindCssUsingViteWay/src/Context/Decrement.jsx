import React, { useContext } from 'react'
import { myContext } from './CounterContext'

const Decrement = () => {
    let {count,setCount}=useContext(myContext)
    let handleDecrement=()=>{
        setCount(count-1)
    }
  return (
    <div>
        {/* <h1>{count}</h1> */}
        <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default Decrement