"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { AnimatedCounter } from "@/components/animated-counter"
import { Target, Award, Users, Heart, Zap, Shield } from "lucide-react"

const timeline = [
  { year: "2014", title: "Foundation", description: "APEX FITNESS was founded with a vision to revolutionize fitness training." },
  { year: "2016", title: "Expansion", description: "Opened our second location and introduced personal training programs." },
  { year: "2018", title: "Innovation", description: "Launched state-of-the-art equipment and digital fitness tracking." },
  { year: "2020", title: "Community", description: "Reached 10,000 active members and expanded virtual training options." },
  { year: "2024", title: "Excellence", description: "Named top fitness center in the region with 15,000+ members." },
]

const values = [
  { icon: Target, title: "Excellence", description: "We pursue the highest standards in everything we do." },
  { icon: Heart, title: "Passion", description: "We love what we do and it shows in our dedication to your success." },
  { icon: Users, title: "Community", description: "We build a supportive environment where everyone belongs." },
  { icon: Zap, title: "Innovation", description: "We embrace new technologies and training methods." },
  { icon: Shield, title: "Integrity", description: "We operate with honesty, transparency, and respect." },
  { icon: Award, title: "Results", description: "We are committed to helping you achieve real, lasting results." },
]

const facilities = [
  { title: "Strength Zone", area: "15,000 sq ft", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" },
  { title: "Cardio Floor", area: "8,000 sq ft", image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=2075&auto=format&fit=crop" },
  { title: "CrossFit Box", area: "10,000 sq ft", image: "https://images.unsplash.com/photo-1533681904393-9ab6eee7e408?q=80&w=2070&auto=format&fit=crop" },
  { title: "Recovery Center", area: "5,000 sq ft", image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2120&auto=format&fit=crop" },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=2075&auto=format&fit=crop')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-primary bg-primary/10 rounded-full">
                OUR STORY
              </span>
              <h1 className="font-[family-name:var(--font-heading)] text-5xl md:text-6xl lg:text-7xl mb-6">
                ABOUT <span className="gradient-text">APEX FITNESS</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                For over a decade, we&apos;ve been transforming lives through fitness. Our mission is to empower individuals to achieve their full potential through world-class training, cutting-edge facilities, and unwavering support.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-card">
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="relative rounded-2xl overflow-hidden group">
                <div 
                  className="aspect-square bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?q=80&w=2070&auto=format&fit=crop')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
            </ScrollReveal>
            
            <div>
              <ScrollReveal delay={100}>
                <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl mb-6">
                  OUR <span className="gradient-text">MISSION</span>
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  To create a transformative fitness experience that empowers every individual to unlock their potential, build lasting healthy habits, and achieve results that exceed their expectations.
                </p>
              </ScrollReveal>
              
              <ScrollReveal delay={200}>
                <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl mb-6">
                  OUR <span className="gradient-text">VISION</span>
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To be the leading fitness destination that sets the global standard for excellence, innovation, and community in health and wellness.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: 15000, suffix: "+", label: "Active Members" },
              { value: 50, suffix: "+", label: "Expert Trainers" },
              { value: 50000, suffix: "", label: "Sq Ft Facility" },
              { value: 10, suffix: "+", label: "Years of Excellence" },
            ].map((stat, index) => (
              <ScrollReveal key={stat.label} delay={index * 100}>
                <div className="text-center p-6">
                  <div className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl text-primary mb-2">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-primary bg-primary/10 rounded-full">
                OUR JOURNEY
              </span>
              <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl">
                THE APEX <span className="gradient-text">STORY</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block" />
            
            {timeline.map((item, index) => (
              <ScrollReveal key={item.year} delay={index * 100}>
                <div className={`relative flex items-center gap-8 mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-background p-6 rounded-2xl border border-border">
                      <span className="font-[family-name:var(--font-heading)] text-3xl text-primary">{item.year}</span>
                      <h3 className="font-semibold text-xl mt-2 mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Dot */}
                  <div className="hidden md:flex w-4 h-4 bg-primary rounded-full shrink-0 relative z-10" />
                  
                  {/* Spacer */}
                  <div className="flex-1 hidden md:block" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-primary bg-primary/10 rounded-full">
                OUR VALUES
              </span>
              <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl">
                WHAT WE <span className="gradient-text">STAND FOR</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 100}>
                <div className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300">
                  <div className="w-14 h-14 flex items-center justify-center bg-primary/10 rounded-xl mb-6 group-hover:bg-primary/20 transition-colors">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-[family-name:var(--font-heading)] text-2xl mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-primary bg-primary/10 rounded-full">
                OUR FACILITIES
              </span>
              <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl">
                WORLD-CLASS <span className="gradient-text">EQUIPMENT</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((facility, index) => (
              <ScrollReveal key={facility.title} delay={index * 100}>
                <div className="group relative rounded-2xl overflow-hidden">
                  <div className="aspect-[4/3]">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url('${facility.image}')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-[family-name:var(--font-heading)] text-xl text-foreground">{facility.title}</h3>
                    <p className="text-primary text-sm font-medium">{facility.area}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
