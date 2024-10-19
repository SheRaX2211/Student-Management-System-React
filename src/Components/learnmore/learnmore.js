// src/components/LearnMorePage.js
import React from 'react';
import './learnmore.css'; // Optional CSS for styling

const LearnMore = () => {
  return (
    <div className="learn-more-container">
      <header className="header">
        <h1>Learn More about [SMS Name]</h1>
        <p>Your complete solution for managing student data efficiently.</p>
      </header>

      <section className="features">
        <h2>Key Features</h2>
        <div className="feature-item">
          <h3>1. Student Enrollment and Admissions</h3>
          <p>
            Manage student admissions seamlessly, from applications to
            enrollment. Track and store student information all in one place.
          </p>
        </div>

        <div className="feature-item">
          <h3>2. Attendance Tracking</h3>
          <p>
            Keep track of student attendance with real-time updates. Generate
            attendance reports for teachers, parents, and administrators.
          </p>
        </div>

        <div className="feature-item">
          <h3>3. Grade Management</h3>
          <p>
            Simplify grading processes with customizable grading systems,
            automated report cards, and easy grade access for students and
            parents.
          </p>
        </div>

        <div className="feature-item">
          <h3>4. Communication Tools</h3>
          <p>
            Connect with students and parents using built-in messaging, email,
            and SMS notifications for updates on attendance, grades, and more.
          </p>
        </div>

        <div className="feature-item">
          <h3>5. Timetable and Scheduling</h3>
          <p>
            Easily create, manage, and customize timetables for classes and
            exams.
          </p>
        </div>

        <div className="feature-item">
          <h3>6. Fee Management</h3>
          <p>
            Simplify fee collection, track payments, and generate invoices and
            receipts.
          </p>
        </div>

        <div className="feature-item">
          <h3>7. Reports and Analytics</h3>
          <p>
            Generate detailed reports and analytics to support better
            decision-making and improve academic performance.
          </p>
        </div>
      </section>

      <section className="benefits">
        <h2>Why Choose [SMS Name]?</h2>
        <ul>
          <li>User-Friendly Interface</li>
          <li>Customizable to Meet Your Institution’s Needs</li>
          <li>Cloud-Based for Anytime, Anywhere Access</li>
          <li>High-Level Security with Data Encryption</li>
          <li>24/7 Customer Support</li>
        </ul>
      </section>

      <section className="faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <h3>Q: Can [SMS Name] integrate with other systems?</h3>
          <p>A: Yes, it integrates with third-party apps, including payment gateways and LMS.</p>
        </div>

        <div className="faq-item">
          <h3>Q: Is it suitable for large institutions?</h3>
          <p>A: Absolutely! [SMS Name] is scalable and ideal for both small and large educational institutions.</p>
        </div>

        <div className="faq-item">
          <h3>Q: How is data security handled?</h3>
          <p>A: [SMS Name] uses encryption and follows best practices to ensure data security.</p>
        </div>
      </section>

      <section className="call-to-action">
        <h2>Schedule a Demo</h2>
        <p>Ready to see how [SMS Name] can help your institution? Book a personalized demo now!</p>
        <button className="demo-button">Book a Demo</button>
      </section>

      <footer className="footer">
        <h2>Contact Us</h2>
        <p>Email: support@[smsname].com</p>
        <p>Phone: 123-456-7890</p>
      </footer>
    </div>
  );
};

export default LearnMore;
