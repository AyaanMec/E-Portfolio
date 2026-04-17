import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

function FadeIn({ children, delay = 0, direction = 'up' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 30 : direction === 'down' ? -30 : 0,
      x: direction === 'left' ? 30 : direction === 'right' ? -30 : 0,
    },
    visible: { opacity: 1, y: 0, x: 0 },
  }

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

const awards = [
  'ICE Award',
  'Lassonde Entrance Scholar',
  'IGCSE Cambridge UK',
  'Highest Grades: Physics, Math & Chemistry (A Levels)',
]

export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-16">
          <FadeIn>
            <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">About Me</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Who I am</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-blue-500/30 shadow-lg shadow-blue-500/10 shrink-0">
              <img src="/ayaan.png" alt="Ayaan Mecklai" className="w-full h-full object-cover" />
            </div>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Text */}
          <div className="space-y-5">
            <FadeIn delay={0.1}>
              <p className="text-slate-400 text-base leading-relaxed">
                I'm a third-year Computer Science student at York University's Lassonde School of
                Engineering with a passion for building systems that bridge data and user experience.
                I thrive at the intersection of software engineering, analytics, and product thinking.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-slate-400 text-base leading-relaxed">
                My work spans real-time motion tracking with Unity & WebSockets, telemetry dashboards
                for Formula 1 data, and music analytics platforms. I've also shipped production code
                at a funded AI startup and a Toronto-based mobile app company, each experience
                pushing me to write cleaner, faster, and more impactful code.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="text-slate-400 text-base leading-relaxed">
                Outside of coding I lead digital strategy for Speak To Lead, a non-profit
                empowering 300+ students in India with English and public speaking skills.
                I speak English fluently and German at an intermediate level.
              </p>
            </FadeIn>
          </div>

          {/* Right column */}
          <div className="space-y-4">
            {/* Education card */}
            <FadeIn delay={0.15} direction="left">
              <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/40 hover:border-blue-500/30 transition-colors duration-300">
                <p className="text-xs text-slate-500 uppercase tracking-widest mb-2">Education</p>
                <p className="text-white font-semibold">York University</p>
                <p className="text-slate-400 text-sm">Lassonde School of Engineering</p>
                <p className="text-slate-500 text-sm">B.Sc. Computer Science · Class of 2027</p>
              </div>
            </FadeIn>

            {/* Awards */}
            <FadeIn delay={0.25} direction="left">
              <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/40 hover:border-blue-500/30 transition-colors duration-300">
                <p className="text-xs text-slate-500 uppercase tracking-widest mb-3">Awards & Recognition</p>
                <ul className="space-y-2">
                  {awards.map((award) => (
                    <li key={award} className="flex items-start gap-2 text-sm text-slate-400">
                      <span className="text-blue-500 mt-0.5 shrink-0">▸</span>
                      {award}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            {/* Languages */}
            <FadeIn delay={0.35} direction="left">
              <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/40 hover:border-blue-500/30 transition-colors duration-300">
                <p className="text-xs text-slate-500 uppercase tracking-widest mb-3">Languages</p>
                <div className="flex gap-3">
                  <span className="text-sm px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-800/50 text-slate-300">
                    English: Fluent
                  </span>
                  <span className="text-sm px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-800/50 text-slate-300">
                    German: Intermediate
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        <div className="section-line mt-20" />
      </div>
    </section>
  )
}
