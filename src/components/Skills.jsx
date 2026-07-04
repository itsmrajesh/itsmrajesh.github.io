import { motion } from 'framer-motion'
import { Brain, Server, Cloud, Wrench } from 'lucide-react'
import { skills } from '../data/profile'

const icons = {
  'AI & LLMs': Brain,
  'Backend': Server,
  'Cloud & DevOps': Cloud,
  'Tools & Others': Wrench,
}

export default function Skills() {
  return (
    <section id="skills" className="pt-12 pb-24 px-4 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-2">Skills & Expertise</h2>
          <div className="w-12 h-1 bg-indigo-500 rounded-full mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((group, i) => {
            const Icon = icons[group.category] || Wrench
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-indigo-500/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-indigo-500/10">
                    <Icon size={20} className="text-indigo-400" />
                  </div>
                  <h3 className="font-semibold text-lg">{group.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map(skill => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm rounded-lg bg-white/5 text-gray-300 border border-white/5 hover:border-indigo-500/30 hover:text-indigo-300 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
