"use client"

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/33123456789"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-40 group"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-[#25D366] rounded-full blur-lg opacity-60 group-hover:opacity-100 transition-opacity animate-pulse"></div>
        <button className="relative bg-[#25D366] hover:bg-[#20c45c] text-white p-4 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg group-hover:shadow-2xl group-hover:shadow-[#25D366]/50">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.999 1.502c-1.52.881-2.793 2.077-3.714 3.517-.947 1.52-1.47 3.231-1.576 5.015-.05 1.075.026 2.14.315 3.164.29 1.026.766 2.024 1.426 2.925 1.377 1.902 3.367 3.304 5.737 3.986 1.147.333 2.342.48 3.547.462 1.171-.015 2.32-.151 3.45-.464 2.437-.746 4.561-2.206 6.12-4.084 1.625-1.98 2.559-4.507 2.816-7.235.099-1.066.068-2.148-.093-3.198-.303-2.132-1.151-4.063-2.49-5.694C19.862 2.966 18.047 1.86 15.969.951 12.993-.458 9.64.03 6.883 1.777c-.834.548-1.595 1.248-2.239 2.061A9.882 9.882 0 005.68 9.206c0 .64.053 1.286.155 1.929 0 0 .563 5.788 4.852 8.88.893.675 1.946 1.194 3.09 1.525"></path>
          </svg>
        </button>
      </div>
      <div className="absolute -top-12 right-0 bg-card border border-accent/20 rounded-lg px-3 py-2 text-xs text-foreground whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Contactez-nous sur WhatsApp
      </div>
    </a>
  )
}
