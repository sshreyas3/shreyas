"use client"

import { motion } from "framer-motion"

export default function IntegrationEcosystem() {
  const paymentProviders = [
    "Adyen",
    "FreedomPay",
    "PlanetPay",
    "Elavon",
    "Epay",
  ]

  const thirdPartyPlatforms = [
    "Golfscape",
    "Attractions.io",
    "Youverse",
    "Incode Biometrics",
    "Trential",
  ]

  return (
    <section id="integrations" className="py-20 lg:ml-72 px-6 lg:px-12">
      <div className="max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-accent text-sm font-medium mb-4"
        >
          05. Integrations
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold mb-12"
        >
          Integration Ecosystem
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-4 text-accent-secondary">Payment Providers</h3>
            <div className="space-y-3">
              {paymentProviders.map((provider, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                  className="flex items-center gap-4 p-3 border border-surface hover:border-accent/50 transition-all duration-300"
                >
                  <div className="w-2 h-2 bg-accent-secondary rounded-full" />
                  <span className="font-medium">{provider}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-4 text-accent-highlight">Third-Party Platforms</h3>
            <div className="space-y-3">
              {thirdPartyPlatforms.map((platform, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                  className="flex items-center gap-4 p-3 border border-surface hover:border-accent/50 transition-all duration-300"
                >
                  <div className="w-2 h-2 bg-accent-highlight rounded-full" />
                  <span className="font-medium">{platform}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
