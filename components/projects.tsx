"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Github, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import Image from "next/image"

const projects = [
  {
    title: "Personalized Medical Recommendation System",
    description:
      "A deep learning-based system that provides personalized medical recommendations by analyzing patient data and medical history to suggest relevant treatments and medications.",
    image: "/images/medical.jpg",
    tags:  ["NLP", "Deep Learning", "Python", "Medical AI", "flask"],
    github: "https://github.com/kashishpratap9/Medical",
    demo: "http://127.0.0.1:5000/",
  },
  {
    title: "Face Detection Attendance System",
    description: "A system that uses face recognition to mark attendance in real-time, enhancing security and efficiency in educational institutions or workplaces.",
    image: "/images/face.jpg",
    tags: ["Face Detection", "Machine Learning", "OpenCV", "Python"],
    github: "https://github.com/kashishpratap9/Face-Detection-Attendance-System-",
    demo: "#"
  },
  {
    title: "Weather Forecasting Application",
    description: "A weather forecasting application that provides real-time weather updates and forecasts using data from external weather APIs.",
    image: "/images/weather.png",
    tags: ["Weather API", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/kashishpratap9/Weather-Application",
    demo: "#"
  },
  {
    title: "Recommendation Engine",
    description:
      "A collaborative filtering system that provides personalized recommendations based on user behavior and preferences.",
    image: "/images/movie.png",
    tags: ["Recommendation Systems", "Matrix Factorization", "PySpark"],
    github: "https://github.com/Kaviya12223/movie-recommendation",
    demo: "#",
  },
  {
    title: "Data Visualization Dashboard",
    description:
      "Interactive dashboard that visualizes complex datasets and provides actionable insights through intuitive charts and graphs.",
    image: "/images/dashboard.png",
    tags: ["Plotly", "Dash", "Data Visualization", "Python"],
    github: "https://github.com/kashishpratap9",
    demo: "#",
  },
  
]

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const nextProject = () => {
    setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1))
  }

  const prevProject = () => {
    setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1))
  }

  const visibleProjects = projects.slice(activeIndex, activeIndex + 3)
  if (visibleProjects.length < 3) {
    visibleProjects.push(...projects.slice(0, 3 - visibleProjects.length))
  }

  return (
    <section id="projects" ref={ref} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-purple-950/10 to-slate-950 opacity-50"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            My <span className="text-purple-400">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            Explore my data science and machine learning projects that demonstrate my skills and expertise
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:flex justify-between absolute top-1/2 left-0 right-0 -translate-y-1/2 z-20 px-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={prevProject}
              className="bg-slate-900/50 backdrop-blur-sm text-white hover:bg-purple-900/50 rounded-full h-12 w-12"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={nextProject}
              className="bg-slate-900/50 backdrop-blur-sm text-white hover:bg-purple-900/50 rounded-full h-12 w-12"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleProjects.map((project, index) => (
              <motion.div
                key={`${project.title}-${index}`}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-slate-900/50 backdrop-blur-sm border-purple-500/10 overflow-hidden h-full flex flex-col hover:shadow-purple-500/5 hover:border-purple-500/30 transition-all duration-300 group">
                  <div className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300 z-10"></div>
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <CardContent className="p-6 flex-grow">
                    <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-purple-900/30 text-purple-300 text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter className="p-6 pt-0 flex justify-end">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-purple-400 hover:text-purple-300 hover:bg-purple-900/20"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" /> Code
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-12 md:hidden">
          <div className="flex space-x-2">
            {projects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-3 h-3 rounded-full ${idx === activeIndex ? "bg-purple-500" : "bg-gray-600"}`}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button
            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-6 rounded-lg shadow-lg hover:shadow-purple-500/20 transition-all duration-300 text-lg"
            asChild
          >
            <a href="https://github.com/kashishpratap9" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" /> View All Projects on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
