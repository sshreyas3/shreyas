"use client"

import { motion } from "framer-motion"

export default function Contact() {
  return (
    <section id="contact" className="py-20 lg:ml-72 px-6 lg:px-12">
      <div className="max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-accent text-sm font-medium mb-4"
        >
          09. Contact
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Let&apos;s build something meaningful
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-secondary-text text-lg leading-relaxed mb-12 max-w-2xl"
        >
          I&apos;m always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col gap-4"
        >
          <a
            href="mailto:shreyas@example.com"
            className="text-lg text-secondary-text hover:text-accent transition-colors"
          >
            shreyas@example.com
          </a>
          <a
            href="https://github.com/shreyas-s"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-secondary-text hover:text-accent transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/shreyas-s"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-secondary-text hover:text-accent transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="/resume.pdf"
            download
            className="text-lg text-secondary-text hover:text-accent transition-colors"
          >
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  )
}
