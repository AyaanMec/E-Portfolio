import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

function FadeIn({ children, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

const contactLinks = [
  {
    label: 'Email',
    value: 'ayaanmec@my.yorku.ca',
    href: 'mailto:ayaanmec@my.yorku.ca',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'ayaan-mecklai',
    href: 'https://www.linkedin.com/in/ayaan-mecklai-7ba9b9278/',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: 'ayaanmec',
    href: 'https://github.com/ayaanmec',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: 'Phone',
    value: '+1 (437) 463-1419',
    href: 'tel:+14374631419',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">Contact</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let's connect
          </h2>
          <p className="text-slate-500 mb-14 max-w-lg">
            Whether it's an internship, project collab, or just a chat — my inbox is always open.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          {contactLinks.map((item, i) => (
            <FadeIn key={item.label} delay={i * 0.1}>
              <a
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-4 p-5 rounded-xl border border-slate-800 bg-slate-900/40 hover:border-blue-500/30 hover:-translate-y-0.5 transition-all duration-200 group"
              >
                <div className="p-2.5 rounded-lg border border-slate-700 bg-slate-800/50 text-slate-400 group-hover:text-blue-400 group-hover:border-blue-500/30 transition-colors">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest mb-0.5">{item.label}</p>
                  <p className="text-white font-medium text-sm">{item.value}</p>
                </div>
                <div className="ml-auto text-slate-600 group-hover:text-blue-400 group-hover:translate-x-1 transition-all">
                  →
                </div>
              </a>
            </FadeIn>
          ))}
        </div>

        {/* Footer */}
        <FadeIn delay={0.4}>
          <div className="section-line mb-8" />
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-600 text-sm">
            <p>© 2026 Ayaan Mecklai. Built with React + Framer Motion.</p>
            <a
              href="/resume.pdf"
              download="Ayaan_Mecklai_Resume.pdf"
              className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
            >
              Download Resume →
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
