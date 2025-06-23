import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

const AllUsers = () => {
  let [users, setUsers] = useState();
  const url = "https://api.escuelajs.co/api/v1/users";

  let getUsers = async () => {
    let response = await fetch(url);
    let data = await response.json();
    setUsers(data);
  };      

  useEffect(() => {
    getUsers();
  }, []);

  
  return (
    <div className='flex flex-wrap w-[80%] mx-auto gap-2 mt-10'>
        {
          users!==undefined && users.map((user)=>{
            let {id}=user
            return <>
              <div className='flex flex-col items-center p-5 border-1 border-[#888]'>
                <img src={user.avatar} className='h-[150px] w-[150px]' alt={user.name} />
                <button className='p-2 w-[80%] bg-[orange] mt-4 rounded-lg text-white border-2 border-[#888]'>
                  <NavLink to={`/users/${id}`} state={user}>View More</NavLink></button>
              </div>
            </>
          })
        }
    </div>
  )
}

export default AllUsers