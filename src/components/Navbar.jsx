import React, { useState } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
    // State to track whether the menu is open
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to toggle the menu
    const showNavbar = () => {
        setIsMenuOpen(!isMenuOpen); // Toggle the state
    };

    return (
        <>
            <header id="home">
                <a href="#home" className="logo">
                    <i className="ri-donut-chart-fill"></i>
                    <span>LearnSphere</span>
                </a>
                {/* Add the 'open' class dynamically based on state */}
                <ul className={`navbar ${isMenuOpen ? 'open' : ''}`}>
                    <li>
                        <a href="#home" className="active">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#courses">Courses</a>
                    </li>
                    <li>
                        <a href="#tutor">Become a Tutor</a>
                    </li>
                    <li>
                        <a href="#contact">Contact Us</a>
                    </li>
                </ul>
                <div className="main">
                    <a href="#signin" className="user">
                        <i className="ri-user-line"></i>Sign In
                    </a>
                    <a href="#register">Register</a>
                    {/* Add an onClick handler to toggle the menu */}
                    <div
                        className={`bx bx-menu ${isMenuOpen ? 'bx-x' : ''}`}
                        id="menu-icon"
                        onClick={showNavbar}
                    ></div>
                </div>
            </header>
        </>
    );
};

export default Navbar;
