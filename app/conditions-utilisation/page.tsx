export const metadata = {
  title: "Conditions d'Utilisation | Prestigia Agency",
  description: "Conditions d'utilisation du site web de Prestigia Agency",
}

export default function ConditionsUtilisation() {
  return (
    <main className="min-h-screen bg-background pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-accent via-accent to-purple-400 bg-clip-text text-transparent">
          Conditions d'Utilisation
        </h1>

        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Acceptation des Conditions</h2>
            <p>
              En accédant et en utilisant ce site web, vous acceptez d'être lié par les présentes conditions
              d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser ce site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Utilisation Autorisée</h2>
            <p className="mb-4">Vous acceptez d'utiliser ce site web uniquement à des fins légales et de ne pas :</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Violer toute loi ou réglementation applicable</li>
              <li>Infringer les droits de propriété intellectuelle</li>
              <li>Transmettre des contenus offensants, abusifs ou haineux</li>
              <li>Tenter d'accéder à des zones protégées du site</li>
              <li>Utiliser des outils automatisés ou des scripts pour accéder au site</li>
              <li>Spammer ou envoyer du contenu malveillant</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Propriété Intellectuelle</h2>
            <p>
              Tous les contenus, designs, graphiques et logos du site web sont la propriété exclusive de Prestigia
              Agency ou de ses partenaires. Vous n'avez pas le droit de reproduire, copier ou modifier ces contenus sans
              autorisation écrite préalable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Comptes Utilisateur</h2>
            <p>
              Si vous créez un compte sur notre site, vous êtes responsable du maintien de la confidentialité de vos
              identifiants et du mot de passe. Vous acceptez d'être responsable de toute activité effectuée à partir de
              votre compte.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Limitation de Responsabilité</h2>
            <p>
              Prestigia Agency ne sera pas responsable des dommages directs, indirects, accessoires ou consécutifs
              résultant de l'utilisation ou de l'impossibilité d'utiliser ce site web, même en cas de notification de la
              possibilité de tels dommages.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Absence de Garantie</h2>
            <p>
              Le site web est fourni "tel quel" sans garanties d'aucune sorte. Prestigia Agency n'offre aucune garantie
              concernant l'exactitude, l'intégrité ou la disponibilité du contenu.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Indemnisation</h2>
            <p>
              Vous acceptez d'indemniser et de tenir inoffensive Prestigia Agency et ses officiels, directeurs, employés
              et agents de toute réclamation, demande, procédure judiciaire ou perte découlant de votre utilisation du
              site web.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Liens Externes</h2>
            <p>
              Notre site web peut contenir des liens vers des sites externes. Prestigia Agency n'est pas responsable du
              contenu de ces sites externes et n'approuve pas nécessairement leurs contenus.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Modification des Conditions</h2>
            <p>
              Prestigia Agency se réserve le droit de modifier ces conditions d'utilisation à tout moment. Les
              modifications entreront en vigueur immédiatement après leur publication sur le site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Résiliation</h2>
            <p>
              Prestigia Agency peut résilier votre accès au site web à tout moment et pour quelque raison que ce soit,
              sans préavis.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Droit Applicable</h2>
            <p>
              Les présentes conditions d'utilisation sont régies par les lois du Maroc. Vous consentez à la juridiction
              exclusive des tribunaux de Casablanca.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Contact</h2>
            <p>
              Pour toute question concernant ces conditions d'utilisation, veuillez nous contacter à:
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
