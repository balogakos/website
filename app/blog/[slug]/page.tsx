import Link from "next/link"
import { notFound } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { blogPosts, type BlogPost } from "@/lib/blog-data"
import { GeodemographicsPostContent } from "@/components/blog/geodemographics-post"
import { SmartTransportPostContent } from "@/components/blog/smart-transport-post"
import {
  ArrowLeft,
  Calendar,
  Clock,
  Github,
  BookOpen,
  Tag,
  Globe2,
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
                  <BookOpen className="w-3.5 h-3.5" /> Read Paper
                </a>
                {post.githubUrl && (
                  <a
                    href={post.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-medium text-[var(--brand-accent)] hover:underline"
                  >
                    <Github className="w-3.5 h-3.5" /> Code &amp; Data
                  </a>
                )}
                {post.newsUrl && (
                  <a
                    href={post.newsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-medium text-[var(--brand-accent)] hover:underline"
                  >
                    <Globe2 className="w-3.5 h-3.5" /> Project News
                  </a>
                )}
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
                <strong>Published in:</strong> <em>{post.journal}</em>
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
                <strong>Open Access:</strong> Available to read and download openly with no paywall.
              </li>
            </ul>
          </div>

          {/* Dynamic Post Body */}
          {slug === "open-geodemographic-classification-consumer-behaviour" && (
            <GeodemographicsPostContent post={post} />
          )}
          {slug === "smart-transportation-planning-advanced-technologies" && (
            <SmartTransportPostContent post={post} />
          )}

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