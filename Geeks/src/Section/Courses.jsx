import React from 'react'
import Coursechils from './Coursechils.jsx'

const Courses = () => {
    let course=[
        {
            url:"https://media.geeksforgeeks.org/img-practice/prod/courses/504/Web/Content/Course_DSA_to_Dev_1720846081_1736594558.webp",
            heading:"DSA to Development:A Complete Guide",
            sub:"Beginner to Advance",
            followers:"476k+"

        },
        {
            url:"https://media.geeksforgeeks.org/img-practice/prod/courses/227/Web/Content/backend_dev_1736591964.webp",
            heading:"Java Backend Development-Live",
            sub:"Intermediate and Advance",
            followers:"274k+"

        },
        {
            url:"https://media.geeksforgeeks.org/img-practice/prod/courses/458/Web/Content/Course_Tech_Int_1720846791_1736594646.webp",
            heading:"Tech Interveiw 101-From DSA to System Design for Workin..",
            sub:"Beginner to Advance",
            followers:"399k+"

        },
        {
            url:"https://media.geeksforgeeks.org/img-practice/prod/courses/517/Web/Content/Course_Software_testing_1720847295_1736594506.webp",
            heading:"Complete sOftware Testing Course-Beginner to Advance",
            sub:"Beginner to Advance",
            followers:"45k+"

        },
        {
            url:"https://media.geeksforgeeks.org/img-practice/prod/courses/270/Web/Content/javaprogramming_1736593466.webp",
            heading:"Java Programming Online Course[Online Beginner..",
            sub:"Beginner to Advance",
            followers:"264k+"
        },
        {
            url:"https://media.geeksforgeeks.org/img-practice/prod/courses/221/Web/Content/cpp_1736593581.webp",
            heading:"Java Programming Online Course[Online Beginner..",
            sub:"Beginner to Advance",
            followers:"264k+"
        }
    ]
  return (
   <div id="courseparent">
     <section id="course">
        <aside><h1>Courses</h1><button>View all</button></aside>
        <div>
             <Coursechils course={course} />
        </div>
    </section>
   </div>
  )
}

export default Courses