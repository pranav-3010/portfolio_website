"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { Shield, Clock, Users, Award, Sparkles, HeartPulse } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "State-of-the-Art Equipment",
    description: "Train with the latest fitness technology and premium equipment from leading brands."
  },
  {
    icon: Clock,
    title: "24/7 Access",
    description: "Work out on your schedule with round-the-clock access to all facilities."
  },
  {
    icon: Users,
    title: "Expert Trainers",
    description: "Learn from certified professionals with years of experience in their specialties."
  },
  {
    icon: Award,
    title: "Proven Results",
    description: "Join thousands who have transformed their bodies and achieved their goals."
  },
  {
    icon: Sparkles,
    title: "Premium Amenities",
    description: "Enjoy luxury locker rooms, saunas, recovery zones, and member lounges."
  },
  {
    icon: HeartPulse,
    title: "Personalized Plans",
    description: "Get customized workout and nutrition plans tailored to your unique needs."
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-card relative overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <ScrollReveal>
              <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-primary bg-primary/10 rounded-full">
                WHY CHOOSE US
              </span>
              <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl lg:text-6xl mb-6">
                THE <span className="gradient-text">PREMIUM</span> FITNESS EXPERIENCE
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                At APEX FITNESS, we go beyond traditional gym experiences. We provide a complete ecosystem for your fitness journey with world-class facilities, expert guidance, and a supportive community.
              </p>
            </ScrollReveal>
            
            {/* Feature Image */}
            <ScrollReveal delay={200}>
              <div className="relative rounded-2xl overflow-hidden group">
                <div 
                  className="aspect-video bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop')`
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass px-4 py-3 rounded-xl inline-flex items-center gap-3">
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                    <span className="text-sm font-medium">50,000+ sq ft of Training Space</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Content - Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <ScrollReveal key={feature.title} delay={index * 100} direction="right">
                <div className="group p-6 rounded-2xl bg-background/50 border border-border hover:border-primary/30 transition-all duration-300 h-full">
                  <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-xl mb-4 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
      
      <div className="section-divider absolute bottom-0 left-0 right-0" />
    </section>
  )
}
