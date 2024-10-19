import React, { useState } from 'react';
import './EnrollCourse.css';


const Enroll = () => {
  // State to manage form data
  const [studentName, setStudentName] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [isEnrolled, setIsEnrolled] = useState(false);

  // Mock available courses data (this can be fetched from an API)
  const courses = [
    { id: 1, name: 'Mathematics 101' },
    { id: 2, name: 'Physics 201' },
    { id: 3, name: 'Chemistry 301' },
    { id: 4, name: 'Computer Science 101' }
  ];

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Ensure both fields are filled
    if (studentName && selectedCourse) {
      // Simulate enrolling a student by setting state
      setIsEnrolled(true);
      
      // Clear form fields
      setStudentName('');
      setSelectedCourse('');
    }
  };

  return (
    <div className="enroll-course">
      <h2>Enroll in a Course</h2>
      <form onSubmit={handleSubmit}>
        {/* Student Name Input */}
        <div className="form-group">
          <label>Student Name:</label>
          <input
            type="text"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            placeholder="Enter your name"
            required
          />
        </div>

        {/* Course Selection Dropdown */}
        <div className="form-group">
          <label>Select Course:</label>
          <select
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
            required
          >
            <option value="">-- Select a Course --</option>
            {courses.map(course => (
              <option key={course.id} value={course.name}>
                {course.name}
              </option>
            ))}
          </select>
        </div>

        {/* Submit Button */}
        <button type="submit">Enroll</button>
      </form>

      {/* Enrollment Success Message */}
      {isEnrolled && (
        <div className="success-message">
          <p>You have successfully enrolled in the course!</p>
        </div>
      )}
    </div>
  );
};

export default Enroll;
