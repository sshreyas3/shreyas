"use client"

import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-text-muted">
            © 2024 Shreyas S. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
