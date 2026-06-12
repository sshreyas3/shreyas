"use client"

import { motion } from "framer-motion"

export default function Companies() {
  const brands = [
    "Accor Group",
    "Emaar Group",
    "PPHE Hotel Group",
    "Orascom Hospitality",
    "Edwardian Hotels",
    "The Londoner",
  ]

  return (
    <section id="companies" className="py-16 md:py-24 border-b border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm text-text-muted uppercase tracking-wider mb-8 font-medium"
          >
            Companies I&apos;ve worked with
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {brands.map((brand, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="text-text-muted font-medium"
              >
                {brand}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
