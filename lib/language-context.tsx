"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

export type Language = "uz" | "ru" | "en"

interface Translations {
  [key: string]: {
    uz: string
    ru: string
    en: string
  }
}

export const translations: Translations = {
  // Header
  home: { uz: "Bosh sahifa", ru: "Главная", en: "Home" },
  articles: { uz: "Maqolalar", ru: "Статьи", en: "Articles" },
  search: { uz: "Qidiruv", ru: "Поиск", en: "Search" },
  contact: { uz: "Aloqa", ru: "Контакт", en: "Contact" },
  publishArticle: { uz: "Maqola joylash", ru: "Опубликовать", en: "Publish Article" },

  // Hero
  badge: {
    uz: "O'zbekistondagi eng yirik ilmiy platforma",
    ru: "Крупнейшая научная платформа в Узбекистане",
    en: "The largest scientific platform in Uzbekistan",
  },
  heroTitle1: { uz: "Ilmiy kitoblar va", ru: "Научные книги и", en: "Scientific books and" },
  heroTitle2: { uz: "maqolalar", ru: "статьи", en: "articles" },
  heroTitle3: { uz: "jamlanmasi", ru: "коллекция", en: "collection" },
  heroDescription: {
    uz: "O'zbekiston va xalqaro ilmiy jurnallar, konferensiya materiallari, tadqiqotlar bazasi va ilmiy maqolalarni tezkor qidirish imkonini taqdim etadi.",
    ru: "Предоставляет быстрый поиск узбекских и международных научных журналов, материалов конференций, базы исследований и научных статей.",
    en: "Provides quick search for Uzbekistan and international scientific journals, conference materials, research database and scientific articles.",
  },
  searchPlaceholder: {
    uz: "Maqola, muallif yoki kalit so'z qidirish...",
    ru: "Поиск статьи, автора или ключевого слова...",
    en: "Search article, author or keyword...",
  },
  searchBtn: { uz: "Qidirish", ru: "Поиск", en: "Search" },
  viewArticles: { uz: "Maqolalarni ko'rish", ru: "Смотреть статьи", en: "View Articles" },

  // Stats
  totalArticles: { uz: "Maqolalar", ru: "Статьи", en: "Articles" },
  totalAuthors: { uz: "Mualliflar", ru: "Авторы", en: "Authors" },
  totalJournals: { uz: "Jurnallar", ru: "Журналы", en: "Journals" },
  totalDownloads: { uz: "Yuklab olishlar", ru: "Загрузки", en: "Downloads" },

  // Journals
  journalsBadge: { uz: "Ilmiy Jurnallar", ru: "Научные журналы", en: "Scientific Journals" },
  journalsTitle: { uz: "Eng yaxshi ilmiy jurnallar", ru: "Лучшие научные журналы", en: "Best scientific journals" },
  journalsDescription: {
    uz: "O'zbekiston va xalqaro miqyosdagi akkreditatsiyalangan ilmiy jurnallar to'plami",
    ru: "Коллекция аккредитованных научных журналов Узбекистана и международного уровня",
    en: "Collection of accredited scientific journals from Uzbekistan and international level",
  },
  deadline: { uz: "Muddat", ru: "Срок", en: "Deadline" },
  reviewTime: { uz: "Ko'rib chiqish", ru: "Рассмотрение", en: "Review" },
  publishDate: { uz: "Nashr sanasi", ru: "Дата публикации", en: "Publish date" },
  moreDetails: { uz: "Batafsil", ru: "Подробнее", en: "More details" },
  viewAllJournals: { uz: "Barcha jurnallarni ko'rish", ru: "Смотреть все журналы", en: "View all journals" },
  popular: { uz: "Mashhur", ru: "Популярный", en: "Popular" },

  // Features
  featuresBadge: { uz: "Afzalliklar", ru: "Преимущества", en: "Features" },
  featuresTitle: { uz: "Nega aynan Maqola?", ru: "Почему именно Maqola?", en: "Why Maqola?" },
  featuresDescription: {
    uz: "Platformamiz sizga eng yaxshi imkoniyatlarni taqdim etadi",
    ru: "Наша платформа предоставляет вам лучшие возможности",
    en: "Our platform provides you with the best opportunities",
  },

  feature1Title: { uz: "Tezkor qidiruv", ru: "Быстрый поиск", en: "Fast search" },
  feature1Desc: {
    uz: "Minglab maqolalar orasidan bir necha soniyada kerakli maqolani toping",
    ru: "Найдите нужную статью за несколько секунд среди тысяч статей",
    en: "Find the right article in seconds among thousands of articles",
  },
  feature2Title: { uz: "Akkreditatsiya", ru: "Аккредитация", en: "Accreditation" },
  feature2Desc: {
    uz: "Barcha jurnallar rasmiy akkreditatsiyadan o'tgan va tan olingan",
    ru: "Все журналы официально аккредитованы и признаны",
    en: "All journals are officially accredited and recognized",
  },
  feature3Title: { uz: "Tez nashr", ru: "Быстрая публикация", en: "Fast publishing" },
  feature3Desc: {
    uz: "Maqolangiz 3-10 kun ichida ko'rib chiqiladi va nashr etiladi",
    ru: "Ваша статья будет рассмотрена и опубликована в течение 3-10 дней",
    en: "Your article will be reviewed and published within 3-10 days",
  },
  feature4Title: { uz: "Xavfsizlik", ru: "Безопасность", en: "Security" },
  feature4Desc: {
    uz: "Barcha maqolalar va ma'lumotlar maxfiy va xavfsiz saqlanadi",
    ru: "Все статьи и данные хранятся конфиденциально и безопасно",
    en: "All articles and data are stored confidentially and securely",
  },
  feature5Title: { uz: "24/7 qo'llab-quvvatlash", ru: "Поддержка 24/7", en: "24/7 Support" },
  feature5Desc: {
    uz: "Har qanday savollaringizga tezkor javob olishingiz mumkin",
    ru: "Вы можете получить быстрый ответ на любые вопросы",
    en: "You can get a quick answer to any questions",
  },
  feature6Title: { uz: "Indeksatsiya", ru: "Индексация", en: "Indexing" },
  feature6Desc: {
    uz: "Maqolalar xalqaro ma'lumotlar bazalarida indekslanadi",
    ru: "Статьи индексируются в международных базах данных",
    en: "Articles are indexed in international databases",
  },

  // Articles
  articlesBadge: { uz: "So'nggi maqolalar", ru: "Последние статьи", en: "Recent articles" },
  articlesTitle: {
    uz: "Yangi chop etilgan maqolalar",
    ru: "Недавно опубликованные статьи",
    en: "Recently published articles",
  },
  articlesDescription: {
    uz: "Eng so'nggi ilmiy tadqiqotlar va maqolalar bilan tanishing",
    ru: "Ознакомьтесь с последними научными исследованиями и статьями",
    en: "Get acquainted with the latest scientific research and articles",
  },
  allArticles: { uz: "Hammasi", ru: "Все", en: "All" },
  download: { uz: "Yuklab olish", ru: "Скачать", en: "Download" },
  downloads: { uz: "Yuklab olish", ru: "Загрузки", en: "Downloads" },
  author: { uz: "Muallif", ru: "Автор", en: "Author" },
  journal: { uz: "Jurnal", ru: "Журнал", en: "Journal" },

  // Contact
  contactBadge: { uz: "Bog'lanish", ru: "Связаться", en: "Contact" },
  contactTitle: { uz: "Biz bilan bog'laning", ru: "Свяжитесь с нами", en: "Contact us" },
  contactDescription: {
    uz: "Savollaringiz bormi? Biz bilan bog'laning va yordam oling",
    ru: "Есть вопросы? Свяжитесь с нами и получите помощь",
    en: "Have questions? Contact us and get help",
  },
  yourName: { uz: "Ismingiz", ru: "Ваше имя", en: "Your name" },
  yourEmail: { uz: "Email manzilingiz", ru: "Ваш email", en: "Your email" },
  message: { uz: "Xabar", ru: "Сообщение", en: "Message" },
  messagePlaceholder: { uz: "Xabaringizni yozing...", ru: "Напишите ваше сообщение...", en: "Write your message..." },
  send: { uz: "Yuborish", ru: "Отправить", en: "Send" },

  // Footer
  platform: { uz: "Platforma", ru: "Платформа", en: "Platform" },
  resources: { uz: "Resurslar", ru: "Ресурсы", en: "Resources" },
  legal: { uz: "Huquqiy", ru: "Юридическое", en: "Legal" },
  guide: { uz: "Qo'llanma", ru: "Руководство", en: "Guide" },
  faq: { uz: "FAQ", ru: "FAQ", en: "FAQ" },
  api: { uz: "API", ru: "API", en: "API" },
  partnership: { uz: "Hamkorlik", ru: "Партнерство", en: "Partnership" },
  privacy: { uz: "Maxfiylik siyosati", ru: "Политика конфиденциальности", en: "Privacy policy" },
  terms: { uz: "Foydalanish shartlari", ru: "Условия использования", en: "Terms of use" },
  license: { uz: "Litsenziya", ru: "Лицензия", en: "License" },
  allRightsReserved: { uz: "Barcha huquqlar himoyalangan", ru: "Все права защищены", en: "All rights reserved" },
  madeIn: { uz: "O'zbekistonda ishlab chiqilgan", ru: "Сделано в Узбекистане", en: "Made in Uzbekistan" },
  prices: { uz: "Narxlar", ru: "Цены", en: "Prices" },
}

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("uz")

  useEffect(() => {
    const saved = localStorage.getItem("language") as Language
    if (saved && ["uz", "ru", "en"].includes(saved)) {
      setLanguage(saved)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    return translations[key]?.[language] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }
  return context
}
