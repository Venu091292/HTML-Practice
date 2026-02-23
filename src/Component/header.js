import React from 'react';

const Header = () => {
    return (
    <>
        <nav className="navbar">
            <h2 >Venu Phani</h2>
            <div className="nav-links">
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </div>
        </nav>
        <div>
            <section className="hero split-hero">
                <div className="hero-left">
                    <h1>Hi, I'm Venu Phani </h1>
                    <h2 className="hero-subtitle">
                        Senior Front-End Developer | React Expert | AWS Cloud Integration
                    </h2>
                    <p>
                        8+ years building scalable React applications for enterprise
                        clients. Specialized in performance optimization, AWS cloud
                        deployments, and modern UI architecture.
                    </p>
                    <div className="hero-buttons">
                        <a href="#contact" >
                            <button className="btn">
                                Contact Me
                            </button>
                        </a>
                        <a href="/Venu%20Phani.pdf" download>
                            <button className="btn secondary-btn">
                                Download Resume
                            </button>
                        </a>
                    </div>
                </div>
                    <div className="hero-right">
                        <img src="/img.png" alt="Venu Phani" />
                    </div>
            </section>
        </div>
    </>
    );
};
export default Header;