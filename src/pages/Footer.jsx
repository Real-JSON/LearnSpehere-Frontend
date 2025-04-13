import '../styles/Footer.css';
// import footerLogo from '../assets/logo/freepik__background__66091.png';
import React from 'react';
import Navbar from '../components/Navbar Component/Navbar';

const Footer = () => {
    return (
        <>
            <footer className="footer" id="contact">
                <div className="footer-left">
                    <a href="#home" className="footer-logo">
                        <i className="ri-donut-chart-fill"></i>
                        <span>LearnSphere</span>
                    </a>
                    <p>
                        dolor sit amet consectetur adipisicing elit. Illum,
                        aut?dolor sit amet consectetur adipisicing elit. Vitae,
                        ipsum veritatis sequi reiciendis quaerat repellat natus
                        officia officiis dolorum quia dicta ab nulla distinctio
                        cum voluptate, sunt maxime optio deserunt!
                    </p>
                    <div className="socials">
                        <a href="">
                            <i class="ri-facebook-fill"></i>
                        </a>
                        <a href="">
                            <i class="ri-twitter-fill"></i>
                        </a>
                        <a href="">
                            <i class="ri-dribbble-fill"></i>
                        </a>
                        <a href="">
                            <i class="ri-instagram-line"></i>
                        </a>
                    </div>
                </div>
                <ul className="footer-right">
                    <li>
                        <h2>Company</h2>
                        <ul className="box">
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
                                <a href="contact">Contact Us</a>
                            </li>
                        </ul>
                    </li>
                    <li className="feautures">
                        <h2>Support</h2>
                        <ul className="box">
                            <li>
                                <a href="">Help Center</a>
                            </li>
                            <li>
                                <a href="">Webinars</a>
                            </li>
                            <li>
                                <a href="">Feedback</a>
                            </li>
                            <li>
                                <a href="">Contact Us</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h2> Links</h2>
                        <ul className="box">
                            <li>
                                <a href="">Courses</a>
                            </li>
                            <li>
                                <a href="">Become a Teacher</a>
                            </li>
                            <li>
                                <a href="">Service</a>
                            </li>
                            <li>
                                <a href="">All in One</a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <div className="footer-bottom">
                    All rights reserved &copy; 2025 • &nbsp;
                    <i className="ri-donut-chart-fill"></i> &nbsp;LearnSpehere
                    <p id="developed-by">
                        Developed by <span>Januda Amaneth</span>
                    </p>
                </div>
            </footer>
        </>
    );
};

export default Footer;
