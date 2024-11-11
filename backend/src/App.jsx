import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'


import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Education from './components/Educations.jsx'
import Experiences from './components/Experiences.jsx'
import Project from './components/Project.jsx'
import Skills from './components/Skills.jsx'
import Dashboard from './components/Dashboard.jsx'
function App() {

  return (
    <>
    <section className='wrapper'>
    <Router>
      <div className='container-fluid'>
          <div className="row">
            <div className='col-md-3 ps-0'>
              <div className='dashboardMenu'>
            <ul>
                <li>
                        <Link to={'/educations'}>Add Educations</Link>
                    </li>
                    <li>
                        <Link to={'/experiences'}>Add Experiences</Link>
                    </li>
                    <li>
                        <Link to={'/skills'}>Add Skill</Link>
                    </li>
                    <li>
                        <Link to={'/projects'}>Add Projects</Link>
                    </li>
                </ul>
                </div>
            </div>
            <div className='col-md-9'>
            
        
        {/* Route for About Page */}
        <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path="/educations" element={<Education />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Project />} />
        </Routes>
        {/* Route for Contact Page
        <Route path="/contact" element={<Contact />} />

        {/* Catch-all route for non-existent pages (404 Not Found) */}
        {/* <Route path="*" element={<NotFound />} /> */} 
      
              </div>
          </div>
      </div>

      
      </Router>
    </section>
    </>
  )
}

export default App
