"use client"

import { motion } from "framer-motion"
import { Zap, Shield, Code2, Cpu, Users, Target } from "lucide-react"

export default function EngineeringPrinciples() {
  const principles = [
    {
      icon: <Zap size={32} />,
      title: "Performance First",
      description: "Optimize for speed, accessibility, and user experience. Every millisecond matters.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: <Shield size={32} />,
      title: "Security & Reliability",
      description: "Build secure, fault-tolerant systems that users can trust implicitly.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Code2 size={32} />,
      title: "Clean Architecture",
      description: "Write maintainable, scalable code with clear separation of concerns.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Cpu size={32} />,
      title: "Scalability",
      description: "Design systems that grow gracefully with user demand and business needs.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Users size={32} />,
      title: "Collaboration",
      description: "Work effectively in cross-functional teams to deliver exceptional products.",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: <Target size={32} />,
      title: "Product Focus",
      description: "Align engineering decisions with business goals and user needs.",
      color: "from-rose-500 to-pink-500",
    },
  ]

  return (
    <section id="principles" className="py-20 md:py-32">
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
              <span className="gradient-text">Engineering Principles</span>
            </h2>
            <p className="text-text-muted text-lg">
              Core values that guide technical decisions and architecture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-2xl p-8 hover:bg-surface/80 transition-all duration-300 group"
              >
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${principle.color} mb-6 group-hover:scale-110 transition-transform`}>
                  <div className="text-white">{principle.icon}</div>
                </div>
                
                <h3 className="text-xl font-bold mb-3">{principle.title}</h3>
                <p className="text-text-muted leading-relaxed">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
