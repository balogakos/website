"use client"

import { motion } from "framer-motion"
import { fadeUpVariants } from "@/components/motion"

const heroItems = [
  { delay: 0 },
  { delay: 0.12 },
  { delay: 0.22 },
  { delay: 0.32 },
]

export function Hero() {
  return (
    <section
      id="home"
      aria-label="Introduction"
      className="min-h-screen flex items-center pt-14"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 w-full py-24">
        <div className="grid grid-cols-12 gap-6">
          {/* Left: content */}
          <div className="col-span-12 md:col-span-7 lg:col-span-6 flex flex-col justify-center gap-6">
            <motion.h1
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: heroItems[0].delay }}
              className="text-5xl md:text-7xl font-bold tracking-tight text-foreground text-balance leading-none"
            >
              Akos Balog
            </motion.h1>

            <motion.p
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: heroItems[1].delay }}
              className="text-xl md:text-2xl font-light text-foreground tracking-tight"
            >
              PhD Student in Geographic Data Science
            </motion.p>

            <motion.p
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: heroItems[2].delay }}
              className="text-sm text-muted-foreground tracking-wide leading-relaxed max-w-[52ch]"
            >
              Spatial data, urban systems, and digital planning.
            </motion.p>

            <motion.div
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: heroItems[3].delay }}
              className="flex items-center gap-6 pt-2"
            >
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-[var(--brand-accent)] hover:text-[var(--brand-accent-hover)] underline underline-offset-4 transition-colors"
              >
                CV
              </a>
              <a
                href="mailto:akos.balog@university.ac.uk"
                className="text-sm font-medium text-[var(--brand-accent)] hover:text-[var(--brand-accent-hover)] underline underline-offset-4 transition-colors"
              >
                Email
              </a>
            </motion.div>
          </div>

          {/* Right: subtle grid accent */}
          <motion.div
            aria-hidden="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
            className="hidden md:flex col-span-5 lg:col-span-6 items-center justify-end"
          >
            <GridAccent />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function GridAccent() {
  const cols = 10
  const rows = 14
  return (
    <div className="opacity-[0.07]">
      <svg
        width={cols * 40}
        height={rows * 40}
        viewBox={`0 0 ${cols * 40} ${rows * 40}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {Array.from({ length: rows + 1 }, (_, r) => (
          <line
            key={`h-${r}`}
            x1={0}
            y1={r * 40}
            x2={cols * 40}
            y2={r * 40}
            stroke="currentColor"
            strokeWidth="1"
          />
        ))}
        {Array.from({ length: cols + 1 }, (_, c) => (
          <line
            key={`v-${c}`}
            x1={c * 40}
            y1={0}
            x2={c * 40}
            y2={rows * 40}
            stroke="currentColor"
            strokeWidth="1"
          />
        ))}
        {[
          [3, 3], [3, 4], [4, 3], [4, 4],
          [6, 7], [6, 8], [7, 7], [7, 8],
          [2, 9], [2, 10],
          [8, 1], [8, 2],
        ].map(([cx, cy], i) => (
          <circle
            key={i}
            cx={cx * 40}
            cy={cy * 40}
            r={3}
            fill="var(--brand-accent)"
            opacity="1"
          />
        ))}
      </svg>
    </div>
  )
}
