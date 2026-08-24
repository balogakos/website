import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Affiliations } from "@/components/affiliations"
import { Research } from "@/components/research"
import { Projects } from "@/components/projects"
import { Publications } from "@/components/publications"
import { Links } from "@/components/links"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Affiliations />
        <Projects />
        <Research />
        <Publications />
        <Links />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
