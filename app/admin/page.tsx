"use client"

import { useState, useEffect } from "react"
import { Mail, FileText, Calendar } from "lucide-react"

type Quote = {
  id: number
  name: string
  email: string
  phone: string | null
  company: string | null
  service: string
  budget: string | null
  message: string | null
  created_at: string
}

type Message = {
  id: number
  name: string
  email: string
  subject: string
  message: string
  created_at: string
}

export default function AdminPage() {
  const [quotes, setQuotes] = useState<Quote[]>([])
  const [messages, setMessages] = useState<Message[]>([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState<"quotes" | "messages">("quotes")

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    setLoading(true)
    try {
      const [quotesRes, messagesRes] = await Promise.all([fetch("/api/quotes-list"), fetch("/api/contacts-list")])

      if (quotesRes.ok) {
        const quoteData = await quotesRes.json()
        setQuotes(quoteData.data || [])
      }

      if (messagesRes.ok) {
        const messageData = await messagesRes.json()
        setMessages(messageData.data || [])
      }
    } catch (error) {
      console.error("Erreur lors du chargement des données:", error)
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* En-tête */}
      <header className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <h1 className="text-4xl font-bold text-primary">Dashboard Admin</h1>
          <p className="text-muted-foreground mt-2">Gérez vos demandes de devis et messages de contact</p>
        </div>
      </header>

      {/* Contenu */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Onglets */}
        <div className="flex gap-4 mb-8 border-b border-border">
          <button
            onClick={() => setActiveTab("quotes")}
            className={`px-4 py-3 font-semibold transition-colors ${
              activeTab === "quotes"
                ? "text-primary border-b-2 border-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <FileText className="inline-block w-5 h-5 mr-2" />
            Demandes de Devis ({quotes.length})
          </button>
          <button
            onClick={() => setActiveTab("messages")}
            className={`px-4 py-3 font-semibold transition-colors ${
              activeTab === "messages"
                ? "text-primary border-b-2 border-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Mail className="inline-block w-5 h-5 mr-2" />
            Messages ({messages.length})
          </button>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            <p className="mt-4 text-muted-foreground">Chargement des données...</p>
          </div>
        ) : (
          <>
            {/* Onglet Devis */}
            {activeTab === "quotes" && (
              <div className="space-y-4">
                {quotes.length === 0 ? (
                  <div className="text-center py-12 bg-card rounded-lg border border-border">
                    <FileText className="mx-auto w-12 h-12 text-muted-foreground mb-4" />
                    <p className="text-muted-foreground">Aucune demande de devis pour le moment</p>
                  </div>
                ) : (
                  quotes.map((quote) => (
                    <div
                      key={quote.id}
                      className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h3 className="text-lg font-semibold text-foreground">{quote.name}</h3>
                          <p className="text-sm text-muted-foreground">{quote.email}</p>
                          {quote.phone && <p className="text-sm text-muted-foreground">Tel: {quote.phone}</p>}
                        </div>
                        <div className="text-right">
                          <div className="flex items-center justify-end text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4 mr-2" />
                            {formatDate(quote.created_at)}
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 pt-4 border-t border-border space-y-3">
                        {quote.company && (
                          <div>
                            <span className="text-sm font-semibold text-primary">Entreprise:</span>
                            <p className="text-sm text-foreground">{quote.company}</p>
                          </div>
                        )}
                        <div>
                          <span className="text-sm font-semibold text-primary">Service demandé:</span>
                          <p className="text-sm text-foreground">{quote.service}</p>
                        </div>
                        {quote.budget && (
                          <div>
                            <span className="text-sm font-semibold text-primary">Budget:</span>
                            <p className="text-sm text-foreground">{quote.budget}</p>
                          </div>
                        )}
                        {quote.message && (
                          <div>
                            <span className="text-sm font-semibold text-primary">Message:</span>
                            <p className="text-sm text-foreground mt-1">{quote.message}</p>
                          </div>
                        )}
                      </div>

                      <div className="mt-4 flex gap-2 justify-end">
                        <a
                          href={`mailto:${quote.email}`}
                          className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:opacity-90 transition-opacity"
                        >
                          Répondre par Email
                        </a>
                        <a
                          href={`https://wa.me/212${quote.phone?.replace(/^0/, "") || ""}?text=Bonjour%20${quote.name},%20concernant%20votre%20demande%20de%20devis...`}
                          className="px-4 py-2 bg-accent text-accent-foreground rounded-md text-sm font-medium hover:opacity-90 transition-opacity"
                        >
                          WhatsApp
                        </a>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}

            {/* Onglet Messages */}
            {activeTab === "messages" && (
              <div className="space-y-4">
                {messages.length === 0 ? (
                  <div className="text-center py-12 bg-card rounded-lg border border-border">
                    <Mail className="mx-auto w-12 h-12 text-muted-foreground mb-4" />
                    <p className="text-muted-foreground">Aucun message pour le moment</p>
                  </div>
                ) : (
                  messages.map((msg) => (
                    <div
                      key={msg.id}
                      className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h3 className="text-lg font-semibold text-foreground">{msg.name}</h3>
                          <p className="text-sm text-muted-foreground">{msg.email}</p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center justify-end text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4 mr-2" />
                            {formatDate(msg.created_at)}
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 pt-4 border-t border-border space-y-3">
                        <div>
                          <span className="text-sm font-semibold text-primary">Sujet:</span>
                          <p className="text-sm text-foreground">{msg.subject}</p>
                        </div>
                        <div>
                          <span className="text-sm font-semibold text-primary">Message:</span>
                          <p className="text-sm text-foreground mt-1">{msg.message}</p>
                        </div>
                      </div>

                      <div className="mt-4 flex gap-2 justify-end">
                        <a
                          href={`mailto:${msg.email}?subject=Re: ${msg.subject}`}
                          className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:opacity-90 transition-opacity"
                        >
                          Répondre par Email
                        </a>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
          </>
        )}
      </main>
    </div>
  )
}
