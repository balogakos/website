"use client"

import { useRef } from "react"
import { motion, useInView, type Variants } from "framer-motion"

// ─── Shared variants ──────────────────────────────────────────────────────────

export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
}

export const staggerContainerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

// ─── FadeUp ──────────────────────────────────────────────────────────────────
// Fades a single element up when it enters the viewport.

interface FadeUpProps {
  children: React.ReactNode
  className?: string
  delay?: number
  /** Fraction of element that must be visible before triggering. Default 0.15 */
  threshold?: number
}

export function FadeUp({ children, className, delay = 0, threshold = 0.15 }: FadeUpProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: threshold })

  return (
    <motion.div
      ref={ref}
      variants={fadeUpVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ─── FadeStagger ─────────────────────────────────────────────────────────────
// Staggered container: children receive `fadeUpVariants` automatically.

interface FadeStaggerProps {
  children: React.ReactNode
  className?: string
  threshold?: number
  delay?: number
}

export function FadeStagger({ children, className, threshold = 0.1, delay = 0 }: FadeStaggerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: threshold })

  return (
    <motion.div
      ref={ref}
      variants={staggerContainerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ─── FadeItem ────────────────────────────────────────────────────────────────
// Must be a direct child of FadeStagger. Can be used as div or other element.

interface FadeItemProps {
  children: React.ReactNode
  className?: string
  as?: "div" | "li" | "article" | "p" | "span" | "h3"
}

const MotionComponents = {
  div: motion.div,
  li: motion.li,
  article: motion.article,
  p: motion.p,
  span: motion.span,
  h3: motion.h3,
}

export function FadeItem({ children, className, as = "div" }: FadeItemProps) {
  const Tag = MotionComponents[as]
  return (
    <Tag variants={fadeUpVariants} className={className}>
      {children}
    </Tag>
  )
}
