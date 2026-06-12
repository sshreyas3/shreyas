"use client"

import { motion } from "framer-motion"

export default function FeaturedWork() {
  const projects = [
    {
      title: "Hospitality PWA Platform",
      challenge: "Build a progressive web application for global hotel chains that works offline and provides a seamless booking experience.",
      solution: "Developed a production-grade PWA with service workers, offline support, and real-time synchronization. Implemented booking flows, payment integration, and room availability management.",
      architecture: "React, Next.js, TypeScript, PWA, Service Workers",
      impact: "Deployed across 6+ global hospitality brands, improving mobile engagement by 40%",
      lessons: "Learned the importance of offline-first architecture and the complexities of syncing data across multiple devices.",
    },
    {
      title: "Booking Flow System",
      challenge: "Create a complex reservation system that handles multiple room types, dynamic pricing, and inventory management in real-time.",
      solution: "Built a state management solution using Redux with middleware for handling complex booking logic. Integrated with multiple payment gateways and inventory systems.",
      architecture: "React, Redux, GraphQL, Adyen, FreedomPay",
      impact: "Reduced booking abandonment by 25% through optimized user flow",
      lessons: "State management at scale requires careful planning and testing of edge cases.",
    },
    {
      title: "Guest Experience Portal",
      challenge: "Develop a guest-facing platform for hotel amenities, room service, and concierge services with biometric authentication.",
      solution: "Created a secure portal with biometric authentication using Youverse. Implemented real-time ordering, service tracking, and integration with hotel management systems.",
      architecture: "Next.js, Youverse, Stripe, Tailwind CSS",
      impact: "Enabled contactless guest experience during pandemic, adopted by 4+ luxury hotels",
      lessons: "Security and privacy are paramount when handling guest data and biometric information.",
    },
  ]

  return (
    <section id="projects" className="py-20 lg:ml-72 px-6 lg:px-12">
      <div className="max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-accent text-sm font-medium mb-4"
        >
          04. Projects
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold mb-12"
        >
          Featured Work
        </motion.h2>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-surface p-6 hover:border-accent/50 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-4 text-accent-highlight">{project.title}</h3>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold mb-2 text-accent-secondary">Challenge</h4>
                  <p className="text-secondary-text">{project.challenge}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold mb-2 text-accent-secondary">Solution</h4>
                  <p className="text-secondary-text">{project.solution}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold mb-2 text-accent-secondary">Architecture</h4>
                  <p className="text-secondary-text">{project.architecture}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold mb-2 text-accent-secondary">Impact</h4>
                  <p className="text-secondary-text">{project.impact}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold mb-2 text-accent-secondary">Lessons Learned</h4>
                  <p className="text-secondary-text">{project.lessons}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
