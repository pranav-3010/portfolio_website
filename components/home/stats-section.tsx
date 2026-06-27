"use client"

import { AnimatedCounter } from "@/components/animated-counter"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Users, Trophy, Dumbbell, Clock } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: 15000,
    suffix: "+",
    label: "Active Members",
    description: "Athletes & fitness enthusiasts"
  },
  {
    icon: Trophy,
    value: 500,
    suffix: "+",
    label: "Success Stories",
    description: "Lives transformed"
  },
  {
    icon: Dumbbell,
    value: 50,
    suffix: "+",
    label: "Expert Trainers",
    description: "Certified professionals"
  },
  {
    icon: Clock,
    value: 10,
    suffix: "",
    label: "Years Experience",
    description: "Of excellence"
  },
]

export function StatsSection() {
  return (
    <section id="stats" className="relative py-20 bg-card">
      <div className="section-divider absolute top-0 left-0 right-0" />
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index * 100}>
              <div className="relative group text-center p-6">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                
                {/* Value */}
                <div className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl text-foreground mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                
                {/* Label */}
                <div className="font-semibold text-foreground mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
                
                {/* Hover glow */}
                <div className="absolute inset-0 bg-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
      
      <div className="section-divider absolute bottom-0 left-0 right-0" />
    </section>
  )
}
