import React from 'react';
import '../styles/Course.css'
import courseimg from '../assets/freepik__background__78432.png';

const Course = () => {
   return (
      <>
         <section>
            <div className="course-wrapper">
               <div className="course-area">
                  <div className="course-image">
                     <img src={courseimg} alt="" />
                  </div>
                  <div className="course-types">
                     <h2>Benefits From Our Online Learning</h2>
                     <br />
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
            </div>
         </section>
      </>
   );
};

export default Course;
