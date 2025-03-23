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
            <div className="logo">
               <a href="">
                  <img src={logo} alt="" />
               </a>
            </div>
            <div className="heading-text">
               <h1>
                  Bachelor of Information Technology <br />
                  <span id="ucsc">
                     University of Colombo School of Computing
                  </span>
               </h1>
            </div>
            <div className="uni-logo">
               <img src={uniLogo} alt="" />
            </div>
         </header>
         <nav>
            <ul className="nav-links">
               <li>
                  <a href="">Home</a>
               </li>
               <li>
                  <a href="">About</a>
               </li>
               <li>
                  <a href="">Students</a>
               </li>
               <li>
                  <a href="">Learning</a>
               </li>
               <li>
                  <a href="">Examination</a>
               </li>
               <li>
                  <a href="">Short Courses</a>
               </li>
            </ul>
         </nav>
         <section>
            <div className="front-main-banner">
               <picture className="front-main-banner-picture">
                  <img src={homeImg} alt="" />
               </picture>
               <div className="front-banner-text">
                  <h3>
                     Your Best E-Learning Platform <br />
                     <span id="text-span">At Your Fingertips</span>
                  </h3>
                  <p>
                     "Unlock the power of learning with our top-tier e-learning platform.
                     Accessible anytime, anywhere, right at your fingertips.
                     Learn, grow, and succeed with ease!"
                  </p>
                  <button id="schedule-btn">
                     <a href="">
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
