import { motion } from 'framer-motion'
import { profile } from '../data/profile'

export default function About() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-2">About Me</h2>
          <div className="w-12 h-1 bg-indigo-500 rounded-full mb-8" />

          <p className="text-gray-400 text-lg leading-relaxed max-w-3xl">
            {profile.summary}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12">
            {[
              { value: '5.7+', label: 'Years Experience' },
              { value: '3', label: 'Companies' },
              { value: '3x', label: 'Award Winner' },
              { value: '5+', label: 'Technologies' },
            ].map((stat, i) => (
              <div key={i} className="text-center p-4 rounded-xl bg-white/5 border border-white/5">
                <div className="text-2xl font-bold text-indigo-400">{stat.value}</div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
