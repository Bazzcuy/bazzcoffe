'use client'

import { useState } from 'react'
import { NavBar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { SectionHeading } from '@/components/section-heading'
import { PricingCard } from '@/components/pricing-card'
import { CheckCircle2 } from 'lucide-react'

const dummyOrder = [
  { name: 'Cappuccino', quantity: 2, price: 35000 },
  { name: 'Croissant', quantity: 1, price: 28000 },
]

export default function CheckoutPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  })
  const [paymentMethod, setPaymentMethod] = useState('qris')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <div className="min-h-screen bg-background">
      <NavBar />

      {/* Page Header */}
      <section className="bg-card border-b border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Checkout"
            subtitle="Complete your order"
          />
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Customer Information */}
                <div className="bg-card rounded-lg border border-border p-8 space-y-6">
                  <h3 className="font-serif text-xl font-bold text-foreground">
                    Customer Information
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent"
                        placeholder="+62 812 3456 7890"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Delivery Address *
                      </label>
                      <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                        rows={3}
                        className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                        placeholder="Enter your delivery address"
                      />
                    </div>
                  </div>
                </div>

                {/* Payment Method */}
                <div className="bg-card rounded-lg border border-border p-8 space-y-6">
                  <h3 className="font-serif text-xl font-bold text-foreground">
                    Payment Method
                  </h3>

                  <div className="space-y-3">
                    <label className="flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer transition-colors"
                      style={{ borderColor: paymentMethod === 'qris' ? 'var(--accent)' : 'var(--border)', backgroundColor: paymentMethod === 'qris' ? 'var(--accent)' : 'var(--card)' }}
                    >
                      <input
                        type="radio"
                        name="payment"
                        value="qris"
                        checked={paymentMethod === 'qris'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="w-4 h-4"
                      />
                      <div className={paymentMethod === 'qris' ? 'text-accent-foreground' : 'text-foreground'}>
                        <p className="font-semibold">QRIS / Transfer</p>
                        <p className={`text-sm ${paymentMethod === 'qris' ? 'text-accent-foreground/80' : 'text-foreground/70'}`}>
                          Bank transfer via QRIS code
                        </p>
                      </div>
                    </label>

                    <label className="flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer transition-colors"
                      style={{ borderColor: paymentMethod === 'cod' ? 'var(--accent)' : 'var(--border)', backgroundColor: paymentMethod === 'cod' ? 'var(--accent)' : 'var(--card)' }}
                    >
                      <input
                        type="radio"
                        name="payment"
                        value="cod"
                        checked={paymentMethod === 'cod'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="w-4 h-4"
                      />
                      <div className={paymentMethod === 'cod' ? 'text-accent-foreground' : 'text-foreground'}>
                        <p className="font-semibold">Cash on Delivery</p>
                        <p className={`text-sm ${paymentMethod === 'cod' ? 'text-accent-foreground/80' : 'text-foreground/70'}`}>
                          Pay when your order arrives
                        </p>
                      </div>
                    </label>
                  </div>

                  {paymentMethod === 'qris' && (
                    <div className="bg-background p-6 rounded-lg border border-border text-center space-y-3">
                      <p className="text-sm font-medium text-foreground/70">QRIS Code</p>
                      <div className="w-32 h-32 bg-muted rounded-lg mx-auto flex items-center justify-center">
                        <span className="text-foreground/50">QR Code</span>
                      </div>
                      <p className="text-xs text-foreground/60">
                        Scan this QR code with your banking app to complete payment
                      </p>
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                >
                  Place Order
                </Button>
              </form>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <PricingCard items={dummyOrder} showBreakdown={true} />
            </div>
          </div>
        </div>
      </section>

      {/* Success Toast */}
      {isSubmitted && (
        <div className="fixed bottom-8 left-8 right-8 md:left-auto md:right-8 md:w-96 bg-green-100 border border-green-300 text-green-800 p-4 rounded-lg shadow-lg flex items-center gap-3 dark:bg-green-900/30 dark:border-green-800 dark:text-green-400">
          <CheckCircle2 className="w-5 h-5" />
          <div>
            <p className="font-semibold">Order Placed!</p>
            <p className="text-sm">Thank you for your order. You will receive a confirmation email shortly.</p>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
