import React from "react";

const Skills = () => {
    const skills = [
        "React", "Redux", "JavaScript (ES6+)", "AWS", "CSS", "Bootstrap",
        "Adobe Analytics", "Jest", "JavaScript", "Java",
        "React Router", "Spring Boot"
    ];

    return (
        <section id="skills" className="section">
            <h2 className="section-title">Technical Skills</h2>
            <div className="skills">
                {skills.map((skill) => (
                    <ul key={skill}>{skill}</ul>
                ))}
            </div>
        </section>
    );
};

export default Skills;