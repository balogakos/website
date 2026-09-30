import Link from "next/link"
import { notFound } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { blogPosts } from "@/lib/blog-data"
import {
  ArrowLeft,
  Calendar,
  Clock,
  ExternalLink,
  Github,
  BookOpen,
  Tag,
  CheckCircle2,
} from "lucide-react"

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) return { title: "Post Not Found" }

  return {
    title: `${post.title} — Ákos Balog`,
    description: post.subtitle,
    openGraph: {
      title: post.title,
      description: post.subtitle,
      type: "article",
      publishedTime: "2026-08-25T00:00:00.000Z",
      authors: post.authors,
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  const bibtexCode = `@article{balog2026geodemographic,
  author  = {Balog, {\\'{A}}kos and Dolega, Les and Mahabir, Ron and Ballantyne, Patrick and Williamson, Paul},
  title   = {Developing an open, national-level, small-area geodemographic classification of consumer behaviour},
  journal = {International Journal of Retail & Distribution Management},
  year    = {2026},
  pages   = {1--16},
  doi     = {10.1108/IJRDM-06-2025-0436},
  url     = {https://doi.org/10.1108/IJRDM-06-2025-0436}
}`

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-28 pb-24">
        <article className="max-w-[880px] mx-auto px-6 md:px-10">
          {/* Breadcrumb / Back link */}
          <div className="mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground hover:text-[var(--brand-accent)] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Blog
            </Link>
          </div>

          {/* Article Header */}
          <header className="mb-12 border-b border-border pb-10">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 rounded-md bg-[var(--brand-accent)]/10 px-2.5 py-1 text-xs font-medium text-[var(--brand-accent)]"
                >
                  <Tag className="w-3 h-3" />
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground leading-[1.15] mb-6">
              {post.title}
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed mb-8">
              {post.subtitle}
            </p>

            {/* Author and metadata row */}
            <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground pt-4 border-t border-border/50">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-medium text-foreground">
                  By {post.authors.join(", ")}
                </span>
                <span>&bull;</span>
                <span className="inline-flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {post.date}
                </span>
                <span>&bull;</span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {post.readingTime}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={post.paperUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-medium text-[var(--brand-accent)] hover:underline"
                >
                  <BookOpen className="w-3.5 h-3.5" /> Emerald Insight
                </a>
                <a
                  href={post.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-medium text-[var(--brand-accent)] hover:underline"
                >
                  <Github className="w-3.5 h-3.5" /> GitHub Code &amp; Data
                </a>
              </div>
            </div>
          </header>

          {/* Quick Info / Callout Card */}
          <div className="my-8 rounded-xl border border-[var(--brand-accent)]/30 bg-[var(--brand-accent)]/5 p-6 md:p-8">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2 mb-3">
              <BookOpen className="w-5 h-5 text-[var(--brand-accent)]" />
              Paper Overview &amp; Key Details
            </h2>
            <ul className="space-y-2 text-sm text-foreground/90 leading-relaxed list-disc list-inside">
              <li>
                <strong>Published in:</strong> <em>{post.journal}</em> (Emerald)
              </li>
              <li>
                <strong>DOI:</strong>{" "}
                <a
                  href={`https://doi.org/${post.doi}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--brand-accent)] underline underline-offset-2 hover:opacity-80"
                >
                  {post.doi}
                </a>
              </li>
              <li>
                <strong>Coverage:</strong> All ~35,000+ Lower Layer Super Output Areas (LSOAs) across England and Wales.
              </li>
              <li>
                <strong>Open Science:</strong> Fully open-access classification, reproducible pipelines, and spatial outputs (Shapefile &amp; GeoPackage) available on GitHub.
              </li>
            </ul>
          </div>

          {/* Main Article Content */}
          <div className="prose prose-invert max-w-none text-foreground text-[16px] leading-relaxed space-y-8">
            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-bold tracking-tight text-foreground border-b border-border/60 pb-3 mb-4">
                The Consumer Insight Dilemma: Why We Needed an Open Classification
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Consumer behaviour in the UK has undergone seismic shifts over the past decade. The acceleration
                of e-commerce, hybrid working models, rising environmental consciousness, and the persistent
                pressures of the cost-of-living crisis have reshaped how, when, and where people spend their money.
                Yet for urban planners, local authorities, and academic researchers seeking to understand these
                dynamics at the local level, existing analytical tools present major shortcomings:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="rounded-lg border border-border bg-card/40 p-4">
                  <h3 className="text-sm font-semibold text-foreground mb-1.5">Commercial Geodemographics</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Systems like Acorn or Mosaic offer detailed consumer profiles but remain proprietary commercial
                    black-boxes. They are costly to license, lack transparent methodology, and restrict the public
                    and academic sectors from reproducible place-based policy design.
                  </p>
                </div>
                <div className="rounded-lg border border-border bg-card/40 p-4">
                  <h3 className="text-sm font-semibold text-foreground mb-1.5">Open Census Classifications</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Open datasets such as the Output Area Classification (OAC) capture structural socioeconomic and
                    demographic variables well, but they omit critical behavioral indicators such as retail channel
                    preferences, digital engagement, online delivery use, and discretionary spending habits.
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Our paper fills this critical void by introducing the first <strong>open-access, national-level,
                small-area geodemographic classification of consumer behaviour</strong> covering England and Wales at
                the Lower Layer Super Output Area (LSOA) scale.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-bold tracking-tight text-foreground border-b border-border/60 pb-3 mb-4">
                The Conceptual Framework: 8 Domains of Contemporary Consumption
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Rather than treating demographics as a simple proxy for consumption, our framework posits that
                contemporary retail behaviour is co-determined by social, spatial, economic, and digital
                realities. We established <strong>eight analytical domains</strong>:
              </p>

              <div className="grid sm:grid-cols-2 gap-3 mt-4">
                {[
                  { domain: "Household Composition", desc: "Life stage, family structure, dependent children, and single living." },
                  { domain: "Financial Resilience", desc: "Discretionary spend capacity, mortgage/rent strain, and vulnerability to price shocks." },
                  { domain: "Lifestyle & Values", desc: "Leisure priorities, health and wellness focus, and sustainable/ethical consumption." },
                  { domain: "Mobility & Accessibility", desc: "Automotive ownership, public transit reliance, and proximity to retail centers." },
                  { domain: "Online Engagement", desc: "Frequency of e-commerce, digital device fluency, and parcel delivery usage." },
                  { domain: "Social Networks", desc: "Community interaction, local social cohesion, and word-of-mouth retail patterns." },
                  { domain: "Shopping Patterns", desc: "Omni-channel mixing, discount grocer vs. premium store affinity, and trip frequency." },
                  { domain: "Socioeconomic Status", desc: "Occupational grades, educational attainment, and housing tenure." },
                ].map((item, idx) => (
                  <div key={item.domain} className="rounded-lg border border-border/70 bg-card/30 p-3.5">
                    <span className="text-xs font-mono text-[var(--brand-accent)] font-semibold">0{idx + 1}.</span>
                    <h4 className="text-sm font-semibold text-foreground mt-0.5">{item.domain}</h4>
                    <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-bold tracking-tight text-foreground border-b border-border/60 pb-3 mb-4">
                Methodology: Spatial Microsimulation &amp; Clustering
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                A primary methodological challenge in consumer analytics is that comprehensive behavioral surveys
                (such as the <em>PDV Consumer Lifestyle Survey</em>) lack sufficient sample density to be mapped
                directly to small geographic areas like LSOAs without severe sampling bias.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                To overcome this, we employed <strong>spatial microsimulation</strong>. By constraining individual survey
                records against official <strong>2021 UK Census small-area margins</strong> (age profiles, household types,
                tenure, economic activity) alongside physical accessibility metrics, we synthesized small-area
                populations that reflect realistic consumer profiles for every neighborhood in England and Wales.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Following variable selection and rigorous robustness checks across multiple algorithms (evaluating
                K-Means, Partitioning Around Medoids [PAM], Fuzzy Geographically Weighted Clustering [FGWC], and GMMs),
                an optimal clustering architecture emerged.
              </p>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-bold tracking-tight text-foreground border-b border-border/60 pb-3 mb-4">
                The Classification: 4 Primary Clusters &amp; 9 Granular Subclusters
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The classification reveals four distinct consumer archetypes, each further decomposed into nine
                subclusters capturing the rich nuances of modern British consumption:
              </p>

              <div className="overflow-x-auto rounded-xl border border-border">
                <table className="w-full text-left text-sm">
                  <thead className="bg-muted/30 border-b border-border text-xs uppercase tracking-wider text-muted-foreground">
                    <tr>
                      <th className="py-3 px-4">Cluster</th>
                      <th className="py-3 px-4">Primary Group</th>
                      <th className="py-3 px-4">Subclusters</th>
                      <th className="py-3 px-4">Key Characteristics</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/60 text-xs">
                    <tr className="hover:bg-muted/10">
                      <td className="py-3.5 px-4 font-mono font-bold text-[var(--brand-accent)]">1</td>
                      <td className="py-3.5 px-4 font-semibold text-foreground">Affluent Professional Consumers</td>
                      <td className="py-3.5 px-4 text-muted-foreground">
                        <strong>1.1</strong> Affluent Suburban Professionals<br />
                        <strong>1.2</strong> Urban Digital Millennials
                      </td>
                      <td className="py-3.5 px-4 text-muted-foreground">
                        High disposable income, intense omni-channel activity, strong digital convenience adoption, premium retail engagement.
                      </td>
                    </tr>
                    <tr className="hover:bg-muted/10">
                      <td className="py-3.5 px-4 font-mono font-bold text-[var(--brand-accent)]">2</td>
                      <td className="py-3.5 px-4 font-semibold text-foreground">Budget-Conscious Young Urbanites</td>
                      <td className="py-3.5 px-4 text-muted-foreground">
                        <strong>2.1</strong> Value-Driven Young Spenders<br />
                        <strong>2.2</strong> Price-Sensitive Digital Shoppers
                      </td>
                      <td className="py-3.5 px-4 text-muted-foreground">
                        Younger age profile, high rental concentration, reliance on public transport, price-sensitive with high mobile e-commerce use.
                      </td>
                    </tr>
                    <tr className="hover:bg-muted/10">
                      <td className="py-3.5 px-4 font-mono font-bold text-[var(--brand-accent)]">3</td>
                      <td className="py-3.5 px-4 font-semibold text-foreground">Family-Oriented Suburban Consumers</td>
                      <td className="py-3.5 px-4 text-muted-foreground">
                        <strong>3.1</strong> Established Families<br />
                        <strong>3.2</strong> Suburban Empty Nesters<br />
                        <strong>3.3</strong> High-End Consumers
                      </td>
                      <td className="py-3.5 px-4 text-muted-foreground">
                        Multi-car households, weekly bulk family shopping, reliance on out-of-town retail parks and suburban convenience hubs.
                      </td>
                    </tr>
                    <tr className="hover:bg-muted/10">
                      <td className="py-3.5 px-4 font-mono font-bold text-[var(--brand-accent)]">4</td>
                      <td className="py-3.5 px-4 font-semibold text-foreground">Traditional Rural Consumers</td>
                      <td className="py-3.5 px-4 text-muted-foreground">
                        <strong>4.1</strong> Affluent Rural Empty Nesters<br />
                        <strong>4.2</strong> Rural Retirees
                      </td>
                      <td className="py-3.5 px-4 text-muted-foreground">
                        Older demographic, car-dependent, high physical loyalty to local brick-and-mortar stores, lower digital on-demand penetration.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-2xl font-bold tracking-tight text-foreground border-b border-border/60 pb-3 mb-4">
                Applications for Policy, High Streets, and Digital Equity
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                By making this classification completely open, our aim is to empower planners, policymakers,
                and retailers with actionable evidence:
              </p>
              <ul className="space-y-3 text-muted-foreground mt-3 list-none pl-0">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[var(--brand-accent)] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-foreground">Town Centre Regeneration:</strong> Identifying whether a
                    struggling high street needs experiential/hospitality reinvention (to cater to Urban Digital Millennials)
                    or accessible value provision (for Budget-Conscious Urbanites).
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[var(--brand-accent)] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-foreground">Digital Inclusion:</strong> Mapping areas where rapid online
                    transitions leave vulnerable, less digitally-connected populations isolated from basic banking and retail services.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[var(--brand-accent)] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-foreground">Transport &amp; 15-Minute Cities:</strong> Evaluating how mobility
                    constraints directly dictate retail access and consumer resilience under volatile fuel and living costs.
                  </span>
                </li>
              </ul>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-2xl font-bold tracking-tight text-foreground border-b border-border/60 pb-3 mb-4">
                Looking Ahead: Feeding Micro-level Demand into Agent-Based Models
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                This geodemographic classification is not just a static descriptive output. In our ongoing research
                at the University of Liverpool, it acts as the <strong>foundational empirical demand layer</strong> for
                dynamic spatial simulations.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                In our agent-based model (ABM) of metropolitan retail centers (such as <Link href="/#projects" className="text-[var(--brand-accent)] underline hover:opacity-80">RC-ABM</Link>),
                synthetic consumer agents are initialized using these specific subcluster behavioral priors.
                This allows us to simulate how localized consumer populations choose retail destinations, how they react
                to retail unit closures, and how external shocks (e.g. transport disruptions, store vacancies) propagate
                through urban retail hierarchies.
              </p>
            </section>

            {/* Data & Code Access Box */}
            <section className="rounded-xl border border-border bg-card/40 p-6 md:p-8">
              <h3 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                <Github className="w-5 h-5 text-[var(--brand-accent)]" />
                Access the Open Code &amp; Spatial Outputs
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                All scripts, methodology notebooks, LSOA boundary harmonization routines, and final classification datasets
                (available as CSV, Shapefile, and GeoPackage) are hosted openly on GitHub under the MIT Licence:
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                <a
                  href={post.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-[var(--brand-accent)] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-90 transition-opacity"
                >
                  <Github className="w-4 h-4" /> View GitHub Repository
                </a>
                <a
                  href={post.paperUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2 text-sm font-semibold text-foreground hover:bg-muted/30 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" /> Read Article on Emerald Insight
                </a>
              </div>

              <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                Citation (BibTeX)
              </h4>
              <pre className="overflow-x-auto rounded-lg bg-background/90 p-4 text-xs font-mono text-muted-foreground border border-border">
                {bibtexCode}
              </pre>
            </section>
          </div>

          {/* Post Footer: Author Card */}
          <footer className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Written by</p>
              <h4 className="text-base font-semibold text-foreground mt-0.5">Ákos Balog</h4>
              <p className="text-xs text-muted-foreground mt-1">
                Research Data Scientist &amp; Postdoctoral Researcher &bull; Geographic Data Service, University of Liverpool
              </p>
            </div>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--brand-accent)] hover:underline"
            >
              Get in touch &rarr;
            </Link>
          </footer>
        </article>
      </main>
      <Footer />
    </>
  )
}