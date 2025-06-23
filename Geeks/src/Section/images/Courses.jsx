import React from 'react'

const Coursechils = (props) => {
  return (
    <div id="childmain">
      {props.course.map((data)=>{
        let {url,heading,sub,followers}=data
        return(
            <div id="singlecourse">
                <article>
                    <img src={url} alt="" />
                    <h4>{heading}</h4>
                    <p> <i id="icon"class='bx bx-signal-3' ></i> {sub}</p>
                    <div><i class='bx bx-line-chart'></i>&nbsp;&nbsp;{followers}Interested Geeks &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>Explore Now</button></div>
                    <article><span>Refund of 90% </span>is available on this Course</article>
                </article>
            </div>
        )
      })}
    </div>
  )
}

export default Coursechils