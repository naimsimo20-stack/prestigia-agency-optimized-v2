import { neon } from "@neondatabase/serverless"

export async function POST(request: Request) {
  try {
    console.log("[v0] Création de la connexion Neon...")

    const sql = neon(process.env.DATABASE_URL!)

    const body = await request.json()
    const { name, email, phone, company, service, message } = body

    if (!name || !email || !service) {
      return Response.json({ success: false, error: "Champs requis manquants" }, { status: 400 })
    }

    console.log("[v0] Exécution de la requête INSERT...")

    const result = await sql`
      INSERT INTO quotes (name, email, phone, company, service, message, created_at)
      VALUES (${name}, ${email}, ${phone || null}, ${company || null}, ${service}, ${message || null}, NOW())
      RETURNING id
    `

    console.log("[v0] Devis inséré avec succès")

    return Response.json({
      success: true,
      message: "Devis enregistré avec succès",
      id: result[0]?.id,
    })
  } catch (error: any) {
    console.error("[v0] Erreur complète:", error.message)
    return Response.json(
      {
        success: false,
        error: error.message,
        details: "Erreur lors de l'insertion du devis",
      },
      { status: 500 },
    )
  }
}
