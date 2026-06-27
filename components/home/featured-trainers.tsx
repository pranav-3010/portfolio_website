"use client"

import Link from "next/link"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Instagram, Twitter, ArrowRight } from "lucide-react"

const trainers = [
  {
    name: "Marcus Johnson",
    specialty: "Strength & Conditioning",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=1974&auto=format&fit=crop",
    instagram: "#",
    twitter: "#"
  },
  {
    name: "Sarah Chen",
    specialty: "CrossFit & HIIT",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1974&auto=format&fit=crop",
    instagram: "#",
    twitter: "#"
  },
  {
    name: "David Williams",
    specialty: "Bodybuilding",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2070&auto=format&fit=crop",
    instagram: "#",
    twitter: "#"
  },
  {
    name: "Emily Rodriguez",
    specialty: "Yoga & Mobility",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop",
    instagram: "#",
    twitter: "#"
  },
]

export function FeaturedTrainers() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-primary bg-primary/10 rounded-full">
              MEET THE EXPERTS
            </span>
            <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl lg:text-6xl mb-4">
              OUR <span className="gradient-text">TRAINERS</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Train with the best in the industry. Our certified experts are dedicated to helping you achieve your fitness goals.
            </p>
          </div>
        </ScrollReveal>

        {/* Trainers Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainers.map((trainer, index) => (
            <ScrollReveal key={trainer.name} delay={index * 100}>
              <div className="group relative rounded-2xl overflow-hidden">
                {/* Image */}
                <div className="aspect-[3/4] relative">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url('${trainer.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                </div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-[family-name:var(--font-heading)] text-2xl text-foreground mb-1">
                    {trainer.name}
                  </h3>
                  <p className="text-primary text-sm font-medium mb-4">{trainer.specialty}</p>
                  
                  {/* Social Links */}
                  <div className="flex gap-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <a
                      href={trainer.instagram}
                      className="w-9 h-9 flex items-center justify-center bg-foreground/10 backdrop-blur-sm rounded-full hover:bg-primary transition-colors"
                      aria-label={`${trainer.name} Instagram`}
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                    <a
                      href={trainer.twitter}
                      className="w-9 h-9 flex items-center justify-center bg-foreground/10 backdrop-blur-sm rounded-full hover:bg-primary transition-colors"
                      aria-label={`${trainer.name} Twitter`}
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                
                {/* Hover border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/50 transition-colors duration-300" />
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* View All Link */}
        <ScrollReveal delay={400}>
          <div className="text-center mt-12">
            <Link
              href="/trainers"
              className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground font-semibold rounded-lg transition-all duration-300 hover:bg-secondary/80 hover:gap-4"
            >
              View All Trainers
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
