import React from 'react'

const InternalCssWay = () => {
    let mystyle={
        backgroundColor:"red",
        borderRadius:"10px",
    }
    let yourstyle={
        textTransform:"Capitalize",
        color:"purple",
        backgroundColor:"yellow"
    }

  return (
    <div>
        <h1 style={{...mystyle}}>Internal CSS Way</h1>
        <h2 style={{...yourstyle}}>you and me</h2>
    </div>
  )
}

export default InternalCssWay