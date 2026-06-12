"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { Trophy, Building, CreditCard, Layers } from "lucide-react"

export default function Achievements() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [counts, setCounts] = useState({ brands: 0, pwAs: 0, payments: 0, platforms: 0 })

  useEffect(() => {
    if (isInView) {
      const duration = 2000
      const steps = 60
      const interval = duration / steps

      const timer = setInterval(() => {
        setCounts((prev) => ({
          brands: Math.min(prev.brands + 1, 6),
          pwAs: Math.min(prev.pwAs + 1, 10),
          payments: Math.min(prev.payments + 1, 5),
          platforms: Math.min(prev.platforms + 1, 6),
        }))
      }, interval)

      return () => clearInterval(timer)
    }
  }, [isInView])

  const achievements = [
    {
      icon: <Building size={32} />,
      value: counts.brands,
      label: "Global Brands",
      description: "Enterprise solutions for luxury hospitality",
    },
    {
      icon: <Layers size={32} />,
      value: counts.pwAs,
      label: "Production PWAs",
      description: "High-performance mobile applications",
    },
    {
      icon: <CreditCard size={32} />,
      value: counts.payments,
      label: "Payment Gateways",
      description: "International payment integrations",
    },
    {
      icon: <Trophy size={32} />,
      value: counts.platforms,
      label: "Booking Platforms",
      description: "Large-scale reservation systems",
    },
  ]

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="gradient-text">Achievements</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-2xl p-6 text-center hover:bg-surface/80 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-accent/10 rounded-lg text-accent">
                    {achievement.icon}
                  </div>
                </div>
                <div className="text-4xl font-bold gradient-text mb-2">
                  {achievement.value}+
                </div>
                <h3 className="font-semibold text-lg mb-2">{achievement.label}</h3>
                <p className="text-text-muted text-sm">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
