"use client"

import { SectionLabel } from "@/components/section-label"
import { FadeUp, FadeStagger, FadeItem } from "@/components/motion"

const publicationCategories = [
  {
    title: "Publications",
    items: [
      {
        title: "Leveraging advanced technologies for (smart) transportation planning: A systematic review",
        authors: "H Son, J Jang, J Park, A Balog, P Ballantyne, HR Kwon, A Singleton, ...",
        venue: "Sustainability 17 (5), 2245",
        year: "2025",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=pgHA5lIAAAAJ&citation_for_view=pgHA5lIAAAAJ:UeHWp8X0CEIC",
      },
      {
        title: "Developing an open, national-level, small-area geodemographic classification of consumer behaviour",
        authors: "Á Balog, L Dolega, R Mahabir, P Ballantyne, P Williamson",
        venue: "International Journal of Retail & Distribution Management, 1-16",
        year: "2026",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=pgHA5lIAAAAJ&citation_for_view=pgHA5lIAAAAJ:eQOLeE2rZwMC",
      }
    ]
  },
  {
    title: "Preprints",
    items: [
      {
        title: "Exploring Retail Competition and Consumer Behaviour: An Agent-Based Model of Metropolitan Retail Centres",
        authors: "A Balog, R Mahabir, L Dolega, G Filomena",
        venue: "Preprint",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=pgHA5lIAAAAJ&citation_for_view=pgHA5lIAAAAJ:YsMSGLbcyi4C",
      }
    ]
  },
  {
    title: "Under Review",
    items: [
      {
        title: "Network Contagion and the Persistence of Inequality: An Empirically Grounded Agent-Based Model of Unemployment Recovery",
        authors: "Balog, A., Melios, G., Aslam, N.S., Tzivanakis, N., Moore, H.",
        venue: "Social Networks. (Awaiting review)",
      },
      {
        title: "A framework for transport digital twin design and implementation for urban decision-making: Lessons from twin cities in the United Kingdom and South Korea",
        authors: "Kwon, H.R., Ballantyne, P., Balog, A., Jang, J., Son, H., Hwang, J., Singleton, A.",
        venue: "Harvard Data Science Review. (Submitted for special issue)",
      }
    ]
  },
  {
    title: "Working Papers",
    items: [
      {
        title: "Using LLMs to Generate Synthetic Mobility Data",
        authors: "Balog, A., Murphy, J., Reyes, P., Cucchietti, F.",
        venue: "Target journal: Urban Transitions",
      },
      {
        title: "Nighttime PedSim City: Developing an ABM of Nighttime Walking for Policy Testing Scenarios",
        authors: "Filomena, G., Balog, A., Garofani, G., Nausto, A.",
        venue: "Target journal: Cities",
      },
      {
        title: "From Visitation to Performance: Empirical Validation of an Agent-Based Model of Retail Centre Competition",
        authors: "Balog, A., Filomena, G., Dolega, L., Mahabir, R.",
        venue: "Target journal: Computers, Environment and Urban Systems. Available at SSRN 6753765",
      }
    ]
  }
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
          <div className="col-span-12 md:col-span-4 relative">
            <div className="absolute inset-[-2rem] bg-background/95 blur-2xl z-[-1] rounded-[50px] pointer-events-none" />
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

          {/* Right: publication lists by category */}
          <div className="col-span-12 md:col-span-8 lg:col-span-7 lg:col-start-6 relative">
            <div className="absolute inset-[-2rem] bg-background/95 blur-2xl z-[-1] rounded-[100px] pointer-events-none" />
            <FadeStagger threshold={0.05} className="space-y-16">
              {publicationCategories.map((category) => (
                <div key={category.title}>
                  <FadeItem as="h3" className="text-xs tracking-widest uppercase text-muted-foreground mb-6">
                    {category.title}
                  </FadeItem>
                  <ol className="space-y-0">
                    {category.items.map((pub, idx) => (
                      <FadeItem as="li" key={idx} className="grid grid-cols-12 gap-4 border-t border-border py-6 group">
                        <div className="col-span-1 hidden md:block">
                          <span className="text-xs font-mono text-muted-foreground">
                            {String(idx + 1).padStart(2, "0")}
                          </span>
                        </div>
                        <div className="col-span-12 md:col-span-11 flex flex-col gap-1">
                          <p className="text-[15px] font-medium text-foreground leading-snug text-balance">
                            {pub.link ? (
                              <a href={pub.link} target="_blank" rel="noreferrer" className="hover:underline hover:text-[var(--brand-accent)]">
                                {pub.title}
                              </a>
                            ) : (
                              pub.title
                            )}
                          </p>
                          <p className="text-sm text-muted-foreground">{pub.authors}</p>
                          <div className="flex items-center gap-2 mt-1 flex-wrap">
                            <span className="text-xs text-muted-foreground italic">{pub.venue}</span>
                            {pub.year && (
                              <>
                                <span className="text-xs text-muted-foreground">·</span>
                                <span className="text-xs text-muted-foreground">{pub.year}</span>
                              </>
                            )}
                          </div>
                        </div>
                      </FadeItem>
                    ))}
                  </ol>
                </div>
              ))}
            </FadeStagger>
          </div>
        </div>
      </div>
    </section>
  )
}
