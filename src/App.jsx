import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Goals from './components/Goals'
import Contact from './components/Contact'
import Portfolio from './pages/Portfolio'

function ScrollHandler() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50)
        return
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname, hash])

  return null
}

function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </main>
  )
}

export default function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme') || 'terminal'
  )

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <ScrollHandler />
        <Navbar theme={theme} setTheme={setTheme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
