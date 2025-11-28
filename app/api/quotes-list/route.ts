import { neon } from "@neondatabase/serverless"

export async function GET() {
  try {
    const sql = neon(process.env.DATABASE_URL!)

    const quotes = await sql`SELECT * FROM quotes ORDER BY created_at DESC`

    return Response.json({ success: true, data: quotes })
  } catch (error: any) {
    console.error("[v0] Erreur lors de la récupération des devis:", error.message)
    return Response.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 },
    )
  }
}
