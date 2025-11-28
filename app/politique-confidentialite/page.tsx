export const metadata = {
  title: "Politique de Confidentialité | Prestigia Agency",
  description: "Politique de confidentialité de Prestigia Agency - Protection de vos données personnelles",
}

export default function PolitiqueConfidentialite() {
  return (
    <main className="min-h-screen bg-background pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-accent via-accent to-purple-400 bg-clip-text text-transparent">
          Politique de Confidentialité
        </h1>

        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Introduction</h2>
            <p>
              Prestigia Agency valorise votre vie privée et s'engage à protéger vos données personnelles. La présente
              politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Données Collectées</h2>
            <p className="mb-4">Nous pouvons collecter les données personnelles suivantes :</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Nom et prénom</li>
              <li>Adresse email</li>
              <li>Numéro de téléphone</li>
              <li>Société et poste</li>
              <li>Localisation géographique</li>
              <li>Données de navigation et cookies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Utilisation des Données</h2>
            <p className="mb-4">Vos données sont utilisées pour :</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Répondre à vos demandes et enquêtes</li>
              <li>Envoyer des communications marketing (avec votre consentement)</li>
              <li>Améliorer nos services</li>
              <li>Analyser l'utilisation du site web</li>
              <li>Respecter les obligations légales</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Protection des Données</h2>
            <p>
              Prestigia Agency met en place des mesures de sécurité techniques et organisationnelles pour protéger vos
              données personnelles contre la perte, le vol ou l'accès non autorisé. Nous utilisons le chiffrement SSL et
              d'autres protocoles de sécurité.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Droits des Utilisateurs</h2>
            <p className="mb-4">
              Conformément à la réglementation sur la protection des données, vous disposez des droits suivants :
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Droit d'accès à vos données</li>
              <li>Droit de rectification</li>
              <li>Droit à l'oubli (suppression)</li>
              <li>Droit à la portabilité des données</li>
              <li>Droit d'opposition au traitement</li>
            </ul>
            <p className="mt-4">Pour exercer ces droits, veuillez contacter contact@prestigia-agency.com.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Cookies</h2>
            <p>
              Notre site web utilise des cookies pour améliorer votre expérience utilisateur. Les cookies sont de petits
              fichiers stockés sur votre appareil. Vous pouvez refuser les cookies non essentiels en modifiant les
              paramètres de votre navigateur.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Partage des Données</h2>
            <p>
              Prestigia Agency ne partage pas vos données personnelles avec des tiers sans votre consentement, sauf si
              cela est nécessaire pour fournir nos services ou si c'est exigé par la loi.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Contact</h2>
            <p>
              Pour toute question concernant cette politique de confidentialité, veuillez nous contacter à:
              <br />
              <strong>Email:</strong> contact@prestigia-agency.com
              <br />
              <strong>Téléphone:</strong> +212 652 768 993
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
