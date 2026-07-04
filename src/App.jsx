import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Awards from './components/Awards'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <Hero />
      <Skills />
      <About />
      <Experience />
      <Projects />
      <Awards />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
