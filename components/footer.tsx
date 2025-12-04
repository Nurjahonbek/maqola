"use client"

import { BookOpen, Github, Linkedin, Twitter, Instagram } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Instagram, href: "#", label: "Instagram" },
]

export function Footer() {
  const { t } = useLanguage()

  const footerLinks = {
    platform: [
      { name: t("articles"), href: "#journals" },
      { name: t("totalJournals"), href: "#journals" },
      { name: t("search"), href: "#search" },
      { name: t("prices"), href: "#" },
    ],
    resources: [
      { name: t("guide"), href: "#" },
      { name: t("faq"), href: "#" },
      { name: t("api"), href: "#" },
      { name: t("partnership"), href: "#" },
    ],
    legal: [
      { name: t("privacy"), href: "#" },
      { name: t("terms"), href: "#" },
      { name: t("license"), href: "#" },
    ],
  }

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                {/* <BookOpen className="w-5 h-5 text-primary-foreground" /> */}
                <img src="./Logo.png" className="h-auto w-auto" />
              </div>
              <span className="text-xl font-bold text-foreground">Fer.Teach</span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-xs">
              O'zbekistondagi eng yirik ilmiy maqolalar va jurnallar platformasi.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">{t("platform")}</h4>
            <ul className="space-y-3">
              {footerLinks.platform.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">{t("resources")}</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">{t("legal")}</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">© 2025 Maqola. {t("allRightsReserved")}.</p>
          <p className="text-muted-foreground text-sm">{t("madeIn")} 🇺🇿</p>
        </div>
      </div>
    </footer>
  )
}
