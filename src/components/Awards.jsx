import { motion } from 'framer-motion'
import { Trophy } from 'lucide-react'
import { awards, education } from '../data/profile'

export default function Awards() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-2">Awards & Education</h2>
          <div className="w-12 h-1 bg-indigo-500 rounded-full mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-300 mb-4 flex items-center gap-2">
              <Trophy size={18} className="text-indigo-400" />
              Recognition
            </h3>
            <div className="space-y-4">
              {awards.map((award, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="p-4 rounded-xl bg-white/[0.02] border border-white/5"
                >
                  <h4 className="font-medium text-white mb-1">{award.title}</h4>
                  <p className="text-sm text-gray-500">{award.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-300 mb-4">Education</h3>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="p-6 rounded-xl bg-white/[0.02] border border-white/5"
            >
              <h4 className="font-medium text-white mb-1">{education.degree}</h4>
              <p className="text-indigo-400 text-sm">{education.institution}</p>
              <p className="text-gray-500 text-sm mt-2">
                {education.period} &middot; {education.location}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
