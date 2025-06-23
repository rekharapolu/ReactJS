import React from 'react'
import Child from './Child'

const Parent = () => {
  function sayHello(){
    console.log("Hello ReactJS Developer");
  }
  return (
    <>
    {/* <Child name="Raj"/>
    <Child name="Rekha"/>
    <Child name="Anusha"/>
    <Child /> */}
    <Child sayHello={sayHello}/>.
    </>
  )
}

export default Parent
