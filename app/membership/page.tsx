"use client"

import { useState } from "react"
import Link from "next/link"
import { QRCodeCanvas } from "qrcode.react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Check, X, Sparkles, Zap, Crown, CreditCard, Landmark } from "lucide-react"

const plans = [
  {
    id: "basic",
    name: "Basic",
    icon: Zap,
    price: { monthly: 49, annually: 39 },
    description: "Perfect for beginners starting their fitness journey",
    popular: false,
    features: [
      { name: "Full gym access", included: true },
      { name: "Locker room & showers", included: true },
      { name: "Free WiFi", included: true },
      { name: "Fitness assessment", included: true },
      { name: "Group classes", included: false },
      { name: "Personal training sessions", included: false },
      { name: "Nutrition consultation", included: false },
      { name: "Spa & recovery zone", included: false },
      { name: "Guest passes", included: false },
      { name: "Priority booking", included: false },
    ]
  },
  {
    id: "pro",
    name: "Pro",
    icon: Sparkles,
    price: { monthly: 89, annually: 69 },
    description: "Most popular choice for dedicated fitness enthusiasts",
    popular: true,
    features: [
      { name: "Full gym access", included: true },
      { name: "Locker room & showers", included: true },
      { name: "Free WiFi", included: true },
      { name: "Fitness assessment", included: true },
      { name: "Unlimited group classes", included: true },
      { name: "2 PT sessions/month", included: true },
      { name: "Nutrition consultation", included: true },
      { name: "Spa & recovery zone", included: false },
      { name: "Guest passes", included: false },
      { name: "Priority booking", included: false },
    ]
  },
  {
    id: "elite",
    name: "Elite",
    icon: Crown,
    price: { monthly: 149, annually: 119 },
    description: "The ultimate premium fitness experience",
    popular: false,
    features: [
      { name: "Full gym access 24/7", included: true },
      { name: "Premium locker & amenities", included: true },
      { name: "Free WiFi & charging", included: true },
      { name: "Monthly fitness assessment", included: true },
      { name: "Unlimited group classes", included: true },
      { name: "4 PT sessions/month", included: true },
      { name: "Unlimited nutrition support", included: true },
      { name: "Spa & recovery zone", included: true },
      { name: "2 guest passes/month", included: true },
      { name: "Priority booking", included: true },
    ]
  }
]

const faqs = [
  {
    question: "Can I cancel my membership anytime?",
    answer: "Yes, you can cancel your membership at any time. Monthly memberships require a 30-day notice, while annual memberships can be cancelled with a prorated refund after the first 3 months."
  },
  {
    question: "Is there a joining fee?",
    answer: "We occasionally waive the joining fee during promotional periods. Contact us or check our current offers to see if any promotions are active."
  },
  {
    question: "Can I freeze my membership?",
    answer: "Yes, Pro and Elite members can freeze their membership for up to 3 months per year at no additional cost. Basic members can freeze for up to 1 month."
  },
  {
    question: "Do you offer family or corporate plans?",
    answer: "Absolutely! We offer discounted family plans and corporate wellness programs. Contact our membership team for customized pricing."
  },
  {
    question: "What happens if I want to upgrade my plan?",
    answer: "You can upgrade your plan at any time. The price difference will be prorated for the remaining billing period."
  }
]

export default function MembershipPage() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annually">("monthly")

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
                MEMBERSHIP PLANS
              </span>
              <h1 className="font-[family-name:var(--font-heading)] text-5xl md:text-6xl lg:text-7xl mb-6">
                CHOOSE YOUR <span className="gradient-text">PLAN</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Invest in yourself with a membership that fits your goals and lifestyle. All plans include access to our premium facilities.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Billing Toggle */}
      <section className="pb-12">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-4">
              <span className={`text-sm font-medium transition-colors ${billingPeriod === 'monthly' ? 'text-foreground' : 'text-muted-foreground'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'annually' : 'monthly')}
                className="relative w-14 h-8 bg-secondary rounded-full transition-colors"
                aria-label="Toggle billing period"
              >
                <div className={`absolute top-1 w-6 h-6 bg-primary rounded-full transition-all ${billingPeriod === 'annually' ? 'left-7' : 'left-1'}`} />
              </button>
              <span className={`text-sm font-medium transition-colors ${billingPeriod === 'annually' ? 'text-foreground' : 'text-muted-foreground'}`}>
                Annually
                <span className="ml-2 text-primary">Save 20%</span>
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <ScrollReveal key={plan.id} delay={index * 100}>
                <div className={`relative rounded-2xl p-6 h-full flex flex-col ${
                  plan.popular 
                    ? 'bg-primary/10 border-2 border-primary' 
                    : 'bg-card border border-border'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
                      Most Popular
                    </div>
                  )}
                  
                  {/* Header */}
                  <div className="text-center mb-6">
                    <div className={`w-14 h-14 flex items-center justify-center rounded-xl mx-auto mb-4 ${
                      plan.popular ? 'bg-primary/20' : 'bg-secondary'
                    }`}>
                      <plan.icon className={`w-7 h-7 ${plan.popular ? 'text-primary' : 'text-foreground'}`} />
                    </div>
                    <h3 className="font-[family-name:var(--font-heading)] text-2xl mb-2">{plan.name}</h3>
                    <p className="text-muted-foreground text-sm">{plan.description}</p>
                  </div>
                  
                  {/* Price */}
                  <div className="text-center mb-6">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-3xl font-bold">$</span>
                      <span className="font-[family-name:var(--font-heading)] text-5xl">
                        {plan.price[billingPeriod]}
                      </span>
                      <span className="text-muted-foreground">/mo</span>
                    </div>
                    {billingPeriod === 'annually' && (
                      <p className="text-sm text-muted-foreground mt-1">
                        Billed ${plan.price.annually * 12}/year
                      </p>
                    )}
                  </div>
                  
                  {/* Features */}
                  <div className="flex-1 mb-6">
                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature.name} className="flex items-center gap-3">
                          {feature.included ? (
                            <Check className="w-5 h-5 text-primary shrink-0" />
                          ) : (
                            <X className="w-5 h-5 text-muted-foreground/50 shrink-0" />
                          )}
                          <span className={feature.included ? 'text-foreground' : 'text-muted-foreground/50'}>
                            {feature.name}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* CTA with QR Code */}
                  <div className="space-y-4">
                    {/* QR Code */}
                    <div className="flex justify-center p-4 bg-card/50 border border-border rounded-lg">
                      <QRCodeCanvas 
                        value={`${typeof window !== 'undefined' ? window.location.origin : 'https://apex-fitness.com'}/payment-qr?plan=${encodeURIComponent(plan.name)}&price=${plan.price[billingPeriod]}`}
                        size={160}
                        level="H"
                        includeMargin={true}
                        className="rounded-lg"
                      />
                    </div>
                    
                    {/* Button */}
                    <Link
                      href={`/payment-qr?plan=${encodeURIComponent(plan.name)}&price=${plan.price[billingPeriod]}`}
                      className={`w-full py-3 rounded-lg font-semibold text-center transition-all duration-300 hover:scale-105 block ${
                        plan.popular 
                          ? 'bg-primary text-primary-foreground animate-pulse-glow' 
                          : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                      }`}
                    >
                      Purchase Membership
                    </Link>
                    
                    {/* Scan hint */}
                    <p className="text-xs text-muted-foreground text-center">
                      Or scan the QR code to get started
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Options & Transactions */}
      <section className="py-20 bg-card/30 border-t border-border">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl mb-4">
                PAYMENT <span className="gradient-text">OPTIONS</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Secure payment methods available for your membership
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Credit Cards */}
            <ScrollReveal delay={100}>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10">
                    <CreditCard className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-[family-name:var(--font-heading)] text-2xl">Credit Cards</h3>
                </div>
                
                <div className="space-y-3">
                  {[
                    { date: 'May 20, 2026', plan: 'Pro Membership', amount: 89, status: 'Completed', card: '•••• 4242' },
                    { date: 'April 20, 2026', plan: 'Pro Membership', amount: 89, status: 'Completed', card: '•••• 4242' },
                    { date: 'March 20, 2026', plan: 'Pro Membership', amount: 89, status: 'Completed', card: '•••• 5555' }
                  ].map((transaction) => (
                    <div key={`${transaction.date}-cc`} className="p-3 bg-background rounded-lg border border-border hover:bg-background/80 transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <p className="font-medium text-foreground text-sm">{transaction.plan}</p>
                          <p className="text-xs text-muted-foreground">{transaction.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-foreground text-sm">${transaction.amount}</p>
                          <p className="text-xs text-green-500">✓ {transaction.status}</p>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground">{transaction.card}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Debit Cards */}
            <ScrollReveal delay={200}>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10">
                    <Landmark className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-[family-name:var(--font-heading)] text-2xl">Debit Cards</h3>
                </div>
                
                <div className="space-y-3">
                  {[
                    { date: 'May 15, 2026', plan: 'Basic Membership', amount: 49, status: 'Completed', card: '•••• 6011' },
                    { date: 'April 15, 2026', plan: 'Basic Membership', amount: 49, status: 'Completed', card: '•••• 3528' },
                    { date: 'March 15, 2026', plan: 'Elite Membership', amount: 149, status: 'Pending', card: '•••• 6011' }
                  ].map((transaction) => (
                    <div key={`${transaction.date}-dc`} className="p-3 bg-background rounded-lg border border-border hover:bg-background/80 transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <p className="font-medium text-foreground text-sm">{transaction.plan}</p>
                          <p className="text-xs text-muted-foreground">{transaction.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-foreground text-sm">${transaction.amount}</p>
                          <p className={`text-xs ${transaction.status === 'Completed' ? 'text-green-500' : 'text-yellow-500'}`}>
                            {transaction.status === 'Completed' ? '✓' : '◎'} {transaction.status}
                          </p>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground">{transaction.card}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl mb-4">
                COMPARE <span className="gradient-text">PLANS</span>
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="overflow-x-auto">
              <table className="w-full max-w-4xl mx-auto">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-4 font-semibold">Features</th>
                    <th className="text-center py-4 px-4 font-[family-name:var(--font-heading)] text-xl">Basic</th>
                    <th className="text-center py-4 px-4 font-[family-name:var(--font-heading)] text-xl text-primary">Pro</th>
                    <th className="text-center py-4 px-4 font-[family-name:var(--font-heading)] text-xl">Elite</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Gym Access Hours", basic: "5am - 11pm", pro: "5am - 11pm", elite: "24/7" },
                    { feature: "Group Classes", basic: "-", pro: "Unlimited", elite: "Unlimited" },
                    { feature: "Personal Training", basic: "-", pro: "2/month", elite: "4/month" },
                    { feature: "Nutrition Support", basic: "-", pro: "1 session", elite: "Unlimited" },
                    { feature: "Spa Access", basic: "-", pro: "-", elite: "Included" },
                    { feature: "Guest Passes", basic: "-", pro: "-", elite: "2/month" },
                    { feature: "Locker", basic: "Shared", pro: "Shared", elite: "Private" },
                    { feature: "Towel Service", basic: "-", pro: "Included", elite: "Premium" },
                  ].map((row, index) => (
                    <tr key={row.feature} className={index % 2 === 0 ? 'bg-background/50' : ''}>
                      <td className="py-4 px-4 font-medium">{row.feature}</td>
                      <td className="py-4 px-4 text-center text-muted-foreground">{row.basic}</td>
                      <td className="py-4 px-4 text-center">{row.pro}</td>
                      <td className="py-4 px-4 text-center">{row.elite}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-primary bg-primary/10 rounded-full">
                FAQ
              </span>
              <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl">
                COMMON <span className="gradient-text">QUESTIONS</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <ScrollReveal key={faq.question} delay={index * 50}>
                <details className="group bg-card border border-border rounded-xl overflow-hidden">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <span className="font-semibold pr-4">{faq.question}</span>
                    <span className="shrink-0 w-8 h-8 flex items-center justify-center bg-secondary rounded-full group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-muted-foreground">
                    {faq.answer}
                  </div>
                </details>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
