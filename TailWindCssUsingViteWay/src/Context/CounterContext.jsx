import React, { Children, createContext, useState } from 'react'

  //! first we create the context so that what are the values are present in the context we can use inside the child component of context component

export let myContext=createContext();
console.log(myContext);

  //! then make use of children props

const CounterContext = ({children}) => {
  let [count,setCount]=useState(0)

    //! then use provider which is present inside myContext object and inside the value props pass all the values that can be available for the children component

  return (
    <myContext.Provider value={{count,setCount}}>
        {children}
    </myContext.Provider>
  )
}

export default CounterContext