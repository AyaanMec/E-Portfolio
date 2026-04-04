import { useState, useEffect } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Cursor from './components/Cursor'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Goals from './components/Goals'
import Contact from './components/Contact'

export default function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme') || 'terminal'
  )

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <div className="min-h-screen">
      <Cursor />
      <Navbar theme={theme} setTheme={setTheme} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Goals />
        <Contact />
      </main>
    </div>
  )
}
