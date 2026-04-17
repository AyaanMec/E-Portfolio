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

const pillars = [
  {
    label: 'Research that ships',
    body: 'Not papers that sit in journals, but systems that reach millions of users and change how they interact with information.',
  },
  {
    label: 'Real-time at scale',
    body: 'Drawn to problems where data moves fast, decisions happen in real time, and the margin for error is small.',
  },
  {
    label: 'Build something of my own',
    body: 'Every role, every system, every dataset is teaching me what it takes. For now that means going deep: on infrastructure, on ML pipelines, on code that lasts.',
  },
]

export default function Goals() {
  return (
    <section id="goals" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Long-Term Goals
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Where I'm headed</h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-slate-400 text-base leading-relaxed max-w-3xl mb-16">
            My long-term aim is to work at the intersection of AI research and real-world systems,
            building things that don't just demonstrate intelligence but actually scale to people's
            lives. In five to ten years I want to be doing research that ships, whether through a
            research role at a major company or through something I build myself. The goal is the
            same: work that has a measurable impact at scale.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <FadeIn key={pillar.label} delay={0.15 + i * 0.1} direction="up">
              <div className="h-full p-6 rounded-xl border border-slate-800 bg-slate-900/40 hover:border-blue-500/30 transition-colors duration-300 flex flex-col gap-3">
                <span className="text-blue-500 text-lg">▸</span>
                <p className="text-white font-semibold text-sm">{pillar.label}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{pillar.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="section-line mt-20" />
      </div>
    </section>
  )
}
