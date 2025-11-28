"use client"

import { useEffect, useRef } from "react"

export default function Footer3DBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Animation simple et optimisée sans Three.js pour améliorer la performance
    const canvas = document.createElement("canvas")
    if (!containerRef.current) return

    containerRef.current.appendChild(canvas)
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = containerRef.current.clientWidth
    canvas.height = containerRef.current.clientHeight

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
    }> = []

    // Créer les particules
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.3,
      })
    }

    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy

        // Rebond aux limites
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        // Garder les particules dans les limites
        p.x = Math.max(0, Math.min(canvas.width, p.x))
        p.y = Math.max(0, Math.min(canvas.height, p.y))

        // Dessiner la particule
        ctx.fillStyle = `rgba(168, 85, 247, ${p.opacity})`
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()
      })

      // Dessiner les connexions entre particules
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            ctx.strokeStyle = `rgba(168, 85, 247, ${0.2 * (1 - distance / 150)})`
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = containerRef.current?.clientWidth || 0
      canvas.height = containerRef.current?.clientHeight || 0
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return <div ref={containerRef} className="w-full h-64 opacity-60" />
}
