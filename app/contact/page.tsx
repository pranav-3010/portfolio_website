"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle, 
  Instagram, 
  Twitter, 
  Facebook, 
  Youtube,
  MessageSquare
} from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    label: "Visit Us",
    value: "123 Fitness Boulevard",
    subvalue: "Downtown Athletic District, NY 10001",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+1 (555) 123-4567",
    subvalue: "Mon-Sun, 5:00 AM - 11:00 PM",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "info@apexfitness.com",
    subvalue: "We respond within 24 hours",
  },
  {
    icon: Clock,
    label: "Opening Hours",
    value: "Open 24/7",
    subvalue: "Staffed hours: 6 AM - 10 PM",
  },
]

const socialLinks = [
  { icon: Instagram, label: "Instagram", href: "#", handle: "@apexfitness" },
  { icon: Twitter, label: "Twitter", href: "#", handle: "@apex_fitness" },
  { icon: Facebook, label: "Facebook", href: "#", handle: "APEX Fitness" },
  { icon: Youtube, label: "YouTube", href: "#", handle: "APEX Fitness" },
]

const faqItems = [
  {
    question: "What are your membership options?",
    answer: "We offer Basic, Premium, and Elite memberships with monthly and annual payment options. Visit our membership page for detailed pricing and benefits.",
  },
  {
    question: "Do you offer personal training?",
    answer: "Yes! We have over 50 certified personal trainers specializing in various disciplines. Personal training sessions can be purchased individually or as packages.",
  },
  {
    question: "Is there a free trial available?",
    answer: "Absolutely! We offer a complimentary 3-day trial pass for new visitors. Simply fill out the contact form or visit us in person to get started.",
  },
  {
    question: "What amenities are included?",
    answer: "All memberships include access to our gym floor, locker rooms, and basic fitness classes. Premium and Elite members get additional perks like sauna, spa, and nutrition consultations.",
  },
]

function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-primary/20">
          <CheckCircle className="w-8 h-8 text-primary" />
        </div>
        <h3 className="font-[family-name:var(--font-heading)] text-2xl text-foreground mb-2">
          MESSAGE SENT!
        </h3>
        <p className="text-muted-foreground mb-6">
          Thank you for reaching out. We will get back to you within 24 hours.
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false)
            setFormState({ name: "", email: "", phone: "", subject: "", message: "" })
          }}
          className="text-primary hover:underline"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            required
            value={formState.name}
            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
            className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors text-foreground placeholder:text-muted-foreground"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            required
            value={formState.email}
            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
            className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors text-foreground placeholder:text-muted-foreground"
            placeholder="john@example.com"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            value={formState.phone}
            onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
            className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors text-foreground placeholder:text-muted-foreground"
            placeholder="+1 (555) 000-0000"
          />
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
            Subject *
          </label>
          <select
            id="subject"
            required
            value={formState.subject}
            onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
            className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors text-foreground"
          >
            <option value="">Select a subject</option>
            <option value="membership">Membership Inquiry</option>
            <option value="training">Personal Training</option>
            <option value="classes">Class Information</option>
            <option value="trial">Free Trial</option>
            <option value="feedback">Feedback</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
          Message *
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={formState.message}
          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
          className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors text-foreground placeholder:text-muted-foreground resize-none"
          placeholder="Tell us how we can help you..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:scale-[1.02] transition-transform disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <Send className="w-5 h-5" />
          </>
        )}
      </button>
    </form>
  )
}

function FAQItem({ item, index }: { item: typeof faqItems[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <ScrollReveal delay={index * 100}>
      <div className="border border-border rounded-lg overflow-hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-6 py-4 flex items-center justify-between text-left bg-card hover:bg-secondary/50 transition-colors"
        >
          <span className="font-medium text-foreground">{item.question}</span>
          <span className={`text-primary transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>
            +
          </span>
        </button>
        <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-40" : "max-h-0"}`}>
          <p className="px-6 py-4 text-muted-foreground bg-card/50">
            {item.answer}
          </p>
        </div>
      </div>
    </ScrollReveal>
  )
}

export default function ContactPage() {
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
                Get In Touch
              </span>
              <h1 className="font-[family-name:var(--font-heading)] text-5xl md:text-6xl lg:text-7xl mb-6">
                <span className="text-foreground">WE ARE HERE TO</span>
                <br />
                <span className="gradient-text">HELP YOU</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Have questions about membership, classes, or our facilities? Reach out and our team will get back to you within 24 hours.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <ScrollReveal key={info.label} delay={index * 100}>
                <div className="group p-6 rounded-2xl glass border border-border hover:border-primary/50 transition-all duration-300 text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 mb-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{info.label}</h3>
                  <p className="text-foreground font-medium">{info.value}</p>
                  <p className="text-sm text-muted-foreground">{info.subvalue}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <ScrollReveal>
              <div className="p-8 rounded-2xl glass border border-border">
                <div className="flex items-center gap-3 mb-6">
                  <MessageSquare className="w-6 h-6 text-primary" />
                  <h2 className="font-[family-name:var(--font-heading)] text-2xl text-foreground">
                    SEND US A MESSAGE
                  </h2>
                </div>
                <ContactForm />
              </div>
            </ScrollReveal>

            {/* Map & Social */}
            <div className="space-y-8">
              <ScrollReveal delay={100}>
                <div className="rounded-2xl overflow-hidden border border-border h-80">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304605!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1647882844568!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="APEX Fitness Location"
                  />
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div className="p-6 rounded-2xl glass border border-border">
                  <h3 className="font-semibold text-foreground mb-4">Follow Us</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        className="flex items-center gap-3 p-3 rounded-lg bg-background hover:bg-secondary/50 transition-colors group"
                      >
                        <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                        <div>
                          <p className="text-sm font-medium text-foreground">{social.label}</p>
                          <p className="text-xs text-muted-foreground">{social.handle}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl text-foreground mb-4">
                FREQUENTLY ASKED <span className="gradient-text">QUESTIONS</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Find quick answers to common questions about APEX FITNESS.
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((item, index) => (
              <FAQItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl text-foreground mb-4">
                READY TO START YOUR <span className="gradient-text">JOURNEY?</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Book a free tour of our facilities and meet our team. Experience the APEX difference firsthand.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="/membership"
                  className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:scale-105 transition-transform"
                >
                  View Membership Plans
                </a>
                <a
                  href="tel:+15551234567"
                  className="px-8 py-4 glass border border-border font-semibold rounded-lg hover:border-primary/50 transition-colors text-foreground"
                >
                  Call +1 (555) 123-4567
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  )
}
