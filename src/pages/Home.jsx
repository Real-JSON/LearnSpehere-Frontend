import React from 'react';
import '../styles/Home.css';
import homeImg from '../assets/3837.jpg';
import Navbar from '../components/Navbar';

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
