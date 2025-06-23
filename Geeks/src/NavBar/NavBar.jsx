import React from 'react'
import {useState} from 'react'

const Navbar = () => {
  let[state,setState]=useState(false)

  let mode=()=>{
    setState(!state)
  }
  let dark={
    backgroundColor:'white',
    color:'black'
    }
  
  let light={
    backgroundColor:'black',
    color:'white'
  }

  return (
    <div id="navbar">
      <aside>
        <div>Courses &nbsp; <i class='bx bxs-chevron-down'></i></div>
        <div>Tutorials&nbsp;<i class='bx bxs-chevron-down'></i></div>
        <div>Jobs&nbsp;<i class='bx bxs-chevron-down'></i></div>
        <div>Practice &nbsp;<i class='bx bxs-chevron-down'></i></div>
        <div>Contests&nbsp;<i class='bx bxs-chevron-down'></i></div>
      </aside>
      <img src="https://media.geeksforgeeks.org/gfg-gg-logo.svg" alt="" />
      <article>
        <div><i class='bx bx-search'></i></div>
        <div onClick={mode}  style={state?light:dark}>{state?<i class='bx bx-brightness'></i>: <i  class='bx bx-moon' ></i> }</div>
        {/* <i class='bx bx-brightness'></i>    */}
        <div><i class='bx bx-bell' ></i></div>
        <div>Aa</div>
        <button>Sign in</button>
      </article>
    </div>
  )
}

export default Navbar