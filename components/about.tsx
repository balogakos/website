"use client"

import { SectionLabel } from "@/components/section-label"
import { FadeUp, FadeStagger, FadeItem } from "@/components/motion"

const education = [
  {
    dateRange: "2022 — Present",
    degree: "PhD in Geographic Data Science",
    institution: "University of Liverpool",
  },
  {
    dateRange: "2020 — 2022",
    degree: "MSc in Geographic Data Science",
    institution: "University of Liverpool",
  },
  {
    dateRange: "2017 — 2020",
    degree: "BSc in Geography",
    institution: "Eötvös Loránd University, Budapest",
  },
]

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="py-24 border-t border-border">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-12 gap-6">

          {/* ── Left: sticky label + heading ── */}
          <div className="col-span-12 md:col-span-4">
            <div className="md:sticky md:top-24">
              <FadeUp>
                <SectionLabel>About</SectionLabel>
                <h2
                  id="about-heading"
                  className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight text-foreground text-balance"
                >
                  Who Am I?
                </h2>
              </FadeUp>
            </div>
          </div>

          {/* ── Right: scrollable bio + education ── */}
          <div className="col-span-12 md:col-span-8 lg:col-span-7 lg:col-start-6">
            <FadeStagger className="space-y-4 text-[15px] leading-relaxed text-foreground max-w-[65ch]">
              <FadeItem as="p">
                I am a PhD student in Geographic Data Science at the University of Liverpool,
                working at the intersection of spatial analysis, urban systems, and digital
                planning. My research is driven by a commitment to understanding how places
                function and how data can inform more equitable and sustainable urban futures.
              </FadeItem>
              <FadeItem as="p">
                My work draws on methods from computational social science, transport geography,
                and applied machine learning to examine questions of retail resilience, consumer
                behaviour, and spatial inequality. I am particularly interested in how
                fine-grained spatial data can be used to develop actionable insights for
                planners and policymakers.
              </FadeItem>
              <FadeItem as="p">
                Before my PhD I completed an MSc in Geographic Data Science, where I developed
                a strong foundation in spatial modelling, geodemographics, and network analysis.
              </FadeItem>
            </FadeStagger>

            {/* Education timeline */}
            <FadeUp delay={0.1} className="mt-12">
              <h3 className="text-xs tracking-widest uppercase text-muted-foreground mb-6">
                Education
              </h3>
              <FadeStagger className="space-y-6" threshold={0.05}>
                <ol className="space-y-6">
                  {education.map((item) => (
                    <FadeItem as="li" key={item.degree} className="grid grid-cols-[9rem_1fr] gap-4">
                      <span className="text-xs text-muted-foreground pt-0.5 tabular-nums">
                        {item.dateRange}
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-foreground leading-snug">
                          {item.degree}
                        </p>
                        <p className="text-sm text-muted-foreground mt-0.5">{item.institution}</p>
                      </div>
                    </FadeItem>
                  ))}
                </ol>
              </FadeStagger>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  )
}
