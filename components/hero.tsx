"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

const roles = [
  "Data Scientist",
  "Machine Learning Engineer",
  "AI Developer",
  "Data Analyst"
]

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(100)

  useEffect(() => {
    const typeWriter = () => {
      const currentText = roles[currentRole]
      const currentLength = displayText.length

      if (!isDeleting && currentLength < currentText.length) {
        setDisplayText(currentText.substring(0, currentLength + 1))
        setTypingSpeed(100)
      } else if (isDeleting && currentLength > 0) {
        setDisplayText(currentText.substring(0, currentLength - 1))
        setTypingSpeed(50)
      } else if (!isDeleting && currentLength === currentText.length) {
        setIsDeleting(true)
        setTypingSpeed(1000)
      } else if (isDeleting && currentLength === 0) {
        setIsDeleting(false)
        setCurrentRole((prev) => (prev + 1) % roles.length)
        setTypingSpeed(300)
      }
    }

    const timer = setTimeout(typeWriter, typingSpeed)
    return () => clearTimeout(timer)
  }, [displayText, isDeleting, currentRole, typingSpeed])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
    }[] = []

    const createParticles = () => {
      const particleCount = Math.floor(window.innerWidth / 10)

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speedX: Math.random() * 0.5 - 0.25,
          speedY: Math.random() * 0.5 - 0.25,
          color: `rgba(${Math.floor(Math.random() * 100 + 155)}, ${Math.floor(
            Math.random() * 100 + 155,
          )}, ${Math.floor(Math.random() * 255)}, ${Math.random() * 0.5 + 0.1})`,
        })
      }
    }

    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        ctx.fillStyle = p.color
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()

        p.x += p.speedX
        p.y += p.speedY

        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const distance = Math.sqrt(Math.pow(p.x - p2.x, 2) + Math.pow(p.y - p2.y, 2))

          if (distance < 100) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(150, 150, 255, ${0.1 * (1 - distance / 100)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        }
      }

      requestAnimationFrame(animateParticles)
    }

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      particles.length = 0
      createParticles()
    }

    createParticles()
    animateParticles()

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full"></canvas>

      <div className="container mx-auto px-4 z-10 pt-20">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <span className="text-purple-400 text-lg font-medium tracking-wider">Hello, I&apos;m</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 text-glow-purple relative"
          >
            Kashish Pratap
            <motion.div
              className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-cyan-500"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
            />
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 relative"
          >
            <span className="relative">
              <span className="relative z-10">
                {displayText}
                <span className="animate-pulse text-purple-400">|</span>
              </span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500/30 to-cyan-500/30 blur-sm"></span>
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex space-x-6 mb-12"
          >
            <motion.a
              href="https://github.com/kashishpratap9"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-glow-purple group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-6 h-6 text-white group-hover:text-purple-400 transition-colors" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/kashish-pratap-07547b254/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-glow-purple group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-6 h-6 text-white group-hover:text-purple-400 transition-colors" />
            </motion.a>
            <motion.a
              href="https://x.com/PratapKash27589"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-glow-purple group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Twitter className="w-6 h-6 text-white group-hover:text-purple-400 transition-colors" />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-6 rounded-lg shadow-lg hover:shadow-purple-500/20 transition-all duration-300 text-lg group"
                asChild
              >
                <a href="#projects" className="flex items-center">
                  View Projects
                  <motion.span
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                  >
                    →
                  </motion.span>
                </a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                className="border-purple-500 text-purple-400 hover:bg-purple-500/10 px-8 py-6 rounded-lg transition-all duration-300 text-lg group"
                asChild
              >
                <a href="#contact" className="flex items-center">
                  Contact Me
                  <motion.span
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                  >
                    →
                  </motion.span>
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-gray-400 text-sm mb-2">Scroll Down</span>
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
            <ArrowDown className="w-6 h-6 text-purple-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
