import React from 'react';
import axios from 'axios';
import '../styles/Register.css';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'; // Import SweetAlert2
import { Formik, Form, Field, ErrorMessage } from 'formik'; // Import Formik components
import * as Yup from 'yup'; // Import Yup for validation

const Register = () => {
    const navigate = useNavigate(); // Initialize navigate

    // Define validation schema using Yup
    const validationSchema = Yup.object({
        firstName: Yup.string()
            .required('First name is required')
            .min(2, 'First name must be at least 2 characters'),
        lastName: Yup.string()
            .required('Last name is required')
            .min(2, 'Last name must be at least 2 characters'),
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
        password: Yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters'),
    });

    // Handle form submission
    const handleSubmit = async (values, { resetForm }) => {
        try {
            const response = await axios.post(
                'http://localhost:4000/auth/register',
                values
            );
            console.log(response.data);

            // Show success message using SweetAlert
            Swal.fire({
                title: 'Success!',
                text: 'Account created successfully!',
                icon: 'success',
                confirmButtonText: 'OK',
            }).then(() => {
                resetForm(); // Reset form fields
                navigate('/'); // Redirect to the home page
            });
        } catch (error) {
            console.error(
                'Error submitting form: ',
                error.response?.data || error.message
            );

            // Show error message using SweetAlert
            Swal.fire({
                title: 'Error!',
                text: 'Account not created successfully!',
                icon: 'error',
                confirmButtonText: 'Try Again',
            });
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
                                    <Formik
                                        initialValues={{
                                            firstName: '',
                                            lastName: '',
                                            email: '',
                                            password: '',
                                        }}
                                        validationSchema={validationSchema}
                                        onSubmit={handleSubmit}
                                    >
                                        {({ isSubmitting }) => (
                                            <Form>
                                                <div className="form-header">
                                                    <h2>Create your account</h2>
                                                    <p>
                                                        Fill all the fields to
                                                        create account.
                                                    </p>
                                                </div>
                                                <div className="grid">
                                                    <div className="form-group">
                                                        <label htmlFor="firstName">
                                                            First name*
                                                        </label>
                                                        <Field
                                                            type="text"
                                                            id="firstName"
                                                            name="firstName"
                                                        />
                                                        <ErrorMessage
                                                            name="firstName"
                                                            component="div"
                                                            className="error"
                                                        />
                                                    </div>
                                                    <br />
                                                    <div className="form-group">
                                                        <label htmlFor="lastName">
                                                            Last name*
                                                        </label>
                                                        <Field
                                                            type="text"
                                                            id="lastName"
                                                            name="lastName"
                                                        />
                                                        <ErrorMessage
                                                            name="lastName"
                                                            component="div"
                                                            className="error"
                                                        />
                                                    </div>
                                                </div>
                                                <br />
                                                <div className="form-group">
                                                    <label htmlFor="email">
                                                        Email*
                                                    </label>
                                                    <Field
                                                        type="email"
                                                        id="email"
                                                        name="email"
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
                                                        Password*
                                                    </label>
                                                    <Field
                                                        type="password"
                                                        id="password"
                                                        name="password"
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
                                                            ? 'Creating account'
                                                            : 'Create account'}
                                                    </button>
                                                </div>
                                            </Form>
                                        )}
                                    </Formik>
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
