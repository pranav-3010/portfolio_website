"use client"

import { useState } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { AppointmentModal } from "@/components/appointment-modal"
import { ArrowRight, Dumbbell, Flame, Target, Zap, Heart, Clock, Users, CheckCircle } from "lucide-react"

const programs = [
  {
    id: "strength",
    icon: Dumbbell,
    title: "Strength Training",
    subtitle: "Build Power & Muscle",
    description: "Our comprehensive strength training program is designed to help you build lean muscle mass, increase your overall power, and improve your functional strength. Whether you're a beginner or an advanced lifter, our certified trainers will guide you through progressive overload techniques.",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c149a?q=80&w=2070&auto=format&fit=crop",
    features: [
      "Personalized workout plans",
      "Progressive overload tracking",
      "Proper form instruction",
      "Nutrition guidance",
      "Weekly progress assessments"
    ],
    duration: "45-60 min",
    level: "All Levels",
    schedule: "Mon, Wed, Fri"
  },
  {
    id: "weight-loss",
    icon: Flame,
    title: "Weight Loss",
    subtitle: "Burn Fat Effectively",
    description: "Transform your body with our scientifically-backed weight loss program. Combining high-intensity interval training, metabolic conditioning, and personalized nutrition plans, we'll help you achieve sustainable fat loss while preserving lean muscle mass.",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop",
    features: [
      "HIIT cardio sessions",
      "Metabolic conditioning",
      "Customized meal plans",
      "Body composition analysis",
      "24/7 support"
    ],
    duration: "45 min",
    level: "All Levels",
    schedule: "Tue, Thu, Sat"
  },
  {
    id: "personal",
    icon: Target,
    title: "Personal Training",
    subtitle: "One-on-One Excellence",
    description: "Experience the ultimate in personalized fitness with our one-on-one personal training sessions. Your dedicated trainer will create a completely customized program based on your goals, schedule, and preferences, ensuring maximum results in minimum time.",
    image: "https://images.unsplash.com/photo-1571388208497-71bedc66e932?q=80&w=2072&auto=format&fit=crop",
    features: [
      "100% customized programs",
      "Dedicated personal trainer",
      "Flexible scheduling",
      "Goal-specific training",
      "Accountability coaching"
    ],
    duration: "60 min",
    level: "All Levels",
    schedule: "Flexible"
  },
  {
    id: "crossfit",
    icon: Zap,
    title: "CrossFit",
    subtitle: "Functional Fitness",
    description: "Push your limits with our CrossFit program, combining elements of cardio, weightlifting, and gymnastics into high-intensity workouts. Our certified CrossFit coaches will help you improve your overall fitness, endurance, and athletic performance.",
    image: "https://images.unsplash.com/photo-1533681904393-9ab6eee7e408?q=80&w=2070&auto=format&fit=crop",
    features: [
      "WOD (Workout of the Day)",
      "Olympic lifting instruction",
      "Gymnastics fundamentals",
      "Community workouts",
      "Competition prep"
    ],
    duration: "60 min",
    level: "Intermediate+",
    schedule: "Daily"
  },
  {
    id: "functional",
    icon: Heart,
    title: "Functional Training",
    subtitle: "Move Better Daily",
    description: "Improve your everyday movement patterns with our functional training program. Focus on mobility, stability, core strength, and balance to enhance your quality of life and reduce injury risk in daily activities.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop",
    features: [
      "Mobility work",
      "Core strengthening",
      "Balance training",
      "Injury prevention",
      "Flexibility improvement"
    ],
    duration: "45 min",
    level: "All Levels",
    schedule: "Mon-Sat"
  },
]

export default function ProgramsPage() {
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null)

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-primary bg-primary/10 rounded-full">
                TRAINING PROGRAMS
              </span>
              <h1 className="font-[family-name:var(--font-heading)] text-5xl md:text-6xl lg:text-7xl mb-6">
                FIND YOUR <span className="gradient-text">PERFECT</span> PROGRAM
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Choose from our diverse range of programs designed to help you achieve any fitness goal. Our expert trainers will guide you every step of the way.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {programs.map((program, index) => (
            <ScrollReveal key={program.id}>
              <div 
                id={program.id}
                className={`grid lg:grid-cols-2 gap-12 items-center py-20 ${index !== programs.length - 1 ? 'border-b border-border' : ''}`}
              >
                {/* Image - alternating sides */}
                <div className={`relative rounded-2xl overflow-hidden group ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="aspect-[4/3]">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url('${program.image}')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                  </div>
                  
                  {/* Floating info cards */}
                  <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-3">
                    <div className="glass px-4 py-2 rounded-lg flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium">{program.duration}</span>
                    </div>
                    <div className="glass px-4 py-2 rounded-lg flex items-center gap-2">
                      <Users className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium">{program.level}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 flex items-center justify-center bg-primary/10 rounded-xl">
                      <program.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <span className="text-primary text-sm font-semibold">{program.subtitle}</span>
                      <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl">{program.title}</h2>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                    {program.description}
                  </p>

                  {/* Features */}
                  <div className="grid sm:grid-cols-2 gap-3 mb-8">
                    {program.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Schedule & CTA */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <button
                      onClick={() => setSelectedProgram(program.title)}
                      className="group px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                    <div className="text-muted-foreground">
                      <span className="font-medium text-foreground">Schedule:</span> {program.schedule}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl mb-6">
                NOT SURE WHERE TO <span className="gradient-text">START?</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Book a free consultation with one of our fitness experts. We&apos;ll help you find the perfect program based on your goals, fitness level, and preferences.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg transition-all duration-300 hover:scale-105 animate-pulse-glow"
              >
                Book Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />

      {/* Appointment Modal */}
      <AppointmentModal
        isOpen={selectedProgram !== null}
        onClose={() => setSelectedProgram(null)}
        programName={selectedProgram || ''}
      />
    </main>
  )
}
