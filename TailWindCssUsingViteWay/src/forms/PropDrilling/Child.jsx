import React from 'react'
import GrandChild from './GrandChild'

const Child = (props) => {
    console.log(props.data1,'child');
  return (
    <>
        <GrandChild data2={props.data1}/>
    </>
  )
}

export default Child