import React from 'react'
import ChildrenChild from './ChildrenChild';

const ChildrenParent = () => {
  return (
    <div>
        <ChildrenChild>
            <p>Hello People</p>
        </ChildrenChild>
    </div>
  )
}

export default ChildrenParent