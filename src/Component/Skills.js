import React from "react";

const Skills = () => {
    const skills = [
        "React", "Redux", "JavaScript (ES6+)", "AWS", "CSS", "Bootstrap",
        "Adobe Analytics", "Jest", "JavaScript", "Java",
        "React Router", "Spring Boot"
    ];

    return (
        <div id="skills" className="div">
            <h2 className="title">Technical Skills</h2>
            <div className="skills">
                {skills.map((skill) => (
                    <ul key={skill}>{skill}</ul>
                ))}
            </div>
        </div>
    );
};

export default Skills;