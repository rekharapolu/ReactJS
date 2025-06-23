import React, { useEffect, useRef } from 'react'

const InputFocus = () => {
    let inputref=useRef();
    useEffect(()=>{
        inputref.current.style.color='red';
        inputref.current.focus();
    })

  return (
    <div>
    <form action="">
      <input type="text" ref={inputref} className='bg-[yellow] w-[300px] h-20' placeholder='Enter your name'/>
    </form>
    </div>
  )
}

export default InputFocus