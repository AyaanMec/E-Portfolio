import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-scroll'
import { Link as RouterLink, useLocation } from 'react-router-dom'

const navLinks = ['About', 'Experience', 'Projects', 'Skills', 'Goals', 'Contact']

const THEMES = [
  { id: 'terminal', label: 'Terminal', swatch: '#b5f5a0' },
  { id: 'warm',     label: 'Warm',     swatch: '#c2410c' },
  { id: 'minimal',  label: 'Minimal',  swatch: '#111111' },
]

export default function Navbar({ theme, setTheme }) {
  const [scrolled, setScrolled]     = useState(false)
  const [menuOpen, setMenuOpen]     = useState(false)
  const [themeOpen, setThemeOpen]   = useState(false)
  const themeRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close theme dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (themeRef.current && !themeRef.current.contains(e.target)) {
        setThemeOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const currentTheme = THEMES.find((t) => t.id === theme) || THEMES[0]

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={scrolled ? { backgroundColor: 'color-mix(in srgb, var(--bg) 90%, transparent)' } : {}}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-md border-b border-blue-500/10 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        {isHome ? (
          <Link to="hero" smooth duration={600} className="cursor-pointer">
            <span className="text-xl font-bold gradient-text tracking-tight">AM</span>
          </Link>
        ) : (
          <RouterLink to="/">
            <span className="text-xl font-bold gradient-text tracking-tight">AM</span>
          </RouterLink>
        )}

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link}>
              {isHome ? (
                <Link
                  to={link.toLowerCase()}
                  smooth
                  duration={600}
                  offset={-80}
                  className="text-sm text-slate-400 hover:text-blue-400 transition-colors duration-200 cursor-pointer font-medium tracking-wide"
                  activeClass="text-blue-400"
                  spy
                >
                  {link}
                </Link>
              ) : (
                <a
                  href={`/#${link.toLowerCase()}`}
                  className="text-sm text-slate-400 hover:text-blue-400 transition-colors duration-200 cursor-pointer font-medium tracking-wide"
                >
                  {link}
                </a>
              )}
            </li>
          ))}

          {/* More About Me */}
          <li>
            <RouterLink
              to="/portfolio"
              className="text-sm text-slate-400 hover:text-blue-400 transition-colors duration-200 cursor-pointer font-medium tracking-wide"
            >
              More About Me
            </RouterLink>
          </li>

          {/* Resume */}
          <li>
            <a
              href="/resume.pdf"
              download="Ayaan_Mecklai_Resume.pdf"
              className="text-sm px-4 py-2 border border-blue-500/50 text-blue-400 rounded-lg hover:bg-blue-500/10 transition-all duration-200 font-medium"
            >
              Resume
            </a>
          </li>

          {/* Theme switcher */}
          <li ref={themeRef} className="relative">
            <button
              onClick={() => setThemeOpen((o) => !o)}
              className="flex items-center gap-2 text-sm text-slate-400 hover:text-blue-400 transition-colors duration-200 font-medium"
              aria-label="Switch theme"
            >
              <span
                className="w-3 h-3 rounded-full border border-white/20 shrink-0"
                style={{ backgroundColor: currentTheme.swatch }}
              />
              {currentTheme.label}
              <motion.span
                animate={{ rotate: themeOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="text-xs"
              >
                ▾
              </motion.span>
            </button>

            <AnimatePresence>
              {themeOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: -6, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -6, scale: 0.97 }}
                  transition={{ duration: 0.15 }}
                  style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}
                  className="absolute right-0 top-full mt-2 w-36 rounded-xl border py-1.5 shadow-xl backdrop-blur-md z-50"
                >
                  {THEMES.map((t) => (
                    <li key={t.id}>
                      <button
                        onClick={() => { setTheme(t.id); setThemeOpen(false) }}
                        className="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-slate-400 hover:text-blue-400 transition-colors duration-150"
                      >
                        <span
                          className="w-3 h-3 rounded-full shrink-0 border border-white/10"
                          style={{ backgroundColor: t.swatch }}
                        />
                        {t.label}
                        {t.id === theme && (
                          <span className="ml-auto text-blue-400 text-xs">✓</span>
                        )}
                      </button>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-slate-400 hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{ backgroundColor: 'color-mix(in srgb, var(--bg) 95%, transparent)', borderColor: 'var(--border)' }}
            className="md:hidden backdrop-blur-md border-b"
          >
            <ul className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => (
                <li key={link}>
                  {isHome ? (
                    <Link
                      to={link.toLowerCase()}
                      smooth duration={600} offset={-80}
                      className="text-slate-400 hover:text-blue-400 transition-colors cursor-pointer font-medium"
                      onClick={() => setMenuOpen(false)}
                    >
                      {link}
                    </Link>
                  ) : (
                    <a
                      href={`/#${link.toLowerCase()}`}
                      className="text-slate-400 hover:text-blue-400 transition-colors font-medium"
                      onClick={() => setMenuOpen(false)}
                    >
                      {link}
                    </a>
                  )}
                </li>
              ))}
              <li>
                <RouterLink
                  to="/portfolio"
                  className="text-slate-400 hover:text-blue-400 transition-colors font-medium"
                  onClick={() => setMenuOpen(false)}
                >
                  More About Me
                </RouterLink>
              </li>
              <li>
                <a href="/resume.pdf" download="Ayaan_Mecklai_Resume.pdf"
                  className="text-blue-400 font-medium" onClick={() => setMenuOpen(false)}>
                  Resume
                </a>
              </li>
              {/* Mobile theme switcher */}
              <li className="pt-2 border-t border-slate-800">
                <p className="text-xs text-slate-600 uppercase tracking-widest mb-2">Theme</p>
                <div className="flex gap-2 flex-wrap">
                  {THEMES.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => { setTheme(t.id); setMenuOpen(false) }}
                      className={`flex items-center gap-1.5 text-xs px-2.5 py-1.5 rounded-lg border transition-colors ${
                        t.id === theme ? 'text-blue-400 border-blue-500/50' : 'text-slate-400 border-slate-700'
                      }`}
                    >
                      <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: t.swatch }} />
                      {t.label}
                    </button>
                  ))}
                </div>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
