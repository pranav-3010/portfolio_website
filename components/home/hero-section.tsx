"use client"

import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import { ArrowRight, ChevronDown, Play, Sparkles } from "lucide-react"

// Animated text reveal component
function TextReveal({ children, delay = 0, className = "" }: { children: string; delay?: number; className?: string }) {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <span 
      className={`inline-block transition-all duration-700 ease-out ${className} ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
    >
      {children}
    </span>
  )
}

// Floating particle component
function FloatingParticle({ delay, duration, size, left, top }: { delay: number; duration: number; size: number; left: string; top: string }) {
  return (
    <div
      className="absolute rounded-full bg-primary/30 blur-sm animate-particle"
      style={{
        width: size,
        height: size,
        left,
        top,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
      }}
    />
  )
}

// Animated background lines
function AnimatedLines() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="absolute h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-line-scan"
          style={{
            top: `${20 + i * 15}%`,
            left: 0,
            right: 0,
            animationDelay: `${i * 0.5}s`,
          }}
        />
      ))}
    </div>
  )
}

// Interactive button with ripple effect
function InteractiveButton({ href, children, variant = "primary" }: { href: string; children: React.ReactNode; variant?: "primary" | "glass" }) {
  const buttonRef = useRef<HTMLAnchorElement>(null)
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([])

  const handleMouseEnter = (e: React.MouseEvent) => {
    if (!buttonRef.current) return
    const rect = buttonRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    setRipples(prev => [...prev, { x, y, id: Date.now() }])
    setTimeout(() => {
      setRipples(prev => prev.slice(1))
    }, 600)
  }

  if (variant === "primary") {
    return (
      <Link
        ref={buttonRef}
        href={href}
        onMouseEnter={handleMouseEnter}
        className="group relative px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30"
      >
        {ripples.map(ripple => (
          <span
            key={ripple.id}
            className="absolute bg-white/30 rounded-full animate-ripple pointer-events-none"
            style={{ left: ripple.x, top: ripple.y }}
          />
        ))}
        <span className="relative z-10 flex items-center gap-2">
          {children}
          <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] opacity-0 group-hover:opacity-100 group-hover:animate-gradient-shift transition-opacity duration-300" />
        <div className="absolute -inset-1 bg-primary/50 blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-300 -z-10" />
      </Link>
    )
  }

  return (
    <Link
      ref={buttonRef}
      href={href}
      onMouseEnter={handleMouseEnter}
      className="group relative flex items-center gap-3 px-6 py-4 glass rounded-lg overflow-hidden transition-all duration-300 hover:bg-secondary/50 hover:scale-105"
    >
      {ripples.map(ripple => (
        <span
          key={ripple.id}
          className="absolute bg-primary/20 rounded-full animate-ripple pointer-events-none"
          style={{ left: ripple.x, top: ripple.y }}
        />
      ))}
      <div className="relative w-12 h-12 flex items-center justify-center rounded-full overflow-hidden">
        <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/40 transition-colors duration-300" />
        <div className="absolute inset-0 bg-primary/30 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full" />
        <Play className="relative w-5 h-5 text-primary fill-primary transition-transform duration-300 group-hover:scale-110" />
      </div>
      <span className="font-medium text-foreground">{children}</span>
    </Link>
  )
}

// Animated stat counter
function AnimatedStat({ value, label, delay }: { value: string; label: string; delay: number }) {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div 
      className={`text-center group cursor-default transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="relative">
        <div className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-primary transition-transform duration-300 group-hover:scale-110">
          {value}
        </div>
        <div className="absolute -inset-2 bg-primary/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="text-sm text-muted-foreground mt-1 transition-colors duration-300 group-hover:text-foreground">{label}</div>
    </div>
  )
}

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Parallax effect on mouse move
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e
    const { innerWidth, innerHeight } = window
    setMousePosition({
      x: (clientX - innerWidth / 2) / 50,
      y: (clientY - innerHeight / 2) / 50,
    })
  }

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Video Background with Fallback Image */}
      <div className="absolute inset-0 z-0">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-110"
          style={{
            transform: `scale(1.1) translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          }}
          poster="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
        >
          <source 
            src="https://videos.pexels.com/video-files/4761442/4761442-uhd_2560_1440_25fps.mp4" 
            type="video/mp4" 
          />
        </video>
        
        {/* Dark overlay for better text readability */}
        <div className="hero-overlay absolute inset-0" />
        
        {/* Additional vignette effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-80" />
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-background/80" />
        
        {/* Animated gradient orbs with parallax */}
        <div 
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/15 rounded-full blur-3xl animate-orb-float"
          style={{ transform: `translate(${mousePosition.x * 2}px, ${mousePosition.y * 2}px)` }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-orb-float-reverse"
          style={{ transform: `translate(${-mousePosition.x * 1.5}px, ${-mousePosition.y * 1.5}px)` }}
        />
        <div 
          className="absolute top-1/2 right-1/3 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: '4s' }}
        />

        {/* Floating particles */}
        <FloatingParticle delay={0} duration={8} size={6} left="10%" top="20%" />
        <FloatingParticle delay={1} duration={10} size={4} left="20%" top="60%" />
        <FloatingParticle delay={2} duration={7} size={8} left="80%" top="30%" />
        <FloatingParticle delay={0.5} duration={9} size={5} left="70%" top="70%" />
        <FloatingParticle delay={1.5} duration={11} size={6} left="40%" top="80%" />
        <FloatingParticle delay={3} duration={8} size={4} left="90%" top="50%" />
        <FloatingParticle delay={2.5} duration={10} size={7} left="15%" top="40%" />
        <FloatingParticle delay={4} duration={9} size={5} left="60%" top="15%" />

        {/* Animated scan lines */}
        <AnimatedLines />

        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Animated Badge */}
          <div 
            className={`inline-flex items-center gap-2 px-5 py-2.5 mb-8 rounded-full glass border border-primary/30 transition-all duration-700 hover:border-primary/60 hover:scale-105 cursor-default ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-foreground">Premium Training Facility</span>
            <span className="w-2 h-2 bg-primary rounded-full animate-ping" />
          </div>

          {/* Main Heading with Staggered Text Reveal */}
          <h1 className="font-[family-name:var(--font-heading)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.95] mb-8 tracking-tight">
            <div className="block">
              <TextReveal delay={200} className="text-foreground">TRANSFORM YOUR</TextReveal>
            </div>
            <div className="block">
              <TextReveal delay={400} className="gradient-text animate-gradient-shift bg-[length:200%_auto]">BODY</TextReveal>
              <TextReveal delay={500} className="text-foreground">,</TextReveal>
            </div>
            <div className="block">
              <TextReveal delay={600} className="text-foreground">ELEVATE YOUR</TextReveal>
            </div>
            <div className="block relative">
              <TextReveal delay={800} className="gradient-text animate-gradient-shift bg-[length:200%_auto]">STRENGTH</TextReveal>
              {/* Decorative underline */}
              <div 
                className={`absolute -bottom-2 left-1/2 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full transition-all duration-1000 delay-1000 ${
                  isLoaded ? 'w-64 -translate-x-1/2 opacity-100' : 'w-0 -translate-x-1/2 opacity-0'
                }`}
              />
            </div>
          </h1>

          {/* Animated Subtitle */}
          <p 
            className={`text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed transition-all duration-700 delay-[900ms] ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="inline-block">Join the elite community of athletes and fitness enthusiasts.</span>
            <br className="hidden md:block" />
            <span className="inline-block">Experience world-class training with cutting-edge equipment.</span>
          </p>

          {/* Interactive CTA Buttons */}
          <div 
            className={`flex flex-col sm:flex-row items-center justify-center gap-5 mb-16 transition-all duration-700 delay-[1100ms] ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <InteractiveButton href="/membership" variant="primary">
              Start Your Journey
            </InteractiveButton>
            <InteractiveButton href="#tour" variant="glass">
              Watch Gym Tour
            </InteractiveButton>
          </div>

          {/* Animated Stats Preview */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            <AnimatedStat value="15K+" label="Active Members" delay={1300} />
            <div className="hidden md:block w-px h-12 bg-gradient-to-b from-transparent via-border to-transparent" />
            <AnimatedStat value="50+" label="Expert Trainers" delay={1500} />
            <div className="hidden md:block w-px h-12 bg-gradient-to-b from-transparent via-border to-transparent" />
            <AnimatedStat value="100+" label="Weekly Classes" delay={1700} />
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <a
          href="#stats"
          className="group flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-xs font-medium tracking-widest uppercase opacity-60 group-hover:opacity-100 transition-opacity">Scroll to explore</span>
          <div className="relative w-6 h-10 border-2 border-current rounded-full flex items-start justify-center p-1 group-hover:border-primary transition-colors">
            <div className="w-1.5 h-1.5 bg-current rounded-full animate-scroll-indicator group-hover:bg-primary" />
          </div>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-24 left-8 w-32 h-32 border-l-2 border-t-2 border-primary/20 rounded-tl-3xl pointer-events-none" />
      <div className="absolute bottom-24 right-8 w-32 h-32 border-r-2 border-b-2 border-primary/20 rounded-br-3xl pointer-events-none" />
    </section>
  )
}
