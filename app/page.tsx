import { Hero } from "@/components/hero"
import { Navigation } from "@/components/navigation"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { AboutMe } from "@/components/about-me"

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-br from-[#f8f9fa] via-[#e9ecef] to-[#dee2e6] dark:from-[#1a1d1f] dark:via-[#2a2d2f] dark:to-[#343a40]">
      <Navigation />
      <main className="relative">
        <Hero />
        <AboutMe />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

