"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Download } from "lucide-react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="about" ref={ref} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-purple-900/20 to-transparent opacity-30 pointer-events-none"></div>


      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About <span className="text-purple-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden border-2 border-purple-500/30 shadow-xl shadow-purple-500/10">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 z-10"></div>
              <img
                src="/images/kashish.jpeg"
                alt="Kashish Pratap"
                className="w-full h-full object-cover"
              />

              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-purple-500 rounded-tl-lg"></div>
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-cyan-500 rounded-br-lg"></div>
            </div>

            {/* Floating shapes */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0],
              }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 5 }}
              className="absolute -top-10 -left-10 w-20 h-20 bg-purple-500/10 rounded-full blur-xl"
            ></motion.div>
            <motion.div
              animate={{
                y: [0, 10, 0],
                rotate: [0, -5, 0],
              }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 4 }}
              className="absolute -bottom-10 -right-10 w-24 h-24 bg-cyan-500/10 rounded-full blur-xl"
            ></motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">Data Scientist & Machine Learning Engineer</h3>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Hello! I&apos;m Kashish Pratap, a passionate Data Scientist with expertise in Machine Learning, Deep Learning,
              and AI. With a strong foundation in Python and data analysis, I specialize in transforming complex data
              into actionable insights and building intelligent systems that solve real-world problems.
            </p>

            <p className="text-gray-300 mb-8 leading-relaxed">
              My journey in data science began with a fascination for how data can tell stories and drive decisions.
              Today, I leverage cutting-edge technologies to develop models that predict outcomes, classify information,
              and generate valuable insights across various domains.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>
                <span className="text-gray-300">
                  <span className="font-semibold text-white">Name:</span> Kashish Pratap
                </span>
              </div>

              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>
                <span className="text-gray-300">
                  <span className="font-semibold text-white">Email:</span> kashishpratap4@gmail.com
                </span>
              </div>

              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>
                <span className="text-gray-300">
                  <span className="font-semibold text-white">From:</span> India
                </span>
              </div>

              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>
                <span className="text-gray-300">
                  <span className="font-semibold text-white">Experience:</span> Fresher
                </span>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex justify-start"
            >
              <motion.a
                href="https://drive.google.com/file/d/1uWAS--faEcMiMNhA_tNoCH7nhmJjPfKv/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-lg hover:shadow-purple-500/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <span className="flex items-center">
                  <Download className="mr-2 h-5 w-5" />
                  View CV
                </span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}