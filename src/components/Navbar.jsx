import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
    let menu = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    menu.onclick = () => {
        menu.classList.toggle('bx-x');
        navbar.classList.toggle('open');
    };
    return (
        <>
            <header>
                <a href="" className="logo">
                    <i class="ri-donut-chart-fill"></i>
                    <span>LearnSphere</span>
                </a>
                <ul className="navbar">
                    <li>
                        <a href="" className="active">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="">About</a>
                    </li>
                    <li>
                        <a href="">Community</a>
                    </li>
                    <li>
                        <a href="">Become a Tutor</a>
                    </li>
                </ul>
                <div className="main">
                    <a href="" className="user">
                        <i class="ri-user-line"></i>Sign In
                    </a>
                    <a href="">Register</a>
                    <div className="bx bx-menu" id="menu-icon"></div>
                </div>
            </header>
        </>
    );
};

export default Navbar;
