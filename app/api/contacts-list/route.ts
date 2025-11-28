import { neon } from "@neondatabase/serverless"

export async function GET() {
  try {
    const sql = neon(process.env.DATABASE_URL!)

    const messages = await sql`SELECT * FROM contact_messages ORDER BY created_at DESC`

    return Response.json({ success: true, data: messages })
  } catch (error: any) {
    console.error("[v0] Erreur lors de la récupération des messages:", error.message)
    return Response.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 },
    )
  }
}
