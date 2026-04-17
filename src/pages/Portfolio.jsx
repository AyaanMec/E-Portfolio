import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Goals from '../components/Goals'

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

const reflections = [
  {
    label: 'MyRide901',
    body: "The biggest adjustment wasn't the technology, it was the codebase. Walking into a production system built by people who'd already left the company taught me more about software engineering than any course had. You can't just understand what the code does; you have to understand why decisions were made, often with no documentation and no one to ask. It forced me to read code the way I'd read a book, slowly, with context. I came out of it a much more careful and deliberate engineer.",
  },
  {
    label: 'Raasta AI',
    body: 'I joined Raasta expecting to write code. What I didn\'t expect was how much of the job was everything else: sitting in pitch meetings, researching competitor products, helping shape a roadmap. At first it felt like a distraction from the "real" work. But I came to understand that a feature nobody wants is worse than no feature at all. The most valuable thing Raasta taught me is that the best engineers understand the problem before they touch the keyboard.',
  },
  {
    label: 'Naive Bayes Research Paper',
    body: "Building FilterMail showed me that research and software engineering are fundamentally different disciplines. In a course project, you know what the answer looks like before you start. In research, you might spend weeks on an approach and discover it doesn't hold up. The 91% accuracy figure in my paper came after many iterations that didn't work, and learning to sit with that uncertainty, rather than forcing a conclusion, was the most important skill I developed. Shipping the Chrome extension afterwards felt like a completely different challenge: translating academic rigour into something a real user could actually install.",
  },
  {
    label: 'Speak To Lead',
    body: "Leading digital strategy for Speak To Lead while managing a full course load taught me something I hadn't expected: the hardest part of volunteer work isn't the effort, it's the consistency. Nobody is checking whether you showed up. The 200% engagement increase we achieved wasn't from one campaign. It was from dozens of small decisions made over years. It's shaped how I think about long-term projects in engineering too: compounding effort, not heroic sprints.",
  },
]

const courseProjects = [
  {
    label: 'FilterMail Chrome Extension',
    body: 'Trained a Naive Bayes classifier on the Enron corpus to detect spam with 91% accuracy. Packaged it as a Chrome extension users can actually install, bridging the gap between academic research and usable software.',
  },
  {
    label: 'Relational Database Design',
    body: 'Designed a normalized multi-entity schema and implemented complex queries using joins, subqueries, and aggregation against a large dataset. Focused on query performance and schema correctness.',
  },
  {
    label: 'Concurrent Chat Server',
    body: 'Built a multi-threaded TCP chat server in Java handling concurrent client connections, message broadcasting, and graceful disconnection, applying socket programming and concurrency primitives from first principles.',
  },
  {
    label: 'Unix Shell Interpreter',
    body: 'Implemented a POSIX-style shell in C with piping, I/O redirection, background process execution, and signal handling. Deepened my understanding of process management, file descriptors, and system calls.',
  },
]

export default function Portfolio() {
  useEffect(() => {
    const meta = document.createElement('meta')
    meta.name = 'robots'
    meta.content = 'noindex'
    document.head.appendChild(meta)
    return () => {
      document.head.removeChild(meta)
    }
  }, [])

  return (
    <div className="min-h-screen pt-24">

      {/* 1. Purpose Statement */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">
              Portfolio
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              A record of growth.<br />A demonstration of craft.
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-slate-400 text-base leading-relaxed max-w-3xl">
              This portfolio exists at the intersection of two things: a record of growth, and a
              demonstration of craft. Academically, it documents my journey through York University's
              Computer Science program: the research I've published, the systems I've built in class
              and independently, and the thinking behind each decision. Professionally, it's an honest
              picture of what I bring to a team: real production experience, a bias toward impact, and
              the ability to move between data, infrastructure, and product. I built this not to impress,
              but to be legible to anyone who wants to understand not just what I've done, but how I
              think and where I'm going.
            </p>
          </FadeIn>
          <div className="section-line mt-16" />
        </div>
      </section>

      {/* 2. Inspiration */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">
              Where It Started
            </p>
          </FadeIn>
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <FadeIn delay={0.1} direction="right">
              <div className="shrink-0">
                <img
                  src="/inspiration.png"
                  alt="My grandfather, the industrial engineer who inspired my curiosity"
                  className="w-64 h-80 object-cover rounded-xl border border-slate-800 shadow-xl"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-slate-400 text-base leading-relaxed max-w-2xl">
                This photograph is of my grandfather, an industrial engineer whose work I grew up
                watching with curiosity and admiration. He was the reason I first became fascinated
                with how things were built and how systems worked. It represents where my journey
                began, long before university or any project I have built since.
              </p>
            </FadeIn>
          </div>
          <div className="section-line mt-16" />
        </div>
      </section>

      {/* 3. Long-Term Goals — reused from Goals component */}
      <Goals />


      {/* 4. Reflections */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">
              Reflections
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              What each role taught me
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-slate-400 text-base leading-relaxed max-w-3xl mb-14">
              These aren't summaries of what I did. They're honest accounts of what changed in how I think.
            </p>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-6">
            {reflections.map((item, i) => (
              <FadeIn key={item.label} delay={0.15 + i * 0.1} direction="up">
                <div className="h-full p-7 rounded-xl border border-slate-800 bg-slate-900/40 hover:border-blue-500/30 transition-colors duration-300 flex flex-col gap-4">
                  <p className="text-blue-400 font-semibold text-sm tracking-wide">{item.label}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <div className="section-line mt-16" />
        </div>
      </section>

      {/* 5. Course Projects */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">
              Course Projects
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Academic work</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-slate-400 text-base leading-relaxed max-w-3xl mb-14">
              Selected projects from York University's CS program, each one reinforcing a different
              layer of the stack.
            </p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 gap-5">
            {courseProjects.map((proj, i) => (
              <FadeIn key={proj.label} delay={0.15 + i * 0.1} direction="up">
                <div className="h-full p-6 rounded-xl border border-slate-800 bg-slate-900/40 hover:border-blue-500/30 transition-colors duration-300 flex flex-col gap-3">
                  <p className="text-white font-semibold text-sm">{proj.label}</p>
                  <p className="text-blue-400 text-xs tracking-wide">{proj.course}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{proj.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <div className="section-line mt-16" />
        </div>
      </section>

      {/* 6. About Me Video */}
      <section className="py-20 px-6 pb-32">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">
              About Me
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">In my own words</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-slate-400 text-base leading-relaxed max-w-3xl mb-10">
              A short video introduction: who I am, what drives me, and what I'm building toward.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div
              className="relative w-full rounded-xl overflow-hidden border border-slate-800 bg-slate-900/40"
              style={{ paddingTop: '56.25%' }}
            >
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/TaHPNX3O1Cw"
                title="About Me — Ayaan Mecklai"
                style={{ border: 0 }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  )
}
