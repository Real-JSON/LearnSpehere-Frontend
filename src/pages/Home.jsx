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
            <div className="header-wrapper">
               <div className="header-logo">
                  <picture>
                     <a href="#" aria-label="home">
                        <img src={logo} alt="ucsc_logo" />
                     </a>
                  </picture>
               </div>
               <div className="heading-text">
                  <h1>Bachelor of Information Technology</h1>
                  <p>University of Colombo School of Computing</p>
               </div>
               <div className="header-logo-two">
                  <picture>
                     <img src={uniLogo} alt="uni_logo" />
                  </picture>
               </div>
            </div>
         </header>
         <nav>
            <ul className="nav-links">
               <li>
                  <i class="ri-user-line"></i>
               </li>
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
               <li>
                  <i class="ri-menu-line"></i>
               </li>
            </ul>
         </nav>
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
                  <button id="schedule-btn">
                     <a href="" aria-label="reserve your seat">
                        reserve your seat{' '}
                        <i class="ri-arrow-right-up-line"></i>
                     </a>
                  </button>
               </div>
            </div>
         </section>
      </>
   );
};

export default Home;
