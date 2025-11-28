"use client"
import Image from "next/image"

export default function Portfolio() {
  const projects = [
    { id: 1, title: "Plateforme E-commerce", category: "Développement", image: "/images/portfolio-ecommerce.jpg" },
    { id: 2, title: "Branding Luxury", category: "Design", image: "/images/portfolio-branding.jpg" },
    { id: 3, title: "Stratégie Marketing", category: "Conseil", image: "/images/portfolio-marketing.jpg" },
    { id: 4, title: "Refonte Web", category: "Développement", image: "/images/portfolio-refonte.jpg" },
    { id: 5, title: "Identité Visuelle", category: "Design", image: "/images/portfolio-identity.jpg" },
    { id: 6, title: "Campagne Digital", category: "Marketing", image: "/images/portfolio-campaign.jpg" },
  ]

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            Notre <span className="text-accent">Portfolio</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez nos réalisations et projets d'excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="group relative h-64 rounded-xl overflow-hidden cursor-pointer">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <p className="text-sm text-accent mb-2 font-semibold">{project.category}</p>
                <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
