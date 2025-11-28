"use client"

export default function SplashScreen({ onAccess }: { onAccess: () => void }) {
  return (
    <div
      className="fixed inset-0 bg-background flex items-center justify-center z-50 overflow-hidden cursor-pointer"
      onClick={onAccess}
    >
      <div className="text-center pointer-events-none">
        <div className="animate-scale-in mb-8">
          <div className="text-6xl md:text-8xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-accent">P</span>
          </div>
        </div>

        <div className="animate-slide-in-down" style={{ animationDelay: "0.3s" }}>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4 text-balance">PRESTIGIA</h1>
          <p className="text-accent text-lg md:text-2xl font-light tracking-widest">AGENCY</p>
        </div>

        <div className="mt-16 animate-bounce" style={{ animationDelay: "0.6s" }}>
          <button
            onClick={onAccess}
            className="bg-accent hover:bg-accent/90 text-background px-8 py-3 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 pointer-events-auto"
          >
            Accéder au site
          </button>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent opacity-10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-40 h-40 bg-accent opacity-5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>
    </div>
  )
}
