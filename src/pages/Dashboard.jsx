import React from 'react';
import '../styles/Dashboard.css';

const Dashboard = () => {
    return (
        <>
            <div className="grid-container">
                <header className="dashboard-header"></header>
                <section className="dashboard-sidebar">
                    <div className="sidebar-items-container">
                        <div className="sidebar-items">
                            <div className="s-item">Dashboard</div>
                            <div className="s-item">Subjects</div>
                            <div className="s-item">Payments</div>
                        </div>
                    </div>
                </section>
                <main className="dashboard-main"></main>
            </div>
        </>
    );
};

export default Dashboard;
