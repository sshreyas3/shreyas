"use client"

import { motion } from "framer-motion"

export default function EngineeringValues() {
  const values = [
    {
      title: "Performance First",
      description: "Optimize for speed, accessibility, and user experience. Every millisecond matters.",
    },
    {
      title: "Accessibility Matters",
      description: "Build inclusive products that work for everyone, regardless of ability or context.",
    },
    {
      title: "Scalable Architecture",
      description: "Write maintainable, scalable code with clear separation of concerns and modularity.",
    },
    {
      title: "Reusable Systems",
      description: "Create components and patterns that can be leveraged across multiple projects efficiently.",
    },
    {
      title: "Developer Experience",
      description: "Prioritize tooling, documentation, and processes that make development efficient and enjoyable.",
    },
    {
      title: "Continuous Learning",
      description: "Stay curious, embrace new technologies, and constantly improve engineering practices.",
    },
  ]

  return (
    <section id="values" className="py-20 lg:ml-72 px-6 lg:px-12">
      <div className="max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-accent text-sm font-medium mb-4"
        >
          06. Engineering Values
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold mb-12"
        >
          Core Principles
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 border border-surface hover:border-accent/50 transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-3">{value.title}</h3>
              <p className="text-secondary-text">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
