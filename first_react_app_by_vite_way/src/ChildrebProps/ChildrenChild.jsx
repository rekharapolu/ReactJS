import React from 'react'
import { Children } from 'react'
import ChildrenChild from './ChildrenChild';

const ChildrenChild = (props) => {
  // console.log(props);
  let {childrenchild}=props
  return (
    <div>
      {childrenchild}
    </div>
  )
}

export default ChildrenChild