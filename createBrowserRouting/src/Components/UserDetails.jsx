import React, { useState, useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'

const UserDetails = () => {
    // let location=useLocation();
    let params=useParams();//!to extract the slug value
    console.log(params);
    let {id}=params;
    // console.log(location.state);

    let [singleUser,setSingleUser]=useState({});
    let getSingleUser=async ()=>{
      let result=await fetch(`https://api.escuelajs.co/api/v1/users/${id}`);
      let data=await result.json();
      setSingleUser(data);
    }
    useEffect(()=>{
      getSingleUser();
    })
    // let { avatar, email,password, name, role } = location.state;
     let { avatar, email,password, name, role } = singleUser;


  return (
    <>
        <section className='w-1/2 mt-10 mx-auto p-5 bordeer-2 border-[#999] bg-[#efefef] flex items-center gap-x-5'>
            <aside>
                <img src={avatar} className='mix-blend-multiply h-full w-full object-contain' alt="" />
            </aside>
            <aside>
              <h1 className='border-b-[0.5px] border-[#888] pb-2'>{name}</h1>
              <h1 className='border-b-[0.5px] border-[#888] pb-2'>{email}</h1>
              <h2 className='border-b-[0.5px] border-[#888] pb-2'>{password}</h2>
              <h3 className='border-b-[0.5px] border-[#888] pb-2'>{role}</h3>
            </aside>
        </section>
    </>
  )
}

export default UserDetails   