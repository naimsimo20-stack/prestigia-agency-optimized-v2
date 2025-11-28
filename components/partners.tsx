"use client"
import Image from "next/image"

export default function Partners() {
  const partners = [
    {
      name: "TechPartner 1",
      category: "Développement",
      description: "Leader en solutions technologiques innovantes",
      image: "/images/partner-tech.jpg",
    },
    {
      name: "TechPartner 2",
      category: "Design",
      description: "Excellence en conception graphique et UX/UI",
      image: "/images/partner-design.jpg",
    },
    {
      name: "TechPartner 3",
      category: "Marketing",
      description: "Spécialiste en stratégie marketing digital",
      image: "/images/partner-marketing.jpg",
    },
    {
      name: "TechPartner 4",
      category: "Hosting",
      description: "Infrastructure cloud sécurisée et performante",
      image: "/images/partner-hosting.jpg",
    },
  ]

  return (
    <section id="partners" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            Nos <span className="text-accent">Partenaires</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nous collaborons avec les meilleurs partenaires pour offrir des solutions d'excellence à nos clients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-background border border-accent/10 rounded-xl p-6 hover:border-accent/50 transition-all duration-300 group hover:shadow-lg hover:shadow-accent/10"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg overflow-hidden">
                <Image
                  src={partner.image || "/placeholder.svg"}
                  alt={partner.name}
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-foreground text-center mb-2">{partner.name}</h3>
              <p className="text-sm text-accent font-semibold text-center mb-3">{partner.category}</p>
              <p className="text-sm text-muted-foreground text-center">{partner.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-accent/10 to-primary/5 border border-accent/20 rounded-xl p-12 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">Devenir Partenaire</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Intéressé par un partenariat stratégique avec Prestigia Agency? Contactez-nous pour explorer les
            opportunités de collaboration.
          </p>
          <a
            href="mailto:contact@prestigia-agency.com?subject=Demande%20de%20partenariat%20-%20Prestigia%20Agency"
            className="inline-block bg-accent text-background px-8 py-3 rounded-full hover:bg-accent/90 transition-all duration-300 font-semibold hover:scale-105"
          >
            Nous Contacter
          </a>
        </div>
      </div>
    </section>
  )
}
