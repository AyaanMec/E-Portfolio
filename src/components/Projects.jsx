import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

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

const projects = [
  {
    id: 1,
    title: 'Motion-Controlled Visualization System',
    description:
      'Cross-platform 3D visualization tool streaming real-time motion data at 60 Hz from smartphones to PCs, achieving 95% tracking accuracy.',
    tags: ['Unity', 'C#', 'JavaScript', 'Android', 'WebSocket'],
    accent: '#3b82f6',
    github: 'https://github.com/ayaanmec',
    stats: [{ label: 'Refresh Rate', value: '60 Hz' }, { label: 'Tracking Accuracy', value: '95%' }, { label: 'Latency Reduction', value: '30%' }],
    details:
      'Built a modular wireless system enabling control of 3D environments from a smartphone. Reduced latency by 30% through optimized WebSocket data transmission and Unity rendering pipeline.',
  },
  {
    id: 2,
    title: 'Formula 1 Performance Analytics Dashboard',
    description:
      'Interactive telemetry dashboard processing 1,000+ data points per lap — visualizing throttle, brake, RPM, and gear in real time with sector timing and pit-stop analytics.',
    tags: ['React.js', 'Recharts', 'JavaScript'],
    accent: '#8b5cf6',
    github: 'https://github.com/ayaanmec',
    stats: [{ label: 'Data Points / Lap', value: '1,000+' }, { label: 'Insight Speed', value: '+40%' }],
    details:
      'Simulated race conditions with sector timing and pit-stop analytics. Custom Recharts components render live telemetry overlays with multi-driver comparison support.',
  },
  {
    id: 3,
    title: 'Spotify Analytics & Playback Interface',
    description:
      'Personalized music analytics dashboard analyzing listening behaviour and engagement patterns across 50K+ data entries using the Spotify Web API and OAuth 2.0.',
    tags: ['React.js', 'Spotify Web API', 'OAuth 2.0'],
    accent: '#10b981',
    github: 'https://github.com/ayaanmec',
    stats: [{ label: 'Data Entries', value: '50K+' }, { label: 'Engagement Boost', value: '+25%' }],
    details:
      'Implemented OAuth 2.0 PKCE flow for secure Spotify auth. Visualized top tracks, genres, and listening trends with playback control efficiency improvements of 25%.',
  },
]

function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: 'easeOut' }}
      className="group relative p-6 rounded-2xl border border-slate-800 bg-slate-900/40 hover:border-slate-700 transition-all duration-300 hover:-translate-y-1"
      style={{ '--accent': project.accent }}
    >
      {/* Top accent bar */}
      <div
        className="absolute top-0 left-6 right-6 h-px rounded-full opacity-60"
        style={{ background: project.accent }}
      />

      <div className="flex items-start justify-between gap-4 mb-4">
        <h3 className="text-white font-semibold text-lg leading-snug group-hover:text-blue-300 transition-colors">
          {project.title}
        </h3>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 text-slate-500 hover:text-white transition-colors mt-1"
          aria-label="GitHub"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
          </svg>
        </a>
      </div>

      <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2.5 py-1 rounded-full border border-slate-700 text-slate-400 bg-slate-800/50"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Stats */}
      {project.stats && (
        <div className="flex flex-wrap gap-3 mb-4">
          {project.stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-white font-bold text-sm" style={{ color: project.accent }}>{s.value}</p>
              <p className="text-slate-600 text-xs">{s.label}</p>
            </div>
          ))}
        </div>
      )}

      {/* Expand toggle */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="text-sm text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1"
      >
        {expanded ? 'Less detail' : 'More detail'}
        <motion.span animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
          ↓
        </motion.span>
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="text-slate-500 text-sm leading-relaxed mt-3 overflow-hidden"
          >
            {project.details}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">Projects</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What I've built
          </h2>
          <p className="text-slate-500 mb-14 max-w-lg">
            A selection of projects — each one solving a real problem with real tech.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="mt-10 text-center">
            <a
              href="https://github.com/ayaanmec"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium"
            >
              View all projects on GitHub
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </FadeIn>

        <div className="section-line mt-20" />
      </div>
    </section>
  )
}
