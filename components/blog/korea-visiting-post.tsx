import Link from "next/link"
import {
  CheckCircle2,
  ExternalLink,
  MapPin,
  Building2,
  GraduationCap,
  Users2,
  Globe2,
  BookOpen,
  Cpu,
  ArrowRight,
} from "lucide-react"
import type { BlogPost } from "@/lib/blog-data"

export function KoreaVisitingPostContent({ post }: { post: BlogPost }) {
  return (
    <div className="prose prose-invert max-w-none text-foreground text-[16px] leading-relaxed space-y-8">
      {/* Section 1 */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight text-foreground border-b border-border/60 pb-3 mb-4">
          An International Research Experience in South Korea
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          During my time as a Research Assistant working on the Korea-UK Digital Transport Project (KUDATA),
          I had the privilege of spending an intensive, highly productive period based in South Korea as a{" "}
          <strong className="text-foreground">Visiting Researcher</strong> at{" "}
          <strong className="text-foreground">Pusan National University (PNU)</strong> in Busan.
        </p>
        <p className="text-muted-foreground leading-relaxed mt-3">
          This international visit combined hands-on teaching, in-depth industry collaboration with technology partners,
          co-authoring academic research, and conducting outreach across national research institutes and leading
          universities in both Busan and Seoul.
        </p>
      </section>

      {/* Snapshot / Overview Card */}
      <section className="rounded-xl border border-[var(--brand-accent)]/30 bg-[var(--brand-accent)]/5 p-6 md:p-8 my-6">
        <div className="grid sm:grid-cols-2 gap-4 text-xs">
          <div>
            <span className="text-muted-foreground uppercase tracking-wider font-semibold">Host Department</span>
            <p className="text-sm font-semibold text-foreground mt-0.5">Department of Urban Engineering, Pusan National University</p>
          </div>
          <div>
            <span className="text-muted-foreground uppercase tracking-wider font-semibold">Location</span>
            <p className="text-sm font-semibold text-foreground mt-0.5">Busan, Sejong &amp; Seoul, South Korea</p>
          </div>
          <div>
            <span className="text-muted-foreground uppercase tracking-wider font-semibold">Key Collaborators</span>
            <p className="text-sm font-semibold text-foreground mt-0.5">Prof. Jinuk Hwang, Dr. Jinhyeok Jang (PNU), Gunhwa Lee, Sujin Son (Sundosoft)</p>
          </div>
          <div>
            <span className="text-muted-foreground uppercase tracking-wider font-semibold">Partner Organizations</span>
            <p className="text-sm font-semibold text-foreground mt-0.5">Sundosoft, Podaris, KRIHS, Hanyang University</p>
          </div>
        </div>

        {post.newsUrl && (
          <div className="mt-5 pt-4 border-t border-[var(--brand-accent)]/20 flex flex-wrap gap-4">
            <a
              href={post.newsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--brand-accent)] hover:underline"
            >
              <ExternalLink className="w-3.5 h-3.5" /> Read University of Liverpool announcement on the Korea-UK Project
            </a>
          </div>
        )}
      </section>

      {/* Section 2: Teaching ABM */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight text-foreground border-b border-border/60 pb-3 mb-4">
          Delivering Practical Agent-Based Modelling Seminars at PNU
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          One of the highlights of my visit was designing and delivering a tailored seminar series on{" "}
          <strong className="text-foreground">Agent-Based Modelling (ABM)</strong> to undergraduate, Master&apos;s,
          and PhD students across the Urban Engineering Department at Pusan National University.
        </p>
        <p className="text-muted-foreground leading-relaxed mt-3">
          Rather than confining the sessions to abstract simulation theory, the seminars were deliberately practical
          and hands-on. The curriculum was designed to teach students how to build their own agent-based simulations
          from the ground up in Python, with a specific focus on urban transportation, route choice behaviour, and
          spatial network dynamics.
        </p>
        <p className="text-muted-foreground leading-relaxed mt-3">
          The discussions that emerged were genuinely bi-directional: comparing how micro-level agent rules operate in
          the dense, multi-tiered transit corridors of Korean metropolitan regions versus the polycentric, lower-density
          layouts typical of the UK provided invaluable cross-cultural insights for both the students and myself.
        </p>
      </section>

      {/* Section 3: Industry Collaboration */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight text-foreground border-b border-border/60 pb-3 mb-4">
          Industry Collaboration: A Week On-Site with Sundosoft &amp; Podaris
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          A pivotal objective of the Korea-UK partnership is connecting academic research with private-sector geospatial
          software engineering. During my trip, I spent an intensive week working on-site at{" "}
          <strong className="text-foreground">Sundosoft</strong>, collaborating closely with{" "}
          <strong>Gunhwa Lee</strong> and <strong>Sujin Son</strong>.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div className="rounded-xl border border-border bg-card/40 p-5">
            <h3 className="text-sm font-semibold text-foreground flex items-center gap-2 mb-2">
              <Cpu className="w-4 h-4 text-[var(--brand-accent)]" />
              Technical Deep-Dive
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Reviewed Sundosoft&apos;s technical milestones in advancing the digital transport twin, inspecting data
              ingestion pipelines, GIS integration, and scenario exploration features in granular detail.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card/40 p-5">
            <h3 className="text-sm font-semibold text-foreground flex items-center gap-2 mb-2">
              <Globe2 className="w-4 h-4 text-[var(--brand-accent)]" />
              Connecting with Podaris
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Acted as a technical liaison between the development teams, synthesising progress on-site in Korea and
              relaying actionable feedback and workflow requirements back to the Podaris team in the UK.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Research Collaboration */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight text-foreground border-b border-border/60 pb-3 mb-4">
          Collaborative Research: Paper Publication, Stakeholder Interviews &amp; Future ABMs
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          My in-person research collaboration with <strong className="text-foreground">Professor Jinuk Hwang</strong> and{" "}
          <strong className="text-foreground">Dr. Jinhyeok Jang</strong> at Pusan National University was instrumental
          in advancing our shared research agenda.
        </p>
        <p className="text-muted-foreground leading-relaxed mt-3">
          Working together in the same physical space allowed us to collaborate seamlessly across multiple research phases:
        </p>
        <ul className="space-y-3 text-muted-foreground mt-3 list-none pl-0">
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[var(--brand-accent)] shrink-0 mt-0.5" />
            <span>
              <strong className="text-foreground">Stakeholder Interviews:</strong> Conducted qualitative and technical
              interviews with Korean urban transport stakeholders to ground the digital twin framework in practical governance needs.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[var(--brand-accent)] shrink-0 mt-0.5" />
            <span>
              <strong className="text-foreground">Systematic Literature Review &amp; NLP:</strong> Co-designed and drafted
              the research manuscript that was subsequently published open access in <em>Sustainability</em> (MDPI):{" "}
              <Link
                href="/blog/smart-transportation-planning-advanced-technologies"
                className="text-[var(--brand-accent)] underline hover:opacity-80"
              >
                &ldquo;Leveraging Advanced Technologies for (Smart) Transportation Planning: A Systematic Review&rdquo;
              </Link>
              .
            </span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[var(--brand-accent)] shrink-0 mt-0.5" />
            <span>
              <strong className="text-foreground">Future Scenarios:</strong> Formulated plans for future collaborative
              projects applying Agent-Based Modelling to novel scenarios, such as autonomous on-demand transport and multi-modal transit resilience.
            </span>
          </li>
        </ul>
      </section>

      {/* Section 5: National Outreach */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight text-foreground border-b border-border/60 pb-3 mb-4">
          Expanding the Network: Visits to KRIHS &amp; Hanyang University
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Beyond our base at PNU in Busan, Professor Hwang facilitated introductions that enabled me to expand the
          project&apos;s footprint nationally across South Korea:
        </p>
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div className="rounded-xl border border-border bg-card/40 p-5">
            <div className="flex items-center gap-2 text-[var(--brand-accent)] mb-2">
              <Building2 className="w-5 h-5" />
              <h3 className="text-sm font-semibold text-foreground">Korea Research Institute for Human Settlements (KRIHS)</h3>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Visited South Korea&apos;s premier national think-tank for spatial planning and territorial development.
              Presented my personal research on retail geodemographics and agent-based modelling alongside the wider
              KUDATA digital twin framework to senior policy researchers.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card/40 p-5">
            <div className="flex items-center gap-2 text-[var(--brand-accent)] mb-2">
              <GraduationCap className="w-5 h-5" />
              <h3 className="text-sm font-semibold text-foreground">Hanyang University, Seoul</h3>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Visited the Department of Urban Planning and Engineering at Hanyang University in Seoul. Engaged with faculty
              and graduate researchers, discussing simulation approaches, transport data governance, and potential
              bilateral research linkages.
            </p>
          </div>
        </div>
      </section>

      {/* Section 6: Reflection */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight text-foreground border-b border-border/60 pb-3 mb-4">
          Reflections &amp; Lasting Connections
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Spending time as a Visiting Researcher in South Korea was an extraordinarily enriching milestone in my academic
          and professional trajectory. Experiencing firsthand the dynamism of Korean urban innovation&mdash;from their
          world-class public transit integration to their ambitious digital twin initiatives&mdash;has deeply informed my
          perspective on spatial data science and transport planning.
        </p>
        <p className="text-muted-foreground leading-relaxed mt-3">
          Most importantly, it established lasting personal and professional friendships with colleagues at Pusan National
          University, Sundosoft, Hanyang University, and KRIHS. I look forward to continuing these collaborative ties as we
          advance future joint research into agent-based simulation and smart urban systems.
        </p>
      </section>

      {/* Related Resources Box */}
      <section className="rounded-xl border border-border bg-card/40 p-6 md:p-8">
        <h3 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-[var(--brand-accent)]" />
          Related Collaborative Work
        </h3>
        <p className="text-sm text-muted-foreground mb-4">
          Explore the open-access paper resulting from our collaboration with Pusan National University, or read about
          the broader digital transport initiative:
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/blog/smart-transportation-planning-advanced-technologies"
            className="inline-flex items-center gap-2 rounded-lg bg-[var(--brand-accent)] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-90 transition-opacity"
          >
            Read Blog Post on the PNU Paper <ArrowRight className="w-4 h-4" />
          </Link>
          {post.newsUrl && (
            <a
              href={post.newsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2 text-sm font-semibold text-foreground hover:bg-muted/30 transition-colors"
            >
              <ExternalLink className="w-4 h-4" /> Liverpool Project Announcement
            </a>
          )}
        </div>
      </section>
    </div>
  )
}