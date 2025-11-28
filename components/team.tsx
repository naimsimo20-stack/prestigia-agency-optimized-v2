"use client"
import Image from "next/image"

export default function Team() {
  const owners = [
    {
      name: "Abelkader Naim",
      role: "Co-Founder & Développeur Informatique",
      specialty: "Développement Web & Architecture",
      expertise: "5 ans d'expérience",
      image: "/images/founder-abelkader.jpg",
    },
    {
      name: "Ahmed Ghiwane",
      role: "Co-Founder & Expert Digital",
      specialty: "Stratégie Digital & Performance",
      expertise: "6 ans d'expérience",
      image: "/images/founder-ahmed.jpg",
    },
  ]

  return (
    <section id="team" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            Nos <span className="text-accent">Fondateurs</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une vision partagée pour transformer votre présence digitale.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-center mb-16">
          {/* Owners Cards */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            {owners.map((owner, index) => (
              <div
                key={index}
                className="bg-card border border-accent/10 rounded-xl p-8 text-center hover:border-accent/50 transition-all duration-300 group"
              >
                <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden shadow-lg shadow-accent/20">
                  <Image
                    src={owner.image || "/placeholder.svg"}
                    alt={owner.name}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{owner.name}</h3>
                <p className="text-sm text-accent font-semibold mb-3">{owner.role}</p>
                <p className="text-sm text-muted-foreground mb-4">{owner.specialty}</p>
                <p className="text-xs text-accent/70 font-medium">{owner.expertise}</p>
              </div>
            ))}
          </div>

          {/* Quote Section */}
          <div className="lg:col-span-1 h-full flex items-center">
            <div className="bg-gradient-to-br from-accent/10 to-primary/5 border border-accent/20 rounded-xl p-8 backdrop-blur-sm">
              <div className="text-accent text-4xl mb-4 font-bold">"</div>
              <p className="text-lg text-foreground font-light mb-6 leading-relaxed">
                Le marketing digital n'est pas une dépense, c'est un investissement stratégique qui transforme les
                entreprises en champions de leur secteur.
              </p>
              <div className="flex flex-col">
                <p className="font-semibold text-accent">Ahmed Ghiwane</p>
                <p className="text-sm text-muted-foreground">Co-Founder, Prestigia Agency</p>
              </div>
              <div className="mt-4 h-1 w-12 bg-gradient-to-r from-accent to-primary rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
