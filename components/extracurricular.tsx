"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import Image from "next/image"

const activities = [
  {
    title: "SIH 2024",
    description: "Participated in Smart India Hackathon 2024, working on innovative solutions for real-world problems using cutting-edge technology.",
    image: "/images/SIH.png",
    tags: ["Hackathon", "Innovation", "Problem Solving", "Team Work"],
    link: "https://www.linkedin.com/in/kashish-pratap-07547b254/recent-activity/all/",
  },
  {
    title: "WEB-A-THON",
    description: "Competed in WEB-A-THON, a web development hackathon focused on creating modern and responsive web applications.",
    image: "/images/WEB-A-THON.png",
    tags: ["Web Development", "Frontend", "Backend", "Full Stack"],
    link: "https://www.linkedin.com/in/kashish-pratap-07547b254/recent-activity/all/"
  },
  {
    title: "CODECARVAN",
    description: "Participated in CODECARVAN, a coding competition that challenges participants to solve complex programming problems.",
    image: "/images/CodeCarvan.jpeg",
    tags: ["Coding", "Algorithms", "Data Structures", "Competitive Programming"],
    link: "https://www.linkedin.com/in/kashish-pratap-07547b254/recent-activity/all/"
  }
]

export default function Extracurricular() {
  const [activeIndex, setActiveIndex] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const nextActivity = () => {
    setActiveIndex((prev) => (prev === activities.length - 1 ? 0 : prev + 1))
  }

  const prevActivity = () => {
    setActiveIndex((prev) => (prev === 0 ? activities.length - 1 : prev - 1))
  }

  const visibleActivities = activities.slice(activeIndex, activeIndex + 3)
  if (visibleActivities.length < 3) {
    visibleActivities.push(...activities.slice(0, 3 - visibleActivities.length))
  }

  return (
    <section id="extracurricular" ref={ref} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-purple-950/10 to-slate-950 opacity-50"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Extra<span className="text-purple-400">curricular</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            My participation in various hackathons and coding competitions
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:flex justify-between absolute top-1/2 left-0 right-0 -translate-y-1/2 z-20 px-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={prevActivity}
              className="bg-slate-900/50 backdrop-blur-sm text-white hover:bg-purple-900/50 rounded-full h-12 w-12"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={nextActivity}
              className="bg-slate-900/50 backdrop-blur-sm text-white hover:bg-purple-900/50 rounded-full h-12 w-12"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleActivities.map((activity, index) => (
              <motion.div
                key={`${activity.title}-${index}`}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-slate-900/50 backdrop-blur-sm border-purple-500/10 overflow-hidden h-full flex flex-col hover:shadow-purple-500/5 hover:border-purple-500/30 transition-all duration-300 group">
                  <div className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300 z-10"></div>
                    <Image
                      src={activity.image || "/placeholder.svg"}
                      alt={activity.title}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <CardContent className="p-6 flex-grow">
                    <h3 className="text-xl font-bold text-white mb-3">{activity.title}</h3>
                    <p className="text-gray-300 mb-4">{activity.description}</p>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {activity.tags.map((tag) => (
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
                      className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-900/20"
                      asChild
                    >
                      <a href={activity.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" /> Learn More
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
            {activities.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-3 h-3 rounded-full ${idx === activeIndex ? "bg-purple-500" : "bg-gray-600"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 