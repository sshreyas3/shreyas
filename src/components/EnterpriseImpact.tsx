"use client"

import { motion } from "framer-motion"

export default function EnterpriseImpact() {
  const brands = [
    {
      name: "Accor",
      description: "Global hospitality leader with 5,000+ hotels",
      region: "Worldwide",
    },
    {
      name: "Emaar Group",
      description: "Dubai-based developer with luxury properties",
      region: "Middle East",
    },
    {
      name: "PPHE Hotel Group",
      description: "Premium hotel collection across Europe",
      region: "Europe",
    },
    {
      name: "Orascom Hospitality",
      description: "Leading hospitality developer in MENA",
      region: "Middle East & North Africa",
    },
    {
      name: "Edwardian Hotels",
      description: "London's luxury hotel collection",
      region: "United Kingdom",
    },
    {
      name: "The Londoner",
      description: "World's first super-boutique hotel",
      region: "United Kingdom",
    },
  ]

  return (
    <section id="impact" className="py-20 lg:ml-72 px-6 lg:px-12">
      <div className="max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-accent text-sm font-medium mb-4"
        >
          03. Impact
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold mb-12"
        >
          Brands I&apos;ve Worked With
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 border border-surface hover:border-accent/50 transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-2">{brand.name}</h3>
              <p className="text-secondary-text text-sm mb-3">{brand.description}</p>
              <p className="text-accent-secondary text-xs font-medium">{brand.region}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
