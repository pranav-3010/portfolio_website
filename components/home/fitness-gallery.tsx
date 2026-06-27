"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Play, Dumbbell, Heart, Flame, Users } from "lucide-react"

const fitnessActivities = [
  {
    id: 1,
    title: "Weight Training",
    description: "Build strength and muscle",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c149a?q=80&w=800&auto=format&fit=crop",
    icon: Dumbbell,
    category: "Strength",
  },
  {
    id: 2,
    title: "HIIT Cardio",
    description: "Burn calories fast",
    image: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?q=80&w=800&auto=format&fit=crop",
    icon: Flame,
    category: "Cardio",
  },
  {
    id: 3,
    title: "Yoga Flow",
    description: "Find your inner peace",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop",
    icon: Heart,
    category: "Flexibility",
  },
  {
    id: 4,
    title: "Group Classes",
    description: "Train together, grow together",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop",
    icon: Users,
    category: "Community",
  },
  {
    id: 5,
    title: "CrossFit",
    description: "Push your limits",
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=800&auto=format&fit=crop",
    icon: Flame,
    category: "Intensity",
  },
  {
    id: 6,
    title: "Boxing",
    description: "Unleash your power",
    image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=800&auto=format&fit=crop",
    icon: Dumbbell,
    category: "Combat",
  },
]

function ActivityCard({ activity, index }: { activity: typeof fitnessActivities[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 100)
        }
      },
      { threshold: 0.2 }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [index])

  const Icon = activity.icon
  // Determine if card should span 2 columns (only on lg screens and for specific indices)
  const isLargeCard = (index === 0 || index === 5) ? 'lg:col-span-2 lg:row-span-2' : ''

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative overflow-hidden rounded-lg sm:rounded-xl lg:rounded-2xl cursor-pointer transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      } ${isLargeCard}`}
    >
      {/* Image Container */}
      <div className="relative aspect-square sm:aspect-square lg:aspect-square overflow-hidden bg-card/30">
        <Image
          src={activity.image}
          alt={activity.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          priority={index < 2}
          className={`object-cover transition-transform duration-700 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />
        
        {/* Overlay gradient - responsive opacity */}
        <div 
          className={`absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent transition-opacity duration-500 ${
            isHovered ? "opacity-95 sm:opacity-90" : "opacity-70 sm:opacity-60"
          }`} 
        />
        
        {/* Colored accent overlay */}
        <div 
          className={`absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent transition-opacity duration-500 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Category badge - responsive sizing and positioning */}
        <div className="absolute top-2 left-2 sm:top-3 sm:left-3 lg:top-4 lg:left-4 z-10">
          <span className="px-2 py-1 sm:px-3 sm:py-1 text-xs font-semibold uppercase tracking-wider bg-primary/90 text-primary-foreground rounded-full">
            {activity.category}
          </span>
        </div>

        {/* Play button for larger cards - hidden on small devices */}
        {(index === 0 || index === 5) && (
          <div 
            className={`hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 transition-all duration-500 ${
              isHovered ? "opacity-100 scale-100" : "opacity-0 scale-75"
            }`}
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/90 flex items-center justify-center animate-pulse-glow">
              <Play className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground ml-1" fill="currentColor" />
            </div>
          </div>
        )}

        {/* Content - responsive padding and text sizing */}
        <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 lg:p-6 z-10">
          <div 
            className={`flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3 transition-transform duration-500 ${
              isHovered ? "translate-y-0" : "translate-y-2"
            }`}
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-lg sm:rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center backdrop-blur-sm">
              <Icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-primary" />
            </div>
          </div>
          
          <h3 
            className={`font-[family-name:var(--font-heading)] text-lg sm:text-xl lg:text-3xl text-foreground mb-1 sm:mb-2 transition-all duration-500 line-clamp-2 ${
              isHovered ? "translate-y-0" : "translate-y-2"
            }`}
          >
            {activity.title}
          </h3>
          
          <p 
            className={`text-xs sm:text-sm lg:text-base text-muted-foreground line-clamp-2 transition-all duration-500 delay-75 ${
              isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {activity.description}
          </p>

          {/* Animated line */}
          <div 
            className={`h-0.5 bg-gradient-to-r from-primary to-primary/50 mt-2 sm:mt-3 lg:mt-4 transition-all duration-500 ${
              isHovered ? "w-full" : "w-0"
            }`}
          />
        </div>
      </div>
    </div>
  )
}

export function FitnessGallery() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Background elements - adjusted for responsive scaling */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header - responsive text and spacing */}
        <div className="text-center mb-12 sm:mb-14 md:mb-16 lg:mb-20">
          <span 
            className={`inline-block px-3 py-1 sm:px-4 sm:py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4 sm:mb-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Get Inspired
          </span>
          
          <h2 
            className={`font-[family-name:var(--font-heading)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 transition-all duration-700 delay-100 leading-tight ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="text-foreground">FEEL THE </span>
            <span className="gradient-text">ENERGY</span>
          </h2>
          
          <p 
            className={`text-muted-foreground text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-2 transition-all duration-700 delay-200 leading-relaxed ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Discover the vibrant atmosphere of our gym. Watch real people push their limits, 
            achieve their goals, and transform their lives through fitness.
          </p>
        </div>

        {/* Activity Grid - fully responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
          {fitnessActivities.map((activity, index) => (
            <ActivityCard key={activity.id} activity={activity} index={index} />
          ))}
        </div>

        {/* Motivational quote - responsive styling */}
        <div 
          className={`mt-12 sm:mt-14 md:mt-16 lg:mt-20 text-center transition-all duration-700 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="glass rounded-lg sm:rounded-xl lg:rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 max-w-4xl mx-auto relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-20 h-20 sm:w-32 sm:h-32 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute bottom-0 right-0 w-16 h-16 sm:w-24 sm:h-24 bg-primary/10 rounded-full blur-2xl" />
            
            <blockquote className="relative z-10">
              <p className="font-[family-name:var(--font-heading)] text-xl sm:text-2xl md:text-3xl lg:text-4xl text-foreground mb-3 sm:mb-4 leading-relaxed">
                &ldquo;THE ONLY BAD WORKOUT IS THE ONE THAT DIDN&apos;T HAPPEN&rdquo;
              </p>
              <footer className="text-sm sm:text-base text-muted-foreground">
                <span className="text-primary font-semibold">Join 10,000+</span> members who chose to start their journey
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
