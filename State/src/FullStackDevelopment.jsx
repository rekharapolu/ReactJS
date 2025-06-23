import React, { useState } from "react";

const FullStackDevelopment = () => {
    const javaSkills = [
        "HTML", "CSS", "JavaScript", "Bootstrap", "ReactJS",
        "Core Java", "SQL", "Hibernate", "Servlet", "JDBC", "Spring Boot"
    ];

    const pythonSkills = [
        "HTML", "CSS", "JavaScript", "Bootstrap", "ReactJS",
        "Python", "Django", "SQL", "REST API", "Flask"
    ];

    // State to track the course (either 'java' or 'python')
    const [course, setCourse] = useState("java");

    const changeCourse = () => {
        // Toggle between Java and Python course
        if (course === "java") {
            setCourse("python");
        } else {
            setCourse("java");
        }
    };

    // Determine which skills array to use based on the current course
    const skills = course === "java" ? javaSkills : pythonSkills;

    return (
        <>
            <h1>{course === "java" ? "Java Full Stack Development" : "Python Full Stack Development"}</h1>
            {skills.map((skill, index) => (
                <h2 key={index}>{skill}</h2>
            ))}
            <button onClick={changeCourse}>
                Click For {course === "java" ? "Python" : "Java"}
            </button>
        </>
    );
};

export default FullStackDevelopment;


