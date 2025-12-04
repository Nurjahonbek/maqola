"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Calendar, FileText, ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import Image from "next/image"

const journals = [
  {
    id: 1,
    title: "Research and Implementation",
    subtitle: "Tadqiq va Tatbiq",
    issn: "ISSN (e): 3030-3362",
    description: "AI bo'yicha asosiy tushunchalar va ilmiy tadqiqotlar jamlanmasi.",
    deadline: "27.11.2025",
    reviewTime: "3 kun",
    publishDate: "30.11.2025",
    indexation: "10 kun",
    color: "from-primary to-primary/80",
    articles: 156,
    featured: true,
    image: "/research-implementation-journal-cover-scientific.jpg",
    link: "https://rai-journal.uz/index.php/rai",
  },
  {
    id: 2,
    title: "Engineering Problems and Innovations",
    subtitle: "Muhandislik muammolari va innovatsiyalar",
    issn: "ISSN: 2181-4171",
    description: "Data Science asoslari va amaliy tahlil metodlari.",
    deadline: "15.12.2025",
    reviewTime: "10 kun",
    publishDate: "27.12.2025",
    indexation: "1 hafta",
    color: "from-accent to-accent/80",
    articles: 234,
    featured: false,
    image: "/engineering-innovations-journal-cover-technical.jpg",
    link: "https://epai.uz/index.php/journal",
  },
  {
    id: 3,
    title: "International Online Multidisciplinary Conference",
    subtitle: "IOMC 2025",
    issn: "ISSN: 2181-5890",
    description: "Algoritmlar nazariyasi va amaliy yechimlari.",
    deadline: "24.12.2025",
    reviewTime: "3 kun",
    publishDate: "27.12.2025",
    indexation: "10 kun",
    color: "from-chart-3 to-chart-3/80",
    articles: 189,
    featured: false,
    image: "/international-conference-journal-multidisciplinary.jpg",
    link: "https://tezislar.uz/index.php/iomc",
  },
  {
    id: 4,
    title: "Bulletin of Contemporary Researches: Multidisciplinary",
    subtitle: "Ko'p tarmoqli tadqiqotlar",
    issn: "ISSN: 2181-6780",
    description: "Ko'p sohalar bo'yicha ilmiy tadqiqotlar va maqolalar.",
    deadline: "10.11.2025",
    reviewTime: "5 kun",
    publishDate: "15.11.2025",
    indexation: "10 kun",
    color: "from-chart-4 to-chart-4/80",
    articles: 145,
    featured: false,
    image: "/bulletin-research-multidisciplinary-journal.jpg",
    link: "https://bulconre.com/index.php/mult",
  },
  {
    id: 5,
    title: "Bulletin of Contemporary Researches: Technical Sciences",
    subtitle: "Texnik fanlar",
    issn: "ISSN: 2181-6799",
    description: "Texnika va innovatsiyalar bo'yicha eng so'nggi maqolalar.",
    deadline: "20.12.2025",
    reviewTime: "7 kun",
    publishDate: "27.12.2025",
    indexation: "15 kun",
    color: "from-chart-5 to-chart-5/80",
    articles: 178,
    featured: false,
    image: "/technical-sciences-journal-engineering.jpg",
    link: "https://bulconre.com/index.php/tech",
  },
]

export function Journals() {
  const { t } = useLanguage()

  return (
    <section id="journals" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary hover:bg-primary/10">
            {t("journalsBadge")}
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4 text-balance">{t("journalsTitle")}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t("journalsDescription")}</p>
        </div>

        {/* Journals Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {journals.map((journal) => (
            <Card
              key={journal.id}
              className="group relative overflow-hidden border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Image Header */}
              <div className={`h-40 bg-gradient-to-br ${journal.color} relative overflow-hidden`}>
                <Image
                  src={journal.image || "/placeholder.svg"}
                  alt={journal.title}
                  fill
                  className="object-cover opacity-30 group-hover:opacity-40 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                {journal.featured && (
                  <Badge className="absolute top-4 right-4 bg-background text-foreground">{t("popular")}</Badge>
                )}
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-xs font-mono text-white/80">{journal.issn}</span>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {journal.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{journal.subtitle}</p>
                <p className="text-muted-foreground text-sm mb-6">{journal.description}</p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">
                      {t("deadline")}: {journal.deadline}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <FileText className="w-4 h-4 text-accent" />
                    <span className="text-muted-foreground">
                      {journal.articles} {t("articles").toLowerCase()}
                    </span>
                  </div>
                </div>

                {/* Info Box */}
                <div className="bg-secondary/50 rounded-xl p-4 mb-6 text-sm space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t("reviewTime")}:</span>
                    <span className="font-medium text-foreground">{journal.reviewTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t("publishDate")}:</span>
                    <span className="font-medium text-foreground">{journal.publishDate}</span>
                  </div>
                </div>

                <Button
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
                  onClick={() => window.open(journal.link, "_blank")}
                >
                  {t("moreDetails")}
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="gap-2 border-border text-foreground hover:bg-secondary bg-transparent"
          >
            {t("viewAllJournals")}
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
