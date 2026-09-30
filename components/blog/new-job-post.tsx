import Link from "next/link"
import {
  CheckCircle2,
  ExternalLink,
  MapPin,
  Building2,
  Layers,
  Sparkles,
  BarChart3,
  Users2,
  Globe2,
  ArrowRight,
} from "lucide-react"
import type { BlogPost } from "@/lib/blog-data"

export function NewJobPostContent({ post }: { post: BlogPost }) {
  return (
    <div className="prose prose-invert max-w-none text-foreground text-[16px] leading-relaxed space-y-8">
      {/* Section 1 */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight text-foreground border-b border-border/60 pb-3 mb-4">
          A New Chapter in Liverpool
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          I am delighted to announce that I have taken on a permanent role as a{" "}
          <strong className="text-foreground">Research Data Scientist</strong> within the UK Research and Innovation
          (UKRI)-funded <strong className="text-foreground">Geographic Data Service (GeoDS)</strong> at the University of
          Liverpool!
        </p>
        <p className="text-muted-foreground leading-relaxed mt-3">
          Working closely with <strong className="text-foreground">Professor Alex Singleton</strong> and the research and
          data services team, this role marks an exciting transition following the completion of my Integrated
          Masters-PhD in Data Analytics and Society. I am thrilled to continue my academic journey in-person on the
          Liverpool campus within the Department of Geography and Planning, continuing to explore the intersection of
          computational spatial science, policy impact, and regional equity.
        </p>
      </section>

      {/* Role & Institute Card */}
      <section className="rounded-xl border border-[var(--brand-accent)]/30 bg-[var(--brand-accent)]/5 p-6 md:p-8 my-6">
        <div className="grid sm:grid-cols-2 gap-4 text-xs">
          <div>
            <span className="text-muted-foreground uppercase tracking-wider font-semibold">Position</span>
            <p className="text-sm font-semibold text-foreground mt-0.5">Research Data Scientist (Permanent)</p>
          </div>
          <div>
            <span className="text-muted-foreground uppercase tracking-wider font-semibold">Research Unit</span>
            <p className="text-sm font-semibold text-foreground mt-0.5">Geographic Data Service (GeoDS)</p>
          </div>
          <div>
            <span className="text-muted-foreground uppercase tracking-wider font-semibold">Department</span>
            <p className="text-sm font-semibold text-foreground mt-0.5">Geography and Planning, School of Environmental Sciences</p>
          </div>
          <div>
            <span className="text-muted-foreground uppercase tracking-wider font-semibold">Institution &amp; Location</span>
            <p className="text-sm font-semibold text-foreground mt-0.5">University of Liverpool &bull; Liverpool Campus (In-Person)</p>
          </div>
        </div>

        <div className="mt-5 pt-4 border-t border-[var(--brand-accent)]/20 flex flex-wrap gap-4">
          <a
            href="https://www.geods.ac.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--brand-accent)] hover:underline"
          >
            <Globe2 className="w-3.5 h-3.5" /> Visit the Geographic Data Service (geods.ac.uk)
          </a>
          <a
            href="https://www.liverpool.ac.uk/environmental-sciences/departments/geography-and-planning/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
          >
            <Building2 className="w-3.5 h-3.5" /> Department of Geography and Planning
          </a>
        </div>
      </section>

      {/* Section 2 */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight text-foreground border-b border-border/60 pb-3 mb-4">
          The Mission: Unlocking the Power of Smart Data for Social Good
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          The <a href="https://www.geods.ac.uk" target="_blank" rel="noopener noreferrer" className="text-[var(--brand-accent)] underline hover:opacity-80">Geographic Data Service (GeoDS)</a>,
          part of the UKRI Smart Data Research UK programme, leads national academic collaboration with industry, government,
          and the third sector to extract real-world value from emerging forms of <strong>Smart Data</strong>.
        </p>
        <p className="text-muted-foreground leading-relaxed mt-3">
          While traditional national statistics and decennial censuses provide invaluable structural baselines, they struggle
          to capture fast-moving social, environmental, and economic shifts. GeoDS employs cutting-edge geographic
          methodologies that integrate rich, non-traditional Smart Data sources&mdash;such as consumer lifestyle records,
          footfall telemetry, mobility feeds, and administrative datasets&mdash;with nationally representative benchmarks.
        </p>
        <p className="text-muted-foreground leading-relaxed mt-3">
          Our core objective is both analytical and ethical: to rigorously identify the multi-scalar social and economic
          inequalities that persist within and between UK regions, unpack their underlying causal mechanisms, and translate
          those discoveries into actionable evidence for policies aimed at fostering greater prosperity, resilient high
          streets, and equal opportunities for all.
        </p>
      </section>

      {/* Section 3 */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight text-foreground border-b border-border/60 pb-3 mb-4">
          What I&apos;ll Be Focusing On
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          This role bridges the interface between rigorous computational methodology and direct policy application.
          My core activities and responsibilities encompass:
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border border-border bg-card/40 p-5">
            <div className="flex items-center gap-2 text-[var(--brand-accent)] mb-2">
              <BarChart3 className="w-5 h-5" />
              <h3 className="text-sm font-semibold text-foreground">Substantive Applied Research</h3>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Applying quantitative spatial data science (Python, R) to pressing challenges in population dynamics,
              transport accessibility, retail geography, and geodemographic classifications across UK regions.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card/40 p-5">
            <div className="flex items-center gap-2 text-[var(--brand-accent)] mb-2">
              <Layers className="w-5 h-5" />
              <h3 className="text-sm font-semibold text-foreground">Interactive Tools &amp; Dashboards</h3>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Engineering modern proof-of-concept web tools, interactive visualization dashboards (Streamlit, Dash), and
              spatial data services (FastAPI, PostGIS, GeoJSON) to make spatial evidence immediately explorable for partners.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card/40 p-5">
            <div className="flex items-center gap-2 text-[var(--brand-accent)] mb-2">
              <Sparkles className="w-5 h-5" />
              <h3 className="text-sm font-semibold text-foreground">Machine Learning &amp; Algorithm Design</h3>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Developing, adapting, and fine-tuning state-of-the-art machine learning models and spatial algorithms to
              handle large-scale, complex multi-source geospatial datasets.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card/40 p-5">
            <div className="flex items-center gap-2 text-[var(--brand-accent)] mb-2">
              <Users2 className="w-5 h-5" />
              <h3 className="text-sm font-semibold text-foreground">Team Collaboration &amp; Mentorship</h3>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Coordinating data science workflows, mentoring PhD researchers, engaging directly with public and private
              end-users, and contributing to new collaborative research and funding applications.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight text-foreground border-b border-border/60 pb-3 mb-4">
          From PhD to Research Staff: Continuing the Journey
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Having completed my undergraduate degree in Geography and Planning and subsequently my Integrated Masters and PhD
          within the department, Liverpool has been the foundation of my academic career.
        </p>
        <p className="text-muted-foreground leading-relaxed mt-3">
          Throughout my PhD, my research focused on agent-based models of retail centres, geodemographic classifications of
          consumer behaviour, and transport digital twin initiatives with domestic and international partners. Stepping into
          a permanent position within GeoDS feels like a natural yet exhilarating continuation of this work&mdash;scaling
          up computational approaches and applying them to diverse national datasets that directly shape how cities, regions,
          and public services adapt to the future.
        </p>
      </section>

      {/* Section 5: Connect */}
      <section className="rounded-xl border border-border bg-card/40 p-6 md:p-8">
        <h3 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-[var(--brand-accent)]" />
          Let&apos;s Collaborate!
        </h3>
        <p className="text-sm text-muted-foreground mb-4">
          Whether you are an academic researcher, a planner in local or national government, a Combined Authority team, or an
          industry partner interested in smart data, retail analytics, spatial modelling, or dashboard development, I would
          love to connect.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="mailto:sgabalog@liverpool.ac.uk"
            className="inline-flex items-center gap-2 rounded-lg bg-[var(--brand-accent)] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-90 transition-opacity"
          >
            Get in Touch via Email
          </a>
          <a
            href="https://www.linkedin.com/in/%C3%A1kos-balog-32b566201/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2 text-sm font-semibold text-foreground hover:bg-muted/30 transition-colors"
          >
            Connect on LinkedIn <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>
    </div>
  )
}