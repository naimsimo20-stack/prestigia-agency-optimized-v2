import { neon } from "@neondatabase/serverless"

export async function POST(request: Request) {
  try {
    console.log("[v0] Création de la connexion Neon...")

    const sql = neon(process.env.DATABASE_URL!)

    const body = await request.json()
    const { name, email, subject, message } = body

    if (!name || !email || !subject || !message) {
      return Response.json({ success: false, error: "Champs requis manquants" }, { status: 400 })
    }

    console.log("[v0] Exécution de la requête INSERT...")

    const result = await sql`
      INSERT INTO contact_messages (name, email, subject, message, created_at)
      VALUES (${name}, ${email}, ${subject}, ${message}, NOW())
      RETURNING id
    `

    console.log("[v0] Message de contact inséré avec succès")

    return Response.json({
      success: true,
      message: "Message enregistré avec succès",
      id: result[0]?.id,
    })
  } catch (error: any) {
    console.error("[v0] Erreur complète:", error.message)
    return Response.json(
      {
        success: false,
        error: error.message,
        details: "Erreur lors de l'insertion du message",
      },
      { status: 500 },
    )
  }
}
