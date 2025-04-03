import React from 'react';
import '../styles/Dashboard.css';

const Dashboard = () => {
    return (
        <>
            <div className="grid-container">
                <header className="dashboard-header"></header>
                <section className="dashboard-sidebar"></section>
                <main className="dashboard-main"></main>
            </div>
        </>
    );
};

export default Dashboard;
