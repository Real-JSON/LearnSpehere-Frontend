import React from 'react';
import '../styles/Register.css';

const Register = () => {
    return (
        <>
            <div className="register-form-container">
                <section>
                    <div className="register-container">
                        <div className="register-area">
                            <div className="site-content">
                                <div className="site-logo">
                                    <i className="ri-donut-chart-fill"></i>
                                    <span>LearnSphere</span>
                                </div>
                                <div className="site-text">
                                    <p>
                                        Lorem ipsum, dolor sit amet consectetur
                                        adipisicing elit.
                                    </p>
                                </div>
                            </div>
                            <div className="register-form">
                                <div className="reg-form">
                                    <form action="" method="post">
                                        <div className="form-header">
                                            <h2>Create your account</h2>
                                            <p>
                                                Fill all the fields to create
                                                account.
                                            </p>
                                        </div>
                                        <div className="grid">
                                            <div className="form-group">
                                                <label htmlFor="firstName">
                                                    First name*
                                                </label>
                                                <input
                                                    type="text"
                                                    id="firstName"
                                                    name="firstName"
                                                    required
                                                />
                                            </div>
                                            <br />
                                            <div className="form-group">
                                                <label htmlFor="lastName">
                                                    Last name*
                                                </label>
                                                <input
                                                    type="text"
                                                    id="lastName"
                                                    name="lastName"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <br />
                                        <div className="form-group">
                                            <label htmlFor="email">
                                                Email*
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                            />
                                        </div>
                                        <br />
                                        <div className="form-group">
                                            <label htmlFor="email">
                                                Password*
                                            </label>
                                            <input
                                                type="password"
                                                id="password"
                                                name="password"
                                                required
                                            />
                                        </div>

                                        <br />
                                        <div className="singin-btn">
                                            <a href="">Create account</a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <p id="footer-txt">
                            All rights reserved &copy; 2025 • &nbsp;
                            <i className="ri-donut-chart-fill"></i>{' '}
                            &nbsp;LearnSpehere
                        </p>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Register;
