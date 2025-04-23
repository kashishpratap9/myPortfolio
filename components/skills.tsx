"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const skills = [
  {
    category: "Programming",
    items: [
      { name: "Python", level: 95 },
      { name: "R", level: 85 },
      { name: "SQL", level: 90 },
      { name: "JavaScript", level: 75 },
    ],
  },
  {
    category: "Data Science",
    items: [
      { name: "Machine Learning", level: 90 },
      { name: "Deep Learning", level: 85 },
      { name: "Data Analysis", level: 95 },
      { name: "Natural Language Processing", level: 80 },
    ],
  },
  {
    category: "Tools & Frameworks",
    items: [
      { name: "TensorFlow", level: 85 },
      { name: "PyTorch", level: 80 },
      { name: "Scikit-Learn", level: 90 },
      { name: "Pandas", level: 95 },
    ],
  },
]

const technologies = [
  "Python",
  "TensorFlow",
  "PyTorch",
  "Scikit-Learn",
  "Pandas",
  "NumPy",
  "Matplotlib",
  "Seaborn",
  "Keras",
  "NLTK",
  "SpaCy",
  "SQL",
  "MongoDB",
  "AWS",
  "Docker",
  "Git",
  "Jupyter",
  "R",
  "Power BI",
  "Tableau",
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="skills" ref={ref} className="py-20 relative overflow-hidden bg-slate-950/50">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            My <span className="text-purple-400">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * groupIndex }}
              className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/10 shadow-lg hover:shadow-purple-500/5 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-white mb-6 relative inline-block">
                {skillGroup.category}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-transparent"></span>
              </h3>

              <div className="space-y-6">
                {skillGroup.items.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-purple-400">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.2 + 0.1 * index }}
                        className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/10 shadow-lg"
        >
          <h3 className="text-xl font-bold text-white mb-8 text-center">Technologies & Tools</h3>

          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.1 * (index % 10) }}
                className="px-4 py-2 bg-slate-800/80 text-gray-300 rounded-full border border-purple-500/20 hover:border-purple-500/50 hover:text-white hover:shadow-glow-sm transition-all duration-300"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
