import type { Metadata } from "next"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Extracurricular from "@/components/extracurricular"
import Certifications from "@/components/certifications"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

export const metadata: Metadata = {
  title: "Kashish Pratap | Data Science Portfolio",
  description: "Data Science and Machine Learning Portfolio of Kashish Pratap",
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Extracurricular />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}