// src/Components/course/Course.js
import React from 'react';
import { Link } from 'react-router-dom';
import './VisitCourse.css'; // Custom CSS for the course page

const VisitCourse = () => {
    // Example course data, could be fetched from an API
    const courseDetails = {
        name: "Introduction to Computer Science",
        code: "CS101",
        description: "This course provides an introduction to the fundamental concepts of computer science, including algorithms, data structures, and programming languages.",
        instructor: "Dr. Jane Doe",
        schedule: "Monday & Wednesday, 10:00 AM - 12:00 PM",
        studentsEnrolled: [
            { id: 1, name: "John Smith" },
            { id: 2, name: "Alice Johnson" },
            { id: 3, name: "Mark Brown" },
        ],
    };

    return (
        <div className="course-container">
            <h1>{courseDetails.name} ({courseDetails.code})</h1>
            <p><strong>Description:</strong> {courseDetails.description}</p>
            <p><strong>Instructor:</strong> {courseDetails.instructor}</p>
            <p><strong>Schedule:</strong> {courseDetails.schedule}</p>

            <h2>Enrolled Students</h2>
            <ul>
                {courseDetails.studentsEnrolled.map(student => (
                    <li key={student.id}>{student.name}</li>
                ))}
            </ul>

            {/* Action Links */}
            <div className="course-actions">
                <Link to="/assignments" className="action-link">View Assignments</Link>
                <Link to="/materials" className="action-link">Access Study Materials</Link>
                <Link to="/EnrollCourse" className="action-link">Enroll in Course</Link>
            </div>
        </div>
    );
};

export default VisitCourse;
