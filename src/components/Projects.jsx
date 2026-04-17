import { useRef, useState, useEffect } from 'react'
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
      'Interactive telemetry dashboard processing 1,000+ data points per lap, visualizing throttle, brake, RPM, and gear in real time with sector timing and pit-stop analytics.',
    tags: ['React.js', 'Recharts', 'JavaScript'],
    accent: '#8b5cf6',
    github: 'https://github.com/ayaanmec',
    live: 'https://f1-dashboard-obaeeokb8-ayaanmecs-projects.vercel.app/live',
    stats: [{ label: 'Data Points / Lap', value: '1,000+' }, { label: 'Insight Speed', value: '+40%' }],
    details:
      'Simulated race conditions with sector timing and pit-stop analytics. Custom Recharts components render live telemetry overlays with multi-driver comparison support.',
    images: [
      { src: '/f1-live.png', label: 'Live Timing' },
      { src: '/f1-telemetry.png', label: 'Car Telemetry' },
      { src: '/f1-weather.png', label: 'Weather' },
    ],
  },
  {
    id: 3,
    title: 'Sunday Golf',
    description:
      'Browser-based 3D golf game with procedurally generated courses, real-time physics, and full 18-hole scoring — playable entirely in the browser with no downloads.',
    tags: ['Three.js', 'Cannon-ES', 'Simplex Noise', 'React', 'Vite'],
    accent: '#22c55e',
    github: 'https://github.com/ayaanmec',
    stats: [
      { label: 'Holes / Session', value: '18' },
      { label: 'Clubs', value: '8' },
      { label: 'Hole Archetypes', value: '6' },
      { label: 'Game Logic', value: '~2,800 lines' },
      { label: 'Physics + Render', value: '60 fps' },
      { label: 'Scoring', value: 'Par 72' },
    ],
    details:
      'Each session generates a unique seeded 18-hole course using a custom procedural algorithm with 6 hole archetypes: straights, doglegs, S-curves, and double bends, each with intelligently placed bunkers, water carries, and corner trees. A fBm terrain engine streams LOD-based chunks around the ball in real time, carving flat fairway corridors into rolling hills. Ball physics run through Cannon-ES with accurate projectile motion: each of the 8 clubs computes launch velocity from the sin²(2θ) range formula, producing realistic carry distances from driver (280 yds) down to putter. A drag-to-swing input system renders a live 20-point trajectory arc and power indicator before every shot.',
    images: [
      { src: '/Golf.png', label: 'Sunday Golf' },
    ],
  },
  {
    id: 4,
    title: 'Spotify Analytics & Playback Interface',

    description:
      'Personalized music analytics dashboard analyzing listening behaviour and engagement patterns across 50K+ data entries using the Spotify Web API and OAuth 2.0.',
    tags: ['React.js', 'Spotify Web API', 'OAuth 2.0'],
    accent: '#10b981',
    github: 'https://github.com/ayaanmec',
    stats: [{ label: 'Data Entries', value: '50K+' }, { label: 'Engagement Boost', value: '+25%' }],
    details:
      'Implemented OAuth 2.0 PKCE flow for secure Spotify auth. Visualized top tracks, genres, and listening trends with playback control efficiency improvements of 25%.',
    images: [
      { src: '/spotify.png', label: 'Spotify Analytics Dashboard' },
    ],
  },
]

function Lightbox({ images, startIndex, onClose }) {
  const [current, setCurrent] = useState(startIndex)

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') setCurrent((c) => (c + 1) % images.length)
      if (e.key === 'ArrowLeft') setCurrent((c) => (c - 1 + images.length) % images.length)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [images.length, onClose])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
    >
      <div className="relative max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-slate-400 hover:text-white text-sm transition-colors"
        >
          Close ✕
        </button>
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={images[current].src}
            alt={images[current].label}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="w-full rounded-xl border border-slate-700 shadow-2xl"
          />
        </AnimatePresence>
        <p className="text-center text-slate-400 text-sm mt-3">{images[current].label}</p>
        {images.length > 1 && (
          <>
            <button
              onClick={() => setCurrent((c) => (c - 1 + images.length) % images.length)}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 text-white text-3xl hover:text-blue-400 transition-colors"
            >
              ‹
            </button>
            <button
              onClick={() => setCurrent((c) => (c + 1) % images.length)}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 text-white text-3xl hover:text-blue-400 transition-colors"
            >
              ›
            </button>
            <div className="flex justify-center gap-2 mt-3">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${i === current ? 'bg-blue-400' : 'bg-slate-600'}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </motion.div>
  )
}

function ImageCycler({ images, onClickImage }) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setCurrent((c) => (c + 1) % images.length), 3000)
    return () => clearInterval(id)
  }, [images.length])

  return (
    <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-slate-700 cursor-pointer group/img"
      onClick={() => onClickImage(current)}
    >
      <AnimatePresence>
        <motion.img
          key={current}
          src={images[current].src}
          alt={images[current].label}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* Label overlay */}
      <div className="absolute bottom-0 left-0 right-0 px-3 py-2 bg-gradient-to-t from-black/70 to-transparent">
        <p className="text-white text-xs font-medium">{images[current].label}</p>
      </div>

      {/* Expand hint */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity bg-black/20">
        <span className="text-white text-xs bg-black/50 px-3 py-1 rounded-full">Click to expand</span>
      </div>

      {/* Progress dots */}
      <div className="absolute top-2 right-2 flex gap-1">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={(e) => { e.stopPropagation(); setCurrent(i) }}
            className={`w-1.5 h-1.5 rounded-full transition-colors ${i === current ? 'bg-white' : 'bg-white/30'}`}
          />
        ))}
      </div>
    </div>
  )
}

function ProjectCard({ project, index }) {
  const [lightbox, setLightbox] = useState(null)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const hasImages = project.images && project.images.length > 0

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
        className="group relative rounded-2xl border border-slate-800 bg-slate-900/40 hover:border-slate-700 transition-all duration-300 overflow-hidden"
      >
        {/* Top accent bar */}
        <div className="absolute top-0 left-0 right-0 h-px opacity-60" style={{ background: project.accent }} />

        <div className={`flex flex-col ${hasImages ? 'md:flex-row' : ''}`}>
          {/* Info side */}
          <div className={`flex flex-col p-7 ${hasImages ? 'md:w-1/2' : 'w-full'}`}>
            <div className="flex items-start justify-between gap-4 mb-4">
              <h3 className="text-white font-semibold text-xl leading-snug group-hover:text-blue-300 transition-colors">
                {project.title}
              </h3>
              <div className="flex items-center gap-3 shrink-0 mt-1">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-2.5 py-1 rounded-full border border-blue-500/40 text-blue-400 hover:bg-blue-500/10 transition-colors font-medium"
                  >
                    Live ↗
                  </a>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </a>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed mb-5">{project.description}</p>

            <p className="text-slate-500 text-sm leading-relaxed mb-5">{project.details}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-5">
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
              <div className="flex flex-wrap gap-6 mt-auto">
                {project.stats.map((s) => (
                  <div key={s.label}>
                    <p className="font-bold text-base" style={{ color: project.accent }}>{s.value}</p>
                    <p className="text-slate-600 text-xs">{s.label}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Image side */}
          {hasImages && (
            <div className="md:w-1/2 p-4 md:p-5 flex items-center">
              <div className="w-full">
                <ImageCycler images={project.images} onClickImage={setLightbox} />
              </div>
            </div>
          )}
        </div>
      </motion.div>

      <AnimatePresence>
        {lightbox !== null && project.images && (
          <Lightbox
            images={project.images}
            startIndex={lightbox}
            onClose={() => setLightbox(null)}
          />
        )}
      </AnimatePresence>
    </>
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
            A selection of projects, each one solving a real problem with real tech.
          </p>
        </FadeIn>

        <div className="flex flex-col gap-5">
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
