import React from 'react'
import Child from './Child';

const Parent = (props) => {
    console.log(props.data,'parent');
  return (
    <>
    <Child data1={props.data}/>
    </>
  )
}

export default Parent