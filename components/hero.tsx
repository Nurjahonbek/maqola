"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Search, Sparkles, BookMarked, Users } from "lucide-react"
import { useState } from "react"
import { useLanguage } from "@/lib/language-context"

export function Hero() {
  const [searchQuery, setSearchQuery] = useState("")
  const { t } = useLanguage()

  const scrollToArticles = () => {
    const element = document.getElementById("articles")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/50 rounded-full blur-3xl" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-40 left-[15%] animate-bounce hidden lg:block">
        <div className="w-16 h-16 bg-card rounded-2xl shadow-xl flex items-center justify-center border border-border">
          <BookMarked className="w-8 h-8 text-primary" />
        </div>
      </div>
      <div className="absolute top-60 right-[10%] animate-bounce delay-300 hidden lg:block">
        <div className="w-14 h-14 bg-card rounded-2xl shadow-xl flex items-center justify-center border border-border">
          <Sparkles className="w-7 h-7 text-accent" />
        </div>
      </div>
      <div className="absolute bottom-40 left-[20%] animate-bounce delay-500 hidden lg:block">
        <div className="w-12 h-12 bg-card rounded-2xl shadow-xl flex items-center justify-center border border-border">
          <Users className="w-6 h-6 text-primary" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4" />
            <span>{t("badge")}</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground leading-tight mb-6 text-balance">
            {t("heroTitle1")}{" "}
            <span className="relative">
              <span className="text-primary">{t("heroTitle2")}</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                <path
                  d="M2 10C50 4 150 2 298 10"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="text-accent"
                />
              </svg>
            </span>{" "}
            {t("heroTitle3")}
          </h1>

          {/* Description */}
          <p className="text-lg lg:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto text-pretty">
            {t("heroDescription")}
          </p>

          {/* Search Box */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all opacity-50" />
              <div className="relative flex items-center bg-card border border-border rounded-2xl p-2 shadow-lg">
                <Search className="w-5 h-5 text-muted-foreground ml-4" />
                <input
                  type="text"
                  placeholder={t("searchPlaceholder")}
                  className="flex-1 bg-transparent border-none outline-none px-4 py-3 text-foreground placeholder:text-muted-foreground"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-5">
                  {t("searchBtn")}
                </Button>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 px-8"
              onClick={scrollToArticles}
            >
              {t("viewArticles")}
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 border-border text-foreground hover:bg-secondary bg-transparent"
            >
              {t("publishArticle")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
