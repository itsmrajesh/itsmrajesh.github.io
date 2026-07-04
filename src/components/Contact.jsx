import { motion } from 'framer-motion'
import { Mail, MapPin, Github, Linkedin } from 'lucide-react'
import { profile } from '../data/profile'

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 bg-gray-900/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-2">Get In Touch</h2>
          <div className="w-12 h-1 bg-indigo-500 rounded-full mb-4" />
          <p className="text-gray-400 mb-12 max-w-lg">
            Interested in working together or have a question? Feel free to reach out.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="group flex items-center gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-indigo-500/30 transition-all"
          >
            <div className="p-3 rounded-xl bg-indigo-500/10 group-hover:bg-indigo-500/20 transition-colors">
              <Mail size={20} className="text-indigo-400" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="text-sm text-gray-300">{profile.email}</p>
            </div>
          </a>

<div className="group flex items-center gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="p-3 rounded-xl bg-indigo-500/10">
              <MapPin size={20} className="text-indigo-400" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Location</p>
              <p className="text-sm text-gray-300">{profile.location}</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 mt-8">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all text-sm"
          >
            <Github size={16} />
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all text-sm"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
