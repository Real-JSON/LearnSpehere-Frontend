import React from 'react';
import '../styles/Home.css';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar Component/Navbar';

const Home = () => {
    return (
        <>
            <Navbar />
            <section>
                <div className="front-main-banner">
                    <picture className="front-main-banner-picture">
                        <img sizes="(max-width: 1400px) 100vw, 1400px"srcSet="
                            /src/assets/hero-images/freepik__upload__60907_nwpgqt_c_scale,w_200.jpg 200w,
                            /src/assets/hero-images/freepik__upload__60907_nwpgqt_c_scale,w_863.jpg 863w,
                            /src/assets/hero-images/freepik__upload__60907_nwpgqt_c_scale,w_1290.jpg 1290w,
                            /src/assets/hero-images/freepik__upload__60907_nwpgqt_c_scale,w_1400.jpg 1400w"
                            src="/src/assets/hero-images/freepik__upload__60907_nwpgqt_c_scale,w_1400.jpg"
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
