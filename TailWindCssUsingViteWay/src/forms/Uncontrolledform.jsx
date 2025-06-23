import React,{useRef} from 'react'


const UncontrolledForm = () => {
  let userref=useRef()
  let passwodref=useRef()
  let courseref=useRef()
  let maleref=useRef()
  let femaleref=useRef()
  let htmlref=useRef()
  let cssref=useRef()
  let jsref=useRef()


  let handleSubmit=(e)=>{
    e.preventDefault();
    

    let username=userref.current.value;
    let password=passwodref.current.value;
    let course=courseref.current.value;
    let male=maleref.current.checked;
    let female=femaleref.current.checked;
    let html=htmlref.current.checked;
    let css=cssref.current.checked;
    let js=jsref.current.checked;


    console.log(username);
    console.log(password);
    console.log(course);
    console.log("male="+male,"female="+female);
    console.log("HTML="+html,"CSS="+css,"JS="+js);

    userref.current.value=""
    passwodref.current.value=""
    courseref.current.value=""
    maleref.current.checked=""
    femaleref.current.checked=""
    htmlref.current.checked=""
    cssref.current.checked=""
    jsref.current.checked=""
  }
  return(
    <div>
    <form action="" htmlmFor="" className='w-[400px] mx-auto border-2 border-blue-500 bg-[lightblue]'>
      
      <div className='w-[300px] mx-auto m-6 bg-[#efefef]'>
        <label htmlFor="" className='px-5'>UserName:</label>
        <input type="text" ref={userref} />
      </div>

      <div className='w-[300px] mx-auto m-6 bg-[#efefef]'>
        <label htmlFor="" className='px-5'>Password:</label>
        <input type="password" ref={passwodref} />
      </div>

      <div className='w-[300px] mx-auto m-6 bg-[#efefef]'>
        <label htmlFor="" className='px-5'>course:</label>
        <input type="text" ref={userref} />
        
        <select name="" id="" ref={courseref}>
          <option value="Java FullStack">Java Full Stack</option>
          <option value="Python FullStack">Python Full Stack</option>
          <option value="Mern FullStack">Java Full Stack</option>
          <option value="Mern FullStack">Java Full Stack</option>
        </select>
      </div>

      <div className='w-[300px] mx-auto m-6 bg-[#efefef]'>
        <label htmlFor="" className='px-5'>Gender:</label>
        <input type="radio" ref={maleref} />Male
        <input type="radio" ref={femaleref} />Female
      </div>

      <div className='w-[300px] mx-auto m-6 bg-[#efefef] px-5'>
        <input type="checkbox" ref={htmlref} />Html
        <input type="checkbox" ref={cssref} />Css
        <input type="checkbox" ref={jsref} />Js
      </div>
      <div><button onClick={handleSubmit} className='px-5 mx-38 border-2 border-blue-500 bg-[blue] p-2
      rounded-xl my-2 text-white'>submit</button></div>

    </form>
    </div>
  )
}

export default UncontrolledForm