"use client"

import { motion } from "framer-motion"

export default function CurrentLearning() {
  const learning = [
    {
      topic: "Data Structures & Algorithms",
      description: "Strengthening problem-solving skills and optimizing code efficiency",
    },
    {
      topic: "System Design",
      description: "Learning to design scalable, reliable distributed systems",
    },
    {
      topic: "AI Product Development",
      description: "Exploring how to integrate AI capabilities into web applications",
    },
    {
      topic: "Advanced Next.js",
      description: "Deepening knowledge of server components, edge computing, and performance",
    },
    {
      topic: "Japanese Language Learning",
      description: "Expanding cultural horizons and cognitive flexibility",
    },
  ]

  return (
    <section id="now" className="py-20 lg:ml-72 px-6 lg:px-12">
      <div className="max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-accent text-sm font-medium mb-4"
        >
          08. Now
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold mb-12"
        >
          Current Focus
        </motion.h2>

        <div className="space-y-6">
          {learning.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-surface p-6 hover:border-accent/50 transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-2">{item.topic}</h3>
              <p className="text-secondary-text">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
