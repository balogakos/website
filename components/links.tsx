"use client"

import { LinkedinIcon, BookOpenIcon, Github } from "lucide-react"
import { FadeStagger, FadeItem } from "@/components/motion"

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/%C3%A1kos-balog-32b566201/",
    icon: LinkedinIcon,
  },
  {
    label: "Google Scholar",
    href: "https://scholar.google.com/citations?user=pgHA5lIAAAAJ",
    icon: BookOpenIcon,
  },
  {
    label: "ORCID",
    href: "https://orcid.org/0009-0003-7730-7449",
    icon: BookOpenIcon,
  },
  {
    label: "ResearchGate",
    href: "https://www.researchgate.net/profile/Akos-Balog-3?ev=hdr_xprf",
    icon: BookOpenIcon,
  },
  {
    label: "GitHub",
    href: "https://github.com/balogakos",
    icon: Github,
  },
]

export function Links() {
  return (
    <section aria-label="Social links" className="py-16">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <FadeStagger className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4" threshold={0.3}>
          {socialLinks.map((link) => {
            const Icon = link.icon
            return (
              <FadeItem as="span" key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-lg font-medium text-muted-foreground hover:text-[var(--brand-accent)] transition-colors"
                  title={link.label}
                >
                  <Icon className="h-5 w-5" strokeWidth={2} />
                  <span>{link.label}</span>
                </a>
              </FadeItem>
            )
          })}
        </FadeStagger>
      </div>
    </section>
  )
}
