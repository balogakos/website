"use client"

import { SectionLabel } from "@/components/section-label"
import { FadeUp, FadeStagger, FadeItem } from "@/components/motion"

const education = [
  {
    dateRange: "2022 - Present",
    degree: "Integrated Masters-PhD in Data Analytics and Society",
    institution: "University of Liverpool",
    logo: "/gdsl-logo.png",
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
                Data scientist and PhD researcher specialising in agent-based modelling, retail, and transport. Focusing on simulating urban systems to generate insights that support economic resilience and sustainable growth.
              </FadeItem>
              <FadeItem as="p">
                Currently, I am working as a Research Assistant on the Night Ped Sim City project at the University of Liverpool and on the BENEFITS Horizon Europe Project at UCL. Passionate about applying advanced modelling to help cities and retail become smarter, more sustainable, and more resilient.
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
