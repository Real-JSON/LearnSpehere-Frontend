import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2'; // Import SweetAlert2
import { Formik, Form, Field, ErrorMessage } from 'formik'; // Import Formik components
import * as Yup from 'yup'; // Import Yup for validation
import '../styles/SignIn.css';

const SignIn = () => {
    const navigate = useNavigate(); // Initialize navigate

    // Define validation schema using Yup
    const validationSchema = Yup.object({
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
        password: Yup.string().required('Password is required'),
    });

    // Handle form submission
    const handleSubmit = async (values, { resetForm }) => {
        try {
            const response = await axios.post(
                'http://localhost:4000/auth/login',
                values
            );
            console.log(response.data);
            // Redirect to the home page
            navigate('/dashboard').then(() => {
                resetForm(); // Reset form fields
                // Show success message using SweetAlert
                setTimeout(() => {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Login successful!',
                        icon: 'success',
                        confirmButtonText: 'OK',
                    });
                }, 500);
            });
        } catch (error) {
            console.error(error.response?.data || error.message);

            // Show error message using SweetAlert
            Swal.fire({
                title: 'Error!',
                text: 'Login not successful!',
                icon: 'error',
                confirmButtonText: 'Try Again',
            });
        }
    };

    return (
        <div className="signin-container">
            <section className="signin-form">
                <div className="signin-content">
                    <div className="site-logo">
                        <i className="ri-donut-chart-fill"></i>
                        <span>LearnSphere</span>
                    </div>
                    <div className="site-text">
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit.
                        </p>
                    </div>
                </div>
                <div className="signin-field">
                    <div className="form">
                        <Formik
                            initialValues={{
                                email: '',
                                password: '',
                            }}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        >
                            {({ isSubmitting }) => (
                                <Form>
                                    <h2>Welcome Back!</h2>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <Field
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="Email address"
                                        />
                                        <ErrorMessage
                                            name="email"
                                            component="div"
                                            className="error"
                                        />
                                    </div>
                                    <br />
                                    <div className="form-group">
                                        <label htmlFor="password">
                                            Password
                                        </label>
                                        <Field
                                            type="password"
                                            id="password"
                                            name="password"
                                            placeholder="Password"
                                        />
                                        <ErrorMessage
                                            name="password"
                                            component="div"
                                            className="error"
                                        />
                                    </div>
                                    <br />
                                    <div className="submit-btn">
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting
                                                ? 'Signing In...'
                                                : 'Sign In'}
                                        </button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                        <a href="">Forget password?</a>
                        <Link to="/register">Don't have an account?</Link>
                    </div>
                </div>
            </section>
            <p id="footer-text">
                All rights reserved &copy; 2025 • &nbsp;
                <i className="ri-donut-chart-fill"></i> &nbsp;LearnSphere
            </p>
        </div>
    );
};

export default SignIn;
