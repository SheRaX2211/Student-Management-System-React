import './course.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function Course() {
  return (
    <div className="courses">
      <nav>
        <img src= {require("./logo.png")} alt="" height="150" width="150" />
        <div className="navigation">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home">
        <h2>Student Management System</h2>
        <p>
          This school management software is for learning, administration, and management 
          activities in schools, colleges, universities, tuition centers, or training centers.
          Our free school management system manages everything starting from admission to attendance
          and exams to result in cards.
        </p>

        <div className="btn">
          {/* <a href="blue">Learn More</a> */}
          <Link to="/learnmore">Learn More</Link>
          <Link to="/VisitCourse">Visit Course</Link>
        </div>
      </section>

      {/* Features Section */}
      <section id="features">
        <h1>Awesome Features</h1>
        <p>Replenish man have thing gathering lights yielding shall you</p>
        <div className="fea-base">
          <div className="fea-box">
            <i className="fa-solid fa-info"></i>
            <h3>Student Information Management</h3>
            <p>One make creepeth, man bearing there firmament won't great heaven</p>
          </div>
          <div className="fea-box">
            <i className="fa-solid fa-clipboard-user"></i>
            <h3>Attendance Management</h3>
            <p>One make creepeth, man bearing there firmament won't great heaven</p>
          </div>
          <div className="fea-box">
            <i className="fas fa-award"></i>
            <h3>Fee Management</h3>
            <p>One make creepeth, man bearing there firmament won't great heaven</p>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses">
        <h1>Our Popular Courses</h1>
        <p>Replenish man have thing gathering lights yielding shall you</p>
        <div className="course-box">
          <div className="courses">
            <img src={require("./maths.jpg")} alt="" height="150" width="150" />
            <div className="details">
              <span>Updated 21/8/21</span>
              <h6>Combine Maths Course</h6>
              <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <span>(239)</span>
              </div>
            </div>
            <div className="cost">$49.99</div>

            <img src={require("./science.png")} alt="" />
            <div className="details">
              <span>Updated 21/8/21</span>
              <h6>Data Science Course</h6>
              <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <span>(239)</span>
              </div>
            </div>
            <div className="cost">$49.99</div>

            <img src={require("./ict.png")} alt="" />
            <div className="details">
              <span>Updated 21/8/21</span>
              <h6>ICT Course</h6>
              <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <span>(239)</span>
              </div>
            </div>
            <div className="cost">$49.99</div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="registration">
        <div className="reminder">
          <p>Get 100 Online Courses for Free</p>
          <h1>Register To Get It</h1>
          <div className="time">
            <div className="date">18 <br /> Days</div>
            <div className="date">23 <br /> Hours</div>
            <div className="date">06 <br /> Minutes</div>
            <div className="date">58 <br /> Seconds</div>
          </div>
        </div>

        <div className="form">
          <h3>Create Free Account NOW!</h3>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number" />
          <div className="btn">
            
          <Link to="/dashboard">Submit Form</Link>
          </div>
        </div>
      </section>

      {/* Profiles */}
      <section id="experts">
      <h1>Community Experts</h1>
      <p>Replenish man have thing gathering lights yielding shall you</p>
      <div className="expert-box">

        <div className="profiles">
              <img src={require("./person 1.jpg")} width={250} height={250} alt=""></img>
              <h6>Maria Montessori</h6>
              <p>An Italian physician and educator</p>
             </div>

             <div className="profiles">
              <img src={require("./person 2.jpg")} width={250} height={250} alt=""></img>
              <h6>john dewey</h6>
              <p>American philosopher, psychologist, and educational reformer</p>
             </div>

             <div className="profiles">
              <img src={require("./person 3.jpeg")} width={250} height={250} alt=""></img>
              <h6>Paulo Freire</h6>
              <p> Brazilian educator and philosopher</p>
             </div>

             <div className="profiles">
              <img src={require("./person 4.jpeg")} width={250} height={250} alt=""></img>
              <h6>Jean Piaget</h6>
              <p>Swiss psychologist</p>
             </div>
      </div>
      </section>
     <footer>
       <div className="footer-col">
        <h3>Top Products</h3>
        <li>Improves Communication</li>
        <li>Increases enrollment rate</li>
        <li>Improves resource management</li>
        <li>Centralizes data management</li>
       </div>

       <div className="footer-col">
        <h3>Top Products</h3>
        <li>Improves Communication</li>
        <li>Increases enrollment rate</li>
        <li>Centralizes data management</li>
       </div>

       <div className="footer-col">
        <h3>Top Products</h3>
        <li>Improves Communication</li>
        <li>Improves resource management</li>
        <li>Centralizes data management</li>
       </div>

       <div className="footer-col">
        <h3>Top Products</h3>
        <li>Improves Communication</li>
        <li>Increases enrollment rate</li>
      
       </div>

       <div className="footer-col">
        <h3>Newsletter</h3>
        <p>Thank you for being a part of our Student Management System community! Stay tuned for more updates, tips, and stories in the next edition</p>
        <div className="subscribe">
          <input type="text" placeholder="Your Email adress"></input>
          <a href="#" className="yell">SUBSCRIBE</a>
        </div>
       </div>

       <div className="copyright">
        <p>Copyright ©2021 All rights reserved | This template is made by Sheran Adeesha </p>
         <div className="pro-links">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-linkedin-in"></i>

         </div>
       </div>
     </footer>

    </div>

  );
}

export default Course;
