import React from 'react';
import '../styles/Dashboard.css';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <>
            <div className="grid-container">
                <header className="dashboard-header">
                    <div className="nav-list">
                        <Link to="/" className="logo">
                            {' '}
                            <i className="ri-donut-chart-fill"></i>
                            <span>LearnSphere</span>
                        </Link>
                        {/* Add the 'open' class dynamically based on state */}
                        <ul className="nav-items">
                            <li>
                                <i class="ri-user-3-fill"></i> Profile
                            </li>
                            <li>
                                <i class="ri-settings-4-line"></i> Settings
                            </li>
                        </ul>
                    </div>
                </header>
                <section className="dashboard-sidebar">
                    <div className="sidebar-items-container">
                        <div className="sidebar-items">
                            <div className="s-item">
                                <i class="ri-dashboard-fill"></i> Dashboard
                            </div>
                            <div className="s-item">
                                <i class="ri-book-open-fill"></i> Subjects
                            </div>
                            <div className="s-item">
                                <i class="ri-money-dollar-circle-line"></i>{' '}
                                Payments
                            </div>
                            <div className="s-item">
                                <i class="ri-refund-2-line"></i> Payment History
                            </div>
                        </div>
                    </div>
                </section>
                <main className="dashboard-main">
                    <div className="dashboard-card"></div>
                    <div className="dashboard-card"></div>
                    <div className="dashboard-card"></div>
                    <div className="dashboard-card"></div>
                    <div className="dashboard-card"></div>
                    <div className="dashboard-card"></div>
                </main>
            </div>
        </>
    );
};

export default Dashboard;
