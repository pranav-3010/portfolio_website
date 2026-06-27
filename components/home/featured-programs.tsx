"use client"

import Link from "next/link"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ArrowRight, Flame, Target, Zap, Heart, Dumbbell } from "lucide-react"

const programs = [
  {
    icon: Dumbbell,
    title: "Strength Training",
    description: "Build muscle and increase power with our comprehensive strength programs designed for all levels.",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c149a?q=80&w=2070&auto=format&fit=crop",
    href: "/programs#strength"
  },
  {
    icon: Flame,
    title: "Weight Loss",
    description: "Burn fat effectively with high-intensity workouts and personalized nutrition guidance.",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop",
    href: "/programs#weight-loss"
  },
  {
    icon: Target,
    title: "Personal Training",
    description: "One-on-one sessions with expert trainers tailored to your specific fitness goals.",
    image: "https://images.unsplash.com/photo-1571388208497-71bedc66e932?q=80&w=2072&auto=format&fit=crop",
    href: "/programs#personal"
  },
  {
    icon: Zap,
    title: "CrossFit",
    description: "High-intensity functional training that combines cardio, weightlifting, and gymnastics.",
    image: "https://images.unsplash.com/photo-1533681904393-9ab6eee7e408?q=80&w=2070&auto=format&fit=crop",
    href: "/programs#crossfit"
  },
  {
    icon: Heart,
    title: "Functional Training",
    description: "Improve everyday movements with exercises that enhance mobility, stability, and balance.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop",
    href: "/programs#functional"
  },
]

export function FeaturedPrograms() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-primary bg-primary/10 rounded-full">
              OUR PROGRAMS
            </span>
            <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl lg:text-6xl mb-4">
              TRAINING <span className="gradient-text">PROGRAMS</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Choose from our diverse range of programs designed to help you achieve your fitness goals, whether you&apos;re a beginner or an elite athlete.
            </p>
          </div>
        </ScrollReveal>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <ScrollReveal key={program.title} delay={index * 100}>
              <Link href={program.href} className="group relative block h-full">
                <div className="relative h-80 rounded-2xl overflow-hidden">
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url('${program.image}')` }}
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                  
                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <div className="w-12 h-12 flex items-center justify-center bg-primary/20 rounded-xl mb-4 backdrop-blur-sm group-hover:bg-primary/30 transition-colors">
                      <program.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-[family-name:var(--font-heading)] text-2xl text-foreground mb-2">
                      {program.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {program.description}
                    </p>
                    <div className="flex items-center text-primary font-semibold text-sm group-hover:gap-3 gap-2 transition-all">
                      Learn More
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                  
                  {/* Hover border */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/50 transition-colors duration-300" />
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {/* View All Link */}
        <ScrollReveal delay={500}>
          <div className="text-center mt-12">
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground font-semibold rounded-lg transition-all duration-300 hover:bg-secondary/80 hover:gap-4"
            >
              View All Programs
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
