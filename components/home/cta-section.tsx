"use client"

import Link from "next/link"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ArrowRight } from "lucide-react"

export function CtaSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=2070&auto=format&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-background/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/20" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl lg:text-6xl mb-6">
              READY TO <span className="gradient-text">TRANSFORM</span> YOUR LIFE?
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Join APEX FITNESS today and start your journey to a stronger, healthier you. Our expert trainers and state-of-the-art facilities are waiting for you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/membership"
                className="group px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg transition-all duration-300 hover:scale-105 animate-pulse-glow flex items-center gap-2"
              >
                View Membership Plans
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 glass border border-primary/30 text-foreground font-semibold rounded-lg transition-all duration-300 hover:bg-primary/10"
              >
                Get Free Trial
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
