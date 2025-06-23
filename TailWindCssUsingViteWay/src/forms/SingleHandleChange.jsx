import React from 'react'
import { useState } from 'react';
import { toast } from 'react-toastify';

const SingleHandleChange = () => {
    let [state,setState]=useState({
        username:"",
        password:""
    })

    let handleChange=(e)=>{
        let {value,name}=e.target;
        setState({...state,[name]:value})
    }

    let handleSubmit=(e)=>{
        e.preventDefault();
        console.log(state);
        toast.success("Registration done!")
    }
  return (
    <>
        <form action="" onSubmit={handleSubmit}>

            <label htmlFor="">UserName</label>
            <input type="text" name='username' onChange={handleChange} />

            <label htmlFor="">Password</label>
            <input type="password" name='password' onChange={handleChange} />

            <input type="submit" onSubmit={handleSubmit} />
        </form>
    </>
  )
}

export default SingleHandleChange