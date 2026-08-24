"use client"

import { SectionLabel } from "@/components/section-label"
import { FadeUp, FadeStagger, FadeItem } from "@/components/motion"

const publications = [
  {
    title:
      "Measuring Retail Centre Vitality: A Multi-Indicator Spatial Framework for UK High Streets",
    authors: "Balog, A., Smith, R., & Jones, C.",
    venue: "Environment and Planning B: Urban Analytics and City Science",
    year: "2024",
  },
  {
    title:
      "Agent-Based Simulation of Consumer Behaviour in Retail Environments Under Disruption",
    authors: "Balog, A., & Davies, L.",
    venue: "Computers, Environment and Urban Systems",
    year: "2023",
  },
  {
    title:
      "Accessibility, Proximity, and the 15-Minute City: A Spatial Analysis of Urban Service Coverage",
    authors: "Balog, A., Thompson, K., & Patel, S.",
    venue: "Urban Studies",
    year: "2023",
  },
  {
    title:
      "Place-Based Deprivation and Retail Decline: Spatial Inequality in British Town Centres",
    authors: "Balog, A.",
    venue: "Regional Studies",
    year: "2022",
  },
  {
    title:
      "Geodemographic Classification of Retail Catchments Using Open Spatial Data",
    authors: "Balog, A., & Green, M.",
    venue: "Applied Geography",
    year: "2022",
  },
]

export function Publications() {
  return (
    <section
      id="publications"
      aria-labelledby="publications-heading"
      className="py-24 border-t border-border"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-12 gap-6">

          {/* Left sticky header */}
          <div className="col-span-12 md:col-span-4">
            <div className="md:sticky md:top-24">
              <FadeUp>
                <SectionLabel>Publications</SectionLabel>
                <h2
                  id="publications-heading"
                  className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight text-foreground text-balance"
                >
                  Selected Work
                </h2>
              </FadeUp>
            </div>
          </div>

          {/* Right: publication list */}
          <div className="col-span-12 md:col-span-8 lg:col-span-7 lg:col-start-6">
            <FadeStagger threshold={0.05}>
              <ol className="space-y-0">
                {publications.map((pub, idx) => (
                  <FadeItem as="li" key={idx} className="grid grid-cols-12 gap-4 border-t border-border py-6 group">
                    <div className="col-span-1 hidden md:block">
                      <span className="text-xs font-mono text-muted-foreground">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="col-span-12 md:col-span-11 flex flex-col gap-1">
                      <p className="text-[15px] font-medium text-foreground leading-snug text-balance">
                        {pub.title}
                      </p>
                      <p className="text-sm text-muted-foreground">{pub.authors}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-muted-foreground italic">{pub.venue}</span>
                        <span className="text-xs text-muted-foreground">·</span>
                        <span className="text-xs text-muted-foreground">{pub.year}</span>
                      </div>
                    </div>
                  </FadeItem>
                ))}
              </ol>
            </FadeStagger>
          </div>
        </div>
      </div>
    </section>
  )
}
