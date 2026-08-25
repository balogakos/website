"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { fadeUpVariants } from "@/components/motion"
import { LinkedinIcon, BookOpenIcon, Github } from "lucide-react"

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
      className="relative min-h-screen flex items-center pt-14 overflow-hidden"
    >
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-12 w-full py-24 pointer-events-none">
        <div className="grid grid-cols-12 gap-6">
          {/* Left: content */}
          <div className="col-span-12 md:col-span-7 lg:col-span-7 flex flex-col justify-center gap-8 pointer-events-auto relative z-10">
            {/* Soft mask to hide particles behind text */}
            <div className="absolute inset-[-2rem] md:inset-[-4rem] bg-background/95 blur-2xl z-[-1] rounded-[100px] pointer-events-none" />
            
            <motion.h1
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: heroItems[0].delay }}
              className="text-6xl md:text-8xl font-bold tracking-tight text-foreground text-balance leading-none"
            >
              Ákos Balog
            </motion.h1>

            <motion.p
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: heroItems[1].delay }}
              className="text-2xl md:text-3xl font-light text-foreground tracking-tight"
            >
              <span className="text-red-500 font-medium">Spatial Data Scientist</span><br />PhD Student at University of Liverpool
            </motion.p>

            <motion.div
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: heroItems[3].delay }}
              className="flex items-center gap-8 pt-2"
            >
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base md:text-lg font-medium text-[var(--brand-accent)] hover:text-[var(--brand-accent-hover)] underline underline-offset-4 transition-colors"
              >
                CV
              </a>
              <a
                href="mailto:sgabalog@liverpool.ac.uk"
                className="text-base md:text-lg font-medium text-[var(--brand-accent)] hover:text-[var(--brand-accent-hover)] underline underline-offset-4 transition-colors"
              >
                Email
              </a>
            </motion.div>

            <motion.div
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: heroItems[3].delay + 0.1 }}
              className="flex flex-wrap items-center gap-x-6 gap-y-4 pt-6"
            >
              <a href="https://www.linkedin.com/in/%C3%A1kos-balog-32b566201/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-base font-medium text-muted-foreground hover:text-[var(--brand-accent)] transition-colors"><LinkedinIcon className="w-5 h-5" /> LinkedIn</a>
              <a href="https://scholar.google.com/citations?user=pgHA5lIAAAAJ" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-base font-medium text-muted-foreground hover:text-[var(--brand-accent)] transition-colors"><BookOpenIcon className="w-5 h-5" /> Google Scholar</a>
              <a href="https://orcid.org/0009-0003-7730-7449" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-base font-medium text-muted-foreground hover:text-[var(--brand-accent)] transition-colors"><BookOpenIcon className="w-5 h-5" /> ORCID</a>
              <a href="https://www.researchgate.net/profile/Akos-Balog-3?ev=hdr_xprf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-base font-medium text-muted-foreground hover:text-[var(--brand-accent)] transition-colors"><BookOpenIcon className="w-5 h-5" /> ResearchGate</a>
              <a href="https://github.com/balogakos" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-base font-medium text-muted-foreground hover:text-[var(--brand-accent)] transition-colors"><Github className="w-5 h-5" /> GitHub</a>
            </motion.div>
          </div>

          {/* Right: Photo */}
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.5, duration: 1 }}
            className="hidden md:block col-span-12 md:col-span-5 lg:col-span-5 relative min-h-[400px] pointer-events-auto transform translate-x-4 -translate-y-6 lg:translate-x-8 lg:-translate-y-12"
          >
            <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl border border-border/50">
              <Image 
                src="/hero-photo.png" 
                alt="Ákos Balog presenting" 
                fill 
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            {/* Soft decorative glow behind photo */}
            <div className="absolute inset-[-1rem] bg-[var(--brand-accent)]/10 blur-3xl z-[-1] rounded-full pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
