"use client"

import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center lg:ml-72 px-6 lg:px-12 py-20">
      <div className="max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-accent text-sm font-medium mb-4"
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold mb-4"
        >
          Shreyas S.
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold text-secondary-text mb-6"
        >
          Software Development Engineer - 1
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-secondary-text text-lg leading-relaxed max-w-2xl mb-8"
        >
          Building scalable web applications and enterprise digital experiences for global hospitality brands.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex gap-4"
        >
          <a
            href="#experience"
            className="px-6 py-3 border border-accent text-accent font-medium hover:bg-accent/10 transition-colors"
          >
            Check out my work
          </a>
          <a
            href="/resume.pdf"
            download
            className="px-6 py-3 border border-secondary-text text-secondary-text font-medium hover:border-accent hover:text-accent transition-colors"
          >
            Resume
          </a>
        </motion.div>
      </div>
    </section>
  )
}
