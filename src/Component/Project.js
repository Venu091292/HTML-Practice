import React from "react";

const Experience = () => {
    return (
        <section id="projects" className="section">
            <h2  className="section-title">Experience</h2>
            <div>
                <div className="card">
                    <h3>
                        Cigna – Software Developer (2025–Present)
                    </h3>
                    <p>
                        Leading CRM React architecture, implementing Redux state management,
                        Adobe Analytics tracking, AWS deployments, and performance optimization.
                    </p>
                </div>
                <div className="card">
                    <h3>
                        American Express – UI Developer (2019–2025)
                    </h3>
                    <p>
                        Developed enterprise SPAs with React, TypeScript, Redux, API Gateway,
                        Lambda integrations, and real-time features.
                    </p>
                </div>
                <div className="card">
                    <h3>
                        BMW – Software Developer (2017–2019)
                    </h3>
                    <p>
                        Developed Spring Boot microservices and integrated REST APIs with frontend systems.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Experience;