import React from 'react';
import '../DashboardComponent/DashboardComponent.css';

const DashboardMain = () => {
    return (
        <>
            <div className="dashboard-area">
                <div className="dashboard-card">
                    <div className="card-content">
                        <h2>Overview</h2>
                    </div>
                </div>
                <div className="dashboard-card">
                    <div className="card-content">
                        <h2>Progress</h2>
                    </div>
                </div>
                <div className="dashboard-card">
                    <div className="card-content">
                        <h2>Courses</h2>
                    </div>
                </div>
                <div className="dashboard-card">
                    <div className="card-content">
                        <h2>Calendar</h2>
                    </div>
                </div>
                <div className="dashboard-card">
                    <div className="card-content">
                        <h2>Certificates</h2>
                    </div>
                </div>
                <div className="dashboard-card">
                    <div className="card-content">
                        <h2>Resources</h2>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DashboardMain;
