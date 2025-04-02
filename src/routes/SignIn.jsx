import React, { useState } from 'react';
import '../styles/SignIn.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignIn = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                'http://localhost:4000/auth/login',
                formData
            );
            console.log(response.data);
            alert('Login Successful!');
            navigate('/');
        } catch (error) {
            console.error(error.response?.data || error.message);
            alert('Login not successful!');
        }
    };
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
                        <div className="form" onSubmit={handleSubmit}>
                            <form action="POST">
                                <h2>Welcome Back!</h2>
                                <div className="form-group">
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Email address "
                                        required
                                        onChange={handleChange}
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
                                        onChange={handleChange}
                                    />
                                </div>
                                <br />
                                <div className="submit-btn">
                                    <button type="submit">Sign In</button>
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
