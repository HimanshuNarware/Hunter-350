"use client"

import Script from "next/script"
import { useEffect, useState } from "react"

const LottiePlayer = "lottie-player" as any

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const handleLoad = () => {
      window.setTimeout(() => setIsLoading(false), 1000)
    }

    if (typeof window !== "undefined") {
      if (document.readyState === "complete") {
        handleLoad()
      } else {
        window.addEventListener("load", handleLoad)
        return () => window.removeEventListener("load", handleLoad)
      }
    }
  }, [])

  if (!isLoading) {
    return null
  }

  return (
    <>
      <Script
        src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"
        strategy="beforeInteractive"
      />
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-background/95 backdrop-blur-xl">
        <div className="flex flex-col items-center gap-4 p-6 rounded-3xl bg-transparent shadow-2xl">
          <LottiePlayer
            src="/loader/Bike.json"
            background="transparent"
            speed="1"
            style={{ width: "260px", height: "260px" }}
            loop
            autoplay
          />
          <p className="text-sm uppercase tracking-[0.35em] text-white/90">Loading...</p>
        </div>
      </div>
    </>
  )
}
