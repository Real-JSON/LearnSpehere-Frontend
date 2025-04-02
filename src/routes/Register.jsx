import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Register.css';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });

    const navigate = useNavigate(); // Initialize navigate

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                'http://localhost:4000/auth/register',
                formData
            );
            console.log(response.data);
            alert('Account created successfully!');

            navigate('/'); // Redirect to the home page
        } catch (error) {
            console.error(
                'Error submitting form: ',
                error.response?.data || error.message
            );
            alert('Account not created successfully!');
        }
    };
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
                                    <form
                                        action=""
                                        method="post"
                                        onSubmit={handleSubmit}
                                    >
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
                                                    onChange={handleChange}
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
                                                    onChange={handleChange}
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
                                                onChange={handleChange}
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
                                                onChange={handleChange}
                                            />
                                        </div>

                                        <br />
                                        <div className="submit-btn">
                                            <button type="submit">
                                                Create account
                                            </button>
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
