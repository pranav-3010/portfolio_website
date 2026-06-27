'use client'

import { useState } from 'react'
import { X } from 'lucide-react'

interface AppointmentModalProps {
  isOpen: boolean
  onClose: () => void
  programName: string
  gymEmail?: string
}

export function AppointmentModal({ isOpen, onClose, programName, gymEmail = 'chiravurip493@gmail.com' }: AppointmentModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    fitnessLevel: 'beginner',
    goal: '',
  })

  if (!isOpen) return null

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Create mailto link with form data
    const subject = `Program Inquiry: ${programName}`
    const body = `
Hi APEX Fitness,

I am interested in the ${programName} program.

Full Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
Fitness Level: ${formData.fitnessLevel}
Goal: ${formData.goal}

Please contact me with more information about this program.

Thank you!
    `.trim()

    // Open mailto link
    window.location.href = `mailto:${gymEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    
    // Reset form and close modal
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      fitnessLevel: 'beginner',
      goal: '',
    })
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-background border border-border rounded-xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 hover:bg-card rounded-lg transition-colors"
        >
          <X className="w-5 h-5 text-muted-foreground" />
        </button>

        {/* Content */}
        <div className="p-6 sm:p-8">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl text-foreground mb-2">
            Get Started
          </h2>
          <p className="text-muted-foreground text-sm mb-6">
            {programName}
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                placeholder="John Doe"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                placeholder="you@example.com"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                placeholder="+1 (555) 000-0000"
              />
            </div>

            {/* Fitness Level */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Fitness Level</label>
              <select
                name="fitnessLevel"
                value={formData.fitnessLevel}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-card border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              >
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>

            {/* Goal */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Fitness Goal</label>
              <textarea
                name="goal"
                value={formData.goal}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-2 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                placeholder="Tell us about your fitness goals..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 px-4 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-semibold rounded-lg transition-all duration-300"
            >
              Send Appointment Request
            </button>

            <p className="text-xs text-muted-foreground text-center">
              We'll contact you shortly with available appointment times.
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}
