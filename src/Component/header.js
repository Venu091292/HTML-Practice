import React from 'react';

const Header = () => {
    return (
    <>
        <div className="navbar">
            <h2 >Venu Phani</h2>
            <div className="nav-links">
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
            </div>
        </div>
        <div>
            <div className="hero">
                <h1>Hi, I'm Venu Phani </h1>
                <p>Senior Front-End Developer | React Expert | AWS Cloud Integration</p>
                <a href="#contact" >
                    <button className="btn">
                        Contact Me
                    </button>
                </a>
            </div>
        </div>
    </>
    );
};
export default Header;