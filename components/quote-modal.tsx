"use client"

import { useState } from "react"
import type React from "react"
import dynamic from "next/dynamic"
import { X } from "lucide-react"

const Background3D = dynamic(() => import("./3d-background"), { ssr: false })

interface QuoteModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "seo",
    message: "",
  })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage("")

    try {
      console.log("[v0] Envoi du formulaire devis:", formData)

      const encodedData = JSON.stringify(formData)

      const response = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: encodedData,
      })

      const data = await response.json()

      console.log("[v0] Réponse serveur:", { status: response.status, data })

      if (response.ok) {
        setMessage("✓ Demande reçue ! Nous vous contacterons bientôt.")
        setFormData({ name: "", email: "", phone: "", company: "", service: "seo", message: "" })
        setTimeout(() => {
          onClose()
          setMessage("")
        }, 2000)
      } else {
        setMessage(`✗ Erreur: ${data.details || data.error}`)
      }
    } catch (error) {
      console.error("[v0] Erreur client lors de l'envoi:", error)
      setMessage("✗ Erreur serveur. Veuillez réessayer.")
    } finally {
      setLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 z-0 hidden md:block h-96 w-96">
        <Background3D />
      </div>

      <div className="bg-card border border-accent/30 rounded-2xl shadow-2xl max-w-md w-full animate-scale-in relative z-10">
        <div className="flex justify-between items-center p-6 border-b border-accent/20">
          <h2 className="text-2xl font-bold text-foreground">Demander un Devis</h2>
          <button onClick={onClose} className="text-muted-foreground hover:text-accent transition-colors">
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Nom Complet</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-background border border-border rounded-lg px-4 py-2 text-foreground focus:outline-none focus:border-accent transition-colors"
              placeholder="Votre nom"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-background border border-border rounded-lg px-4 py-2 text-foreground focus:outline-none focus:border-accent transition-colors"
              placeholder="votre@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Téléphone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-background border border-border rounded-lg px-4 py-2 text-foreground focus:outline-none focus:border-accent transition-colors"
              placeholder="+212 6XX XXX XXX"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Entreprise</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full bg-background border border-border rounded-lg px-4 py-2 text-foreground focus:outline-none focus:border-accent transition-colors"
              placeholder="Nom de votre entreprise"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Service</label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full bg-background border border-border rounded-lg px-4 py-2 text-foreground focus:outline-none focus:border-accent transition-colors"
            >
              <option value="seo">SEO & Marketing</option>
              <option value="design">Design Web</option>
              <option value="ecommerce">E-Commerce</option>
              <option value="social">Réseaux Sociaux</option>
              <option value="branding">Branding</option>
              <option value="other">Autre</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-background border border-border rounded-lg px-4 py-2 text-foreground focus:outline-none focus:border-accent transition-colors resize-none"
              placeholder="Décrivez votre projet..."
              rows={3}
            />
          </div>

          {message && (
            <div
              className={`p-3 rounded-lg text-center font-semibold ${message.includes("✓") ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"}`}
            >
              {message}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-accent text-background px-6 py-3 rounded-full hover:bg-accent/90 transition-all duration-300 font-semibold hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Envoi..." : "Envoyer la Demande"}
          </button>
        </form>
      </div>
    </div>
  )
}
