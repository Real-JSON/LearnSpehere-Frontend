import React from 'react';
import '../styles/SignIn.css';

const SignIn = () => {
    return (
        <>
            <div className="signin-form">
                <section>
                    <div className="signin-content">
                        <div className="site-logo">
                            <i className="ri-donut-chart-fill"></i>
                            <span>LearnSphere</span>
                        </div>
                        <div className="signin-text">
                            <p>
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Mollitia, aliquam! Tempora
                                veniam commodi excepturi. Numquam recusandae ad
                            </p>
                        </div>
                    </div>
                    <div className="signin-field">
                        <div className="form">
                            <form action="POST">
                                <div className="form-group">
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Email address"
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
                        </div>
                    </div>
                </section>
            </div>
            <p id="footer-text">All rights reserved &copy; 2025</p>
        </>
    );
};

export default SignIn;
