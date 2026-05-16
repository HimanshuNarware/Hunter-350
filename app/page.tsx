"use client"

import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { OverviewSection } from "@/components/overview-section"
import { TankSection } from "@/components/tank-section"
import { EngineSection } from "@/components/engine-section"
import { FeaturesSection } from "@/components/features-section"
import { SpecsMarquee } from "@/components/specs-marquee"
import { GallerySection } from "@/components/gallery-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <OverviewSection />
      <SpecsMarquee />
      <TankSection />
      <EngineSection />
      <FeaturesSection />
      <GallerySection />
      <CTASection />
      <Footer />
    </main>
  )
}
