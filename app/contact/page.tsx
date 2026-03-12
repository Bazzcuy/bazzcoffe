'use client'
// Triggering new build a51 verify

import { useState } from 'react'
import Image from 'next/image'
import { NavBar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { SectionHeading } from '@/components/section-heading'
import { Button } from '@/components/ui/button'
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react'
import { toast } from 'sonner'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '', // Added subject
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false) // Renamed isLoading to isSubmitting

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true) // Use isSubmitting

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false) // Use isSubmitting
      toast.success('Pesan Terkirim!', {
        description: `Halo ${formData.name}, kami akan membalas pesan Anda sesegera mungkin.`,
      })
      setFormData({ name: '', email: '', subject: '', message: '' }) // Reset subject
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-background">
      <NavBar />

      <section className="bg-card border-b border-border py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Hubungi Kami"
            subtitle="Ada pertanyaan atau ingin kerja sama? Kami siap mendengarkan."
            centered
          />
          <div className="mt-16 rounded-[2.5rem] overflow-hidden border border-border h-[500px] relative group shadow-2xl">
            <Image
              src="/images/cafe-hero.jpg"
              alt="Map Preview"
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-1000" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/90 dark:bg-black/90 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-white/20 text-center animate-bounce">
                <MapPin className="w-12 h-12 text-accent mx-auto mb-4" />
                <div className="font-serif text-xl font-bold">BazzCafe Jakarta</div>
                <div className="text-sm text-muted-foreground">Open in Google Maps</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
