import React, { useState } from "react";

const FulllStackDevelopment = () => {
    // Skills for Java and Python courses
    const javaSkills = [
        "HTML", "CSS", "JavaScript", "Bootstrap", "ReactJS",
        "Core Java", "SQL", "Hibernate", "Servlet", "JDBC", "Spring Boot"
    ];

    const pythonSkills = [
        "HTML", "CSS", "JavaScript", "Bootstrap", "ReactJS",
        "Python", "Django", "SQL", "REST API", "Flask"
    ];

    // Students represented as objects with 'name' and 'level' properties
    const javaStudents = {
        1: { name: "Rekha", level: "Beginner" },
        2: { name: "Siri", level: "Intermediate" },
        3: { name: "Sindhu", level: "Advanced" },
        4: { name: "Anusha", level: "Beginner" }
    };

    const pythonStudents = {
        1: { name: "Greeshma", level: "Beginner" },
        2: { name: "Srilekha", level: "Intermediate" },
        3: { name: "Mamatha", level: "Advanced" },
        4: { name: "Manisha", level: "Beginner" }
    };

    // State to track the course (either 'java' or 'python')
    const [course, setCourse] = useState("java");

    // Function to switch between Java and Python courses
    const changeCourse = () => {
        if (course === "java") {
            setCourse("python");
        } else {
            setCourse("java");
        }
    };

    // Determine which skills array and students object to use based on the current course
    const skills = course === "java" ? javaSkills : pythonSkills;
    const students = course === "java" ? javaStudents : pythonStudents;

    return (
        <>
            <h1>{course === "java" ? "Java Full Stack Development" : "Python Full Stack Development"}</h1>

            {/* Display skills */}
            {/* <h2>Skills:</h2>
            {skills.map((skill, index) => (
                <h3 key={index}>{skill}</h3>
            ))} */}

            {/* Display students */}
            <h2>Students:</h2>
            <ul>
                {Object.values(students).map((student, index) => (
                    <li key={index}>
                        {student.name} - {student.level}
                    </li>
                ))}
            </ul>

            {/* Button to toggle between Java and Python */}
            <button onClick={changeCourse}>
                Click For {course === "java" ? "Python" : "Java"}
            </button>
        </>
    );
};

export default FulllStackDevelopment;
