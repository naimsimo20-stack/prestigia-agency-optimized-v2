"use client"

import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

// Sample blog posts data
const blogPosts = [
  {
    id: "1",
    title: "10 Erreurs SEO à Éviter en 2025 - Guide Complet",
    slug: "10-erreurs-seo-a-eviter",
    excerpt:
      "Découvrez les erreurs SEO les plus courantes qui pénalisent votre classement Google et comment les corriger.",
    fullContent: `
    Les erreurs SEO peuvent coûter cher à votre business. Voici les 10 erreurs les plus courantes que nous rencontrons:

    ## 1. Ignorer les Core Web Vitals
    Les Core Web Vitals sont maintenant un facteur de classement crucial. Assurez-vous que votre site charge rapidement.

    ## 2. Ne pas optimiser les balises Meta
    Les balises meta title et description sont essentielles pour le CTR dans les résultats de recherche.

    ## 3. Contenu de mauvaise qualité
    Google récompense le contenu original, approfondi et utile. Investissez dans une bonne stratégie de contenu.

    ## 4. Backlinks de faible qualité
    Privilégiez les backlinks de qualité provenant de sites pertinents plutôt que la quantité.

    ## 5. Non-optimisation mobile
    Plus de 60% du trafic provient du mobile. Votre site doit être optimisé mobile-first.

    ## 6. Ignorer la structure interne
    Une bonne structure interne aide Google à comprendre votre site et améliore le PageRank.

    ## 7. Ignorer les données structurées (Schema.org)
    Les données structurées aident Google à mieux comprendre votre contenu.

    ## 8. Ne pas optimiser les images
    Les images non optimisées ralentissent votre site. Compressez et utilisez les bons formats.

    ## 9. Trop de pop-ups et d'interruptions
    Google pénalise les sites avec trop d'interstitiels et de pop-ups.

    ## 10. Ne pas analyser votre SEO
    Utilisez Google Analytics et Search Console pour analyser et améliorer votre SEO.
    `,
    category: "SEO",
    image: "/erreurs-seo-guide.jpg",
    date: "2025-01-20",
    author: "Ahmed Ghiwane",
    readTime: 8,
    tags: ["SEO", "Google", "Classement", "Optimisation"],
  },
  {
    id: "2",
    title: "Comment Choisir une Agence Marketing Digital - Checklist Complète",
    slug: "comment-choisir-agence-marketing-digital",
    excerpt: "Guide complet pour sélectionner la meilleure agence marketing digital adaptée à votre entreprise.",
    fullContent: `
    Choisir une agence marketing digital est crucial pour votre succès en ligne. Voici comment faire le bon choix:

    ## Vérifier les références et le portfolio
    Demandez à voir les projets passés et les résultats obtenus. Les cas d'études sont essentiels.

    ## Analyse du secteur d'activité
    Préférez une agence qui comprend votre secteur d'activité et qui a de l'expérience avec des clients similaires.

    ## Communication transparente
    Une bonne agence doit communiquer clairement sur les stratégies, les résultats et les investissements nécessaires.

    ## Services proposés
    Assurez-vous que l'agence propose tous les services dont vous avez besoin: SEO, SEM, réseaux sociaux, etc.

    ## ROI et résultats mesurables
    L'agence doit être capable de démontrer un ROI clair sur vos investissements marketing.

    ## Équipe qualifiée
    Vérifiez que l'agence emploie des experts dans leurs domaines respectifs.
    `,
    category: "Conseil",
    image: "/agence-marketing-digital.jpg",
    date: "2025-01-18",
    author: "Abelkader Naim",
    readTime: 10,
    tags: ["Marketing Digital", "Agence", "Sélection", "Conseil"],
  },
  {
    id: "3",
    title: "Stratégie Branding pour PME Marocaines - Réussir en 5 Étapes",
    slug: "strategie-branding-pme-maroc",
    excerpt: "Comment développer une identité de marque puissante pour votre PME au Maroc.",
    fullContent: `
    Le branding est essentiel pour les PME marocaines qui veulent se différencier. Voici les 5 étapes:

    ## 1. Définir votre positionnement
    Comprendre votre marché et votre positionnement unique.

    ## 2. Créer votre identité visuelle
    Logo, couleurs, typographie - créez une identité cohérente et professionnelle.

    ## 3. Développer votre message de marque
    Votre tagline, votre promesse de valeur, votre histoire.

    ## 4. Appliquer votre branding partout
    Site web, réseaux sociaux, documents, emballages - cohérence maximale.

    ## 5. Mesurer et adapter
    Recevez des retours et ajustez votre branding selon les résultats.
    `,
    category: "Branding",
    image: "/branding-identite-visuelle.jpg",
    date: "2025-01-15",
    author: "Ahmed Ghiwane",
    readTime: 7,
    tags: ["Branding", "PME", "Identité Visuelle", "Marketing"],
  },
  {
    id: "4",
    title: "SEO Local Casablanca: Comment Dominer les Résultats Google Maps",
    slug: "seo-local-casablanca-google-maps",
    excerpt: "Stratégies éprouvées pour améliorer votre visibilité locale sur Google Maps à Casablanca.",
    fullContent: `
    Le SEO local est crucial pour les entreprises à Casablanca. Voici comment optimiser:

    ## Créer et optimiser votre Google Business Profile
    Complétez tous les détails, ajoutez des photos et des vidéos.

    ## Obtenir des avis clients
    Les avis positifs améliorent votre classement local.

    ## Optimiser vos citations locales
    Référencez votre entreprise dans les annuaires locaux marocains.

    ## Contenu localisé
    Créez du contenu spécifique à Casablanca et à votre secteur.

    ## Backlinks locaux
    Partenariats avec d'autres entreprises et organisations casablancaises.
    `,
    category: "SEO",
    image: "/seo-local-google-maps.jpg",
    date: "2025-01-12",
    author: "Abelkader Naim",
    readTime: 9,
    tags: ["SEO Local", "Google Maps", "Casablanca", "Visibilité"],
  },
  {
    id: "5",
    title: "Développement Site E-commerce: Guide Complet 2025",
    slug: "developpement-site-ecommerce-2025",
    excerpt: "Tout ce que vous devez savoir pour créer une boutique en ligne rentable et sécurisée.",
    fullContent: `
    Créer un site e-commerce performant nécessite une stratégie bien pensée. Voici les étapes:

    ## Choisir la bonne plateforme
    Shopify, WooCommerce, Next.js - choisissez selon vos besoins.

    ## Design UX/UI optimisé
    Faciliter la navigation et le checkout pour maximiser les conversions.

    ## Sécurité et paiements
    SSL, RGPD, passerelles de paiement sécurisées.

    ## Logistique et inventaire
    Système de gestion des commandes et de l'inventaire efficace.

    ## Marketing et SEO
    Stratégie marketing pour augmenter le trafic et les ventes.
    `,
    category: "Développement",
    image: "/site-e-commerce-2025.jpg",
    date: "2025-01-10",
    author: "Abelkader Naim",
    readTime: 12,
    tags: ["E-commerce", "Développement Web", "Boutique", "Vente"],
  },
  {
    id: "6",
    title: "Réseaux Sociaux Marketing: Stratégie Complète pour PME",
    slug: "reseaux-sociaux-marketing-strategie",
    excerpt: "Comment créer une stratégie social media efficace pour augmenter votre engagement et vos ventes.",
    fullContent: `
    Les réseaux sociaux sont incontournables pour les PME modernes. Voici comment réussir:

    ## Choisir les bons canaux
    Facebook, Instagram, LinkedIn, TikTok - où est votre audience?

    ## Créer du contenu engageant
    Vidéos, images, textes - variez les formats.

    ## Planifier et publier régulièrement
    Cohérence et régularité sont essentielles.

    ## Engager avec votre communauté
    Répondre aux commentaires et messages rapidement.

    ## Analyser et optimiser
    Utilisez les analytics pour améliorer votre stratégie.
    `,
    category: "Marketing",
    image: "/reseaux-sociaux-marketing.jpg",
    date: "2025-01-08",
    author: "Ahmed Ghiwane",
    readTime: 8,
    tags: ["Réseaux Sociaux", "Marketing", "Engagement", "Stratégie"],
  },
  {
    id: "7",
    title: "Core Web Vitals: Guide d'Optimisation pour la Performance SEO",
    slug: "core-web-vitals-seo-performance",
    excerpt: "Optimisez les Core Web Vitals de votre site pour améliorer votre classement Google.",
    fullContent: `
    Les Core Web Vitals sont maintenant un facteur de classement Google essentiel. Voici comment les optimiser:

    ## LCP (Largest Contentful Paint)
    Optimisez le temps de chargement de votre contenu principal.

    ## FID (First Input Delay)
    Réduisez le délai entre l'interaction de l'utilisateur et la réponse.

    ## CLS (Cumulative Layout Shift)
    Minimisez les décalages inattendus de l'interface.

    ## Outils de mesure
    Google PageSpeed Insights, Lighthouse, GTmetrix.

    ## Actions correctives
    Optimisation des images, mise en cache, compression du code.
    `,
    category: "SEO",
    image: "/core-web-vitals-performance.jpg",
    date: "2025-01-05",
    author: "Abelkader Naim",
    readTime: 10,
    tags: ["SEO", "Performance", "Core Web Vitals", "Technique"],
  },
  {
    id: "8",
    title: "Augmenter Visibilité Google: Stratégie Complète pour Entreprises",
    slug: "augmenter-visibilite-google-strategie",
    excerpt:
      "Découvrez les meilleures techniques pour améliorer votre visibilité dans les résultats de recherche Google.",
    fullContent: `
    Améliorer votre visibilité sur Google est l'un des meilleurs investissements pour votre entreprise. Voici comment:

    ## Audit SEO complet
    Analysez votre site et identifiez les opportunités d'amélioration.

    ## Recherche de mots-clés
    Trouvez les mots-clés pertinents et à fort potentiel.

    ## Contenu de qualité
    Créez du contenu original, utile et bien optimisé.

    ## Link building
    Obtenez des backlinks de qualité provenant de sites pertinents.

    ## Technique SEO
    Structure du site, vitesse, mobile-friendly, sécurité.

    ## Suivi et analytics
    Mesurez vos progrès et ajustez votre stratégie.
    `,
    category: "SEO",
    image: "/visibilite-google-strategie.jpg",
    date: "2025-01-02",
    author: "Ahmed Ghiwane",
    readTime: 11,
    tags: ["SEO", "Visibilité", "Google", "Stratégie"],
  },
]

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  return (
    <>
      <Navigation />
      <main className="w-full pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Back Link */}
          <Link
            href="/blog"
            className="text-accent hover:text-accent/80 transition-colors mb-8 inline-flex items-center"
          >
            ← Retour au blog
          </Link>

          {/* Article Header */}
          <div className="mb-8">
            <div className="mb-4 flex items-center gap-3">
              <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-semibold">
                {post.category}
              </span>
              <span className="text-muted-foreground text-sm">{new Date(post.date).toLocaleDateString("fr-FR")}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{post.title}</h1>

            <div className="flex items-center justify-between py-4 border-b border-border">
              <div>
                <p className="text-muted-foreground text-sm">Par {post.author}</p>
                <p className="text-muted-foreground text-sm">{post.readTime} min de lecture</p>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative h-96 rounded-xl overflow-hidden mb-12 bg-muted">
            <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
          </div>

          {/* Article Content */}
          <article className="prose prose-invert max-w-none mb-12 text-foreground">
            <div className="leading-relaxed whitespace-pre-wrap">{post.fullContent}</div>
          </article>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 py-8 border-t border-b border-border">
            {post.tags.map((tag) => (
              <span key={tag} className="text-accent/70 bg-accent/10 px-3 py-1 rounded">
                #{tag}
              </span>
            ))}
          </div>

          {/* Author Box */}
          <div className="bg-card border border-border rounded-xl p-8 my-12">
            <h3 className="text-xl font-bold text-foreground mb-2">À propos de l'auteur</h3>
            <p className="text-muted-foreground">
              {post.author} est un expert en marketing digital avec plusieurs années d'expérience dans la transformation
              digitale des entreprises au Maroc.
            </p>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-accent/10 to-primary/10 border border-accent/20 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">Prêt à transformer votre présence digitale?</h3>
            <p className="text-muted-foreground mb-6">
              Contactez-nous pour une consultation gratuite et découvrez comment nous pouvons vous aider.
            </p>
            <Link
              href="https://wa.me/212652768993"
              className="inline-block bg-accent text-background px-6 py-3 rounded-full hover:bg-accent/90 transition-all font-semibold"
            >
              Demander une consultation
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
