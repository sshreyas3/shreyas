"use client"

import { motion } from "framer-motion"

export default function Sidebar() {
  const navItems = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Impact", href: "#impact" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <aside className="fixed left-0 top-0 h-screen w-72 bg-surface border-r border-surface/20 p-8 flex flex-col hidden lg:block">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-2xl font-bold mb-2">Shreyas S</h1>
        <p className="text-accent text-sm font-medium">Software Development Engineer - 1</p>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-secondary-text text-sm leading-relaxed mb-8"
      >
        Building scalable web applications and enterprise digital experiences for global hospitality brands.
      </motion.p>

      <nav className="flex-1">
        <ul className="space-y-4">
          {navItems.map((item, index) => (
            <motion.li
              key={item.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.05 }}
            >
              <a
                href={item.href}
                className="text-secondary-text hover:text-accent transition-colors text-sm"
              >
                <span className="text-accent mr-2">0{index + 1}.</span>
                {item.name}
              </a>
            </motion.li>
          ))}
        </ul>
      </nav>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex gap-4 mt-8"
      >
        <a
          href="https://github.com/shreyas-s"
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary-text hover:text-accent transition-colors text-sm"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/shreyas-s"
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary-text hover:text-accent transition-colors text-sm"
        >
          LinkedIn
        </a>
      </motion.div>
    </aside>
  )
}
