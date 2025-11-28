import { neon } from "@neondatabase/serverless"

export async function GET() {
  try {
    console.log("[v0] Initialisation des tables Neon...")

    const sql = neon(process.env.DATABASE_URL!)

    // Créer la table quotes
    await sql`
      CREATE TABLE IF NOT EXISTS quotes (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(20),
        company VARCHAR(255),
        service VARCHAR(255) NOT NULL,
        budget VARCHAR(100),
        message TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `

    // Créer la table contact_messages
    await sql`
      CREATE TABLE IF NOT EXISTS contact_messages (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        subject VARCHAR(255) NOT NULL,
        message TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `

    console.log("[v0] Tables créées avec succès")

    return Response.json({
      success: true,
      message: "Tables créées avec succès!",
    })
  } catch (error: any) {
    console.error("[v0] Erreur lors de la création des tables:", error.message)
    return Response.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 },
    )
  }
}
