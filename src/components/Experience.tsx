"use client"

import { motion } from "framer-motion"
import { Building2, CheckCircle2 } from "lucide-react"

export default function Experience() {
  const projects = [
    "Accor Group PWA",
    "Emaar Group Experiences Platform",
    "PPHE Hotel Platform",
    "Orascom Hospitality Platform",
    "Edwardian Hotels",
    "The Londoner",
  ]

  const highlights = [
    "Developed production-grade PWAs",
    "Built booking and reservation flows",
    "Integrated multiple payment gateways",
    "Worked with GraphQL APIs",
    "Improved performance and responsiveness",
  ]

  return (
    <section id="experience" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="gradient-text">Experience</span>
          </h2>

          <div className="glass rounded-2xl p-8 md:p-12">
            <div className="flex items-start gap-4 mb-8">
              <div className="p-3 bg-accent/10 rounded-lg text-accent">
                <Building2 size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">Hudini</h3>
                <p className="text-accent font-semibold mb-2">Frontend Engineer</p>
                <p className="text-text-muted">
                  Building digital experiences for global hospitality brands
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-lg mb-4 text-text">Projects</h4>
                <ul className="space-y-3">
                  {projects.map((project, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center gap-3 text-text-muted"
                    >
                      <CheckCircle2 size={16} className="text-accent flex-shrink-0" />
                      {project}
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-4 text-text">Key Highlights</h4>
                <ul className="space-y-3">
                  {highlights.map((highlight, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center gap-3 text-text-muted"
                    >
                      <CheckCircle2 size={16} className="text-accent flex-shrink-0" />
                      {highlight}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
