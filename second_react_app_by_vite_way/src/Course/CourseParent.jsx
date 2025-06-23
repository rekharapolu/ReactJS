import React from "react"
import CourseDetails from "./CourseDetails"


let CourseParent=function(){

    let coursedetails=[
    {
        subject:"Core Java",
        trainerName:"Kowshik sir",
        fee:13000,
        location:"Hyderabad"
    },
    {
        subject:"Advance Java",
        trainerName:"Ravi sir",
        fee:5000,
        location:"chennai"
    },
    {
        subject:"WEB-TECH",
        trainerName:"Ningaraj sir",
        fee:10000,
        location:"Banglore"
    },
    {
        subject:"SQL",
        trainerName:"Sanjay sir",
        fee:4000,
        location:"vizag"
    },
    {
        subject:"React JS",
        trainerName:"Shiva sir",
        fee:2000,
        location:"Karnataka"
    },
    {
        subject:"Angular JS",
        trainerName:"Geetha mam",
        fee:3000,
        location:"Mumbai"
    },
    {
        subject:"Mango DB",
        trainerName:"Reshma mam",
        fee:1000,
        location:"Delhi"
    },
    {
        subject:"Python",
        trainerName:"Manjunath sir",
        fee:10000,
        location:"Vijaywada"
    },
    {
        subject:"Aptitude",
        trainerName:"Yuvasree mam",
        fee:2500,
        location:"Punjagutta"
    },
    {
        subject:"English",
        trainerName:"D.V.R",
        fee:3500,
        location:"VNK"
    },
    {
        subject:"GK",
        trainerName:" Raghu sir",
        fee:2500,
        location:"LB Nagar"
    },
    {
        subject:"Maths",
        trainerName:"Chandhan sir",
        fee:3500,
        location:"Nellore"
    }
]
    return <>
    <h1>Courses</h1>
        <div className="courses">
        {coursedetails.map((element)=>{
            let{subject,trainerName,fee,location}=element
            return <CourseDetails subject={subject} trainerName={trainerName} fee={fee} location={location}/>
        })}
        </div>
    </>
}

export default CourseParent