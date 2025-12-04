"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Contact() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "info@maqola.uz",
      link: "mailto:info@maqola.uz",
    },
    {
      icon: Phone,
      title: "Telefon",
      value: "+998 71 123 45 67",
      link: "tel:+998711234567",
    },
    {
      icon: MapPin,
      title: "Manzil",
      value: "Farg'ona shahri, O'zbekiston",
      link: "#",
    },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <section id="contact" className="py-20 lg:py-32 bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Side */}
          <div>
            <Badge
              variant="secondary"
              className="mb-6 bg-background/10 text-background hover:bg-background/10 border-0"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              {t("contactBadge")}
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-balance">{t("contactTitle")}</h2>
            <p className="text-background/70 text-lg mb-10">{t("contactDescription")}</p>

            {/* Contact Info */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <a key={index} href={item.link} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-background/10 rounded-xl flex items-center justify-center group-hover:bg-background/20 transition-colors">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-background/60">{item.title}</div>
                    <div className="font-medium">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Side - Form */}
          <div>
            <Card className="bg-background/10 border-background/20 backdrop-blur-xl">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-background mb-2">{t("yourName")}</label>
                    <Input
                      placeholder={t("yourName")}
                      className="bg-background/10 border-background/20 text-background placeholder:text-background/50 focus:border-background/40"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-background mb-2">{t("yourEmail")}</label>
                    <Input
                      type="email"
                      placeholder="email@example.com"
                      className="bg-background/10 border-background/20 text-background placeholder:text-background/50 focus:border-background/40"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-background mb-2">{t("message")}</label>
                    <Textarea
                      placeholder={t("messagePlaceholder")}
                      rows={5}
                      className="bg-background/10 border-background/20 text-background placeholder:text-background/50 focus:border-background/40 resize-none"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-background text-foreground hover:bg-background/90 gap-2">
                    {t("send")}
                    <Send className="w-4 h-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
