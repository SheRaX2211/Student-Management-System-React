// src/Components/Dashboard/Dashboard.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <Sidebar />
            <div className="main-content">
                <Navbar />
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;
