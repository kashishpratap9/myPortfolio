"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Award, Calendar, ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const certifications = [
  
  {
    title: "Competitive Programming",
    issuer: "Cipher Schools",
    date: "2025",
    description:
      "Completed a course on competitive programming, covering algorithmic problem-solving, data structures, and programming challenges to prepare for coding competitions.",
    link: "file:///C:/Users/kashish%20pratap/Downloads/TC_kashishpratap4@gmail.com_CS2024-10566%20(1).pdf",
  },
  {
    title: "Chatgpt Adavanced Data Analysis",
    issuer: "Coursera",
    date: "2023",
    description:
      "Completed a course on Chatgpt Adavanced Data Analysis, covering data analysis, visualization, and machine learning.",
    link: "https://www.coursera.org/account/accomplishments/certificate/6DTK7NJ34YM6",
  },
  {
    title: "Gen AI for Everyone",
    issuer: "fractal",
    date: "2022",
    description:
      "Completed an introductory course on Generative AI, exploring foundational concepts, real-world applications, and hands-on experience with tools like ChatGPT and other AI models designed for everyday use.",
    link: "https://www.coursera.org/account/accomplishments/certificate/JRJHN6FTKTCM",
  },
  {
    title: "Learn To Code with AI",
    issuer: "SCRIMBA",
    date: "2023",
    description:"Completed an interactive course focused on using AI tools and techniques to enhance coding skills, covering modern development workflows, AI-assisted debugging, and project building with real-time feedback.",
    link: "https://www.coursera.org/account/accomplishments/certificate/DVUDB4XZTANF"

  },
  {
    title: "Cloud Computing",
    issuer: "NPTEL",
    date: "2024",
    description: "Comprehensive course on cloud infrastructure, virtualization, service models (IaaS, PaaS, SaaS), and deployment using cloud platforms.",
    link: "file:///C:/Users/kashish%20pratap/Downloads/Cloud%20Computing.pdf",
  },
  {
    title: "Tableau for Data Science",
    issuer: "Tableau from Salesforce",
    date: "2022",
    description: "Course focused on using Tableau for data visualization, exploring dashboards, and creating interactive reports to gain insights from complex datasets.",
    link: "file:///C:/Users/kashish%20pratap/Downloads/Coursera%20FQOGJ13Y2NT6.pdf",
  },
]

export default function Certifications() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="certifications" ref={ref} className="py-20 relative overflow-hidden bg-slate-950/50">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            My <span className="text-purple-400">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            Professional certifications and courses I&apos;ve completed to enhance my skills
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Card className="bg-slate-900/50 backdrop-blur-sm border-purple-500/10 h-full hover:shadow-purple-500/5 hover:border-purple-500/30 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-start mb-4">
                    <div className="p-3 rounded-lg bg-purple-900/30 mr-4">
                      <Award className="h-6 w-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                        {cert.title}
                      </h3>
                      <p className="text-gray-400">{cert.issuer}</p>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4">{cert.description}</p>

                  <div className="flex justify-between items-center mt-4">
                    <div className="flex items-center text-gray-400">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{cert.date}</span>
                    </div>

                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 flex items-center transition-colors duration-300"
                    >
                      <span className="mr-1">View</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
