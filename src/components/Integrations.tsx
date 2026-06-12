"use client"

import { motion } from "framer-motion"
import { CreditCard, Plug, Check } from "lucide-react"

export default function Integrations() {
  const paymentIntegrations = [
    "FreedomPay",
    "PlanetPay",
    "Epay",
    "Adyen",
    "Elavon",
  ]

  const otherIntegrations = [
    "Golfscape",
    "Attractions.io",
    "Trential",
    "Youverse",
    "Incode Biometrics",
  ]

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="gradient-text">Enterprise Integrations</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-accent/10 rounded-lg text-accent">
                  <CreditCard size={24} />
                </div>
                <h3 className="text-xl font-bold">Payment Integrations</h3>
              </div>
              <div className="space-y-3">
                {paymentIntegrations.map((integration, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-center gap-3 p-3 bg-surface/50 rounded-lg hover:bg-surface/70 transition-colors"
                  >
                    <Check size={16} className="text-accent flex-shrink-0" />
                    <span className="text-text-muted">{integration}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-accent/10 rounded-lg text-accent">
                  <Plug size={24} />
                </div>
                <h3 className="text-xl font-bold">Other Integrations</h3>
              </div>
              <div className="space-y-3">
                {otherIntegrations.map((integration, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-center gap-3 p-3 bg-surface/50 rounded-lg hover:bg-surface/70 transition-colors"
                  >
                    <Check size={16} className="text-accent flex-shrink-0" />
                    <span className="text-text-muted">{integration}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
