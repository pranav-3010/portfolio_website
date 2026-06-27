"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Clock, User, MapPin, ChevronLeft, ChevronRight } from "lucide-react"

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

const classes = [
  // Monday
  { day: "Monday", time: "06:00", duration: "60 min", name: "Morning Power Yoga", trainer: "Emily Rodriguez", room: "Studio A", intensity: "Medium", spots: 5 },
  { day: "Monday", time: "07:30", duration: "45 min", name: "HIIT Blast", trainer: "Amanda Foster", room: "Main Floor", intensity: "High", spots: 8 },
  { day: "Monday", time: "09:00", duration: "60 min", name: "Strength Fundamentals", trainer: "Marcus Johnson", room: "Weight Room", intensity: "Medium", spots: 12 },
  { day: "Monday", time: "12:00", duration: "45 min", name: "Express Cardio", trainer: "Lisa Wang", room: "Cardio Zone", intensity: "High", spots: 15 },
  { day: "Monday", time: "17:30", duration: "60 min", name: "CrossFit WOD", trainer: "Sarah Chen", room: "CrossFit Box", intensity: "High", spots: 3 },
  { day: "Monday", time: "19:00", duration: "60 min", name: "Bodybuilding 101", trainer: "David Williams", room: "Weight Room", intensity: "Medium", spots: 10 },
  
  // Tuesday
  { day: "Tuesday", time: "06:00", duration: "45 min", name: "Spin Class", trainer: "Lisa Wang", room: "Spin Studio", intensity: "High", spots: 6 },
  { day: "Tuesday", time: "08:00", duration: "60 min", name: "Functional Training", trainer: "Michael Park", room: "Main Floor", intensity: "Medium", spots: 14 },
  { day: "Tuesday", time: "10:00", duration: "60 min", name: "Senior Fitness", trainer: "Emily Rodriguez", room: "Studio A", intensity: "Low", spots: 18 },
  { day: "Tuesday", time: "12:30", duration: "30 min", name: "Core Crusher", trainer: "Amanda Foster", room: "Studio B", intensity: "High", spots: 12 },
  { day: "Tuesday", time: "18:00", duration: "60 min", name: "Olympic Lifting", trainer: "Sarah Chen", room: "CrossFit Box", intensity: "High", spots: 8 },
  { day: "Tuesday", time: "19:30", duration: "60 min", name: "Yoga Flow", trainer: "Emily Rodriguez", room: "Studio A", intensity: "Low", spots: 20 },
  
  // Wednesday
  { day: "Wednesday", time: "06:00", duration: "60 min", name: "Morning Power Yoga", trainer: "Emily Rodriguez", room: "Studio A", intensity: "Medium", spots: 7 },
  { day: "Wednesday", time: "07:30", duration: "45 min", name: "Metabolic Conditioning", trainer: "Amanda Foster", room: "Main Floor", intensity: "High", spots: 10 },
  { day: "Wednesday", time: "09:00", duration: "60 min", name: "Advanced Strength", trainer: "Marcus Johnson", room: "Weight Room", intensity: "High", spots: 6 },
  { day: "Wednesday", time: "12:00", duration: "45 min", name: "Express HIIT", trainer: "Lisa Wang", room: "Studio B", intensity: "High", spots: 15 },
  { day: "Wednesday", time: "17:30", duration: "60 min", name: "CrossFit WOD", trainer: "Sarah Chen", room: "CrossFit Box", intensity: "High", spots: 4 },
  { day: "Wednesday", time: "19:00", duration: "60 min", name: "Physique Training", trainer: "David Williams", room: "Weight Room", intensity: "Medium", spots: 8 },
  
  // Thursday
  { day: "Thursday", time: "06:00", duration: "45 min", name: "Spin Class", trainer: "Lisa Wang", room: "Spin Studio", intensity: "High", spots: 5 },
  { day: "Thursday", time: "08:00", duration: "60 min", name: "Sports Performance", trainer: "Michael Park", room: "Main Floor", intensity: "High", spots: 10 },
  { day: "Thursday", time: "10:00", duration: "60 min", name: "Gentle Yoga", trainer: "Emily Rodriguez", room: "Studio A", intensity: "Low", spots: 22 },
  { day: "Thursday", time: "12:30", duration: "30 min", name: "Ab Attack", trainer: "Amanda Foster", room: "Studio B", intensity: "High", spots: 14 },
  { day: "Thursday", time: "18:00", duration: "60 min", name: "Powerlifting Basics", trainer: "Marcus Johnson", room: "Weight Room", intensity: "High", spots: 6 },
  { day: "Thursday", time: "19:30", duration: "60 min", name: "Mobility & Recovery", trainer: "Emily Rodriguez", room: "Studio A", intensity: "Low", spots: 18 },
  
  // Friday
  { day: "Friday", time: "06:00", duration: "60 min", name: "Sunrise Yoga", trainer: "Emily Rodriguez", room: "Studio A", intensity: "Medium", spots: 9 },
  { day: "Friday", time: "07:30", duration: "45 min", name: "Friday Burn", trainer: "Amanda Foster", room: "Main Floor", intensity: "High", spots: 12 },
  { day: "Friday", time: "09:00", duration: "60 min", name: "Full Body Strength", trainer: "Marcus Johnson", room: "Weight Room", intensity: "Medium", spots: 8 },
  { day: "Friday", time: "12:00", duration: "45 min", name: "Lunch Crunch", trainer: "Lisa Wang", room: "Studio B", intensity: "Medium", spots: 16 },
  { day: "Friday", time: "17:00", duration: "60 min", name: "Friday Night CrossFit", trainer: "Sarah Chen", room: "CrossFit Box", intensity: "High", spots: 6 },
  
  // Saturday
  { day: "Saturday", time: "08:00", duration: "90 min", name: "Weekend Warrior", trainer: "Marcus Johnson", room: "Main Floor", intensity: "High", spots: 20 },
  { day: "Saturday", time: "10:00", duration: "60 min", name: "CrossFit Open Gym", trainer: "Sarah Chen", room: "CrossFit Box", intensity: "Medium", spots: 15 },
  { day: "Saturday", time: "11:30", duration: "60 min", name: "Yoga & Meditation", trainer: "Emily Rodriguez", room: "Studio A", intensity: "Low", spots: 25 },
  { day: "Saturday", time: "14:00", duration: "60 min", name: "Bodybuilding Workshop", trainer: "David Williams", room: "Weight Room", intensity: "Medium", spots: 12 },
  
  // Sunday
  { day: "Sunday", time: "09:00", duration: "75 min", name: "Sunday Stretch", trainer: "Emily Rodriguez", room: "Studio A", intensity: "Low", spots: 28 },
  { day: "Sunday", time: "11:00", duration: "60 min", name: "Family Fitness", trainer: "Lisa Wang", room: "Main Floor", intensity: "Low", spots: 30 },
  { day: "Sunday", time: "13:00", duration: "90 min", name: "CrossFit Competition Prep", trainer: "Sarah Chen", room: "CrossFit Box", intensity: "High", spots: 10 },
]

const getIntensityColor = (intensity: string) => {
  switch (intensity) {
    case "Low": return "bg-green-500/20 text-green-400"
    case "Medium": return "bg-yellow-500/20 text-yellow-400"
    case "High": return "bg-primary/20 text-primary"
    default: return "bg-muted text-muted-foreground"
  }
}

export default function SchedulePage() {
  const [selectedDay, setSelectedDay] = useState("Monday")
  const dayIndex = days.indexOf(selectedDay)

  const handlePrevDay = () => {
    const newIndex = (dayIndex - 1 + days.length) % days.length
    setSelectedDay(days[newIndex])
  }

  const handleNextDay = () => {
    const newIndex = (dayIndex + 1) % days.length
    setSelectedDay(days[newIndex])
  }

  const filteredClasses = classes.filter(c => c.day === selectedDay)

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
                CLASS SCHEDULE
              </span>
              <h1 className="font-[family-name:var(--font-heading)] text-5xl md:text-6xl lg:text-7xl mb-6">
                WEEKLY <span className="gradient-text">TIMETABLE</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Find the perfect class to fit your schedule. From early morning sessions to evening workouts, we have something for everyone.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Day Selector */}
      <section className="pb-12">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            {/* Mobile Day Navigation */}
            <div className="flex md:hidden items-center justify-center gap-4 mb-6">
              <button
                onClick={handlePrevDay}
                className="w-10 h-10 flex items-center justify-center bg-card border border-border rounded-full hover:border-primary transition-colors"
                aria-label="Previous day"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="font-[family-name:var(--font-heading)] text-2xl min-w-32 text-center">
                {selectedDay}
              </span>
              <button
                onClick={handleNextDay}
                className="w-10 h-10 flex items-center justify-center bg-card border border-border rounded-full hover:border-primary transition-colors"
                aria-label="Next day"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Desktop Day Tabs */}
            <div className="hidden md:flex items-center justify-center gap-2 flex-wrap">
              {days.map((day) => (
                <button
                  key={day}
                  onClick={() => setSelectedDay(day)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedDay === day
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-card border border-border hover:border-primary'
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Schedule Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-4 max-w-4xl mx-auto">
            {filteredClasses.length > 0 ? (
              filteredClasses.map((classItem, index) => (
                <ScrollReveal key={`${classItem.day}-${classItem.time}-${classItem.name}`} delay={index * 50}>
                  <div className="group bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      {/* Time */}
                      <div className="flex items-center gap-3 md:w-28 shrink-0">
                        <Clock className="w-5 h-5 text-primary" />
                        <div>
                          <div className="font-[family-name:var(--font-heading)] text-2xl">{classItem.time}</div>
                          <div className="text-xs text-muted-foreground">{classItem.duration}</div>
                        </div>
                      </div>

                      {/* Divider */}
                      <div className="hidden md:block w-px h-12 bg-border" />

                      {/* Class Info */}
                      <div className="flex-1">
                        <h3 className="font-[family-name:var(--font-heading)] text-xl mb-2">{classItem.name}</h3>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1.5">
                            <User className="w-4 h-4 text-primary" />
                            {classItem.trainer}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <MapPin className="w-4 h-4 text-primary" />
                            {classItem.room}
                          </span>
                        </div>
                      </div>

                      {/* Intensity & Spots */}
                      <div className="flex items-center gap-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getIntensityColor(classItem.intensity)}`}>
                          {classItem.intensity}
                        </span>
                        <div className="text-right">
                          <div className={`text-lg font-bold ${classItem.spots <= 5 ? 'text-primary' : 'text-foreground'}`}>
                            {classItem.spots}
                          </div>
                          <div className="text-xs text-muted-foreground">spots left</div>
                        </div>
                        <button className="px-4 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-lg transition-all duration-300 hover:scale-105 opacity-0 group-hover:opacity-100">
                          Book
                        </button>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))
            ) : (
              <ScrollReveal>
                <div className="text-center py-12 text-muted-foreground">
                  No classes scheduled for {selectedDay}
                </div>
              </ScrollReveal>
            )}
          </div>
        </div>
      </section>

      {/* Legend */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto">
              <h3 className="font-semibold mb-4">Intensity Levels</h3>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-green-500/20" />
                  <span className="text-sm text-muted-foreground">Low - Suitable for beginners</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-yellow-500/20" />
                  <span className="text-sm text-muted-foreground">Medium - Intermediate level</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-primary/20" />
                  <span className="text-sm text-muted-foreground">High - Advanced athletes</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl mb-6">
                CAN&apos;T FIND THE <span className="gradient-text">RIGHT CLASS?</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Our personal trainers can create a custom schedule tailored to your availability and fitness goals.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg transition-all duration-300 hover:scale-105 animate-pulse-glow"
              >
                Contact Us
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  )
}
