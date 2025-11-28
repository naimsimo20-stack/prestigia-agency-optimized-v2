import { neon } from "@neondatabase/serverless"

const sql = neon(process.env.DATABASE_URL)

async function runMigration() {
  try {
    console.log("[v0] Démarrage de la migration...")

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
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        status VARCHAR(50) DEFAULT 'pending'
      )
    `
    console.log("[v0] Table quotes créée ✓")

    // Créer la table contact_messages
    await sql`
      CREATE TABLE IF NOT EXISTS contact_messages (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(20),
        subject VARCHAR(255) NOT NULL,
        message TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        status VARCHAR(50) DEFAULT 'unread'
      )
    `
    console.log("[v0] Table contact_messages créée ✓")

    // Créer les index
    await sql`CREATE INDEX IF NOT EXISTS idx_quotes_email ON quotes(email)`
    await sql`CREATE INDEX IF NOT EXISTS idx_quotes_created_at ON quotes(created_at)`
    await sql`CREATE INDEX IF NOT EXISTS idx_contact_created_at ON contact_messages(created_at)`
    console.log("[v0] Index créés ✓")

    console.log("[v0] Migration terminée avec succès ! ✓✓✓")
  } catch (error) {
    console.error("[v0] Erreur lors de la migration:", error.message)
    process.exit(1)
  }
}

runMigration()
