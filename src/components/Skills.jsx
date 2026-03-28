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

const skillGroups = [
  {
    category: 'Languages',
    icon: '{ }',
    skills: ['Python', 'JavaScript', 'Java', 'SQL', 'C#', 'HTML/CSS'],
  },
  {
    category: 'Frontend & Frameworks',
    icon: '◫',
    skills: ['React.js', 'Vite', 'Tailwind CSS', 'Recharts', 'Framer Motion', 'Android Studio'],
  },
  {
    category: 'Data & Analytics',
    icon: '⬡',
    skills: ['Power BI', 'Looker Studio', 'Excel', 'Google Sheets', 'Oracle DB', 'MySQL'],
  },
  {
    category: 'Tools & Cloud',
    icon: '⚙',
    skills: ['Git', 'GitHub', 'GitHub Actions', 'Microsoft Azure', 'GA4', 'Unity'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">Skills</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            My tech stack
          </h2>
          <p className="text-slate-500 mb-14 max-w-lg">
            Tools and technologies I work with regularly.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-5">
          {skillGroups.map((group, groupIdx) => (
            <FadeIn key={group.category} delay={groupIdx * 0.1}>
              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 hover:border-slate-700 transition-colors duration-300">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-blue-400 text-lg font-mono">{group.icon}</span>
                  <h3 className="text-white font-semibold">{group.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, skillIdx) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: groupIdx * 0.05 + skillIdx * 0.04 }}
                      whileHover={{ scale: 1.05, color: '#60a5fa' }}
                      className="text-sm px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-800/50 text-slate-300 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="section-line mt-20" />
      </div>
    </section>
  )
}
