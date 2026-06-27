'use client'

import { useState } from 'react'
import { X, Check, AlertCircle, Loader2, Download, Copy } from 'lucide-react'
import QRCode from 'qrcode.react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '')

interface CheckoutModalProps {
  isOpen: boolean
  onClose: () => void
  tier: {
    name: string
    price: number
    interval: string
    features: string[]
  }
}

interface SuccessData {
  orderId: string
  membershipId: string
  fullName: string
  email: string
  tier: string
  expiryDate: string
}

function CheckoutForm({ tier, onSuccess }: { tier: CheckoutModalProps['tier']; onSuccess: (data: SuccessData) => void }) {
  const stripe = useStripe()
  const elements = useElements()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [email, setEmail] = useState('')
  const [fullName, setFullName] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!stripe || !elements) {
      setError('Payment system not loaded. Please refresh and try again.')
      return
    }

    setLoading(true)
    setError(null)

    try {
      // Create payment method with card details
      const cardElement = elements.getElement(CardElement)
      const { error: paymentError, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement!,
        billing_details: {
          name: fullName,
          email: email,
        },
      })

      if (paymentError) {
        setError(paymentError.message || 'Payment failed. Please try again.')
        setLoading(false)
        return
      }

      // Call your backend API to create subscription/payment
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          paymentMethodId: paymentMethod?.id,
          email,
          fullName,
          tier: tier.name,
          amount: tier.price,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.error || 'Payment processing failed')
        setLoading(false)
        return
      }

      // Calculate expiry date based on interval
      const expiryDate = new Date()
      if (tier.interval === 'month') {
        expiryDate.setMonth(expiryDate.getMonth() + 1)
      } else {
        expiryDate.setFullYear(expiryDate.getFullYear() + 1)
      }

      // Generate membership ID
      const membershipId = `MEM-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`

      // Success with membership data
      onSuccess({
        orderId: data.orderId || `ORD-${Date.now()}`,
        membershipId,
        fullName,
        email,
        tier: tier.name,
        expiryDate: expiryDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Customer Info */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
          className="w-full px-4 py-2 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
          placeholder="John Doe"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-2 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
          placeholder="you@example.com"
        />
      </div>

      {/* Card Element */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Card Details</label>
        <div className="px-4 py-3 bg-card border border-border rounded-lg">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: '16px',
                  color: 'var(--color-foreground)',
                  '::placeholder': {
                    color: 'var(--color-muted-foreground)',
                  },
                },
                invalid: {
                  color: '#ff6b6b',
                },
              },
            }}
          />
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="flex items-center gap-3 p-3 bg-destructive/10 border border-destructive/20 rounded-lg">
          <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0" />
          <p className="text-sm text-destructive">{error}</p>
        </div>
      )}

      {/* Order Summary */}
      <div className="p-4 bg-card/50 border border-border rounded-lg space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">{tier.name} Plan</span>
          <span className="text-foreground font-medium">${tier.price}</span>
        </div>
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>per {tier.interval}</span>
        </div>
        <div className="border-t border-border pt-2 flex justify-between">
          <span className="text-foreground font-semibold">Total</span>
          <span className="text-primary font-bold">${tier.price}</span>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={!stripe || loading}
        className="w-full py-3 px-4 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-semibold rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {loading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Processing...
          </>
        ) : (
          <>
            Pay ${tier.price}
          </>
        )}
      </button>

      <p className="text-xs text-muted-foreground text-center">
        Your payment is secured and encrypted by Stripe
      </p>
    </form>
  )
}

export function CheckoutModal({ isOpen, onClose, tier }: CheckoutModalProps) {
  const [step, setStep] = useState<'checkout' | 'success' | 'error'>('checkout')
  const [errorMessage, setErrorMessage] = useState('')
  const [successData, setSuccessData] = useState<SuccessData | null>(null)
  const [copied, setCopied] = useState(false)

  if (!isOpen) return null

  const handleSuccess = (data: SuccessData) => {
    setSuccessData(data)
    setStep('success')
  }

  const handleClose = () => {
    setStep('checkout')
    setErrorMessage('')
    setSuccessData(null)
    setCopied(false)
    onClose()
  }

  const handleDownloadQR = () => {
    if (successData) {
      const canvas = document.querySelector('canvas')
      if (canvas) {
        const url = canvas.toDataURL('image/png')
        const link = document.createElement('a')
        link.href = url
        link.download = `membership-qr-${successData.membershipId}.png`
        link.click()
      }
    }
  }

  const handleCopyMembershipId = () => {
    if (successData) {
      navigator.clipboard.writeText(successData.membershipId)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative bg-background border border-border rounded-xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        {step === 'checkout' && (
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-10 p-2 hover:bg-card rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-muted-foreground" />
          </button>
        )}

        {step === 'checkout' && (
          <div className="p-6 sm:p-8">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl text-foreground mb-2">
              Upgrade to {tier.name}
            </h2>
            <p className="text-muted-foreground text-sm mb-6">
              Complete your subscription to get started today
            </p>

            <Elements stripe={stripePromise}>
              <CheckoutForm tier={tier} onSuccess={handleSuccess} />
            </Elements>
          </div>
        )}

        {step === 'success' && successData && (
          <div className="p-6 sm:p-8">
            {/* Success Header */}
            <div className="flex flex-col items-center justify-center text-center mb-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 animate-pulse">
                <Check className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-[family-name:var(--font-heading)] text-2xl text-foreground mb-2">
                Payment Successful!
              </h3>
              <p className="text-muted-foreground text-sm">
                Your {tier.name} membership is now active
              </p>
            </div>

            {/* Membership Details */}
            <div className="bg-card/50 border border-border rounded-lg p-4 mb-6 space-y-3">
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground uppercase tracking-wide">Membership ID</p>
                <div className="flex items-center gap-2">
                  <code className="text-sm font-mono text-foreground flex-1 truncate">{successData.membershipId}</code>
                  <button
                    onClick={handleCopyMembershipId}
                    className="p-2 hover:bg-card rounded transition-colors"
                    title="Copy membership ID"
                  >
                    <Copy className="w-4 h-4 text-primary" />
                  </button>
                </div>
              </div>
              <div className="border-t border-border pt-3 space-y-2">
                <p className="text-xs text-muted-foreground uppercase tracking-wide">Membership Details</p>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Plan:</span>
                  <span className="text-foreground font-medium">{successData.tier}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Valid Until:</span>
                  <span className="text-foreground font-medium">{successData.expiryDate}</span>
                </div>
              </div>
            </div>

            {/* QR Code Section */}
            <div className="bg-card/30 border border-primary/20 rounded-lg p-6 mb-6 flex flex-col items-center">
              <p className="text-xs text-muted-foreground uppercase tracking-wide mb-4">Your Membership QR Code</p>
              <div className="bg-white p-3 rounded-lg mb-4">
                <QRCode 
                  value={successData.membershipId}
                  size={200}
                  level="H"
                  includeMargin={true}
                  quietZone={10}
                />
              </div>
              <p className="text-xs text-muted-foreground text-center mb-3">
                Show this QR code at the gym to verify your membership
              </p>
              <button
                onClick={handleDownloadQR}
                className="w-full py-2 px-3 bg-primary/10 border border-primary/30 text-primary text-sm font-medium rounded-lg hover:bg-primary/20 transition-all flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download QR Code
              </button>
            </div>

            {/* Confirmation Message */}
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-6 text-center text-sm text-muted-foreground">
              <p>A confirmation email has been sent to <span className="font-medium text-foreground">{successData.email}</span></p>
            </div>

            {/* Action Buttons */}
            <div className="w-full space-y-3">
              <button
                onClick={handleClose}
                className="w-full py-3 px-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all"
              >
                Start Training
              </button>
              <button
                onClick={handleClose}
                className="w-full py-3 px-4 bg-card border border-border text-foreground font-semibold rounded-lg hover:bg-card/80 transition-all"
              >
                Back to Home
              </button>
            </div>

            {/* Copy Confirmation */}
            {copied && (
              <div className="mt-4 text-xs text-center text-primary animate-pulse">
                Membership ID copied to clipboard!
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
