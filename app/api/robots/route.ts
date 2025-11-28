export async function GET() {
  const robots = `# Prestigia Agency robots.txt
User-agent: *
Allow: /
Disallow: /admin
Disallow: /api/
Disallow: /*.json$
Disallow: /*?*
Allow: /*?sort=
Allow: /*?filter=

# Crawl-delay and request rate
Crawl-delay: 1

# Sitemap
Sitemap: https://prestigia-agency.com/sitemap.xml

# Specific rules for major search engines
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Slurp
Allow: /

User-agent: DuckDuckBot
Allow: /
`

  return new Response(robots, {
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": "public, max-age=86400",
    },
  })
}
