import React from 'react'

const Child = (props) => {
  props.sayHello()
  return (
    <div>
        {/* <h1>{props.name}</h1>
        <h2>React JS</h2> */}
    </div>
  )
}

export default Child

Child.defaultProps={name:"Sandhya"}