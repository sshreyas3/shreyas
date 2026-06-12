"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="py-20 lg:ml-72 px-6 lg:px-12">
      <div className="max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-accent text-sm font-medium mb-4"
        >
          01. About
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold mb-8"
        >
          Who I Am
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-secondary-text leading-relaxed space-y-4"
        >
          <p>
            I&apos;m a Software Development Engineer - 1 specializing in React, Next.js, TypeScript, GraphQL, and modern frontend architecture. I build enterprise-grade digital products focused on performance, usability, and scalability.
          </p>
          <p>
            My journey at Hudini began as a Frontend Trainee, where I developed a strong foundation in enterprise frontend development. Through consistent performance and a product-focused mindset, I progressed to Frontend Engineer and was recently promoted to SDE-1.
          </p>
          <p>
            Today, I work on building scalable web applications and digital experiences for global hospitality brands. I&apos;ve had the privilege of contributing to products used by world-renowned hotel chains including Accor, Emaar Group, and Edwardian Hotels.
          </p>
          <p>
            What drives me is the opportunity to solve complex technical challenges while creating meaningful user experiences. I believe in writing clean, maintainable code and continuously learning to stay at the forefront of technology.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
