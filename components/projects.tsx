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
}

const currentProjects: Project[] = [
  {
    title: "ABM of Retail Centres",
    tagline: "Agent-based model of consumer movement and retail vitality",
    description:
      "An agent-based model (ABM) simulating consumer decision-making and movement patterns within retail centres. The model explores how micro-level behaviours aggregate to produce emergent patterns of retail health, vacancy, and footfall across urban retail hierarchies.",
    methods: ["Agent-Based Modelling", "Spatial Analysis", "Python", "Mesa"],
    link: "#",
  },
  {
    title: "Night PedSim City",
    tagline: "Pedestrian simulation focused on night-time urban mobility",
    description:
      "A pedestrian simulation framework tailored to night-time urban environments. The project investigates how lighting, land use, and route choice interact to shape nocturnal movement patterns — with implications for safety, vibrancy, and planning.",
    methods: ["Pedestrian Simulation", "Network Analysis", "GIS", "Python"],
    link: "#",
  },
  {
    title: "BENEFITS",
    tagline: "Evaluating place-based policy through spatial data",
    description:
      "A research project assessing the spatial impact and distributional outcomes of place-based regeneration policies. Uses a combination of administrative data, geodemographics, and spatial econometrics to evaluate programme effectiveness.",
    methods: ["Spatial Econometrics", "Geodemographics", "Policy Evaluation", "R"],
    link: "#",
  },
  {
    title: "BSC",
    tagline: "British Shopping Centres: a longitudinal spatial dataset",
    description:
      "A comprehensive dataset and analytical framework for tracking the evolution of British shopping centres over time. Combines retail footprint data with economic indicators to examine structural change in retail geography.",
    methods: ["Data Construction", "Longitudinal Analysis", "Spatial Modelling", "Python"],
    link: "#",
  },
]

const previousProjects = [
  { title: "Retail Gravity Models", description: "Spatial interaction modelling of retail catchments" },
  { title: "Urban Accessibility Index", description: "Composite measure of 15-minute city performance" },
  { title: "High Street Typologies", description: "Cluster analysis of UK high street morphologies" },
  { title: "Digital Twin Pilot", description: "Prototype city-level digital twin for transport planning" },
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
          <div>
            <h4 className="text-base font-semibold text-foreground group-hover:text-[var(--brand-accent)] transition-colors">
              {project.title}
            </h4>
            <p className="text-sm text-muted-foreground mt-1">{project.tagline}</p>
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

          {/* Left sticky header */}
          <div className="col-span-12 md:col-span-4">
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

          {/* Right: project cards */}
          <div className="col-span-12 md:col-span-8 lg:col-span-7 lg:col-start-6">
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
                      <div>
                        <span className="text-sm font-medium text-foreground">{p.title}</span>
                        <span className="text-sm text-muted-foreground ml-3">{p.description}</span>
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
