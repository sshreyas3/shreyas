"use client"

import { motion } from "framer-motion"
import { Box, Database, Server, Zap, ArrowRight, Layers } from "lucide-react"

export default function ArchitectureCaseStudies() {
  const architectures = [
    {
      title: "Hospitality PWA Architecture",
      description: "Scalable progressive web application for global hotel chains",
      tech: ["Next.js", "React", "GraphQL", "Redis", "PostgreSQL"],
      components: [
        { name: "Client Layer", icon: <Box size={20} />, color: "from-blue-500 to-cyan-500" },
        { name: "API Gateway", icon: <Server size={20} />, color: "from-green-500 to-emerald-500" },
        { name: "Microservices", icon: <Layers size={20} />, color: "from-purple-500 to-pink-500" },
        { name: "Data Layer", icon: <Database size={20} />, color: "from-orange-500 to-red-500" },
      ],
      metrics: ["99.9% Uptime", "50ms Latency", "10K Concurrent Users"],
    },
    {
      title: "Booking Flow System",
      description: "Real-time reservation system with distributed caching",
      tech: ["Node.js", "GraphQL", "Redis", "PostgreSQL", "Stripe"],
      components: [
        { name: "Frontend", icon: <Box size={20} />, color: "from-blue-500 to-cyan-500" },
        { name: "Load Balancer", icon: <Server size={20} />, color: "from-green-500 to-emerald-500" },
        { name: "Cache Layer", icon: <Zap size={20} />, color: "from-yellow-500 to-orange-500" },
        { name: "Database", icon: <Database size={20} />, color: "from-indigo-500 to-purple-500" },
      ],
      metrics: ["1000 TPS", "99.95% Success Rate", "Sub-second Response"],
    },
  ]

  return (
    <section id="architecture" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto"
        >
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Architecture Case Studies</span>
            </h2>
            <p className="text-text-muted text-lg">
              Deep dive into system design and technical architecture
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {architectures.map((arch, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-2xl p-8 hover:bg-surface/80 transition-all duration-300"
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">{arch.title}</h3>
                  <p className="text-text-muted">{arch.description}</p>
                </div>

                {/* Architecture Diagram */}
                <div className="mb-6 p-6 bg-surface/50 rounded-xl">
                  <div className="flex flex-col items-center gap-4">
                    {arch.components.map((component, compIndex) => (
                      <motion.div
                        key={compIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: compIndex * 0.1 }}
                        className="w-full"
                      >
                        <div className={`inline-flex items-center gap-3 px-4 py-3 rounded-lg bg-gradient-to-r ${component.color} text-white font-medium`}>
                          {component.icon}
                          <span>{component.name}</span>
                        </div>
                        {compIndex < arch.components.length - 1 && (
                          <div className="flex justify-center my-2">
                            <ArrowRight className="text-accent" size={20} />
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-sm text-text-muted uppercase tracking-wider">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {arch.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4">
                  {arch.metrics.map((metric, metricIndex) => (
                    <motion.div
                      key={metricIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: metricIndex * 0.1 }}
                      className="text-center p-3 bg-surface/50 rounded-lg"
                    >
                      <div className="font-bold gradient-text">{metric}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
