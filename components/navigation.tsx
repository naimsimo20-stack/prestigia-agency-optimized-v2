"use client"
import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import QuoteModal from "./quote-modal"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    if (href.startsWith("#")) {
      const element = document.querySelector(href)
      element?.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleDevis = () => {
    setIsQuoteModalOpen(true)
    setIsOpen(false)
  }

  const navItems = [
    { label: "Accueil", href: "/#home" },
    { label: "Services", href: "/#services" },
    { label: "Fondateurs", href: "/#team" },
    { label: "Partenaires", href: "/#partners" },
    { label: "Contact", href: "/#contact" },
    { label: "Blog", href: "/blog" },
  ]

  return (
    <>
      <nav
        className="fixed top-0 w-full bg-background/95 backdrop-blur-md z-40 border-b border-border"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <Image
                src="/images/prestigia-logo.png"
                alt="Prestigia Agency logo"
                width={48}
                height={48}
                className="rounded-xl"
                loading="eager"
                quality={90}
              />
              <div className="flex flex-col items-start leading-tight">
                <span className="text-xl font-bold bg-gradient-to-r from-accent via-accent to-purple-400 bg-clip-text text-transparent">
                  Prestigia
                </span>
                <span className="text-xs font-light tracking-widest text-accent/70 uppercase">Agency</span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.href.startsWith("/") ? (
                    <Link
                      href={item.href}
                      className="text-foreground hover:text-accent transition-colors duration-300 text-sm font-medium"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleNavClick(item.href)}
                      className="text-foreground hover:text-accent transition-colors duration-300 text-sm font-medium"
                      aria-label={`Navigate to ${item.label}`}
                    >
                      {item.label}
                    </button>
                  )}
                </div>
              ))}
              <button
                onClick={handleDevis}
                className="bg-accent text-background px-6 py-2 rounded-full hover:bg-accent/90 transition-all duration-300 font-medium hover:scale-105"
                aria-label="Request a quote"
              >
                Devis
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-accent hover:text-accent/80 transition-colors"
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden bg-card border-t border-border animate-slide-in-down" id="mobile-menu">
              <div className="px-4 py-4 space-y-4">
                {navItems.map((item) => (
                  <div key={item.label}>
                    {item.href.startsWith("/") ? (
                      <Link
                        href={item.href}
                        className="block w-full text-left text-foreground hover:text-accent transition-colors py-2"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <button
                        onClick={() => handleNavClick(item.href)}
                        className="block w-full text-left text-foreground hover:text-accent transition-colors py-2"
                      >
                        {item.label}
                      </button>
                    )}
                  </div>
                ))}
                <button
                  onClick={handleDevis}
                  className="w-full bg-accent text-background px-6 py-2 rounded-full hover:bg-accent/90 transition-all duration-300 font-medium mt-4"
                >
                  Devis
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </>
  )
}
