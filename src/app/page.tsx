import Sidebar from "@/components/Sidebar"
import Hero from "@/components/Hero"
import About from "@/components/About"
import ExperienceTimeline from "@/components/ExperienceTimeline"
import FeaturedWork from "@/components/FeaturedWork"
import EnterpriseImpact from "@/components/EnterpriseImpact"
import IntegrationEcosystem from "@/components/IntegrationEcosystem"
import EngineeringValues from "@/components/EngineeringValues"
import Skills from "@/components/Skills"
import CurrentLearning from "@/components/CurrentLearning"
import Contact from "@/components/Contact"

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1">
        <Hero />
        <About />
        <ExperienceTimeline />
        <FeaturedWork />
        <EnterpriseImpact />
        <IntegrationEcosystem />
        <EngineeringValues />
        <Skills />
        <CurrentLearning />
        <Contact />
      </main>
    </div>
  )
}
