import React from "react";
// import "./HeroSection.css";

import HeroImage from '../../assets/images/hero/bg-1.png'

const HeroSection = () => {
  return (
    <section className="hero-container">
      {/* Left Content Area */}
      <div className="hero-content">
        <div className="decorative-doodle">
          <svg
            width="40"
            height="40"
            viewBox="0 0 50 50"
            fill="none"
            stroke="#a29bfe"
            strokeWidth="3"
          >
            <path d="M10,15 L20,5 L30,25 L40,10" />
          </svg>
        </div>

        <h1 className="hero-title">
           
          Unlock Your Future <br />
          with <span className="highlight">LearnSphere</span>
        </h1>

        <p className="hero-description">
          Explore hundreds of interactive courses designed to help you gain practical experience and achieve your goals.
        </p>

        {/* Email Subscription Box */}
        <div className="subscribe-box">
          <div className="input-group">
            <span className="email-icon">✉️</span>
            <input type="email" placeholder="Enter your email address" />
          </div>
          <button className="subscribe-btn">Subscribe Now</button>
        </div>

        {/* Reviews / Proof Section */}
        <div className="reviews-container">
          <div className="avatar-group">
            <img
              src="https://i.pravatar.cc/100?img=12"
              alt="Student"
              className="avatar"
            />
            <img
              src="https://i.pravatar.cc/100?img=33"
              alt="Student"
              className="avatar"
            />
            <div className="rating-badge">
              <span>4.9</span>
              <span className="star">★</span>
            </div>
          </div>
          <div className="reviews-text">
            <h4>Learners Reviews</h4>
            <p>2000+ Fully Satisfied Students</p>
          </div>
        </div>
      </div>

      {/* Right Image / Hero Graphic Area */}
      <div className="hero-image-wrapper">
        <div className="dots-pattern"></div>
        {/* Replace image URL with your actual asset URL */}
        <img
          src={HeroImage}
          alt="Student holding books"
          className="hero-img"
          fetchPriority="high"
        />
      </div>
    </section>
  );
};

export default HeroSection;
