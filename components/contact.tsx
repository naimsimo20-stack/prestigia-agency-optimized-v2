"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Mail, MapPin, Phone } from "lucide-react"

export default function Contact() {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")
  const formRef = useRef<HTMLFormElement | null>(null)

  const handleEmailClick = () => {
    if (typeof window === "undefined") return
    window.location.href = "mailto:contact@prestigia-agency.com"
  }

  const handlePhoneClick = () => {
    if (typeof window === "undefined") return
    // WhatsApp vers le numéro de l'agence
    window.open("https://wa.me/212652768993", "_blank", "noopener,noreferrer")
  }

  const handleLocationClick = () => {
    if (typeof window === "undefined") return
    window.open(
      "https://maps.app.goo.gl/KkHCNmUBQxJYZGxh8",
      "_blank",
      "noopener,noreferrer",
    )
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setMessage("")

    const form = formRef.current
    if (!form) {
      setLoading(false)
      return
    }

    const formData = new FormData(form)
    const name = String(formData.get("name") ?? "")
    const email = String(formData.get("email") ?? "")
    const phone = String(formData.get("phone") ?? "")
    const subject = String(formData.get("subject") ?? "")
    const messageContent = String(formData.get("message") ?? "")

    const messageText =
      "Nouveau message depuis le site Prestigia Agency:\n\n" +
      "Nom : " + name + "\n" +
      "Email : " + email + "\n" +
      "Téléphone : " + (phone || "Non renseigné") + "\n" +
      "Sujet : " + subject + "\n\n" +
      "Message :\n" + messageContent

    const payload = {
      name,
      email,
      phone,
      subject,
      message: messageText,
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(payload),
      })

      let data: { error?: string } | null = null
      try {
        data = await response.json()
      } catch {
        data = null
      }

      if (response.ok) {
        setMessage("✓ Message reçu ! Nous vous répondrons dans les plus brefs délais.")
        form.reset()
      } else {
        const errorText =
          (data && data.error) || "Une erreur est survenue. Veuillez réessayer."
        setMessage("✗ Erreur: " + errorText)
      }
    } catch (error) {
      setMessage(
        "✗ Erreur réseau. Veuillez vérifier votre connexion et réessayer.",
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      id="contact"
      className="relative py-20 bg-background overflow-hidden"
      aria-label="Section de contact Prestigia Agency"
    >
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute -top-40 -right-20 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-10 h-72 w-72 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            CONTACT
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-4xl">
            Discutons de votre projet
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base">
            Expliquez-nous vos objectifs et nous vous proposerons une stratégie
            digitale sur mesure pour votre marque.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          <div className="space-y-8">
            <div
              className="grid gap-6 md:grid-cols-3"
              aria-label="Moyens de contact principaux"
            >
              <button
                type="button"
                onClick={handleEmailClick}
                className="flex flex-col items-center justify-center rounded-2xl border border-accent/20 bg-background/60 p-6 text-center shadow-lg shadow-accent/5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:bg-background/90 hover:shadow-accent/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                aria-label="Envoyer un email à Prestigia Agency"
              >
                <Mail className="mb-3 h-9 w-9 text-accent" aria-hidden="true" />
                <h3 className="text-sm font-semibold text-foreground">
                  Email
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  contact@prestigia-agency.com
                </p>
                <p className="mt-2 text-[11px] uppercase tracking-wide text-accent/70">
                  Envoyer un email
                </p>
              </button>

              <button
                type="button"
                onClick={handlePhoneClick}
                className="flex flex-col items-center justify-center rounded-2xl border border-accent/20 bg-background/60 p-6 text-center shadow-lg shadow-accent/5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:bg-background/90 hover:shadow-accent/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                aria-label="Contacter Prestigia Agency par téléphone ou WhatsApp"
              >
                <Phone className="mb-3 h-9 w-9 text-accent" aria-hidden="true" />
                <h3 className="text-sm font-semibold text-foreground">
                  Téléphone &amp; WhatsApp
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  +212 652 768 993
                </p>
                <p className="mt-2 text-[11px] uppercase tracking-wide text-accent/70">
                  Appeler ou écrire
                </p>
              </button>

              <button
                type="button"
                onClick={handleLocationClick}
                className="flex flex-col items-center justify-center rounded-2xl border border-accent/20 bg-background/60 p-6 text-center shadow-lg shadow-accent/5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:bg-background/90 hover:shadow-accent/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                aria-label="Voir la localisation de Prestigia Agency sur Google Maps"
              >
                <MapPin className="mb-3 h-9 w-9 text-accent" aria-hidden="true" />
                <h3 className="text-sm font-semibold text-foreground">
                  Adresse
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  Bld Qods – The Gold Center, Étage 1, Bureau 2, Casablanca Ain
                  Chock
                </p>
                <p className="mt-2 text-[11px] uppercase tracking-wide text-accent/70">
                  Ouvrir dans Google Maps
                </p>
              </button>
            </div>

            <div className="rounded-2xl border border-border bg-background/80 p-6 shadow-xl shadow-accent/10 backdrop-blur">
              <h3 className="mb-4 text-lg font-semibold text-foreground">
                Envoyez-nous un message
              </h3>
              <p className="mb-6 text-sm text-muted-foreground">
                Détaillez votre projet, vos objectifs et vos délais. Plus vous
                êtes précis, plus notre réponse sera pertinente.
              </p>

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-5"
                aria-label="Formulaire de contact principal"
              >
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="name"
                      className="text-xs font-medium uppercase tracking-wide text-foreground"
                    >
                      Nom complet
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      autoComplete="name"
                      placeholder="Votre nom et prénom"
                      className="rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/60"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="email"
                      className="text-xs font-medium uppercase tracking-wide text-foreground"
                    >
                      Adresse email
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      autoComplete="email"
                      placeholder="votre@email.com"
                      className="rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/60"
                    />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="phone"
                      className="text-xs font-medium uppercase tracking-wide text-foreground"
                    >
                      Téléphone (optionnel)
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      autoComplete="tel"
                      placeholder="+212 ..."
                      className="rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/60"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="subject"
                      className="text-xs font-medium uppercase tracking-wide text-foreground"
                    >
                      Sujet
                    </label>
                    <input
                      id="subject"
                      type="text"
                      name="subject"
                      required
                      placeholder="Ex. Lancement de marque, Ads, Branding..."
                      className="rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/60"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="text-xs font-medium uppercase tracking-wide text-foreground"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Décrivez votre projet, votre cible, vos objectifs (notoriété, trafic, conversion...) et votre budget estimatif."
                    className="min-h-[140px] w-full resize-none rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/60"
                  />
                </div>

                {message && (
                  <div
                    role="status"
                    aria-live="polite"
                    className="rounded-lg border border-border/60 bg-muted/40 px-3 py-2.5 text-center text-xs font-medium text-foreground"
                  >
                    {message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="flex w-full items-center justify-center rounded-xl bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-wide text-background shadow-lg shadow-accent/30 transition-transform duration-200 hover:scale-[1.02] hover:shadow-accent/40 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? "Envoi en cours..." : "Envoyer le message"}
                </button>
              </form>
            </div>
          </div>

          <div className="space-y-6 text-sm text-muted-foreground">
            <div className="rounded-2xl border border-border bg-background/70 p-6 shadow-lg shadow-accent/5 backdrop-blur">
              <h3 className="mb-3 text-base font-semibold text-foreground">
                Pourquoi travailler avec Prestigia Agency ?
              </h3>
              <ul className="space-y-2.5">
                <li>• Stratégies publicitaires data-driven axées sur la performance.</li>
                <li>• Création de contenus premium adaptés aux réseaux sociaux.</li>
                <li>• Accompagnement complet : de l&apos;idée à l&apos;exécution.</li>
                <li>• Studio créatif interne pour photo, vidéo et contenus UGC.</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-background/70 p-6 text-xs text-muted-foreground">
              <p className="mb-2 font-semibold text-foreground">
                Horaires &amp; délais de réponse
              </p>
              <p>
                Nous répondons généralement sous 24 heures (hors week-end et jours
                fériés). Pour les demandes urgentes, privilégiez WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
