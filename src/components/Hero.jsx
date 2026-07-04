import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Download } from 'lucide-react'
import { profile } from '../data/profile'

const topSkills = ['Python', 'LangChain', 'AWS', 'FastAPI', 'Docker', 'LLMs & Agents']

export default function Hero() {
  return (
    <section id="home" className="relative pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950" />
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-indigo-500/[0.07] rounded-full blur-3xl" />

      <div className="relative z-10 max-w-3xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-xs font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Open to work
            </span>
            <span className="text-gray-400 text-sm">{profile.location}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-2">
            {profile.name}
          </h1>
          <p className="text-lg text-gray-300 mb-6">
            <span className="text-white font-semibold">{profile.title}</span>
            <span className="mx-2 text-gray-600">|</span>
            <span className="text-white font-semibold">{profile.experience} Years</span>
            <span className="mx-2 text-gray-600">|</span>
            <span className="text-indigo-400">{profile.subtitle}</span>
          </p>

          <div className="flex flex-wrap gap-1.5 mb-8">
            {topSkills.map(skill => (
              <span
                key={skill}
                className="px-2.5 py-1 text-xs font-medium rounded-md bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="/resume.pdf"
              download="M_RAJESH_RESUME.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-colors"
            >
              <Download size={15} />
              Resume
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-white/20 text-sm font-medium transition-all"
            >
              <Mail size={15} />
              Contact
            </a>
            <div className="flex items-center gap-1 ml-1">
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all">
                <Github size={24} />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
