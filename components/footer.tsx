"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function Footer() {
  const year = new Date().getFullYear()
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <motion.footer
      ref={ref}
      role="contentinfo"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="border-t border-border py-8"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex items-center justify-between">
        <span className="text-xs text-muted-foreground">
          Akos Balog &copy; {year}
        </span>
        <span className="text-xs text-muted-foreground">
          PhD Student, Geographic Data Science
        </span>
      </div>
    </motion.footer>
  )
}
