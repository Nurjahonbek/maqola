"use client"

import { Zap, Shield, Clock, Search, Globe, Award } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/lib/language-context"

export function Features() {
  const { t } = useLanguage()

  const features = [
    {
      icon: Search,
      title: t("feature1Title"),
      description: t("feature1Desc"),
    },
    {
      icon: Award,
      title: t("feature2Title"),
      description: t("feature2Desc"),
    },
    {
      icon: Zap,
      title: t("feature3Title"),
      description: t("feature3Desc"),
    },
    {
      icon: Shield,
      title: t("feature4Title"),
      description: t("feature4Desc"),
    },
    {
      icon: Clock,
      title: t("feature5Title"),
      description: t("feature5Desc"),
    },
    {
      icon: Globe,
      title: t("feature6Title"),
      description: t("feature6Desc"),
    },
  ]

  return (
    <section className="py-20 lg:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary hover:bg-primary/10">
            {t("featuresBadge")}
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4 text-balance">{t("featuresTitle")}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t("featuresDescription")}</p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
