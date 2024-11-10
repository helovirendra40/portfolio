import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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
      {/* Define your routes inside the Router */}
      <Routes>
        
        {/* Route for About Page */}
        <Route path='/' element={<Dashboard />} />
        <Route path="/educations" element={<Education />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Project />} />

        {/* Route for Contact Page
        <Route path="/contact" element={<Contact />} />

        {/* Catch-all route for non-existent pages (404 Not Found) */}
        {/* <Route path="*" element={<NotFound />} /> */} 
      </Routes>
    </Router>
    </section>
    </>
  )
}

export default App
