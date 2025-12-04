import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Stats } from "@/components/stats"
import { Journals } from "@/components/journals"
import { Features } from "@/components/features"
import { Articles } from "@/components/articles"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Stats />
      <Journals />
      <Features />
      <Articles />
      <Footer />
    </main>
  )
}
