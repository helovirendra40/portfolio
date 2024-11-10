import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Education from './components/dashboard/Educations.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Experiences from './components/dashboard/Experiences.jsx'
// import Skills from './components/dashboard/skills.jsx'
import Project from './components/dashboard/Project.jsx'
import Skills from './components/dashboard/Skills.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <Router>
      {/* Define your routes inside the Router */}
      <Routes>
        {/* Route for Home Page */}
        <Route path="/" element={<App />} />
        
        {/* Route for About Page */}
        <Route path="/dashboard-educations" element={<Education />} />
        <Route path="/dashboard-experiences" element={<Experiences />} />
        <Route path="/dashboard-skills" element={<Skills />} />
        <Route path="/dashboard-projects" element={<Project />} />

        {/* Route for Contact Page
        <Route path="/contact" element={<Contact />} />

        {/* Catch-all route for non-existent pages (404 Not Found) */}
        {/* <Route path="*" element={<NotFound />} /> */} 
      </Routes>
    </Router>
  </StrictMode>,
)
