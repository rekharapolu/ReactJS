import React, { useEffect, useState } from 'react'
import Loader from './Loader';

const Users = () => {
    let [state,setState]=useState(null)
    async function getUsers() {
        let result=await fetch("https://fakestoreapi.com/users")
        console.log(result);
        let data=await result.json();
        console.log(data);
        setState(data);   //!setting the new value value inside the state
    }

    useEffect(()=>{
        setTimeout(()=>{
            getUsers()
        },2000)
    })

  return (<>
    {
        state==null?<Loader/>: state.map((user)=>{
            let {address,id,email,username,password,phone}=user
            return<>
                <section>
                    <h1>{username}</h1>
                    <h1>{email}</h1>
                </section>
            </>
        })
    }</>
  )
}

export default Users