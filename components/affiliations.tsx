'use client'

import { FadeUp } from '@/components/motion'

const logos = [
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Picture1-7tqAbknl4Iv2D4jlUdDOtUo0A5WoI4.png',
    alt: 'BSC logo',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pedsim-xhoO4yGqyJ1JRgPVnLUsYFKKt8CkDP.png',
    alt: 'Geographic Data Science Lab logo',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lcrca-TZpEyv14bfWb22Z2MFBIAYBuVH2BEU.png',
    alt: 'Liverpool City Region Combined Authority logo',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/benefit-cHUVF80xaEKRiKhugIubkbgOkbU7Yj.png',
    alt: 'Benefits project logo',
  },
  // {
  //   src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kudata-fLgEt1cItu9lDje1DrPgv5ZGLarOJT.png',
  //   alt: 'KUData network visualization',
  // },
]

export function Affiliations() {
  return (
    <section aria-labelledby="affiliations-heading" className="py-16 border-t border-border">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <FadeUp className="mb-8">
          <h2
            id="affiliations-heading"
            className="text-xs tracking-widest uppercase text-muted-foreground"
          >
            Affiliations & Collaborations
          </h2>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="flex flex-wrap items-center justify-start gap-8">
            {logos.map((logo) => (
              <img
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300"
              />
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
