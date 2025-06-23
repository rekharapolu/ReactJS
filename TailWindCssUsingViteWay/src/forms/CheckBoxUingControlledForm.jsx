import React, { useState } from 'react'

const CheckBoxUingControlledForm = () => {
    let [userName,setUserName]=useState("")
    let [email,setEmail]=useState("")
    let [skills,setSkills]=useState([])
    let [gender,setGender]=useState()
    let [range,setRange]=useState(0)

    let handleCheckbox=(e)=>{
        // console.log(e.target);
    let {type,value,name,checked}=e.target
    checked? setSkills([...skills,value]):setSkills(skills.filter((skill=>{return skill!==value})))
    }

    let handleRadio=(e)=>{
        setGender(e.target.value)
    }

    let handleSubmit=(e)=>{
        e.preventDefault();
        console.log(userName,email,skills,gender,range);
        setEmail("")
        setGender("")
        setUserName("")
        setSkills()
        setRange(0)
    }

  return (
    <>
    <form action="" onSubmit={handleSubmit}>
        <label htmlFor="" >UserName</label>
        <input type="text" name="username" value={userName} onChange={(e)=>{setUserName(e.target.value)}} />
        <br />
        <label htmlFor="">Email</label>
        <input type="email" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        <br />
        <label htmlFor="">Skills</label>
        <input type="checkbox" value="HTML" onChange={handleCheckbox} />HTML
        <input type="checkbox" value="CSS" onChange={handleCheckbox} />CSS
        <input type="checkbox" value="JS" onChange={handleCheckbox} />JS
        <input type="checkbox" value="ReactJS" onChange={handleCheckbox} />ReactJS
        <br />
        <label htmlFor=""> Select Gender</label>
        <input type="radio" value="Male" checked={gender==="Male"} onChange={handleRadio}/>Male
        <input type="radio" value="Female" checked={gender==="Female"} onChange={handleRadio}/>Female
        <input type="radio" value="others" checked={gender==="others"} onChange={handleRadio}/>others <br />
    <label htmlFor="">Range</label>
    <input type="range" name='range' value={range} min={0} max={100} onChange={(e)=>{setRange(e.target.value)}} />

        <button type='submit' className='ml-5 bg-red-400 mt-2 rounded-lg text-white px-4'>Submit</button>
    </form>
    </>
  )
}

export default CheckBoxUingControlledForm