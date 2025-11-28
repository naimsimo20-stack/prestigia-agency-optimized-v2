export const metadata = {
  title: "Mentions Légales | Prestigia Agency",
  description: "Mentions légales de Prestigia Agency - Agence digitale à Casablanca",
}

export default function MentionsLegales() {
  return (
    <main className="min-h-screen bg-background pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-accent via-accent to-purple-400 bg-clip-text text-transparent">
          Mentions Légales
        </h1>

        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Informations Légales</h2>
            <p>
              <strong>Entreprise:</strong> Prestigia Agency
              <br />
              <strong>Forme juridique:</strong> Société à Responsabilité Limitée (SARL)
              <br />
              <strong>Siège social:</strong> Bld Qods The Gold Center, Étage 1, Bureau 2, Casablanca, Ain Chock, Maroc
              <br />
              <strong>Téléphone:</strong> +212 652 768 993
              <br />
              <strong>Email:</strong> contact@prestigia-agency.com
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Responsable de Publication</h2>
            <p>
              Le présent site web est publié par Prestigia Agency. Le directeur de la publication est le gérant de la
              SARL Prestigia Agency.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Hébergement</h2>
            <p>
              <strong>Hébergeur:</strong> Vercel Inc.
              <br />
              <strong>Localisation:</strong> États-Unis
              <br />
              <strong>Site web:</strong> www.vercel.com
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Propriété Intellectuelle</h2>
            <p>
              Tous les contenus du présent site web, incluant les textes, images, vidéos, graphiques et logos, sont la
              propriété exclusive de Prestigia Agency ou sont utilisés avec l'autorisation de leurs propriétaires
              respectifs. Toute reproduction, même partielle, sans l'autorisation écrite préalable est strictement
              interdite et constituerait une contrefaçon.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Limitation de Responsabilité</h2>
            <p>
              Prestigia Agency s'efforce de fournir des informations exactes et à jour sur ce site. Cependant, nous ne
              pouvons garantir l'exactitude, l'exhaustivité ou la pertinence des informations fournies. Prestigia Agency
              ne sera pas responsable des dommages directs ou indirects résultant de l'accès ou de l'utilisation du
              présent site web.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Liens Externes</h2>
            <p>
              Le présent site web peut contenir des liens vers des sites externes. Prestigia Agency ne peut être tenue
              responsable du contenu de ces sites externes ni des dommages qui pourraient en résulter.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Modification des Conditions</h2>
            <p>
              Prestigia Agency se réserve le droit de modifier les présentes mentions légales à tout moment sans
              préavis.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Droit Applicable</h2>
            <p>
              Les présentes mentions légales sont régies par les lois du Maroc. Tout litige sera soumis à la juridiction
              des tribunaux compétents de Casablanca.
            </p>
          </section>

          <section>
            <p className="text-sm text-muted-foreground">Dernière mise à jour: Novembre 2024</p>
          </section>
        </div>
      </div>
    </main>
  )
}
