import React, { useState } from 'react'
import Parent from './Parent';
import { toast } from 'react-toastify';

const GrandParent = () => {

    //!Props Drilling : It is process of sending the data from one component to another(child) component and soon

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

            <label htmlFor="uname">UserName</label>
            <input type="text" id='uname' name='username' onChange={handleChange} />

            <label htmlFor="password">Password</label>
            <input type="password" id='password' name='password' onChange={handleChange} />

            <input type="submit" onSubmit={handleSubmit}  />

            <Parent data={state}/>
        </form>
    </>
  )
}

export default GrandParent