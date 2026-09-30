import Link from "next/link"
import Image from "next/image"
import {
  CheckCircle2,
  ExternalLink,
  MapPin,
  Building2,
  Cpu,
  BrainCircuit,
  Database,
  BookOpen,
  ArrowRight,
  Sparkles,
  BarChart3,
  Network,
} from "lucide-react"
import type { BlogPost } from "@/lib/blog-data"

export function BarcelonaVisitingPostContent({ post }: { post: BlogPost }) {
  return (
    <div className="prose prose-invert max-w-none text-foreground text-[16px] leading-relaxed space-y-8">
      {/* Section 1: Intro */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight text-foreground border-b border-border/60 pb-3 mb-4">
          Supercomputing Meets Generative AI in Urban Mobility
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          During the spring of 2026, I had the privilege of joining the{" "}
          <strong className="text-foreground">Barcelona Supercomputing Center (BSC-CNS)</strong> in Catalonia, Spain,
          as a <strong className="text-foreground">Visiting Researcher</strong>. Based within the{" "}
          <strong className="text-foreground">Data Analytics and Visualisation Group</strong>, my research focused on a
          compelling frontier at the intersection of urban data science and artificial intelligence: exploring how{" "}
          <strong className="text-foreground">Large Language Models (LLMs)</strong> can be integrated with{" "}
          <strong className="text-foreground">Agent-Based Modelling (ABM)</strong> and high-performance computing to
          synthesise city-scale human mobility.
        </p>
        <p className="text-muted-foreground leading-relaxed mt-3">
          Working on-site at the historic Torre Girona campus—where centuries-old architecture encloses one of the most
          powerful supercomputers in the world, <strong className="text-foreground">MareNostrum</strong>—provided a
          uniquely inspiring environment to explore whether generative AI can solve the persistent problem of data
          scarcity in urban transport planning.
        </p>
      </section>

      {/* Snapshot / Overview Card */}
      <section className="rounded-xl border border-[var(--brand-accent)]/30 bg-[var(--brand-accent)]/5 p-6 md:p-8 my-6">
        <div className="grid sm:grid-cols-2 gap-4 text-xs">
          <div>
            <span className="text-muted-foreground uppercase tracking-wider font-semibold">Host Institution</span>
            <p className="text-sm font-semibold text-foreground mt-0.5">
              Data Analytics &amp; Visualisation, Barcelona Supercomputing Center (BSC-CNS)
            </p>
          </div>
          <div>
            <span className="text-muted-foreground uppercase tracking-wider font-semibold">Location &amp; Infrastructure</span>
            <p className="text-sm font-semibold text-foreground mt-0.5">
              Barcelona, Spain &bull; MareNostrum Supercomputing Cluster
            </p>
          </div>
          <div>
            <span className="text-muted-foreground uppercase tracking-wider font-semibold">Key Collaborators</span>
            <p className="text-sm font-semibold text-foreground mt-0.5">
              Dr. Fernando Cucchietti, Dr. Patricio Reyes (BSC), Joe Murphy (UoL / GeoDS)
            </p>
          </div>
          <div>
            <span className="text-muted-foreground uppercase tracking-wider font-semibold">Research Output</span>
            <p className="text-sm font-semibold text-foreground mt-0.5">
              Working Paper: <em>Using LLMs to Generate Synthetic Mobility Data</em> (Target: Urban Transitions)
            </p>
          </div>
        </div>

        {post.externalUrl && (
          <div className="mt-5 pt-4 border-t border-[var(--brand-accent)]/20 flex flex-wrap gap-4">
            <a
              href={post.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--brand-accent)] hover:underline"
            >
              <ExternalLink className="w-3.5 h-3.5" /> Visit Barcelona Supercomputing Center (bsc.es)
            </a>
          </div>
        )}
      </section>

      {/* Section 2: The Data Scarcity Problem */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight text-foreground border-b border-border/60 pb-3 mb-4">
          The Problem: Origin-Destination Matrices &amp; the Data Bottleneck
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Origin-Destination (OD) matrices are the mathematical foundation of transportation planning, infrastructure
          investment, and emissions modelling. They tell planners where journeys begin, where they end, at what times,
          and by which transport modes.
        </p>
        <p className="text-muted-foreground leading-relaxed mt-3">
          Historically, inferring OD matrices has required massive empirical datasets:
        </p>
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div className="rounded-xl border border-border bg-card/40 p-5">
            <h3 className="text-sm font-semibold text-foreground flex items-center gap-2 mb-2">
              <Database className="w-4 h-4 text-[var(--brand-accent)]" />
              Traditional Household Surveys
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Surveys like Barcelona&apos;s <em>Enquesta de Mobilitat en Dia Feiner (EMEF)</em> provide detailed behavioural
              insight but are notoriously expensive, slow to collect, and updated only every several years, making them
              poorly suited to rapidly evolving cities.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card/40 p-5">
            <h3 className="text-sm font-semibold text-foreground flex items-center gap-2 mb-2">
              <Network className="w-4 h-4 text-[var(--brand-accent)]" />
              Mobile &amp; Telecom Traces
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Cell tower pings and GPS traces provide volume, but they are commercial black boxes restricted by GDPR and
              privacy regulations, and critically lack the socio-demographic context (age, employment, income) needed
              for equitable policy design.
            </p>
          </div>
        </div>
        <p className="text-muted-foreground leading-relaxed mt-4">
          Meanwhile, conventional activity-based models rely on rigid utility-maximisation equations that struggle to
          capture the nuanced contextual reasoning of human daily life without heavy, city-specific calibration datasets.
          Our goal at BSC was to test an alternative: <strong className="text-foreground">Can modern LLMs simulate plausible,
          demographically grounded travel diaries from first principles?</strong>
        </p>
      </section>

      {/* Section 3: The Generative Framework */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight text-foreground border-b border-border/60 pb-3 mb-4">
          Methodology: Demographic Personas to Synthetic Trip Chains
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          In collaboration with Fernando Cucchietti, Patricio Reyes, and Joe Murphy, we developed an end-to-end framework
          that conditions large language models on demographic attributes and geotagged urban points of interest (POIs)
          to generate complete daily travel schedules.
        </p>

        <div className="mt-4 space-y-3">
          <div className="flex items-start gap-3 text-muted-foreground">
            <CheckCircle2 className="w-5 h-5 text-[var(--brand-accent)] shrink-0 mt-0.5" />
            <span>
              <strong className="text-foreground">Demographic Conditioning:</strong> Each synthetic agent is instantiated
              with demographic attributes drawn from representative population distributions: age, occupation, education,
              household structure, and private vehicle availability.
            </span>
          </div>

          <div className="flex items-start gap-3 text-muted-foreground">
            <CheckCircle2 className="w-5 h-5 text-[var(--brand-accent)] shrink-0 mt-0.5" />
            <span>
              <strong className="text-foreground">Prompt-Based Activity Planning:</strong> Rather than relying on rigid
              utility equations, the LLM acts as an activity planner. Given the agent&apos;s persona and urban context, it
              reasons over the day to generate a structured activity chain—allocating departure times, trip purposes (work,
              school, grocery shopping, leisure), mode choices (walk, metro, bus, bicycle, car), and candidate destinations.
            </span>
          </div>

          <div className="flex items-start gap-3 text-muted-foreground">
            <CheckCircle2 className="w-5 h-5 text-[var(--brand-accent)] shrink-0 mt-0.5" />
            <span>
              <strong className="text-foreground">Spatial Grounding &amp; POI Allocation:</strong> Candidate destinations
              are resolved against real-world Barcelona geospatial POI networks and transit topologies, converting textual
              schedules into spatially explicit, geotagged OD trajectories.
            </span>
          </div>

          <div className="flex items-start gap-3 text-muted-foreground">
            <CheckCircle2 className="w-5 h-5 text-[var(--brand-accent)] shrink-0 mt-0.5" />
            <span>
              <strong className="text-foreground">Simulation Engine Coupling (MATSim):</strong> The resulting individual
              diaries are translated into standard travel demand formats suitable for ingestion by agent-based transport
              simulators like MATSim, enabling macroscopic traffic flow and congestion analysis.
            </span>
          </div>
        </div>
      </section>

      {/* Visual Dashboard Embed */}
      <section className="my-8 rounded-xl border border-border bg-card/40 p-4 md:p-6 overflow-hidden">
        <h3 className="text-sm font-semibold text-foreground flex items-center gap-2 mb-3">
          <BarChart3 className="w-4 h-4 text-[var(--brand-accent)]" />
          Model Diagnostics: Urban ABM Simulation Dashboard
        </h3>
        <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden border border-border/60 bg-muted/20">
          <Image
            src="/urban_abm_dashboard.png"
            alt="Urban ABM Simulation Dashboard: Spatial Trajectories, Activity Profiles, and OD Trip Distributions"
            fill
            className="object-contain"
          />
        </div>
        <p className="text-xs text-muted-foreground mt-3 italic text-center">
          Diagnostic visualisation from our LLM-driven urban simulation pipeline: spatial trajectories, departure time
          profiles, POI visit densities, and trip-distance distributions.
        </p>
      </section>

      {/* Section 4: HPC & MareNostrum */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight text-foreground border-b border-border/60 pb-3 mb-4">
          Scaling Up with the MareNostrum Supercomputer
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Generating synthetic travel diaries for tens of thousands of individuals across multiple days, prompt
          variations, and LLM backends (such as Gemini 1.5 Flash and open-source models like Llama 3.3 70B) presents an
          immense computational challenge.
        </p>
        <p className="text-muted-foreground leading-relaxed mt-3">
          Leveraging BSC&apos;s world-class high-performance computing (HPC) infrastructure allowed us to scale:
        </p>
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div className="rounded-xl border border-border bg-card/40 p-5">
            <div className="flex items-center gap-2 text-[var(--brand-accent)] mb-2">
              <Cpu className="w-5 h-5" />
              <h3 className="text-sm font-semibold text-foreground">Parallel Batch Inference</h3>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Executed large-scale batch synthesis across thousands of simulated demographic profiles, parallelising API
              and model execution to produce metropolitan-scale synthetic cohorts.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card/40 p-5">
            <div className="flex items-center gap-2 text-[var(--brand-accent)] mb-2">
              <BrainCircuit className="w-5 h-5" />
              <h3 className="text-sm font-semibold text-foreground">Ablation &amp; Prompt Exploration</h3>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Conducted systematic ablation studies comparing zero-shot versus few-shot prompting, persona depth, and
              spatial constraint formulations to identify which prompting strategies best preserve realistic mobility metrics.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: Validation against EMEF 2021 */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight text-foreground border-b border-border/60 pb-3 mb-4">
          Empirical Validation: Benchmarking Against Barcelona&apos;s EMEF Survey
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          A fundamental requirement for any synthetic mobility generator is empirical fidelity. We evaluated our
          LLM-generated trip patterns against real ground-truth data from the Autoritat del Transport Metropolità (ATM)
          <em>Enquesta de Mobilitat en Dia Feiner (EMEF 2021)</em>, which records detailed travel logs for thousands of
          residents across the Barcelona Metropolitan Area.
        </p>
        <p className="text-muted-foreground leading-relaxed mt-3">
          Key findings from our validation include:
        </p>
        <ul className="space-y-3 text-muted-foreground mt-3 list-none pl-0">
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[var(--brand-accent)] shrink-0 mt-0.5" />
            <span>
              <strong className="text-foreground">Temporal Departure Profiles:</strong> The LLM agents naturally reproduced
              the characteristic morning and evening commute peaks (08:00–09:00 and 17:00–19:00), alongside lunch-time
              movements characteristic of Spanish urban rhythms, without requiring hardcoded temporal rules.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[var(--brand-accent)] shrink-0 mt-0.5" />
            <span>
              <strong className="text-foreground">Trip-Distance Distributions:</strong> The generated trajectories closely
              matched power-law distance decay patterns observed in empirical mobility data, demonstrating that prompting
              agents with geographic context successfully prevents unrealistic cross-city trips for trivial errands.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[var(--brand-accent)] shrink-0 mt-0.5" />
            <span>
              <strong className="text-foreground">Demographic Heterogeneity:</strong> Agents with different socio-economic
              profiles exhibited distinctly differentiated mobility: working adults generated commuting chains, students
              clustered around university and school hours, and retirees exhibited off-peak local active travel.
            </span>
          </li>
        </ul>
      </section>

      {/* Section 6: Reflection & Forthcoming Paper */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight text-foreground border-b border-border/60 pb-3 mb-4">
          Reflections &amp; Upcoming Working Paper
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          My time in Barcelona was an immensely productive and stimulating chapter. Beyond the computational work inside
          BSC, living in Barcelona offered a daily masterclass in progressive urban planning—from walking through the
          famous <em>Superilles</em> (Superblocks) of Poblenou and Sant Antoni to experiencing one of Europe&apos;s most
          seamless multimodal transit systems.
        </p>
        <p className="text-muted-foreground leading-relaxed mt-3">
          I am immensely grateful to <strong className="text-foreground">Fernando Cucchietti</strong> and{" "}
          <strong className="text-foreground">Patricio Reyes</strong> for hosting me and sharing their expertise in data
          analytics and supercomputing, as well as to <strong className="text-foreground">Joe Murphy</strong> for his
          continued collaboration.
        </p>
        <p className="text-muted-foreground leading-relaxed mt-3">
          Our working paper, titled{" "}
          <strong className="text-foreground">&ldquo;Using LLMs to Generate Synthetic Mobility Data&rdquo;</strong> (Balog,
          Murphy, Reyes, &amp; Cucchietti), is currently being prepared for submission to <em>Urban Transitions</em>.
          Stay tuned for further updates and open-source code releases!
        </p>
      </section>

      {/* Related Resources Box */}
      <section className="rounded-xl border border-border bg-card/40 p-6 md:p-8">
        <h3 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-[var(--brand-accent)]" />
          Related Collaborative Work &amp; Fellowships
        </h3>
        <p className="text-sm text-muted-foreground mb-4">
          Explore related research and visiting fellowships across our international network:
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/blog/visiting-researcher-south-korea-pusan-national-university"
            className="inline-flex items-center gap-2 rounded-lg bg-[var(--brand-accent)] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-90 transition-opacity"
          >
            Visiting Researcher in South Korea <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="https://www.bsc.es"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2 text-sm font-semibold text-foreground hover:bg-muted/30 transition-colors"
          >
            <ExternalLink className="w-4 h-4" /> Barcelona Supercomputing Center
          </a>
        </div>
      </section>
    </div>
  )
}
