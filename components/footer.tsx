"use client"

import Link from "next/link"
import { Dumbbell, Instagram, Twitter, Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react"

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/programs", label: "Programs" },
  { href: "/trainers", label: "Trainers" },
  { href: "/membership", label: "Membership" },
  { href: "/schedule", label: "Schedule" },
  { href: "/contact", label: "Contact" },
]

const programs = [
  { href: "/programs#strength", label: "Strength Training" },
  { href: "/programs#weight-loss", label: "Weight Loss" },
  { href: "/programs#personal", label: "Personal Training" },
  { href: "/programs#crossfit", label: "CrossFit" },
  { href: "/programs#functional", label: "Functional Training" },
]

const socialLinks = [
  { href: "#", icon: Instagram, label: "Instagram" },
  { href: "#", icon: Twitter, label: "Twitter" },
  { href: "#", icon: Facebook, label: "Facebook" },
  { href: "#", icon: Youtube, label: "YouTube" },
]

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      {/* Newsletter Section */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl mb-3">
              JOIN OUR <span className="text-primary">NEWSLETTER</span>
            </h3>
            <p className="text-muted-foreground mb-6">
              Get fitness tips, exclusive offers, and updates delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder:text-muted-foreground"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg transition-all duration-300 hover:bg-primary/90 hover:scale-105"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Dumbbell className="h-8 w-8 text-primary" />
              <span className="font-[family-name:var(--font-heading)] text-2xl tracking-wider">
                APEX <span className="text-primary">FITNESS</span>
              </span>
            </Link>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Transform your body and elevate your strength at the premier fitness destination for athletes and fitness enthusiasts.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 flex items-center justify-center bg-secondary rounded-lg text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-[family-name:var(--font-heading)] text-xl mb-4 tracking-wide">QUICK LINKS</h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-[family-name:var(--font-heading)] text-xl mb-4 tracking-wide">PROGRAMS</h4>
            <ul className="flex flex-col gap-3">
              {programs.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-[family-name:var(--font-heading)] text-xl mb-4 tracking-wide">CONTACT US</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span className="text-muted-foreground">
                  123 Fitness Avenue, Downtown<br />
                  Los Angeles, CA 90001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a
                  href="tel:+1234567890"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a
                  href="mailto:info@apexfitness.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  info@apexfitness.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} APEX FITNESS. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
