'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Check, Clock, AlertCircle, Home, Download, Copy } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function PaymentQRPage() {
  const searchParams = useSearchParams()
  const plan = searchParams.get('plan') || 'Premium'
  const price = searchParams.get('price') || '99'
  const [paymentVerified, setPaymentVerified] = useState(false)
  const [timeLeft, setTimeLeft] = useState(900) // 15 minutes
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          clearInterval(timer)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const handleCopyUPI = () => {
    const upiLink = 'upi://pay?pa=gym.apex@tio&pn=APEX%20Fitness&am=' + price + '&tn=Membership%20Payment'
    navigator.clipboard.writeText(upiLink)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <div className="flex-1 container mx-auto px-4 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl md:text-5xl text-foreground mb-3 sm:mb-4">
              Complete Your Payment
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg">
              Scan the QR code below with your UPI app to complete your {plan} membership
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6 lg:gap-8">
            {/* QR Code Section */}
            <div className="flex flex-col items-center justify-center">
              <div className="bg-card border-2 border-primary/20 rounded-2xl p-6 sm:p-8 mb-6 sm:mb-8 w-full max-w-sm">
                <div className="relative w-full aspect-square bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl overflow-hidden flex items-center justify-center">
                  <Image
                    src="/payment-qr.jpg"
                    alt="UPI Payment QR Code"
                    width={400}
                    height={400}
                    priority
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* QR Instructions */}
              <div className="w-full bg-primary/5 border border-primary/20 rounded-lg p-4 sm:p-6 text-center mb-6">
                <p className="text-sm text-muted-foreground mb-3">
                  Open your preferred UPI app and scan this QR code
                </p>
                <div className="flex gap-2 sm:gap-3 justify-center flex-wrap">
                  <span className="px-3 py-1 bg-card border border-border rounded-full text-xs sm:text-sm font-medium text-foreground">
                    Google Pay
                  </span>
                  <span className="px-3 py-1 bg-card border border-border rounded-full text-xs sm:text-sm font-medium text-foreground">
                    PhonePe
                  </span>
                  <span className="px-3 py-1 bg-card border border-border rounded-full text-xs sm:text-sm font-medium text-foreground">
                    Paytm
                  </span>
                </div>
              </div>
            </div>

            {/* Payment Details Section */}
            <div className="flex flex-col justify-center">
              {/* Membership Summary */}
              <div className="bg-card border border-border rounded-xl p-6 sm:p-8 mb-6 space-y-4">
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wide mb-1">
                    Membership Plan
                  </p>
                  <h3 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl text-foreground">
                    {plan}
                  </h3>
                </div>

                <div className="border-t border-border pt-4 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground text-sm">Amount</span>
                    <span className="text-foreground font-semibold">₹{price}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground text-sm">Payment Method</span>
                    <span className="text-foreground font-medium text-sm">UPI</span>
                  </div>
                  <div className="border-t border-border pt-3 flex justify-between items-center">
                    <span className="text-foreground font-semibold">Total</span>
                    <span className="text-primary font-bold text-xl">₹{price}</span>
                  </div>
                </div>
              </div>

              {/* Timer */}
              <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 sm:p-6 mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-sm sm:text-base text-foreground font-medium">
                    Payment expires in
                  </span>
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-primary font-mono">
                  {formatTime(timeLeft)}
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground mt-2">
                  Complete payment within this timeframe
                </p>
              </div>

              {/* Status Messages */}
              {timeLeft === 0 && !paymentVerified && (
                <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4 sm:p-6 mb-6 flex gap-3">
                  <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-destructive mb-1">Payment window expired</p>
                    <p className="text-xs text-destructive/80">Please start a new transaction</p>
                  </div>
                </div>
              )}

              {paymentVerified && (
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 sm:p-6 mb-6 flex gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-green-500">Payment successful!</p>
                    <p className="text-xs text-green-500/80">Your membership is now active</p>
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="space-y-3">
                <button
                  onClick={handleCopyUPI}
                  className="w-full py-3 px-4 bg-secondary hover:bg-secondary/80 text-secondary-foreground font-semibold rounded-lg transition-all flex items-center justify-center gap-2"
                  disabled={paymentVerified || timeLeft === 0}
                >
                  <Copy className="w-4 h-4" />
                  Copy UPI Link
                </button>

                {copied && (
                  <p className="text-center text-xs text-primary animate-pulse">
                    UPI link copied to clipboard!
                  </p>
                )}

                <Link
                  href="/"
                  className="w-full py-3 px-4 bg-card border border-border text-foreground font-semibold rounded-lg hover:bg-card/80 transition-all flex items-center justify-center gap-2"
                >
                  <Home className="w-4 h-4" />
                  Back to Home
                </Link>
              </div>

              {/* Help Text */}
              <div className="mt-8 p-4 sm:p-6 bg-card/50 border border-border rounded-lg text-center">
                <p className="text-xs sm:text-sm text-muted-foreground mb-3">
                  After scanning, you will be redirected to your UPI app. Complete the payment and you&apos;ll receive confirmation.
                </p>
                <p className="text-xs text-muted-foreground">
                  Need help? Contact our support team at <span className="text-primary font-medium">support@apexfitness.com</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
