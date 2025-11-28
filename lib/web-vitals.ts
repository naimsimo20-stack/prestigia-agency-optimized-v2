import { getCLS, getFID, getFCP, getLCP, getTTFB, type Metric } from "web-vitals"

export function reportWebVitals(metric: Metric) {
  // Log to console in development
  if (process.env.NODE_ENV === "development") {
    console.log("[Web Vitals]", metric)
  }

  // Send to analytics service in production
  if (process.env.NEXT_PUBLIC_ANALYTICS_URL) {
    const url = process.env.NEXT_PUBLIC_ANALYTICS_URL

    if (navigator.sendBeacon) {
      navigator.sendBeacon(
        url,
        JSON.stringify({
          metric: metric.name,
          value: metric.value,
          rating: metric.rating,
          delta: metric.delta,
          id: metric.id,
        }),
      )
    }
  }
}

export function initWebVitals() {
  try {
    getCLS(reportWebVitals)
    getFID(reportWebVitals)
    getFCP(reportWebVitals)
    getLCP(reportWebVitals)
    getTTFB(reportWebVitals)
  } catch (error) {
    console.error("Error initializing Web Vitals:", error)
  }
}
