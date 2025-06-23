import React, { useState } from 'react'

const Event = () => {
    let[content,setContent]=useState("DOM Events")
  return (
    <div>
        <h1>{content}</h1>
        <button onClick={()=>{setContent("React JS Events")}}>Click Me</button>
        <button onDoubleClick={()=>{setContent("React uses Synthetic Events")}}>Double Click Me</button>
    </div>
  )
}

export default Event