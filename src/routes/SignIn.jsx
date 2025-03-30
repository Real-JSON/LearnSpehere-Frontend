import React from 'react';

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
                                velit nobis natus totam dicta iusto possimus
                                quaerat ex? Minus eveniet autem cupiditate.
                            </p>
                        </div>
                    </div>
                    <div className="signin-field">
                        <div className="form">
                            <form action="POST">
                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Enter your email"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        placeholder="Enter your password"
                                        required
                                    />
                                </div>
                                <div className="singin-btn">
                                    <a href="">Sign In</a>
                                </div>
                            </form>
                            <a href="">forget password?</a>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default SignIn;
