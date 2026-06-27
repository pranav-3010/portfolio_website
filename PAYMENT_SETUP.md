# Payment Integration Setup Guide

This project is configured to accept payments through Stripe. To enable the payment gateway, follow these steps:

## Step 1: Set Up Stripe Account
1. Create a Stripe account at https://stripe.com
2. Go to the Dashboard and get your API keys
3. Copy your Publishable Key (starts with `pk_`)
4. Copy your Secret Key (starts with `sk_`)

## Step 2: Add Environment Variables
In your project settings (top right → Vars), add the following environment variables:

```
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_YOUR_KEY_HERE
STRIPE_SECRET_KEY=sk_test_YOUR_KEY_HERE
```

## Step 3: Update API Route
Once environment variables are set, update `/app/api/checkout/route.ts`:

Replace the mock implementation with actual Stripe calls:

```typescript
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

// Create payment intent or subscription
const paymentIntent = await stripe.paymentIntents.create({
  amount: Math.round(amount * 100),
  currency: 'usd',
  payment_method: paymentMethodId,
  confirm: true,
})
```

## Step 4: Webhook Setup (Optional but Recommended)
Set up webhooks to handle payment events:
- Payment success notifications
- Failed payment alerts
- Subscription events

## Features Implemented

✅ Clean, responsive checkout modal
✅ Mobile, tablet, and desktop optimized
✅ Success/confirmation states
✅ Error handling and graceful failure states
✅ Consistent styling with site aesthetic
✅ Animated transitions and hover effects
✅ Plan selection and pricing display
✅ Customer email and name collection

## Testing

Use Stripe test cards:
- Success: 4242 4242 4242 4242
- Decline: 4000 0000 0000 0002
- Exp: Any future date (MM/YY)
- CVC: Any 3 digits

## Files Created/Modified

- `/components/checkout-modal.tsx` - Main checkout modal component
- `/app/api/checkout/route.ts` - Payment processing API endpoint
- `/app/membership/page.tsx` - Updated with checkout integration
