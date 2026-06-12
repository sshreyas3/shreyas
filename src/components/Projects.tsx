"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "Hospitality Experience Platform",
      description: "A comprehensive platform for luxury hospitality groups featuring booking flows, guest services, and personalized experiences.",
      tech: ["React", "Next.js", "GraphQL", "TypeScript"],
      metrics: ["99.9% Uptime", "50ms Response Time"],
    },
    {
      title: "AI Travel Planner",
      description: "An intelligent travel planning application powered by OpenAI API that creates personalized itineraries based on user preferences.",
      tech: ["Next.js", "OpenAI API", "Zustand"],
      metrics: ["10K+ Users", "4.8 Rating"],
    },
    {
      title: "Unsplash Clone",
      description: "A high-performance image gallery application with advanced search, filtering, and infinite scroll capabilities.",
      tech: ["Next.js", "Zustand", "Tailwind"],
      metrics: ["100K+ Images", "Instant Search"],
    },
    {
      title: "Portfolio CMS Dashboard",
      description: "A content management system dashboard for managing portfolio projects with real-time updates and analytics.",
      tech: ["React", "GraphQL", "Material UI"],
      metrics: ["Real-time Updates", "Analytics Dashboard"],
    },
  ]

  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="gradient-text">Featured Projects</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-2xl p-6 hover:bg-surface/80 transition-all duration-300 group"
              >
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-text-muted mb-4">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.metrics.map((metric, metricIndex) => (
                    <span
                      key={metricIndex}
                      className="px-3 py-1 bg-surface/50 text-text-muted text-sm rounded-full"
                    >
                      {metric}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href="#"
                    className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm">Live Demo</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-text-muted hover:text-text transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm">Source Code</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
