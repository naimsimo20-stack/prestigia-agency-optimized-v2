export function skipToMainContent() {
  const mainElement = document.querySelector("main")
  if (mainElement) {
    mainElement.focus()
    mainElement.scrollIntoView({ behavior: "smooth" })
  }
}

export function announceChange(message: string, priority: "polite" | "assertive" = "polite") {
  const announcement = document.createElement("div")
  announcement.setAttribute("role", "status")
  announcement.setAttribute("aria-live", priority)
  announcement.setAttribute("aria-atomic", "true")
  announcement.className = "sr-only"
  announcement.textContent = message
  document.body.appendChild(announcement)

  setTimeout(() => announcement.remove(), 1000)
}

export function isHighContrast(): boolean {
  if (typeof window === "undefined") return false
  return window.matchMedia("(prefers-contrast: more)").matches
}

export function isReducedMotion(): boolean {
  if (typeof window === "undefined") return false
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}
