"use client"

import { SectionLabel } from "@/components/section-label"
import { FadeUp } from "@/components/motion"

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-24 border-t border-border"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-12 gap-6">

          {/* Left sticky label */}
          <div className="col-span-12 md:col-span-4">
            <div className="md:sticky md:top-24">
              <FadeUp>
                <SectionLabel>Contact</SectionLabel>
              </FadeUp>
            </div>
          </div>

          {/* Right content */}
          <div className="col-span-12 md:col-span-7 lg:col-span-6">
            <FadeUp>
              <h2
                id="contact-heading"
                className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground text-balance mb-6"
              >
                Get in Touch
              </h2>
              <p className="text-[15px] text-muted-foreground leading-relaxed max-w-[55ch] mb-6">
                For research, collaboration, or enquiries, please reach out via email or via LinkedIn.
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="mailto:sgabalog@liverpool.ac.uk"
                  className="text-[15px] font-medium text-[var(--brand-accent)] hover:text-[var(--brand-accent-hover)] underline underline-offset-4 transition-colors w-fit"
                >
                  sgabalog@liverpool.ac.uk
                </a>
                <a
                  href="https://www.linkedin.com/in/%C3%A1kos-balog-32b566201/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[15px] font-medium text-[var(--brand-accent)] hover:text-[var(--brand-accent-hover)] underline underline-offset-4 transition-colors w-fit"
                >
                  LinkedIn
                </a>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  )
}
