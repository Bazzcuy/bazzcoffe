'use client'

import { useState } from 'react'
import { NavBar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { SectionHeading } from '@/components/section-heading'
import { Button } from '@/components/ui/button'
import { Star } from 'lucide-react'
import { toast } from 'sonner'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function FeedbackPage() {
  const [rating, setRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)
  const [hover, setHover] = useState(0)
  const [comment, setComment] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (rating === 0) {
      toast.error('Rating Diperlukan', {
        description: 'Silakan pilih rating bintang sebelum mengirim.',
      })
      return
    }

    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      toast.success('Terima Kasih!', {
        description: 'Feedback Anda sangat berharga bagi perkembangan kami.',
      })
      setRating(0)
      setComment('')
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-background">
      <NavBar />

      <section className="bg-card border-b border-border py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Suara Pelanggan"
            subtitle="Bagikan pengalaman Anda bersama kami untuk pelayanan yang lebih baik"
            centered
          />
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card p-8 rounded-2xl border border-border shadow-sm space-y-8">
            <div className="text-center space-y-4">
              <h3 className="text-xl font-bold">Berapa bintang untuk kami?</h3>
              <div className="flex justify-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    className="transition-transform hover:scale-110"
                    onMouseEnter={() => setHover(star)}
                    onMouseLeave={() => setHover(0)}
                    onClick={() => setRating(star)}
                  >
                    <Star
                      className={`w-10 h-10 ${star <= (hover || rating)
                        ? 'fill-accent text-accent'
                        : 'text-muted'
                        }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold">Nama Anda (Opsional)</label>
                <Input placeholder="Masukkan nama Anda" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold">Tulis Feedback</label>
                <Textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Ceritakan pengalaman Anda..."
                  rows={5}
                  required
                />
              </div>
              <Button type="submit" className="w-full h-12 text-lg font-bold" disabled={isSubmitting}>
                {isSubmitting ? 'Mengirim...' : 'Kirim Feedback'}
              </Button>
            </form>
          </div>

          <div className="mt-20">
            <SectionHeading title="Ulasan Terbaru" centered />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {[
                { name: 'Andi Pratama', text: 'Kopi Gula Aren nya juara banget! Suasananya juga enak buat kerja.', rating: 5 },
                { name: 'Siti Aminah', text: 'Pelayanan ramah dan cepat. Croissant nya renyah.', rating: 4 },
              ].map((review, i) => (
                <div key={i} className="p-6 bg-card border border-border rounded-xl space-y-4">
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-sm italic text-muted-foreground mr-1">&quot;{review.text}&quot;</p>
                  <div className="font-bold text-sm">{review.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
