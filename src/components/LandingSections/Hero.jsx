import React from "react";
// import "../styles/Home.css";
import { Link } from "react-router-dom";

import hero200 from "../../assets/images/hero/1_scale,w_200.webp";
import hero863 from "../../assets/images/hero/2_scale,w_863.webp";
import hero1290 from "../../assets/images/hero/3_scale,w_1290.webp";
import hero1400 from "../../assets/images/hero/4_scale,w_1400.webp";

const Hero = () => {
  return (
    <>
      <section>
        <div className="front-main-banner">
          <picture className="front-main-banner-picture">
            <img
              sizes="(max-width: 1400px) 100vw, 1400px"
              srcSet={`${hero200} 200w, ${hero863} 863w, ${hero1290} 1290w, ${hero1400} 1400w`}
              src={hero1400}
              alt="hero-image"
            />
          </picture>
          <div className="banner-wrapper">
            <div className="front-banner-text">
              <h3>
                Your Best E-Learning Platform <br />
                <span id="banner-text-span">At Your Fingertips</span>
              </h3>
              <p>
                "Unlock the power of learning with our top-tier e-learning
                platform. Accessible anytime, anywhere, right at your
                fingertips. Learn, grow, and succeed with ease!"
              </p>

              <button id="reserve-your-seat">
                <Link to="/register">
                  {" "}
                  reserve your seat <i className="ri-arrow-right-up-line"></i>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
