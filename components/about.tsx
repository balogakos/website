"use client"

import { SectionLabel } from "@/components/section-label"
import { FadeUp, FadeStagger, FadeItem } from "@/components/motion"

const education = [
  {
    dateRange: "2022 - 2026",
    degree: "Integrated Masters-PhD in Data Analytics and Society",
    institution: "University of Liverpool",
    logo: "/uol-logo.png",
  },
  {
    dateRange: "2019 - 2022",
    degree: "BA (Hons) Geography and Planning (1st Class)",
    institution: "University of Liverpool",
    logo: "/uol-logo.png",
  },
]

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="py-24 border-t border-border">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-12 gap-6">

          {/* ── Left: sticky label + heading ── */}
          <div className="col-span-12 md:col-span-4 relative">
            <div className="absolute inset-[-2rem] bg-background/95 blur-2xl z-[-1] rounded-[50px] pointer-events-none" />
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
          <div className="col-span-12 md:col-span-8 lg:col-span-7 lg:col-start-6 relative">
            <div className="absolute inset-[-2rem] bg-background/95 blur-2xl z-[-1] rounded-[100px] pointer-events-none" />
            <FadeStagger className="space-y-4 text-[15px] leading-relaxed text-foreground max-w-[65ch]">
              <FadeItem as="p">
                Data Scientist specialising in geographic data science, agent-based modelling and urban analytics. My work focuses on using spatial data and simulation to understand how people, places and urban systems interact, and to generate insights that support policy and decision-making.
              </FadeItem>
              <FadeItem as="p">
                I am currently a Research Data Scientist and Postdoctoral Researcher at the University of Liverpool, working within the Geographic Data Service (GeoDS) and the Geographic Data Science Laboratory (GDSL) on applied research across spatial inequality, population, transport and retail.
              </FadeItem>
              <FadeItem as="p">
                My PhD at the University of Liverpool has focused on developing agent-based models of retail centres and consumer behaviour, alongside geodemographic and spatial approaches to understanding retail resilience and urban change. Alongside this, I have also contributed to projects including Night Ped Sim City, the Horizon Europe BENEFITS project, and a transport digital twin project with Podaris, Liverpool City Region Combined Authority and partners in South Korea.
              </FadeItem>
              <FadeItem as="p">
                My wider research interests include geodemographics, microsimulation, digital twins and emerging forms of spatial data, particularly their application to understanding and improving cities and retail systems.
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
                      <div className="flex items-start gap-4">
                        {(item as any).logo && (
                          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 overflow-hidden border border-border mt-0.5">
                            <img src={(item as any).logo} alt={`${item.institution} logo`} className="w-full h-full object-contain p-1.5" />
                          </div>
                        )}
                        <div>
                          <p className="text-sm font-semibold text-foreground leading-snug">
                            {item.degree}
                          </p>
                          <p className="text-sm text-muted-foreground mt-0.5">{item.institution}</p>
                        </div>
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
