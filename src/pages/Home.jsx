import React from 'react';
import '../styles/Home.css'
import logo from '../assets/logo/ucsc.png';
import uniLogo from '../assets/logo/logo.png';

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
                  <span>University of Colombo School of Computing</span>
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
                  <a href="">FIT</a>
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
      </>
   );
};

export default Home;
