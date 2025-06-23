import React, { useState } from 'react'
import Count from './../../../State/src/IncrementBy10DecrementBy20';

const EvenOrOdd = () => {
    let [count,setCount]=useState(1)
    if (count%2==0) {
        return<>
        <h1>{count} is Even</h1>
        <button onClick={()=>{
            setCount(count+1)
        }}>Increment from Even Block</button>
        </>
    } else {
        return<>
        <h1>{count} is Odd</h1>
        <button onClick={()=>{
            setCount(count+1)
        }}>Increment from Odd Block</button>

        </>
    }
}

export default EvenOrOdd