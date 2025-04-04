import React from 'react';
import '../styles/Dashboard.css';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <>
            <div className="grid-container">
                <header className="dashboard-header">
                    <div className="nav-list">
                        <a href="#home" className="logo">
                            <i className="ri-donut-chart-fill"></i>
                            <span>LearnSphere</span>
                        </a>
                        {/* Add the 'open' class dynamically based on state */}
                        <ul className="nav-items">
                            <li>
                                <Link to="/" className="active">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <a href="#about">About</a>
                            </li>
                            <li>
                                <a href="#courses">Courses</a>
                            </li>
                            <li>
                                <a href="#tutor">Become a Tutor</a>
                            </li>
                            <li>
                                <a href="#contact">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </header>
                <section className="dashboard-sidebar">
                    <div className="sidebar-items-container">
                        <div className="sidebar-items">
                            <div className="s-item">Dashboard</div>
                            <div className="s-item">Subjects</div>
                            <div className="s-item">Payments</div>
                            <div className="s-item">Payment History</div>
                        </div>
                    </div>
                </section>
                <main className="dashboard-main"></main>
            </div>
        </>
    );
};

export default Dashboard;
