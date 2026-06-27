"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { X, ChevronLeft, ChevronRight, Clock, Target, Quote } from "lucide-react"

const transformations = [
  {
    id: 1,
    name: "Michael Torres",
    age: 34,
    duration: "6 months",
    program: "Weight Loss",
    weightLost: "45 lbs",
    before: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop",
    testimonial: "APEX FITNESS completely changed my life. The trainers pushed me beyond what I thought was possible, and the results speak for themselves."
  },
  {
    id: 2,
    name: "Sarah Mitchell",
    age: 28,
    duration: "4 months",
    program: "Strength Training",
    weightLost: "Built 15 lbs muscle",
    before: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=800&auto=format&fit=crop",
    testimonial: "I never thought I could get this strong. The personalized training program was exactly what I needed to build the physique I always wanted."
  },
  {
    id: 3,
    name: "David Chen",
    age: 42,
    duration: "8 months",
    program: "CrossFit",
    weightLost: "35 lbs",
    before: "https://images.unsplash.com/photo-1584466977773-e625c37cdd50?q=80&w=800&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=800&auto=format&fit=crop",
    testimonial: "At 42, I'm in the best shape of my life. CrossFit at APEX gave me the challenge and community I needed to transform."
  },
  {
    id: 4,
    name: "Jennifer Adams",
    age: 31,
    duration: "5 months",
    program: "Personal Training",
    weightLost: "30 lbs",
    before: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1571732154690-f6d1c3e5178a?q=80&w=800&auto=format&fit=crop",
    testimonial: "The one-on-one attention from my personal trainer made all the difference. Every workout was tailored to my goals and I saw results fast."
  },
  {
    id: 5,
    name: "Robert Kim",
    age: 38,
    duration: "7 months",
    program: "Functional Training",
    weightLost: "40 lbs",
    before: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop",
    testimonial: "Functional training helped me move better in everyday life. I'm stronger, more flexible, and have way more energy than before."
  },
  {
    id: 6,
    name: "Amanda Wilson",
    age: 26,
    duration: "3 months",
    program: "HIIT",
    weightLost: "20 lbs",
    before: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=800&auto=format&fit=crop",
    testimonial: "The HIIT classes are intense but so effective. I lost 20 pounds in just 3 months and feel more confident than ever."
  },
]

export default function TransformationsPage() {
  const [selectedTransformation, setSelectedTransformation] = useState<typeof transformations[0] | null>(null)
  const [comparePosition, setComparePosition] = useState(50)

  const handleNext = () => {
    if (!selectedTransformation) return
    const currentIndex = transformations.findIndex(t => t.id === selectedTransformation.id)
    const nextIndex = (currentIndex + 1) % transformations.length
    setSelectedTransformation(transformations[nextIndex])
  }

  const handlePrev = () => {
    if (!selectedTransformation) return
    const currentIndex = transformations.findIndex(t => t.id === selectedTransformation.id)
    const prevIndex = (currentIndex - 1 + transformations.length) % transformations.length
    setSelectedTransformation(transformations[prevIndex])
  }

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
                SUCCESS STORIES
              </span>
              <h1 className="font-[family-name:var(--font-heading)] text-5xl md:text-6xl lg:text-7xl mb-6">
                REAL <span className="gradient-text">TRANSFORMATIONS</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Be inspired by our members who have achieved incredible results. These are real people with real stories of dedication, hard work, and transformation.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Transformations Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {transformations.map((transformation, index) => (
              <ScrollReveal key={transformation.id} delay={index * 100}>
                <button
                  onClick={() => setSelectedTransformation(transformation)}
                  className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/30 transition-all duration-300 text-left w-full"
                >
                  {/* Before/After Images */}
                  <div className="relative aspect-[4/3]">
                    <div className="absolute inset-0 flex">
                      <div className="w-1/2 overflow-hidden">
                        <div 
                          className="w-[200%] h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                          style={{ backgroundImage: `url('${transformation.before}')` }}
                        />
                      </div>
                      <div className="w-1/2 overflow-hidden">
                        <div 
                          className="w-[200%] h-full bg-cover bg-center -translate-x-1/2 transition-transform duration-700 group-hover:scale-110"
                          style={{ backgroundImage: `url('${transformation.after}')` }}
                        />
                      </div>
                    </div>
                    
                    {/* Divider */}
                    <div className="absolute inset-y-0 left-1/2 w-1 bg-primary -translate-x-1/2 z-10" />
                    
                    {/* Labels */}
                    <div className="absolute top-3 left-3 px-3 py-1 bg-background/80 backdrop-blur-sm rounded-full text-xs font-semibold">
                      BEFORE
                    </div>
                    <div className="absolute top-3 right-3 px-3 py-1 bg-primary text-primary-foreground rounded-full text-xs font-semibold">
                      AFTER
                    </div>
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-[family-name:var(--font-heading)] text-2xl mb-1">{transformation.name}</h3>
                    <div className="flex flex-wrap gap-3 text-sm mb-4">
                      <span className="flex items-center gap-1.5 text-muted-foreground">
                        <Clock className="w-4 h-4 text-primary" />
                        {transformation.duration}
                      </span>
                      <span className="flex items-center gap-1.5 text-muted-foreground">
                        <Target className="w-4 h-4 text-primary" />
                        {transformation.program}
                      </span>
                    </div>
                    <div className="text-primary font-semibold">{transformation.weightLost}</div>
                  </div>
                </button>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedTransformation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/90 backdrop-blur-md">
          <div className="absolute inset-0" onClick={() => setSelectedTransformation(null)} />
          
          {/* Navigation */}
          <button
            onClick={handlePrev}
            className="absolute left-4 md:left-8 z-10 w-12 h-12 flex items-center justify-center bg-card rounded-full border border-border hover:border-primary transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 md:right-8 z-10 w-12 h-12 flex items-center justify-center bg-card rounded-full border border-border hover:border-primary transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          
          {/* Content */}
          <div className="relative bg-card rounded-2xl border border-border max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedTransformation(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-background/80 backdrop-blur-sm rounded-full hover:bg-primary transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="grid md:grid-cols-2 gap-6 p-6">
              {/* Image Comparison */}
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
                {/* After Image (background) */}
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${selectedTransformation.after}')` }}
                />
                
                {/* Before Image (overlay) */}
                <div 
                  className="absolute inset-y-0 left-0 overflow-hidden"
                  style={{ width: `${comparePosition}%` }}
                >
                  <div 
                    className="h-full bg-cover bg-center"
                    style={{ 
                      backgroundImage: `url('${selectedTransformation.before}')`,
                      width: `${100 / (comparePosition / 100)}%`
                    }}
                  />
                </div>
                
                {/* Slider */}
                <div 
                  className="absolute inset-y-0 w-1 bg-primary cursor-ew-resize"
                  style={{ left: `${comparePosition}%`, transform: 'translateX(-50%)' }}
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <ChevronLeft className="w-4 h-4 -ml-1" />
                    <ChevronRight className="w-4 h-4 -mr-1" />
                  </div>
                </div>
                
                {/* Slider Input */}
                <input
                  type="range"
                  min="5"
                  max="95"
                  value={comparePosition}
                  onChange={(e) => setComparePosition(Number(e.target.value))}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
                />
                
                {/* Labels */}
                <div className="absolute bottom-4 left-4 px-3 py-1 bg-background/80 backdrop-blur-sm rounded-full text-sm font-semibold">
                  BEFORE
                </div>
                <div className="absolute bottom-4 right-4 px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm font-semibold">
                  AFTER
                </div>
              </div>
              
              {/* Details */}
              <div className="flex flex-col justify-center">
                <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl mb-2">
                  {selectedTransformation.name}
                </h2>
                <p className="text-muted-foreground mb-6">Age {selectedTransformation.age}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="p-4 bg-background rounded-xl">
                    <div className="text-muted-foreground text-sm mb-1">Duration</div>
                    <div className="font-semibold text-lg">{selectedTransformation.duration}</div>
                  </div>
                  <div className="p-4 bg-background rounded-xl">
                    <div className="text-muted-foreground text-sm mb-1">Program</div>
                    <div className="font-semibold text-lg">{selectedTransformation.program}</div>
                  </div>
                  <div className="p-4 bg-primary/10 rounded-xl col-span-2">
                    <div className="text-primary text-sm mb-1">Results</div>
                    <div className="font-[family-name:var(--font-heading)] text-2xl text-primary">{selectedTransformation.weightLost}</div>
                  </div>
                </div>
                
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/20" />
                  <p className="text-muted-foreground text-lg leading-relaxed italic pl-6">
                    &ldquo;{selectedTransformation.testimonial}&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl mb-6">
                BE THE NEXT <span className="gradient-text">SUCCESS STORY</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Start your transformation journey today. Our expert trainers and proven programs are ready to help you achieve the results you deserve.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg transition-all duration-300 hover:scale-105 animate-pulse-glow"
              >
                Start Your Journey
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  )
}
