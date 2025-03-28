import React from 'react';
import ControlledCarousel from '../components/ControlledCarousel';
import '../styles/Home.css';
import logo from '../assets/logo/ucsc.png';
import uniLogo from '../assets/logo/logo.png';
import homeImg from '../assets/3837.jpg';

const Home = () => {
    return (
        <>
            <header>
                <nav>
                    <div className="nav-links">
                        <div className="nav-logo">
                            <a href="">{/* <img src={uniLogo} alt="" /> */}</a>
                        </div>
                        <ul className="">
                            <li className="hideOnMobile">
                                <a href="#">Home</a>
                            </li>
                            <li className="hideOnMobile">
                                <a href="#">About</a>
                            </li>
                            <li className="hideOnMobile">
                                <a href="#">Students</a>
                            </li>
                            <li className="hideOnMobile">
                                <a href="#">Learning</a>
                            </li>
                            <li className="hideOnMobile">
                                <a href="#">Examination</a>
                            </li>
                            <li className="hideOnMobile">
                                <a href="#">Short Courses</a>
                            </li>
                        </ul>
                        <ul id="sign">
                            <li>
                                <a href="">Sign Up</a>
                            </li>
                            <li>
                                <a href="">Sign In</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>

            <section>
                <div className="front-main-banner">
                    <picture className="front-main-banner-picture">
                        <img src={homeImg} alt="home_banner_image" />
                    </picture>
                    <div className="front-banner-text">
                        <h3>
                            Your Best E-Learning Platform <br />
                            <span id="banner-text-span">
                                At Your Fingertips
                            </span>
                        </h3>
                        <p>
                            "Unlock the power of learning with our top-tier
                            e-learning platform. Accessible anytime, anywhere,
                            right at your fingertips. Learn, grow, and succeed
                            with ease!"
                        </p>
                        <a
                            href=""
                            id="reserve-your-seat"
                            aria-label="reserve your seat"
                        >
                            reserve your seat
                            <i class="ri-arrow-right-up-line"></i>
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
