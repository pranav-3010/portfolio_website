"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Star, Quote, ChevronLeft, ChevronRight, Play } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Marcus Johnson",
    role: "Lost 45 lbs in 6 months",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    rating: 5,
    text: "APEX FITNESS completely transformed my life. The trainers are incredibly knowledgeable and the community is so supportive. I never thought I could achieve these results, but the personalized approach made all the difference.",
    program: "Weight Loss Program",
    featured: true,
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Competitive Powerlifter",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
    rating: 5,
    text: "The strength training facility is world-class. I've trained at many gyms, but APEX stands out with its equipment quality and expert coaching. My deadlift increased by 100 lbs in just 8 months!",
    program: "Strength Training",
    featured: true,
  },
  {
    id: 3,
    name: "David Williams",
    role: "Marathon Runner",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    rating: 5,
    text: "The cardio programs and recovery facilities helped me qualify for the Boston Marathon. The trainers understand endurance athletics and designed a program that fit my goals perfectly.",
    program: "Endurance Training",
    featured: true,
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    role: "Yoga Enthusiast",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    rating: 5,
    text: "The yoga and mindfulness classes are exceptional. The instructors create such a peaceful atmosphere while still challenging you to grow. It's become my sanctuary.",
    program: "Mind & Body",
  },
  {
    id: 5,
    name: "James Thompson",
    role: "Business Executive",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    rating: 5,
    text: "As a busy executive, I needed a gym that could work around my schedule. The 24/7 access and personal training options at APEX are perfect. I've never been in better shape.",
    program: "Executive Fitness",
  },
  {
    id: 6,
    name: "Lisa Martinez",
    role: "New Mom",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
    rating: 5,
    text: "The postnatal fitness program helped me regain my strength and confidence after having my baby. The childcare facility is a lifesaver, and the trainers are so understanding.",
    program: "Postnatal Fitness",
  },
  {
    id: 7,
    name: "Michael Kim",
    role: "CrossFit Athlete",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
    rating: 5,
    text: "The functional training area is incredible. The coaches push you to your limits while ensuring proper form. I've seen massive improvements in my overall athletic performance.",
    program: "Functional Training",
  },
  {
    id: 8,
    name: "Amanda Foster",
    role: "Senior Member",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
    rating: 5,
    text: "At 62, I was nervous about joining a gym, but APEX made me feel welcome from day one. The senior fitness classes are fantastic, and I've made wonderful friends here.",
    program: "Active Aging",
  },
]

const videoTestimonials = [
  {
    id: 1,
    name: "The Transformation Journey",
    thumbnail: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=450&fit=crop",
    duration: "3:45",
  },
  {
    id: 2,
    name: "Why I Chose APEX",
    thumbnail: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=450&fit=crop",
    duration: "2:30",
  },
  {
    id: 3,
    name: "Community Stories",
    thumbnail: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=450&fit=crop",
    duration: "4:15",
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-primary fill-primary" : "text-muted-foreground"}`}
        />
      ))}
    </div>
  )
}

function TestimonialCard({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) {
  return (
    <ScrollReveal delay={index * 100}>
      <div className="group relative h-full p-6 rounded-2xl glass border border-border hover:border-primary/50 transition-all duration-300">
        <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20 group-hover:text-primary/40 transition-colors" />
        
        <div className="flex items-center gap-4 mb-4">
          <div className="relative">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-14 h-14 rounded-full object-cover border-2 border-primary/30"
            />
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-primary rounded-full flex items-center justify-center">
              <Star className="w-3 h-3 text-primary-foreground fill-primary-foreground" />
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-foreground">{testimonial.name}</h3>
            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
          </div>
        </div>

        <StarRating rating={testimonial.rating} />
        
        <p className="mt-4 text-muted-foreground leading-relaxed">
          {testimonial.text}
        </p>

        <div className="mt-4 pt-4 border-t border-border">
          <span className="text-xs font-medium text-primary">{testimonial.program}</span>
        </div>
      </div>
    </ScrollReveal>
  )
}

function FeaturedTestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const featured = testimonials.filter(t => t.featured)

  const next = () => setCurrentIndex((prev) => (prev + 1) % featured.length)
  const prev = () => setCurrentIndex((prev) => (prev - 1 + featured.length) % featured.length)

  const current = featured[currentIndex]

  return (
    <div className="relative">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Image */}
        <div className="relative">
          <div className="aspect-square rounded-2xl overflow-hidden">
            <img
              src={current.image}
              alt={current.name}
              className="w-full h-full object-cover transition-transform duration-500"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute top-4 left-4 px-4 py-2 glass rounded-full">
            <span className="text-sm font-medium text-foreground">{current.program}</span>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6">
          <Quote className="w-12 h-12 text-primary" />
          <p className="text-xl md:text-2xl text-foreground leading-relaxed">
            {current.text}
          </p>
          <div>
            <StarRating rating={current.rating} />
            <h3 className="mt-4 text-xl font-semibold text-foreground">{current.name}</h3>
            <p className="text-muted-foreground">{current.role}</p>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-4">
            <button
              onClick={prev}
              className="w-12 h-12 flex items-center justify-center rounded-full glass border border-border hover:border-primary/50 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <div className="flex gap-2">
              {featured.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === currentIndex ? "w-8 bg-primary" : "w-2 bg-muted"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-12 h-12 flex items-center justify-center rounded-full glass border border-border hover:border-primary/50 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-2 mb-6 text-sm font-medium text-primary bg-primary/10 rounded-full">
                Success Stories
              </span>
              <h1 className="font-[family-name:var(--font-heading)] text-5xl md:text-6xl lg:text-7xl mb-6">
                <span className="text-foreground">REAL PEOPLE,</span>
                <br />
                <span className="gradient-text">REAL RESULTS</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Discover how our members have transformed their lives through dedication, expert guidance, and the supportive APEX community.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Testimonial Slider */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <FeaturedTestimonialSlider />
          </ScrollReveal>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "98%", label: "Member Satisfaction" },
              { value: "15K+", label: "Happy Members" },
              { value: "4.9", label: "Average Rating" },
              { value: "85%", label: "Goal Achievement" },
            ].map((stat, index) => (
              <ScrollReveal key={stat.label} delay={index * 100}>
                <div className="text-center">
                  <div className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl text-primary mb-2">
                    {stat.value}
                  </div>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl text-foreground mb-4">
                VIDEO <span className="gradient-text">TESTIMONIALS</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Watch our members share their transformation stories and experiences at APEX FITNESS.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {videoTestimonials.map((video, index) => (
              <ScrollReveal key={video.id} delay={index * 100}>
                <div className="group relative rounded-2xl overflow-hidden cursor-pointer">
                  <img
                    src={video.thumbnail}
                    alt={video.name}
                    className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-background/60 flex items-center justify-center">
                    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform duration-300 group-hover:scale-110">
                      <Play className="w-6 h-6 fill-current ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-semibold text-foreground mb-1">{video.name}</h3>
                    <span className="text-sm text-muted-foreground">{video.duration}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl text-foreground mb-4">
                MEMBER <span className="gradient-text">REVIEWS</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Read what our community has to say about their journey with APEX FITNESS.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="relative rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1920&h=600&fit=crop"
                  alt="Gym interior"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70" />
              </div>
              <div className="relative z-10 py-16 px-8 md:px-16">
                <div className="max-w-xl">
                  <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl text-foreground mb-4">
                    READY TO WRITE YOUR <span className="gradient-text">SUCCESS STORY?</span>
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Join thousands of members who have transformed their lives at APEX FITNESS. Start your journey today.
                  </p>
                  <a
                    href="/membership"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:scale-105 transition-transform"
                  >
                    Start Your Journey
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  )
}
