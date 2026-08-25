import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-8">
            Blog
          </h1>
          <p className="text-muted-foreground text-lg mb-12">
            Coming soon. I will be sharing my thoughts on agent-based modelling, urban systems, and spatial data science here.
          </p>
          <div className="border border-border rounded-lg p-12 flex items-center justify-center bg-muted/20">
            <p className="text-sm text-muted-foreground">No posts published yet.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
