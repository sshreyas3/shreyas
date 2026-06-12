"use client"

import { motion } from "framer-motion"
import { Code2, Zap, Globe, Layers, Cpu, Database } from "lucide-react"

export default function MetricsDashboard() {
  const highlights = [
    {
      icon: <Code2 size={24} />,
      title: "Frontend Development",
      description: "React, Next.js, TypeScript",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Zap size={24} />,
      title: "Performance Optimization",
      description: "40% improvement in load times",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Globe size={24} />,
      title: "Enterprise Experience",
      description: "6 global hospitality brands",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Layers size={24} />,
      title: "PWAs & Mobile",
      description: "Production-ready applications",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: <Cpu size={24} />,
      title: "API Integration",
      description: "15+ third-party services",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: <Database size={24} />,
      title: "Payment Systems",
      description: "5 international gateways",
      color: "from-indigo-500 to-purple-500",
    },
  ]

  return (
    <section id="metrics" className="py-20 md:py-32">
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
              <span className="gradient-text">Technical Highlights</span>
            </h2>
            <p className="text-text-muted text-lg">
              Key areas of expertise and experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-2xl p-8 hover:bg-surface/80 transition-all duration-300"
              >
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${highlight.color} mb-6`}>
                  <div className="text-white">{highlight.icon}</div>
                </div>
                
                <h3 className="text-xl font-bold mb-3">{highlight.title}</h3>
                <p className="text-text-muted">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
