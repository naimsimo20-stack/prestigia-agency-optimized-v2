"use client"
import Image from "next/image"

export default function Hero() {
  const handleStartNow = () => {
    const phoneNumber = "212652768993" // À remplacer par votre numéro WhatsApp
    const message = "Bonjour, j'aimerais commencer maintenant avec vos services."
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const handleLearnMore = () => {
    const element = document.querySelector("#services")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="home"
      className="pt-40 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-card to-background"
      role="region"
      aria-label="Hero section with main message and call to action"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-in-down">
            <div>
              <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-4 text-balance leading-tight">
                Transformez Votre <span className="text-accent">Présence</span> Digitale
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Prestigia Agency est votre partenaire stratégique pour une excellence digitale. Nous créons des
                expériences mémorables qui convertissent vos visiteurs en clients fidèles.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleStartNow}
                aria-label="Open WhatsApp to start service"
                className="bg-accent text-background px-8 py-3 rounded-full hover:bg-accent/90 transition-all duration-300 font-semibold text-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
              >
                Commencer Maintenant
              </button>
              <button
                onClick={handleLearnMore}
                aria-label="Scroll to services section"
                className="border-2 border-accent text-accent px-8 py-3 rounded-full hover:bg-accent hover:text-background transition-all duration-300 font-semibold text-lg focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
              >
                En Savoir Plus
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border">
              <div role="doc-statistics">
                <p className="text-3xl font-bold text-accent" aria-label="150 completed projects">
                  150+
                </p>
                <p className="text-sm text-muted-foreground">Projets Réalisés</p>
              </div>
              <div role="doc-statistics">
                <p className="text-3xl font-bold text-accent" aria-label="98 percent client satisfaction">
                  98%
                </p>
                <p className="text-sm text-muted-foreground">Clients Satisfaits</p>
              </div>
              <div role="doc-statistics">
                <p className="text-3xl font-bold text-accent" aria-label="12 years of experience">
                  12+
                </p>
                <p className="text-sm text-muted-foreground">Années d'Expérience</p>
              </div>
            </div>
          </div>

          <div className="relative h-96 md:h-full animate-float">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl blur-3xl"></div>
            <div className="relative bg-card border border-accent/20 rounded-2xl p-8 h-full flex items-center justify-center overflow-hidden">
              <Image
                src="/images/hero-innovation.png"
                alt="Digital innovation and excellence showcase for Prestigia Agency services"
                fill
                className="object-cover"
                priority
                quality={85}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
