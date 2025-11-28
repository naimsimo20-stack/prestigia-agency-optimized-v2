"use client"

import { Zap, Palette, BarChart3, Share2 } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: Palette,
      title: "Branding & Design",
      description: "Création d'identités visuelles marquantes et cohérentes avec votre vision.",
    },
    {
      icon: Zap,
      title: "Développement Web",
      description: "Sites performants et modernes, optimisés pour conversion et expérience utilisateur.",
    },
    {
      icon: BarChart3,
      title: "Marketing Digital",
      description: "Stratégies digitales complètes pour booster votre visibilité et vos ventes.",
    },
    {
      icon: Share2,
      title: "Social Media",
      description: "Gestion complète des réseaux sociaux avec stratégie de contenu impactante.",
    },
  ]

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            Nos <span className="text-accent">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nous offrons une suite complète de services pour transformer votre présence digitale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card border border-accent/10 hover:border-accent/50 rounded-xl p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/10"
            >
              <div className="mb-6">
                <service.icon className="w-12 h-12 text-accent group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
