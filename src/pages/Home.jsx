import React from 'react';
import '../styles/Home.css';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar Component/Navbar';

import hero200 from '/src/assets/hero-images/freepik__upload__60907_nwpgqt_c_scale,w_200.jpg';
import hero863 from '/src/assets/hero-images/freepik__upload__60907_nwpgqt_c_scale,w_863.jpg';
import hero1290 from '/src/assets/hero-images/freepik__upload__60907_nwpgqt_c_scale,w_1290.jpg';
import hero1400 from '/src/assets/hero-images/freepik__upload__60907_nwpgqt_c_scale,w_1400.jpg';

const Home = () => {
    return (
        <>
            <Navbar />
            <section>
                <div className="front-main-banner">
                    <picture className="front-main-banner-picture">
                        <img sizes="(max-width: 1400px) 100vw, 1400px"
                            srcSet={`${hero200} 200w, ${hero863} 863w, ${hero1290} 1290w, ${hero1400} 1400w`}
                            src={hero1400}
                            alt="hero-image"/>
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
                                <i className="ri-arrow-right-up-line"></i>
                            </Link>
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
