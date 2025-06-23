import React from 'react'
import Child from './Child'
import json from "./jsonobject.json"

const Parent = () => {
  return (
    <>
    <Child jsonn={json} />
    </>
  )
}

export default Parent