import React, { useReducer, useState } from 'react'

let reducer=(state,action)=>{
    switch(action.type){
        case "Add" :
            return [...state,action.payload];
        case "Remove" :
            return state.filter((_, index) => index !== action.payload);
    }
}
const Todo = () => {
    let [state,dispatch]=useReducer(reducer,[])
    console.log(state);
    let [task,setTask]=useState("");
    console.log(task);
  return (
    <div>
        <section>
            <label htmlFor="">Add the Task</label>
            <input type="text" value={task} onChange={(e)=>{
                setTask(e.target.value)
            }} name='' id='' />
            <button onClick={()=>{
                dispatch({type:"Add", payload:task})
                setTask("")
            }}  className='flex'>Add</button>
            {state.map((ele)=>{
                return <li>{ele}</li>
            })}
            <button onClick={()=>{
                dispatch({type:"Remove",payload:index})
                setTask("")
            }} className='flex'>Remove</button>
            {state.map((ele, index) => {
                    return <li>{ele}</li>
            })}
        </section>
    </div>
  )
}

export default Todo