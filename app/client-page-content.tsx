"use client"
import { Suspense, lazy } from "react"
import SplashScreen from "@/components/splash-screen"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import { useState, useEffect } from "react"

const Services = lazy(() => import("@/components/services"))
const Team = lazy(() => import("@/components/team"))
const Partners = lazy(() => import("@/components/partners"))
const Contact = lazy(() => import("@/components/contact"))
const Location = lazy(() => import("@/components/location"))
const Footer = lazy(() => import("@/components/footer"))
const ChatBot = lazy(() => import("@/components/chat-bot"))

function PageContent() {
  const [showSplash, setShowSplash] = useState(true)

  const handleAccessSite = () => {
    setShowSplash(false)
  }

  useEffect(() => {
    const splashTimer = setTimeout(() => {
      setShowSplash(false)
    }, 2000)

    return () => clearTimeout(splashTimer)
  }, [])

  if (showSplash) {
    return <SplashScreen onAccess={handleAccessSite} />
  }

  return (
    <main className="w-full" role="main">
      <Navigation />
      <Hero />
      <Suspense fallback={<div className="h-screen" />}>
        <Services />
      </Suspense>
      <Suspense fallback={<div className="h-screen" />}>
        <Team />
      </Suspense>
      <Suspense fallback={<div className="h-screen" />}>
        <Partners />
      </Suspense>
      <Suspense fallback={<div className="h-screen" />}>
        <Contact />
      </Suspense>
      <Suspense fallback={<div className="h-screen" />}>
        <Location />
      </Suspense>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      <Suspense fallback={null}>
        <ChatBot />
      </Suspense>
    </main>
  )
}

export default PageContent
