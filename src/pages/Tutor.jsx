import React from 'react';
import tutorImg from '../assets/Webinar-pana.png';
import '../styles/Tutor.css';

const Tutor = () => {
    return (
        <>
            <div className="tutor-container">
                <section>
                    <div className="tutor-area">
                        <div className="tutor-content">
                            <div className="info-text">
                                <h3>
                                    if you are a certified teacher then{' '}
                                    <span>become an instructor</span>
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Aspernatur explicabo
                                    temporibus accusantium alias, illum tenetur
                                    assumenda obcaecati eligendi voluptatem est
                                    perferendis? Itaque deserunt aspernatur
                                    consequatur est omnis nihil. Facilis,
                                    soluta.
                                </p>
                            </div>
                            <div className="tutor-benefits">
                                <h3>Enjoy Many Perks</h3>
                                <div className="tutor-li">
                                    <ul>
                                        <li>Flexible Schedule</li>
                                        <li>Work from Anywhere</li>
                                        <li>Extra Income</li>
                                        <li>Global Reach</li>
                                    </ul>
                                    <ul>
                                        <li>Flexible Schedule</li>
                                        <li>Work from Anywhere</li>
                                        <li>Extra Income</li>
                                        <li>Global Reach</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="tutor-btn">
                                <a
                                    href=""
                                    id="become-an-instructor"
                                    aria-label="become-an-instructor"
                                >
                                    become an instructor
                                </a>
                            </div>
                        </div>
                        <div className="tutor-image">
                            <img src={tutorImg} alt="" />
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Tutor;
