import React from 'react'

const CheckMarried = () => {
    let [isMarried,setIsMarried]=useState(true)
  return (
            <>
            {isMarried && <h1>you can enjoy your life</h1>}
            </>
)
}

export default CheckMarried