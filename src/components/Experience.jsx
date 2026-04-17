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

const experiences = [
  {
    company: 'MyRide901',
    role: 'Mobile App Developer / Market Insights Co-op',
    period: 'Jan 2026 – Mar 2026',
    location: 'Toronto, ON',
    type: 'Current',
    color: '#3b82f6',
    bullets: [
      'Architected a Python-driven ETL pipeline syncing production MySQL data to Notion via GitHub Actions, automating weekly feature usage reporting with 100% data consistency.',
      'Engineered a cross-platform O2O (Offline-to-Online) attribution system tracking app downloads across multiple retail locations using GA4 and Mobile Measurement Partners (MMPs), achieving 100% data visibility.',
      'Managed submission and approval of a major version update, coordinating technical documentation and metadata to meet App Store and Play Store compliance standards.',
    ],
  },
  {
    company: 'Raasta AI',
    role: 'Software Development Intern',
    period: 'May 2023 – May 2024',
    location: 'Toronto, ON',
    type: null,
    color: '#8b5cf6',
    bullets: [
      'Built and optimized an AI-powered travel planner offering personalized itineraries and live translation for 5,000+ users.',
      'Designed algorithms for real-time safety alerts, itinerary personalization, and local experience sharing, increasing user retention by 30%.',
      'Secured seed funding from 1517 Fund, The Hub (UofT), DMZ, and NEXT36 through product pitching and technical demonstrations.',
      'Conducted market research on emerging travel tech trends, informing the team\'s 6-month product roadmap.',
    ],
  },
  {
    company: 'Research Paper',
    role: 'Lead Researcher & Author',
    period: 'May 2021 – Feb 2023',
    location: 'Mumbai, India',
    type: 'Published',
    color: '#10b981',
    bullets: [
      '"Efficiency of Naive Bayes Algorithm for Spam Filtering": analyzed 6,000+ emails achieving 91% spam detection accuracy.',
      'Developed and deployed FilterMail, a Chrome web extension leveraging Naive Bayes to enhance email security for 500+ users.',
    ],
  },
  {
    company: 'Speak To Lead',
    role: 'Director of Digital Strategy',
    period: 'May 2018 – Present',
    location: 'Mumbai, India',
    type: 'Volunteer',
    color: '#f59e0b',
    bullets: [
      'Directed digital strategy for a non-profit empowering 300+ underprivileged students with English and public speaking skills.',
      'Increased digital engagement by 200% and tripled online learning participation through targeted campaigns.',
      'Forged partnerships with 5+ institutions to expand learning resources and mentorship opportunities.',
      'Led a 20-member volunteer team delivering virtual workshops, improving program accessibility and retention.',
    ],
  },
]

const typeBadge = {
  Current: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  Published: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  Volunteer: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
}

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">Experience</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Where I've worked</h2>
          <p className="text-slate-500 mb-14 max-w-lg">
            From funded AI startups to mobile app co-ops, real experience building production systems.
          </p>
        </FadeIn>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-[calc(50%-1px)] top-0 bottom-0 w-px bg-slate-800 hidden md:block" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <FadeIn key={exp.company} delay={i * 0.1}>
                <div className={`relative md:grid md:grid-cols-2 md:gap-12 ${i % 2 === 0 ? '' : 'md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1'}`}>

                  {/* Timeline dot (desktop) */}
                  <div
                    className="hidden md:block absolute left-[calc(50%-6px)] top-5 w-3 h-3 rounded-full border-2 border-[#050a14] z-10"
                    style={{ backgroundColor: exp.color }}
                  />

                  {/* Meta side */}
                  <div className={`mb-4 md:mb-0 ${i % 2 === 0 ? 'md:text-right md:pr-10' : 'md:pl-10'}`}>
                    <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">{exp.period}</p>
                    <p className="text-slate-400 text-sm">{exp.location}</p>
                  </div>

                  {/* Content side */}
                  <div className={`${i % 2 === 0 ? 'md:pl-10' : 'md:pr-10'}`}>
                    <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 hover:border-slate-700 transition-colors duration-300">
                      <div className="flex items-start justify-between gap-3 mb-1">
                        <div>
                          <h3 className="text-white font-semibold">{exp.company}</h3>
                          <p className="text-slate-400 text-sm">{exp.role}</p>
                        </div>
                        {exp.type && (
                          <span className={`shrink-0 text-xs px-2.5 py-1 rounded-full border font-medium ${typeBadge[exp.type]}`}>
                            {exp.type}
                          </span>
                        )}
                      </div>

                      {/* Accent line */}
                      <div className="h-px my-4 rounded-full opacity-40" style={{ background: exp.color }} />

                      <ul className="space-y-2.5">
                        {exp.bullets.map((bullet, bi) => (
                          <li key={bi} className="flex items-start gap-2.5 text-sm text-slate-400 leading-relaxed">
                            <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: exp.color }} />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        <div className="section-line mt-20" />
      </div>
    </section>
  )
}
