"use client"

import { FileText, Users, BookOpen, Download } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Stats() {
  const { t } = useLanguage()

  const stats = [
    {
      icon: FileText,
      value: "10,000+",
      label: t("totalArticles"),
    },
    {
      icon: Users,
      value: "5,000+",
      label: t("totalAuthors"),
    },
    {
      icon: BookOpen,
      value: "50+",
      label: t("totalJournals"),
    },
    {
      icon: Download,
      value: "100K+",
      label: t("totalDownloads"),
    },
  ]

  return (
    <section className="py-16 lg:py-24 bg-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-background/10 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                <stat.icon className="w-7 h-7 text-background" />
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-background mb-1">{stat.value}</div>
              <div className="text-background/80 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
