"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { SectionLabel } from "@/components/section-label"
import { FadeUp, FadeStagger, FadeItem } from "@/components/motion"

interface Project {
  title: string
  tagline: string
  description: string
  methods: string[]
  link?: string
  logo?: string | string[]
}

const currentProjects: Project[] = [
  {
    title: "PhD: ABM of Retail Centres",
    tagline: "Agent-based model of consumer movement and retail vitality",
    description:
      "An agent-based model (ABM) simulating consumer decision-making and movement patterns within retail centres. The model explores how micro-level behaviours aggregate to produce emergent patterns of retail health, vacancy, and footfall across urban retail hierarchies.",
    methods: ["Agent-Based Modelling", "Spatial Analysis", "Python", "Mesa"],
    link: "https://github.com/balogakos/RC-ABM",
    logo: ["/lcrca-logo.png", "/gdsl-logo.png"],
  },
  {
    title: "Research Assistant: Night PedSim City",
    tagline: "Pedestrian simulation focused on night-time urban mobility",
    description:
      "A pedestrian simulation framework tailored to night-time urban environments. The project investigates how lighting, land use, and route choice interact to shape nocturnal movement patterns - with implications for safety, vibrancy, and planning.",
    methods: ["Pedestrian Simulation", "Network Analysis", "GIS", "Python"],
    link: "https://github.com/g-filomena/PedSimCity",
    logo: ["/uol-logo.png", "/gdsl-logo.png"],
  },
  {
    title: "Research Assistant: BENEFITS",
    tagline: "Evaluating place-based policy through spatial data",
    description:
      "A research project assessing the spatial impact and distributional outcomes of place-based regeneration policies. Uses a combination of administrative data, geodemographics, and spatial econometrics to evaluate programme effectiveness.",
    methods: ["Spatial Econometrics", "Geodemographics", "Policy Evaluation", "R"],
    link: "https://benefitsproject.eu",
    logo: ["/benefits-logo.png", "/ucl-logo.png"],
  },
  {
    title: "Freelance Data Scientist: Helipad Visibility ML Project",
    tagline: "End-to-end data pipeline for fog visibility ML dataset",
    description:
      "Engineered an end-to-end data pipeline to construct a fog visibility ML dataset for the Mistelbach helipad. Integrated environmental sensor data with image heuristics and Gemini 2 embeddings to translate raw sensor data into robust predictive inputs.",
    methods: ["Machine Learning", "Data Pipelines", "Python", "Gemini Embeddings"],
    link: "https://www.panomax.com/en",
    logo: "/freelance-logo.png",
  },
]

const previousProjects = [
  { title: "Research Assistant: Korea-UK Digital Twin Approach", description: "Qualitative and computational analysis for transport digital twins and data governance.", logo: "/uol-logo.png" },
  { title: "Visiting Researcher: Pusan National University", description: "Contributed to a systematic literature review and implemented NLP models for transport challenges.", link: "https://news.liverpool.ac.uk/2025/07/09/lcr-digital-transport-project-with-south-korea-to-be-expanded/", logo: "/pusan-logo.svg" },
  { title: "Visiting Researcher: Barcelona Supercomputing Centre", description: "Integrated LLMs with agent-based models to generate travel diaries on the MareNostrum supercomputer.", logo: "/bsc-logo.png" },
]

function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false)

  return (
    <article className="border-t border-border pt-6 pb-2">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="w-full text-left group"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col items-start gap-3">
            {project.logo && (
              <div className="flex items-center gap-4 shrink-0">
                {(Array.isArray(project.logo) ? project.logo : [project.logo]).map((logoSrc, i) => (
                  <div key={i} className="h-10 flex items-center shrink-0">
                    <img src={logoSrc} alt="" className="h-full w-auto object-contain" />
                  </div>
                ))}
              </div>
            )}
            <div>
              <h4 className="text-base font-semibold text-foreground group-hover:text-[var(--brand-accent)] transition-colors">
                {project.title}
              </h4>
              <p className="text-sm text-muted-foreground mt-1">{project.tagline}</p>
            </div>
          </div>
          <motion.span
            aria-hidden="true"
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="mt-0.5 text-muted-foreground text-sm flex-shrink-0 inline-block"
          >
            +
          </motion.span>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pt-4 pb-4 space-y-4">
              <p className="text-sm text-muted-foreground leading-relaxed max-w-[65ch]">
                {project.description}
              </p>
              <div>
                <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">
                  Methods
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.methods.map((m) => (
                    <span
                      key={m}
                      className="text-xs text-foreground border border-border px-2 py-0.5"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>
              {project.link && (
                <a
                  href={project.link}
                  className="text-xs text-[var(--brand-accent)] hover:text-[var(--brand-accent-hover)] underline underline-offset-2 transition-colors"
                >
                  View project
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  )
}

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="py-24 border-t border-border">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-12 gap-6">

          {/* ── Left: sticky label + heading ── */}
          <div className="col-span-12 md:col-span-4 relative">
            <div className="absolute inset-[-2rem] bg-background/95 blur-2xl z-[-1] rounded-[50px] pointer-events-none" />
            <div className="md:sticky md:top-24">
              <FadeUp>
                <SectionLabel>Projects</SectionLabel>
                <h2
                  id="projects-heading"
                  className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight text-foreground text-balance"
                >
                  Current and Previous Work
                </h2>
              </FadeUp>
            </div>
          </div>

          {/* ── Right: projects list ── */}
          <div className="col-span-12 md:col-span-8 lg:col-span-7 lg:col-start-6 relative">
            <div className="absolute inset-[-2rem] bg-background/95 blur-2xl z-[-1] rounded-[100px] pointer-events-none" />
            <FadeStagger className="grid grid-cols-1 md:grid-cols-2 gap-x-12" threshold={0.05}>
              {currentProjects.map((project) => (
                <FadeItem key={project.title}>
                  <ProjectCard project={project} />
                </FadeItem>
              ))}
            </FadeStagger>

            {/* Previous Projects */}
            <FadeUp delay={0.1} className="mt-20">
              <h3 className="text-xs tracking-widest uppercase text-muted-foreground mb-8">
                Previous Projects
              </h3>
              <FadeStagger threshold={0.05}>
                <ul className="space-y-4">
                  {previousProjects.map((p) => (
                    <FadeItem as="li" key={p.title} className="grid grid-cols-[1fr_auto] gap-4 border-t border-border pt-4">
                      <div className="flex items-start gap-4">
                        {(p as any).logo && (
                          <div className="h-14 flex items-center shrink-0 mt-1">
                            {typeof (p as any).logo === 'string' ? (
                              <img src={(p as any).logo} alt={`${p.title} logo`} className="h-full w-auto object-contain" />
                            ) : (
                              <span className="text-xs text-muted-foreground">Logo</span>
                            )}
                          </div>
                        )}
                        <div>
                          <span className="text-sm font-medium text-foreground">
                            {(p as any).link ? (
                              <a href={(p as any).link} target="_blank" rel="noreferrer" className="hover:underline hover:text-[var(--brand-accent)]">{p.title}</a>
                            ) : (
                              p.title
                            )}
                          </span>
                          <span className="text-sm text-muted-foreground ml-3 block md:inline md:mt-0 mt-1">{p.description}</span>
                        </div>
                      </div>
                    </FadeItem>
                  ))}
                </ul>
              </FadeStagger>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  )
}
