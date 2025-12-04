"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download, User, Calendar } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const articles = [
  {
    id: 1,
    title: "Jamiyatda ayolning roli: tarixiy va zamonaviy nuqtai nazar",
    authors: "Tishabayeva Lola Arifovna",
    journal: "Research and Implementation",
    date: "2025-11-19",
    category: "Ijtimoiy fanlar",
    downloads: 145,
    link: "https://rai-journal.uz/index.php/rai/article/view/1725",
    downloadLink: "https://rai-journal.uz/index.php/rai/article/view/1725/2014",
  },
  {
    id: 2,
    title: "Kosmik aloqa tizimlari uchun foydalanuvchi interfeysini ishlab chiqish",
    authors: "Rashidjon Xoliqnazarov, Abduvali Boltayev",
    journal: "Research and Implementation",
    date: "2025-11-19",
    category: "IT & Muhandislik",
    downloads: 234,
    link: "https://rai-journal.uz/index.php/rai/article/view/1726",
    downloadLink: "https://rai-journal.uz/index.php/rai/article/view/1726/2015",
  },
  {
    id: 3,
    title:
      "Sun'iy intellekt texnologiyalari asosida talabalarning og'zaki javoblarini baholash va nazorat qilish tizimini ishlab chiqish",
    authors: "Xasanboy Raxmonaliyev, Asliddin Komiljonov",
    journal: "Research and Implementation",
    date: "2025-11-19",
    category: "AI & ML",
    downloads: 312,
    link: "https://rai-journal.uz/index.php/rai/article/view/1727",
    downloadLink: "https://rai-journal.uz/index.php/rai/article/view/1727/2016",
  },
  {
    id: 4,
    title: "The role of artificial intelligence in the development of adaptive services for digital library users",
    authors: "Marina Lazareva",
    journal: "Research and Implementation",
    date: "2025-11-19",
    category: "AI & ML",
    downloads: 189,
    link: "https://rai-journal.uz/index.php/rai/article/view/1728",
    downloadLink: "https://rai-journal.uz/index.php/rai/article/view/1728/2017",
  },
  {
    id: 5,
    title: "Building Intelligent Systems: An Educational Machine Learning Project with Practical Applications",
    authors: "Sevinch Abdikhamidova",
    journal: "Research and Implementation",
    date: "2025-11-19",
    category: "AI & ML",
    downloads: 276,
    link: "https://rai-journal.uz/index.php/rai/article/view/1729",
    downloadLink: "https://rai-journal.uz/index.php/rai/article/view/1729/2018",
  },
  {
    id: 6,
    title: "Sun'iy intellekt va simsiz aloqa texnologiyalariga asoslangan aqlli svetaforlarni boshqarish tizimi",
    authors: "Rashidjon Xoliqnazarov, Asilbek Mo'minov",
    journal: "Research and Implementation",
    date: "2025-11-19",
    category: "IoT & AI",
    downloads: 198,
    link: "https://rai-journal.uz/index.php/rai/article/view/1731",
    downloadLink: "#",
  },
  {
    id: 7,
    title: "Biznes jarayonlarida sun'iy intellektning o'sish sur'atlari va ta'siri",
    authors: "Homidjonov Hasanboy Azizjon o'g'li",
    journal: "Bulletin: Multidisciplinary",
    date: "2025-10-20",
    category: "Biznes & AI",
    downloads: 156,
    link: "https://bulconre.com/index.php/mult/article/view/25",
    downloadLink: "#",
  },
  {
    id: 8,
    title: "Tibbiyotda Big Data texnologiyalari va Python dasturlash tili orqali katta ma'lumotlarni qayta ishlash",
    authors: "Homidjonov Hasanboy Azizjon o'g'li",
    journal: "Bulletin: Multidisciplinary",
    date: "2025-10-20",
    category: "Big Data",
    downloads: 223,
    link: "https://bulconre.com/index.php/mult/article/view/36",
    downloadLink: "#",
  },
  {
    id: 9,
    title: "Xususiy hosilali differensial tenglamalarga qo'yilgan chegaraviy masalalarni yechish",
    authors: "Abbosjon Abdullayev",
    journal: "Engineering Problems",
    date: "2025-10-03",
    category: "Matematika",
    downloads: 89,
    link: "https://epai.uz/index.php/journal/article/view/237",
    downloadLink: "#",
  },
]

const categories = ["all", ...Array.from(new Set(articles.map((a) => a.category)))]

export function Articles() {
  const { t } = useLanguage()
  const [activeFilter, setActiveFilter] = useState("all")

  const filteredArticles =
    activeFilter === "all" ? articles : articles.filter((article) => article.category === activeFilter)

  return (
    <section id="articles" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8">
          <div>
            <Badge variant="secondary" className="mb-4 bg-accent/10 text-accent hover:bg-accent/10">
              {t("articlesBadge")}
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">{t("articlesTitle")}</h2>
            <p className="text-muted-foreground text-lg max-w-2xl">{t("articlesDescription")}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeFilter === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(category)}
              className={
                activeFilter === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-transparent border-border text-foreground hover:bg-secondary"
              }
            >
              {category === "all" ? t("allArticles") : category}
            </Button>
          ))}
        </div>

        {/* Articles List */}
        <div className="space-y-4">
          {filteredArticles.map((article) => (
            <Card
              key={article.id}
              className="group border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  {/* Article Info */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/10">
                        {article.category}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{article.journal}</span>
                    </div>
                    <a href={article.link} target="_blank" rel="noopener noreferrer" className="block">
                      <h3 className="text-lg lg:text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors cursor-pointer">
                        {article.title}
                      </h3>
                    </a>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>{article.authors}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{article.date}</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-foreground">{article.downloads}</div>
                      <div className="text-xs text-muted-foreground">{t("downloads")}</div>
                    </div>
                    <Button
                      className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
                      onClick={() => window.open(article.downloadLink, "_blank")}
                    >
                      <Download className="w-4 h-4" />
                      {t("download")}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              {t("language") === "uz"
                ? "Maqolalar topilmadi"
                : t("language") === "ru"
                  ? "Статьи не найдены"
                  : "No articles found"}
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
