// src/Components/Dashboard/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';


const Sidebar = () => {
    return (
        <div className="sidebar">
            <h2>Student Management System</h2>
            <ul>
                <li><Link to="/dashboard/students">Students</Link></li>
                <li><Link to="/dashboard/courses">Courses</Link></li>
                <li><Link to="/dashboard/assignments">Assignments</Link></li>
                <li><Link to="/dashboard/materials">Materials</Link></li>
            </ul>
        </div>
    );
};

export default Sidebar;
