"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Instagram, Twitter, Linkedin, Award, Users, Calendar } from "lucide-react"

const trainers = [
  {
    name: "Marcus Johnson",
    role: "Head Trainer",
    specialty: "Strength & Conditioning",
    bio: "With over 15 years of experience, Marcus has trained professional athletes and everyday fitness enthusiasts alike. His holistic approach combines strength training with mobility work for optimal results.",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=1974&auto=format&fit=crop",
    certifications: ["NSCA-CSCS", "USAW", "FMS"],
    experience: "15+ years",
    clients: "500+",
    instagram: "#",
    twitter: "#",
    linkedin: "#"
  },
  {
    name: "Sarah Chen",
    role: "CrossFit Coach",
    specialty: "CrossFit & HIIT",
    bio: "A former competitive CrossFit athlete, Sarah brings intensity and precision to every class. She specializes in helping members break through plateaus and achieve new personal records.",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1974&auto=format&fit=crop",
    certifications: ["CrossFit L3", "NASM-CPT", "Precision Nutrition"],
    experience: "10+ years",
    clients: "400+",
    instagram: "#",
    twitter: "#",
    linkedin: "#"
  },
  {
    name: "David Williams",
    role: "Bodybuilding Specialist",
    specialty: "Bodybuilding & Physique",
    bio: "David is a former competitive bodybuilder who now dedicates his expertise to helping clients sculpt their ideal physiques. His attention to detail and scientific approach delivers remarkable transformations.",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2070&auto=format&fit=crop",
    certifications: ["IFBB Pro", "NASM-CPT", "Sports Nutrition"],
    experience: "12+ years",
    clients: "350+",
    instagram: "#",
    twitter: "#",
    linkedin: "#"
  },
  {
    name: "Emily Rodriguez",
    role: "Yoga & Mobility Coach",
    specialty: "Yoga & Flexibility",
    bio: "Emily combines traditional yoga practices with modern mobility techniques to help clients improve flexibility, reduce stress, and prevent injuries. Her classes are both challenging and restorative.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop",
    certifications: ["RYT-500", "FRC", "Stretch Therapy"],
    experience: "8+ years",
    clients: "600+",
    instagram: "#",
    twitter: "#",
    linkedin: "#"
  },
  {
    name: "James Thompson",
    role: "Nutrition Coach",
    specialty: "Sports Nutrition",
    bio: "James is a registered dietitian specializing in sports nutrition. He creates personalized meal plans that fuel performance and support body composition goals for athletes at all levels.",
    image: "https://images.unsplash.com/photo-1584466977773-e625c37cdd50?q=80&w=1974&auto=format&fit=crop",
    certifications: ["RD", "CSSD", "Precision Nutrition L2"],
    experience: "10+ years",
    clients: "450+",
    instagram: "#",
    twitter: "#",
    linkedin: "#"
  },
  {
    name: "Amanda Foster",
    role: "Weight Loss Specialist",
    specialty: "Fat Loss & Metabolic Training",
    bio: "Amanda has helped hundreds of clients achieve sustainable weight loss through a combination of metabolic conditioning, HIIT, and behavioral coaching. Her supportive approach makes fitness accessible to everyone.",
    image: "https://images.unsplash.com/photo-1571732154690-f6d1c3e5178a?q=80&w=1974&auto=format&fit=crop",
    certifications: ["ACE-CPT", "NASM-WLS", "Behavior Change"],
    experience: "9+ years",
    clients: "700+",
    instagram: "#",
    twitter: "#",
    linkedin: "#"
  },
  {
    name: "Michael Park",
    role: "Athletic Performance Coach",
    specialty: "Sports Performance",
    bio: "Michael works with athletes to enhance speed, agility, and power. His background in professional sports gives him unique insight into what it takes to perform at the highest level.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop",
    certifications: ["CSCS", "PES", "Speed & Agility"],
    experience: "11+ years",
    clients: "300+",
    instagram: "#",
    twitter: "#",
    linkedin: "#"
  },
  {
    name: "Lisa Wang",
    role: "Group Fitness Director",
    specialty: "Group Classes & Dance Fitness",
    bio: "Lisa brings energy and fun to every class she teaches. From spin to dance fitness, she creates engaging group experiences that keep members coming back for more.",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop",
    certifications: ["ACE-GFI", "Spinning", "Zumba"],
    experience: "7+ years",
    clients: "1000+",
    instagram: "#",
    twitter: "#",
    linkedin: "#"
  },
]

export default function TrainersPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1571388208497-71bedc66e932?q=80&w=2072&auto=format&fit=crop')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-primary bg-primary/10 rounded-full">
                EXPERT TEAM
              </span>
              <h1 className="font-[family-name:var(--font-heading)] text-5xl md:text-6xl lg:text-7xl mb-6">
                MEET OUR <span className="gradient-text">TRAINERS</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our world-class team of certified fitness professionals is dedicated to helping you achieve your goals. Each trainer brings unique expertise and a passion for transforming lives.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Trainers Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {trainers.map((trainer, index) => (
              <ScrollReveal key={trainer.name} delay={index * 50}>
                <div className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/30 transition-all duration-300">
                  {/* Image */}
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url('${trainer.image}')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                    
                    {/* Social Links - appear on hover */}
                    <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      <a href={trainer.instagram} className="w-10 h-10 flex items-center justify-center bg-background/80 backdrop-blur-sm rounded-full hover:bg-primary transition-colors" aria-label="Instagram">
                        <Instagram className="w-4 h-4" />
                      </a>
                      <a href={trainer.twitter} className="w-10 h-10 flex items-center justify-center bg-background/80 backdrop-blur-sm rounded-full hover:bg-primary transition-colors" aria-label="Twitter">
                        <Twitter className="w-4 h-4" />
                      </a>
                      <a href={trainer.linkedin} className="w-10 h-10 flex items-center justify-center bg-background/80 backdrop-blur-sm rounded-full hover:bg-primary transition-colors" aria-label="LinkedIn">
                        <Linkedin className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <span className="text-primary text-sm font-semibold">{trainer.role}</span>
                    <h3 className="font-[family-name:var(--font-heading)] text-2xl mt-1 mb-2">{trainer.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{trainer.bio}</p>
                    
                    {/* Stats */}
                    <div className="flex gap-4 mb-4 text-sm">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span className="text-muted-foreground">{trainer.experience}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Users className="w-4 h-4 text-primary" />
                        <span className="text-muted-foreground">{trainer.clients}</span>
                      </div>
                    </div>
                    
                    {/* Certifications */}
                    <div className="flex flex-wrap gap-2">
                      {trainer.certifications.map((cert) => (
                        <span key={cert} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md font-medium">
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-primary/10 rounded-2xl mx-auto mb-6">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl mb-6">
                TRAIN WITH THE <span className="gradient-text">BEST</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Ready to work with our expert trainers? Book a free consultation to find the perfect trainer for your fitness goals.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg transition-all duration-300 hover:scale-105 animate-pulse-glow"
              >
                Book Your Session
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  )
}
