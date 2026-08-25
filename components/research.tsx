"use client"

import { SectionLabel } from "@/components/section-label"
import { FadeUp, FadeStagger, FadeItem } from "@/components/motion"

const themes = [
  {
    number: "01",
    title: "Retailing, Retail Spaces and Consumer Behaviour",
    description:
      "Investigating the spatial dynamics of retail centres, footfall patterns, and how consumer behaviour shapes and is shaped by the built environment.",
  },
  {
    number: "02",
    title: "Transport Geography, Infrastructure Planning and 15-Minute Cities",
    description:
      "Exploring accessibility, modal shift, and the role of transport networks in enabling or constraining urban life with a focus on proximity-based urban planning.",
  },
  {
    number: "03",
    title: "Spatial Inequality, Place-Based Policy and Digital Planning",
    description:
      "Analysing how spatial inequalities manifest across urban and regional scales, and how data-driven approaches can support more effective place-based interventions.",
  },
]

const methods = [
  { label: "Spatial Analysis", description: "Examining geographic patterns and relationships" },
  { label: "Spatial Modelling", description: "Predictive and explanatory spatial models" },
  { label: "Machine Learning", description: "Classification, clustering, and regression" },
  { label: "Statistics", description: "Inferential and descriptive statistical methods" },
  { label: "Geodemographics", description: "Population segmentation from spatial data" },
  { label: "Network Analysis", description: "Transport and street-level graph methods" },
  { label: "Data Visualisation", description: "Communicating spatial findings clearly" },
  { label: "Dashboards", description: "Interactive tools for decision-making" },
  { label: "Digital Twins", description: "Simulation-based urban representations" },
]

export function Research() {
  return (
    <section id="research" aria-labelledby="research-heading" className="py-24 border-t border-border">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">

        {/* ── Two-column sticky layout ── */}
        <div className="grid grid-cols-12 gap-6">

          {/* Left sticky header */}
          <div className="col-span-12 md:col-span-4 relative">
            <div className="absolute inset-[-2rem] bg-background/95 blur-2xl z-[-1] rounded-[50px] pointer-events-none" />
            <div className="md:sticky md:top-24">
              <FadeUp>
                <SectionLabel>Research</SectionLabel>
                <h2
                  id="research-heading"
                  className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight text-foreground text-balance"
                >
                  Research Interests
                </h2>
              </FadeUp>
            </div>
          </div>

          {/* Right: Theme list */}
          <div className="col-span-12 md:col-span-8 lg:col-span-7 lg:col-start-6 relative">
            <div className="absolute inset-[-2rem] bg-background/95 blur-2xl z-[-1] rounded-[100px] pointer-events-none" />

            {/* Themes */}
            <div className="mb-16">
              <FadeUp>
                <h3 className="text-xs tracking-widest uppercase text-muted-foreground mb-8">
                  Themes
                </h3>
              </FadeUp>
              <FadeStagger className="grid grid-cols-1 md:grid-cols-1 gap-8" threshold={0.05}>
                {themes.map((theme) => (
                  <FadeItem key={theme.number} as="article" className="flex flex-col gap-3">
                    <span
                      className="text-xs font-mono text-[var(--brand-accent)] tracking-widest"
                      aria-hidden="true"
                    >
                      {theme.number}
                    </span>
                    <h4 className="text-sm font-semibold text-foreground leading-snug text-balance">
                      {theme.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {theme.description}
                    </p>
                  </FadeItem>
                ))}
              </FadeStagger>
            </div>

            {/* Divider */}
            <FadeUp>
              <div className="border-t border-border mb-16" aria-hidden="true" />
            </FadeUp>

            {/* Methods */}
            <FadeUp>
              <h3 className="text-xs tracking-widest uppercase text-muted-foreground mb-8">
                Approach &amp; Methods
              </h3>
            </FadeUp>
            <FadeStagger
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4"
              threshold={0.05}
            >
              {methods.map((m) => (
                <FadeItem key={m.label} className="flex flex-col gap-1">
                  <span className="text-sm font-medium text-foreground">{m.label}</span>
                  <span className="text-xs text-muted-foreground leading-relaxed">
                    {m.description}
                  </span>
                </FadeItem>
              ))}
            </FadeStagger>
          </div>
        </div>
      </div>
    </section>
  )
}
