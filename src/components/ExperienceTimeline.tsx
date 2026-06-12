"use client"

import { motion } from "framer-motion"

export default function ExperienceTimeline() {
  const career = [
    {
      role: "Software Development Engineer - 1",
      company: "Hudini",
      period: "2023 — Present",
      location: "Bangalore, India",
      description: "Leading frontend development on enterprise platforms. Building scalable web applications for global hospitality brands with focus on performance, usability, and scalability.",
    },
    {
      role: "Frontend Engineer",
      company: "Hudini",
      period: "2022 — 2023",
      location: "Bangalore, India",
      description: "Developed production-grade PWAs, booking systems, and payment integrations. Contributed to GraphQL API implementations and improved application performance by 40%.",
    },
    {
      role: "Frontend Trainee",
      company: "Hudini",
      period: "2021 — 2022",
      location: "Bangalore, India",
      description: "Started journey in enterprise frontend development. Learned React, Next.js, and TypeScript while contributing to real projects and building strong foundation in modern web development.",
    },
  ]

  return (
    <section id="experience" className="py-20 lg:ml-72 px-6 lg:px-12">
      <div className="max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-accent text-sm font-medium mb-4"
        >
          02. Experience
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold mb-12"
        >
          Where I&apos;ve Worked
        </motion.h2>

        <div className="relative border-l border-surface ml-3">
          {career.map((role, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-12 pl-8 relative"
            >
              <div className="absolute left-0 top-0 w-3 h-3 bg-accent rounded-full transform -translate-x-1/2" />
              
              <div className="flex flex-col md:flex-row md:items-baseline md:gap-4 mb-2">
                <h3 className="text-xl font-bold text-primary-text">{role.company}</h3>
                <span className="text-secondary-text text-sm">{role.period}</span>
              </div>
              
              <h4 className="text-lg font-semibold text-accent mb-2">{role.role}</h4>
              <p className="text-secondary-text text-sm mb-3">{role.location}</p>
              <p className="text-secondary-text leading-relaxed">{role.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
