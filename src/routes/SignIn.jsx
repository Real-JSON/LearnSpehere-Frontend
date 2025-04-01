import React from 'react';
import '../styles/SignIn.css';
import { Link } from 'react-router-dom';

const SignIn = () => {
    return (
        <>
            <div className="signin-container">
                <section className="signin-form">
                    <div className="signin-content">
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
                    <div className="signin-field">
                        <div className="form">
                            <form action="POST">
                                <h2>Welcome Back!</h2>
                                <div className="form-group">
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Email address "
                                        required
                                    />
                                </div>
                                <br />
                                <div className="form-group">
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        placeholder="Password"
                                        required
                                    />
                                </div>
                                <br />
                                <div className="singin-btn">
                                    <a href="">Sign In</a>
                                </div>
                            </form>
                            <a href="">Forget password?</a>
                            <Link to="/register">Don't have an account?</Link>
                        </div>
                    </div>
                </section>
            </div>
            <p id="footer-text">
                All rights reserved &copy; 2025 • &nbsp;
                <i className="ri-donut-chart-fill"></i> &nbsp;LearnSpehere
            </p>
        </>
    );
};

export default SignIn;
