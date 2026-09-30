import Link from "next/link"
import { CheckCircle2, ExternalLink, Cpu, Network, Activity, Globe2, BookOpen } from "lucide-react"
import type { BlogPost } from "@/lib/blog-data"

export function SmartTransportPostContent({ post }: { post: BlogPost }) {
  return (
    <div className="prose prose-invert max-w-none text-foreground text-[16px] leading-relaxed space-y-8">
      {/* Section 1 */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight text-foreground border-b border-border/60 pb-3 mb-4">
          The Urban Mobility Challenge: Moving Beyond Disconnected Tech Pilots
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Cities across the globe are grappling with the compounded pressures of vehicular congestion, transport-related
          carbon emissions, and roadway safety risks. While the vision of &ldquo;smart mobility&rdquo; has generated a surge
          in emerging technologies&mdash;from Internet of Things (IoT) traffic sensors and connected vehicles to machine
          learning models and full-scale urban digital twins&mdash;the actual academic and operational landscape has remained
          highly fragmented.
        </p>
        <p className="text-muted-foreground leading-relaxed mt-3">
          All too often, municipal authorities and tech providers launch isolated pilot projects that fail to address the
          systemic interdependencies of urban transport. How exactly do specific emerging technologies align with specific
          bottlenecks on the ground? And how can researchers systematically map these relationships beyond purely qualitative
          surveys?
        </p>
        <p className="text-muted-foreground leading-relaxed mt-3">
          Our open-access systematic review in <em>Sustainability</em> (MDPI), titled{" "}
          <strong>&ldquo;Leveraging Advanced Technologies for (Smart) Transportation Planning&rdquo;</strong>, addresses
          this question by combining the established PRISMA systematic literature protocol with an innovative{" "}
          <strong>Sentence-BERT (SBERT) natural language processing approach</strong> to quantitatively evaluate how
          advanced technologies intersect with real-world mobility challenges.
        </p>
      </section>

      {/* Section 2 */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight text-foreground border-b border-border/60 pb-3 mb-4">
          An International Collaboration: Pusan National University &amp; University of Liverpool
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          This publication represents an international research collaboration between researchers at the{" "}
          <strong>Department of Urban Planning and Engineering at Pusan National University</strong> (Busan, South Korea)
          and the <strong>Geographic Data Science Laboratory at the University of Liverpool</strong> (UK).
        </p>
        <div className="rounded-xl border border-border bg-card/40 p-5 mt-4">
          <div className="flex items-start gap-3">
            <Globe2 className="w-5 h-5 text-[var(--brand-accent)] shrink-0 mt-1" />
            <div>
              <h3 className="text-sm font-semibold text-foreground">The Korea-UK Digital Twin Partnership</h3>
              <p className="text-xs text-muted-foreground leading-relaxed mt-1">
                This study builds on the ongoing Korea-UK Digital Transport Project supported by the Liverpool City
                Region Combined Authority (LCRCA), Podaris, and South Korean partners. The project aims to cross-pollinate
                computational methodologies between the polycentric, heritage-constrained urban network of the Liverpool City
                Region and the hyper-dense, transit-oriented coastal metropolis of Busan.
              </p>
              {post.newsUrl && (
                <a
                  href={post.newsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--brand-accent)] hover:underline mt-3"
                >
                  <ExternalLink className="w-3.5 h-3.5" /> Read University of Liverpool announcement on project expansion
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight text-foreground border-b border-border/60 pb-3 mb-4">
          Methodological Innovation: Quantitative SBERT-Based Concept Mapping
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Traditional systematic literature reviews rely predominantly on manual thematic coding, which can introduce
          subjective interpretation when mapping interdisciplinary literature. In this study, we coupled PRISMA screening
          guidelines with a transformer-based NLP workflow:
        </p>

        <div className="grid md:grid-cols-3 gap-4 mt-4">
          <div className="rounded-lg border border-border/70 bg-card/30 p-4">
            <div className="w-8 h-8 rounded-md bg-[var(--brand-accent)]/10 flex items-center justify-center text-[var(--brand-accent)] mb-2">
              <BookOpen className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-semibold text-foreground">1. PRISMA Screening</h4>
            <p className="text-xs text-muted-foreground mt-1">
              Screened global peer-reviewed literature across Web of Science and Scopus (2013–2024), isolating 26
              in-depth core studies on smart transport technology implementations.
            </p>
          </div>

          <div className="rounded-lg border border-border/70 bg-card/30 p-4">
            <div className="w-8 h-8 rounded-md bg-[var(--brand-accent)]/10 flex items-center justify-center text-[var(--brand-accent)] mb-2">
              <Cpu className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-semibold text-foreground">2. SBERT Embeddings</h4>
            <p className="text-xs text-muted-foreground mt-1">
              Utilized Sentence-BERT to generate high-dimensional vector representations of challenges, technologies,
              and policy strategies extracted from the literature corpus.
            </p>
          </div>

          <div className="rounded-lg border border-border/70 bg-card/30 p-4">
            <div className="w-8 h-8 rounded-md bg-[var(--brand-accent)]/10 flex items-center justify-center text-[var(--brand-accent)] mb-2">
              <Activity className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-semibold text-foreground">3. Semantic Alignment</h4>
            <p className="text-xs text-muted-foreground mt-1">
              Computed cosine similarity matrices to objectively measure the quantitative alignment between specific
              transport problems and their enabling technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight text-foreground border-b border-border/60 pb-3 mb-4">
          Key Findings: Where Advanced Technologies Deliver the Greatest Value
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          The SBERT analysis uncovered distinct technological clusters and clear linkages showing where specific digital
          tools deliver measurable improvements:
        </p>

        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-left text-sm">
            <thead className="bg-muted/30 border-b border-border text-xs uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="py-3 px-4">Technology Cluster</th>
                <th className="py-3 px-4">Primary Transport Focus</th>
                <th className="py-3 px-4">Core Mechanism</th>
                <th className="py-3 px-4">Key Impact</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60 text-xs">
              <tr className="hover:bg-muted/10">
                <td className="py-3.5 px-4 font-semibold text-foreground">Digital Twins</td>
                <td className="py-3.5 px-4 text-muted-foreground">Network Simulation &amp; Congestion</td>
                <td className="py-3.5 px-4 text-muted-foreground">Dynamic spatial digital replicas mirroring real-time traffic</td>
                <td className="py-3.5 px-4 text-muted-foreground">Enables scenario stress-testing before implementing physical road reconfigurations.</td>
              </tr>
              <tr className="hover:bg-muted/10">
                <td className="py-3.5 px-4 font-semibold text-foreground">IoT &amp; Sensor Networks</td>
                <td className="py-3.5 px-4 text-muted-foreground">Real-Time Data Collection</td>
                <td className="py-3.5 px-4 text-muted-foreground">Inductive loops, roadside cameras, GPS probe feeds, air quality sensors</td>
                <td className="py-3.5 px-4 text-muted-foreground">Provides high-frequency telemetry required for proactive traffic management.</td>
              </tr>
              <tr className="hover:bg-muted/10">
                <td className="py-3.5 px-4 font-semibold text-foreground">AI &amp; Machine Learning</td>
                <td className="py-3.5 px-4 text-muted-foreground">Predictive Analytics &amp; Safety</td>
                <td className="py-3.5 px-4 text-muted-foreground">Short-term flow forecasting, incident detection, automated computer vision</td>
                <td className="py-3.5 px-4 text-muted-foreground">Shifts traffic operations from reactive clearing to proactive bottleneck prevention.</td>
              </tr>
              <tr className="hover:bg-muted/10">
                <td className="py-3.5 px-4 font-semibold text-foreground">Mathematical Optimization</td>
                <td className="py-3.5 px-4 text-muted-foreground">Public Transit &amp; Multimodal Scheduling</td>
                <td className="py-3.5 px-4 text-muted-foreground">Network graph algorithms, headway optimization, fleet dispatching</td>
                <td className="py-3.5 px-4 text-muted-foreground">Maximizes bus/rail efficiency and synchronizes intermodal transfers.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="space-y-4 text-muted-foreground leading-relaxed mt-6">
          <p>
            One of the most compelling insights from the alignment scores is the{" "}
            <strong>inseparable relationship between road congestion and public transit optimization</strong>. The analysis
            confirms that roadway automation alone (such as adaptive traffic light signaling) yields diminishing returns
            unless coupled directly with high-frequency, reliable public transport and active mobility alternatives.
          </p>
        </div>
      </section>

      {/* Section 5 */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight text-foreground border-b border-border/60 pb-3 mb-4">
          Strategic Lessons for Urban Planners &amp; Policymakers
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          From an urban governance and planning perspective, the study outlines three pivotal recommendations for cities
          embarking on smart mobility strategies:
        </p>
        <ul className="space-y-3 text-muted-foreground mt-3 list-none pl-0">
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[var(--brand-accent)] shrink-0 mt-0.5" />
            <span>
              <strong className="text-foreground">Invest in Municipal Data Infrastructure First:</strong> Advanced AI
              and digital twins are only as viable as the underlying data pipeline. Cities must prioritize open, standardized,
              and interoperable spatial data backbones rather than purchasing proprietary, closed vendor solutions.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[var(--brand-accent)] shrink-0 mt-0.5" />
            <span>
              <strong className="text-foreground">Embed Digital Twins into Statutory Planning:</strong> Digital twin
              simulations should not remain isolated university experiments; they must be integrated into official long-term
              transport masterplans, allowing planners to simulate emissions and equity impacts before committing public funds.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[var(--brand-accent)] shrink-0 mt-0.5" />
            <span>
              <strong className="text-foreground">Cross-Border Technology Transfer:</strong> International comparative
              research between cities with different urban morphologies (such as Liverpool in the UK and Busan in South Korea)
              provides vital stress-testing for mobility models under diverse governance and density conditions.
            </span>
          </li>
        </ul>
      </section>

      {/* Citation Box */}
      <section className="rounded-xl border border-border bg-card/40 p-6 md:p-8">
        <h3 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-[var(--brand-accent)]" />
          Access the Open-Access Paper
        </h3>
        <p className="text-sm text-muted-foreground mb-4">
          The full article is published open access in <em>Sustainability</em> under the Creative Commons Attribution (CC BY) licence:
        </p>
        <div className="flex flex-wrap gap-4 mb-6">
          <a
            href={post.paperUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-[var(--brand-accent)] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-90 transition-opacity"
          >
            <ExternalLink className="w-4 h-4" /> Read Article on MDPI (Open Access)
          </a>
          {post.newsUrl && (
            <a
              href={post.newsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2 text-sm font-semibold text-foreground hover:bg-muted/30 transition-colors"
            >
              <Globe2 className="w-4 h-4" /> University News Release
            </a>
          )}
        </div>

        <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
          Citation (BibTeX)
        </h4>
        <pre className="overflow-x-auto rounded-lg bg-background/90 p-4 text-xs font-mono text-muted-foreground border border-border">
          {post.bibtex}
        </pre>
      </section>
    </div>
  )
}