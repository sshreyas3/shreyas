"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      const duration = 2000
      const steps = 60
      const increment = value / steps
      const interval = duration / steps

      const timer = setInterval(() => {
        setCount((prev) => {
          if (prev >= value) return value
          return Math.min(prev + increment, value)
        })
      }, interval)

      return () => clearInterval(timer)
    }
  }, [isInView, value])

  return (
    <span ref={ref}>
      {Math.round(count).toLocaleString()}{suffix}
    </span>
  )
}

export default function TrustSignals() {
  const signals = [
    {
      value: 2,
      suffix: "+",
      label: "Years Experience",
      description: "Professional engineering",
    },
    {
      value: 1,
      suffix: "",
      label: "SDE-1 at Hudini",
      description: "Current role",
    },
    {
      value: 6,
      suffix: "+",
      label: "Global Hospitality Brands",
      description: "Enterprise clients",
    },
    {
      value: 10,
      suffix: "+",
      label: "Enterprise Integrations",
      description: "Third-party services",
    },
    {
      value: 5,
      suffix: "+",
      label: "Production Applications",
      description: "Delivered successfully",
    },
  ]

  return (
    <section id="trust" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm text-accent font-semibold mb-4 tracking-wider uppercase"
          >
            Trust Signals
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-12"
          >
            Proven Track Record
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {signals.map((signal, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-2xl p-8 hover:border-accent/50 transition-all duration-300"
              >
                <div className="text-5xl font-bold gradient-text mb-2">
                  <AnimatedCounter value={signal.value} suffix={signal.suffix} />
                </div>
                
                <h3 className="text-xl font-semibold mb-1">{signal.label}</h3>
                <p className="text-text-muted text-sm">{signal.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
