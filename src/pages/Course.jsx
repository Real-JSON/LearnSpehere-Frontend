import React from 'react';
import '../styles/Course.css';
import courseimg from '../assets/freepik__background__78432.png';

import courseImg1 from '../assets/card-images/ai.jpg';
import courseImg2 from '../assets/card-images/network.jpeg';
import courseImg3 from '../assets/card-images/freepik__upload__16890.jpeg';

const Course = () => {
    return (
        <>
            <div className="course-container" id="courses">
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
                                    <h3>20+ Lessons</h3>
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
                                    <h3>Lifetime Access</h3>
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
                                    <h3>Community Support</h3>
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
                                <h3>
                                    Artificial Intelligence & Machine Learning
                                </h3>
                                <div className="content-of-card">
                                    <p>Catergorized</p>
                                    <p>
                                        <i class="ri-user-fill"></i> John Doe
                                    </p>
                                </div>
                                <br />
                                <div className="card-description">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Voluptates incidunt illo
                                    minus tempore, commodi fuga fugiat eveniet,
                                    perspiciatis dolores quaerat totam saepe non
                                    hic illum earum voluptatum odio laborum
                                    deserunt?
                                </div>
                            </div>
                        </div>
                        <div className="course-card">
                            <div className="card-image">
                                <img src={courseImg2} alt="" />
                            </div>
                            <div className="card-content">
                                <h3>
                                    Neural Network & Crypto Currency Sellers
                                </h3>
                                <div className="content-of-card">
                                    <p>Catergorized</p>
                                    <p>
                                        <i class="ri-user-fill"></i> Smith John
                                    </p>
                                </div>
                                <br />
                                <div className="card-description">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Voluptates incidunt illo
                                    minus tempore, commodi fuga fugiat eveniet,
                                    perspiciatis dolores quaerat totam saepe non
                                    hic illum earum voluptatum odio laborum
                                    deserunt?
                                </div>
                            </div>
                        </div>
                        <div className="course-card">
                            <div className="card-image">
                                <img src={courseImg3} alt="" />
                            </div>
                            <div className="card-content">
                                <h3>
                                    Cloud Computing & Infastructure Architecture
                                </h3>
                                <div className="content-of-card">
                                    <p>Catergorized</p>
                                    <p>
                                        <i class="ri-user-fill"></i> Carl Smith
                                    </p>
                                </div>
                                <br />
                                <div className="card-description">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Voluptates incidunt illo
                                    minus tempore, commodi fuga fugiat eveniet,
                                    perspiciatis dolores quaerat totam saepe non
                                    hic illum earum voluptatum odio laborum
                                    deserunt?
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Course;
