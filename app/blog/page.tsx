import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { blogPosts } from "@/lib/blog-data"
import { Calendar, Clock, ArrowRight, Tag, BookOpen, Sparkles, Globe2 } from "lucide-react"

export const metadata = {
  title: "Blog & Research Insights — Ákos Balog",
  description:
    "Articles, research reflections, and field experiences in geographic data science, agent-based modelling, retail resilience, and smart mobility.",
}

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          {/* Header */}
          <div className="max-w-3xl mb-16">
            <span className="text-xs tracking-widest uppercase text-muted-foreground font-medium">
              Writing &amp; Updates
            </span>
            <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Blog
            </h1>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              Career updates, research reflections, international visits, and methodology discussions on spatial data science,
              agent-based modelling, urban analytics, and Smart Data.
            </p>
          </div>

          {/* Posts list */}
          <div className="space-y-8 max-w-4xl">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="group relative rounded-2xl border border-border/80 bg-card/40 p-8 transition-all duration-300 hover:border-[var(--brand-accent)]/50 hover:bg-card/70 hover:shadow-lg hover:shadow-[var(--brand-accent)]/5"
              >
                {/* Tags & meta */}
                <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--brand-accent)]/10 px-3 py-1 font-medium text-[var(--brand-accent)]">
                    {post.category === "Announcement" && (
                      <>
                        <Sparkles className="w-3.5 h-3.5" />
                        Career Update
                      </>
                    )}
                    {post.category === "Research" && (
                      <>
                        <Globe2 className="w-3.5 h-3.5" />
                        Visiting Researcher
                      </>
                    )}
                    {post.category === "Publication" && (
                      <>
                        <BookOpen className="w-3.5 h-3.5" />
                        New Publication
                      </>
                    )}
                  </span>
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

                {/* Title */}
                <h2 className="text-2xl font-bold tracking-tight text-foreground transition-colors group-hover:text-[var(--brand-accent)] mb-3">
                  <Link href={`/blog/${post.slug}`} className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    {post.title}
                  </Link>
                </h2>

                {/* Subtitle / Excerpt */}
                <p className="text-muted-foreground text-[15px] leading-relaxed mb-6">
                  {post.excerpt}
                </p>

                {/* Footer of card */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-border/40 text-xs">
                  <div className="flex flex-wrap items-center gap-2">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 text-muted-foreground bg-muted/40 px-2.5 py-0.5 rounded-md"
                      >
                        <Tag className="w-3 h-3 text-[var(--brand-accent)]/70" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1.5 font-medium text-[var(--brand-accent)] group-hover:translate-x-1 transition-transform duration-200">
                    Read article <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}