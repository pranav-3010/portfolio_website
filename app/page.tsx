"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { StatsSection } from "@/components/home/stats-section"
import { FeaturedPrograms } from "@/components/home/featured-programs"
import { WhyChooseUs } from "@/components/home/why-choose-us"
import { FeaturedTrainers } from "@/components/home/featured-trainers"
import { FitnessGallery } from "@/components/home/fitness-gallery"
import { CtaSection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <StatsSection />
      <FeaturedPrograms />
      <WhyChooseUs />
      <FitnessGallery />
      <FeaturedTrainers />
      <CtaSection />
      <Footer />
    </main>
  )
}
