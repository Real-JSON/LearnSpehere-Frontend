import React from 'react';
import '../styles/Course.css';
import courseimg from '../assets/freepik__background__78432.png';

import courseImg1 from '../assets/ai-technology-microchip-background-digital-transformation-concept.jpg'
import courseImg2 from '../assets/network-people-digital-world.jpg'
import courseImg3 from '../assets/person-front-computer-working-html.jpg'

const Course = () => {
   return (
      <>
         <div className="course-container">
            <section className="courses">
               <div className="course-image">
                  <img src={courseimg} alt="" />
               </div>
               <div className="course-heading">
                  <h2>Benefits From Our Online Learning</h2>
                  <div className="course-content">
                     <div className="course">
                        <div className="course-icon">
                           <i class="ri-graduation-cap-fill"></i>
                        </div>
                        <div className="course-name">
                           <h3>Online Degrees</h3>
                           <p>
                              Lorem ipsum dolor sit amet consectetur
                              adipisicing elit. Dignissimos,
                              aspernatur.
                           </p>
                        </div>
                     </div>
                     <div className="course">
                        <div className="course-icon">
                           <i class="ri-book-open-fill"></i>
                        </div>
                        <div className="course-name">
                           <h3>Online Degrees</h3>
                           <p>
                              Lorem ipsum dolor sit amet consectetur
                              adipisicing elit. Dignissimos,
                              aspernatur.
                           </p>
                        </div>
                     </div>
                     <div className="course">
                        <div className="course-icon">
                           <i class="ri-play-large-fill"></i>
                        </div>
                        <div className="course-name">
                           <h3>Online Degrees</h3>
                           <p>
                              Lorem ipsum dolor sit amet consectetur
                              adipisicing elit. Dignissimos,
                              aspernatur.
                           </p>
                        </div>
                     </div>
                     <div className="course">
                        <div className="course-icon">
                           <i class="ri-group-fill"></i>
                        </div>
                        <div className="course-name">
                           <h3>Online Degrees</h3>
                           <p>
                              Lorem ipsum dolor sit amet consectetur
                              adipisicing elit. Dignissimos,
                              aspernatur.
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
         </div>
         <div className="popular-course-container">
            <section className="popular-course-area">
               <div className="popular-text">
                  <h2>Our Popular Courses</h2>
                  <p>
                     Discove our most sought-after courses, carefully
                     curated to meet the demands of today's learners.
                     Dive into engaing content crafted for success in
                     every step of your educational journey.
                  </p>
               </div>
               <div className="course-card-area">
                  <div className="course-card">
                     <div className="card-image">
                        <img src={courseImg1} alt="" />
                     </div>
                     <div className="card-content">
                        <h3>Artificial Intelligence & Machine Learning</h3>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, earum!
                     </div>
                  </div>
                  <div className="course-card">
                     <div className="card-image">
                        <img src={courseImg2} alt="" />
                     </div>
                     <div className="card-content"></div>
                  </div>
                  <div className="course-card">
                     <div className="card-image">
                        <img src={courseImg3} alt="" />
                     </div>
                     <div className="card-content"></div>
                  </div>
               </div>
            </section>
         </div>
      </>
   );
};

export default Course;
