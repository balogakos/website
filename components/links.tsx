"use client"

import { LinkedinIcon, BookOpenIcon, GitlabIcon } from "lucide-react"
import { FadeStagger, FadeItem } from "@/components/motion"

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/akos-balog",
    icon: LinkedinIcon,
  },
  {
    label: "Google Scholar",
    href: "https://scholar.google.com/citations?user=EXAMPLE",
    icon: BookOpenIcon,
  },
  {
    label: "ResearchGate",
    href: "https://www.researchgate.net/profile/Akos-Balog",
    icon: BookOpenIcon,
  },
  {
    label: "GitHub",
    href: "https://github.com/akosbalog",
    icon: GitlabIcon,
  },
]

export function Links() {
  return (
    <section aria-label="Social links" className="py-16">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <FadeStagger className="flex items-center justify-center gap-8" threshold={0.3}>
          {socialLinks.map((link) => {
            const Icon = link.icon
            return (
              <FadeItem as="span" key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="flex items-center justify-center text-muted-foreground hover:text-[var(--brand-accent)] transition-colors"
                  title={link.label}
                >
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </a>
              </FadeItem>
            )
          })}
        </FadeStagger>
      </div>
    </section>
  )
}
