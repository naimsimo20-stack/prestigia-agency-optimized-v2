"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  category: string
  image: string
  date: string
  author: string
  readTime: number
  tags: string[]
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "10 Erreurs SEO à Éviter en 2025 - Guide Complet",
    slug: "10-erreurs-seo-a-eviter",
    excerpt:
      "Découvrez les erreurs SEO les plus courantes qui pénalisent votre classement Google et comment les corriger.",
    content: "Les erreurs SEO peuvent coûter cher à votre business. Voici les 10 erreurs les plus courantes...",
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
    content: "Choisir une agence marketing digital est crucial pour votre succès en ligne...",
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
    content: "Le branding est essentiel pour les PME marocaines qui veulent se différencier...",
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
    content: "Le SEO local est crucial pour les entreprises à Casablanca. Voici comment optimiser votre présence...",
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
    content: "Créer un site e-commerce performant nécessite une stratégie bien pensée...",
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
    content: "Les réseaux sociaux sont incontournables pour les PME modernes...",
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
    content: "Les Core Web Vitals sont maintenant un facteur de classement Google essentiel...",
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
    content: "Découvrez les meilleures techniques pour améliorer votre visibilité...",
    category: "SEO",
    image: "/visibilite-google-strategie.jpg",
    date: "2025-01-02",
    author: "Ahmed Ghiwane",
    readTime: 11,
    tags: ["SEO", "Visibilité", "Google", "Stratégie"],
  },
]

const categories = ["Tous", "SEO", "Branding", "Développement", "Marketing", "Conseil"]

export default function BlogClientPage() {
  const [selectedCategory, setSelectedCategory] = useState("Tous")

  // Filter posts by selected category
  const filteredPosts =
    selectedCategory === "Tous" ? blogPosts : blogPosts.filter((post) => post.category === selectedCategory)

  return (
    <>
      <Navigation />
      <main className="w-full pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
              Notre <span className="text-accent">Blog</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Guides, conseils et stratégies pour réussir votre transformation digitale.
            </p>
          </div>

          {/* Categories Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-accent text-background"
                    : "bg-card border border-border text-foreground hover:border-accent"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <article className="group bg-card border border-border rounded-xl overflow-hidden hover:border-accent/50 transition-all duration-300 h-full flex flex-col cursor-pointer">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden bg-muted">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-block bg-accent/90 text-background text-xs font-bold px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-sm text-muted-foreground mb-4 flex-grow line-clamp-2">{post.excerpt}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="text-xs text-accent/70 bg-accent/10 px-2 py-1 rounded">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between text-xs text-muted-foreground border-t border-border pt-4">
                      <span>{post.readTime} min de lecture</span>
                      <span>{new Date(post.date).toLocaleDateString("fr-FR")}</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
