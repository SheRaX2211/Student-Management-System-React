import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Course from './Components/course/course';
import './App.css';
import LearnMore from './Components/learnmore/learnmore'; 
import Assignments from './Components/assignments/Assignments';
import Materials from './Components/materials/Materials'; 
import VisitCourse from './Components/visitcourse/VisitCourse';
import Dashboard from './Components/dashboard/dashboard';
import EnrollCourse from './Components/enroll/EnrollCourse';







function App() {
    return(
    <Router>
        <div>
            <Routes>
                {/* Define the route for the Course component */}
                <Route path="/" element={<Course />} />

                {/* Define the route for the Learn More component */}
                <Route path="/learnmore" element={<LearnMore />} />

                <Route path="/course" element={<Course />} />
                <Route path="/assignments" element={<Assignments />} />
                <Route path="/materials" element={<Materials />} />
                <Route path="/visitcourse" element={<VisitCourse />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/enrollcourse" element={<EnrollCourse />} />

            </Routes>
        </div>
    </Router>
    );

    }

export default App;


