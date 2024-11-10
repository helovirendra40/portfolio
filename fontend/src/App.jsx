import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Navbar from './components/Navbar'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Experiences from './components/Experiences.jsx'
import Skills from './components/Skills.jsx'
import Educations from './components/Educations.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
function App() {

  return (
    <>
    <section className='wrapper'>

      <Navbar />
      <Hero />
      <About />
      <Experiences />
      <Skills />
      <Educations />
      <Projects />
      <Contact />
    </section>
    </>
  )
}

export default App
