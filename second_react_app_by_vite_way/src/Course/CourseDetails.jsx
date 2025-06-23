import React from "react";
import { Fragment } from "react";

let CourseDetails=(props)=>{
    console.log(props);
    let{subject,trainerName,fee,location}=props
    return(
        <>
        <section className="course">
            <article>
                <h3><span className="span">Subject:</span>{subject}</h3>
                <h3><span className="span">TrainerName:</span>{trainerName}</h3>
                <h3><span className="span">Fee:</span>{fee}</h3>
                <h3><span className="span">Location:</span>{location}</h3>
            </article>
        </section>
        </>
    )
}

export default CourseDetails