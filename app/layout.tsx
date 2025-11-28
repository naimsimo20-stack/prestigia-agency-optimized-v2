import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Script from "next/script"
import { SkipToContent } from "@/components/accessibility-skip-link"

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })

export const metadata: Metadata = {
  title: "Prestigia Agency - Agence Digital Marketing à Casablanca | SEO, Branding & Web Design",
  description:
    "Prestigia Agency : Agence de marketing digital à Casablanca spécialisée en SEO, branding, développement web et stratégie digitale. 150+ projets réalisés, 98% de clients satisfaits. Transformez votre présence online avec nos experts.",
  keywords: [
    "agence marketing digital Casablanca",
    "SEO Casablanca",
    "branding Maroc",
    "développement web Casablanca",
    "agence web Maroc",
    "marketing stratégique digital",
    "design graphique",
    "services digitaux Casablanca",
    "agence SEO Maroc",
    "création site web",
    "gestion réseaux sociaux",
    "digital marketing agency Morocco",
    "stratégie digitale entreprise",
    "référencement naturel Maroc",
    "community management Casablanca",
  ],
  generator: "Next.js",
  metadataBase: new URL("https://prestigia-agency.com"),
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://prestigia-agency.com",
    title: "Prestigia Agency - Excellence Digitale | Services SEO et Marketing Digital",
    description:
      "Transformez votre présence digitale avec notre agence de marketing digital spécialisée en SEO, branding et développement web. 150+ projets réalisés.",
    siteName: "Prestigia Agency",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Prestigia Agency - Excellence Digitale",
        type: "image/png",
      },
      {
        url: "/og-image-square.png",
        width: 800,
        height: 800,
        alt: "Prestigia Agency Logo",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prestigia Agency - Excellence Digitale",
    description: "Agence de marketing digital à Casablanca spécialisée en SEO, branding et développement web",
    images: ["/og-image.png"],
    creator: "@prestigia_agency",
    site: "@prestigia_agency",
  },
  icons: {
    icon: "/images/prestigia-logo.png",
    apple: "/images/prestigia-logo.png",
    other: [
      {
        rel: "icon",
        url: "/icon-dark-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
  },
  alternates: {
    canonical: "https://prestigia-agency.com",
    languages: {
      fr: "https://prestigia-agency.com/fr",
      en: "https://prestigia-agency.com/en",
    },
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
    other: {
      "msvalidate.01": "ms-verification-code",
    },
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Prestigia Agency",
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  minimumScale: 1,
  userScalable: true,
  colorScheme: "dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  viewportFit: "cover",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <head>
        {/* Preload critical hero image */}
        <link rel="preload" as="image" href="/images/hero-innovation.png" />

        <Script src="https://cdn.vercel-analytics.com/v1/web.js" strategy="afterInteractive" />

        <Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" strategy="afterInteractive" />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "LocalBusiness",
                  "@id": "https://prestigia-agency.com/#business",
                  name: "Prestigia Agency",
                  description:
                    "Agence de marketing digital spécialisée en SEO, branding et développement web à Casablanca",
                  url: "https://prestigia-agency.com",
                  telephone: "+212652768993",
                  email: "contact@prestigia-agency.com",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "Bld Qods - The Gold Center, Étage 1, Bureau 2",
                    addressLocality: "Casablanca",
                    addressRegion: "Ain Chock",
                    postalCode: "20000",
                    addressCountry: "MA",
                  },
                  image: {
                    "@type": "ImageObject",
                    url: "https://prestigia-agency.com/logo.png",
                    width: 400,
                    height: 400,
                  },
                  logo: {
                    "@type": "ImageObject",
                    url: "https://prestigia-agency.com/logo.png",
                    width: 400,
                    height: 400,
                  },
                  sameAs: [
                    "https://www.facebook.com/prestigia",
                    "https://www.instagram.com/prestigia",
                    "https://www.linkedin.com/company/prestigia",
                  ],
                  areaServed: [
                    {
                      "@type": "Country",
                      name: "Morocco",
                    },
                    {
                      "@type": "Country",
                      name: "France",
                    },
                    {
                      "@type": "Country",
                      name: "Belgium",
                    },
                  ],
                  serviceType: ["SEO", "Web Development", "Branding", "Digital Marketing", "Digital Strategy"],
                  priceRange: "$$",
                  foundingDate: "2012",
                  numberOfEmployees: {
                    "@type": "QuantitativeValue",
                    value: 12,
                  },
                  contactPoint: {
                    "@type": "ContactPoint",
                    contactType: "Customer Service",
                    telephone: "+212652768993",
                    email: "contact@prestigia-agency.com",
                    availableLanguage: ["en", "fr", "ar"],
                  },
                  aggregateRating: {
                    "@type": "AggregateRating",
                    ratingValue: "4.8",
                    bestRating: "5",
                    worstRating: "1",
                    ratingCount: "150",
                  },
                },
                {
                  "@type": "Organization",
                  "@id": "https://prestigia-agency.com/#organization",
                  name: "Prestigia Agency",
                  url: "https://prestigia-agency.com",
                  logo: "https://prestigia-agency.com/logo.png",
                  sameAs: [
                    "https://www.facebook.com/prestigia",
                    "https://www.instagram.com/prestigia",
                    "https://www.linkedin.com/company/prestigia",
                  ],
                },
                {
                  "@type": "WebSite",
                  "@id": "https://prestigia-agency.com/#website",
                  url: "https://prestigia-agency.com",
                  name: "Prestigia Agency",
                  potentialAction: {
                    "@type": "SearchAction",
                    target: {
                      "@type": "EntryPoint",
                      urlTemplate: "https://prestigia-agency.com/search?q={search_term_string}",
                    },
                    "query-input": "required name=search_term_string",
                  },
                },
              ],
            }).replace(/[\u007F-\uFFFF]/g, (ch) => "\\u" + ("0000" + ch.charCodeAt(0).toString(16)).slice(-4)),
          }}
        />
      </head>
      <body className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}>
        {/* Main application body with custom fonts and improved accessibility */}
        {/* Add skip-to-content link for keyboard navigation */}
        <SkipToContent />
        <main id="main-content">{children}</main>
      </body>
    </html>
  )
}
