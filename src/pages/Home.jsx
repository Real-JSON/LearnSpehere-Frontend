import React from 'react';
import '../styles/Home.css';
import { Link } from 'react-router-dom';
import homeImg from '../assets/freepik__upload__60907.jpeg';
import Navbar from '../components/Navbar Component/Navbar';

const Home = () => {
    return (
        <>
            <Navbar />
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

                        <button id="reserve-your-seat">
                            <Link to="/register">
                                {' '}
                                reserve your seat{' '}
                                <i class="ri-arrow-right-up-line"></i>
                            </Link>
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
