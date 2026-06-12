"use client"

import { motion } from "framer-motion"
import { useState, useEffect, useMemo } from "react"

export default function Terminal() {
  const [currentLine, setCurrentLine] = useState(0)
  const [typedText, setTypedText] = useState("")

  const commands = useMemo(() => [
    { command: "whoami", output: "shreyas@sde-1 ~ Frontend Engineer at Hudini" },
    { command: "cat experience.txt", output: "2+ years • 6+ enterprise brands • 10+ integrations" },
    { command: "ls -la skills/", output: "react/ nextjs/ typescript/ graphql/ tailwind/" },
    { command: "npm run build", output: "✓ Build successful • 99.9% uptime • 50ms latency" },
    { command: "git log --oneline", output: "feat: booking flow system\nperf: optimization 40%\nfix: payment gateway integration" },
  ], [])

  useEffect(() => {
    if (currentLine < commands.length) {
      const command = commands[currentLine].command
      let index = 0
      const timer = setInterval(() => {
        if (index <= command.length) {
          setTypedText(command.slice(0, index))
          index++
        } else {
          clearInterval(timer)
          setTimeout(() => {
            setCurrentLine((prev) => prev + 1)
            setTypedText("")
          }, 1500)
        }
      }, 50)
      return () => clearInterval(timer)
    }
  }, [currentLine, commands])

  return (
    <section id="terminal" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Terminal</span>
            </h2>
            <p className="text-text-muted text-lg">
              Command-line interface to my engineering journey
            </p>
          </div>

          <div className="glass rounded-2xl overflow-hidden">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-surface/50 border-b border-surface/30">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="flex-1 text-center text-sm text-text-muted">
                shreyas@portfolio:~
              </div>
            </div>

            {/* Terminal Body */}
            <div className="p-6 font-mono text-sm">
              {commands.slice(0, currentLine).map((cmd, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mb-4"
                >
                  <div className="flex items-center gap-2 text-accent">
                    <span className="text-text-muted">$</span>
                    <span>{cmd.command}</span>
                  </div>
                  <div className="ml-4 text-text-muted whitespace-pre-wrap">{cmd.output}</div>
                </motion.div>
              ))}

              {/* Current typing */}
              {currentLine < commands.length && (
                <div className="flex items-center gap-2 text-accent">
                  <span className="text-text-muted">$</span>
                  <span>{typedText}</span>
                  <motion.div
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                    className="w-2 h-5 bg-accent"
                  />
                </div>
              )}

              {/* Completed state */}
              {currentLine >= commands.length && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center gap-2 text-accent mt-4"
                >
                  <span className="text-text-muted">$</span>
                  <span className="text-green-400">Ready for new challenges</span>
                  <motion.div
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                    className="w-2 h-5 bg-accent"
                  />
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
