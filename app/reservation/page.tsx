'use client'

import { useState } from 'react'
import { NavBar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { SectionHeading } from '@/components/section-heading'
import { CheckCircle2, Users, Clock } from 'lucide-react'

import { toast } from 'sonner'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'

export default function ReservationPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: '2',
    notes: '',
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      toast.success('BazzCafe - Reservasi Berhasil!', {
        description: `Halo ${formData.name}, kami telah mencatat reservasi Anda untuk ${formData.date} pukul ${formData.time}.`,
      })
      setFormData({ name: '', email: '', date: '', time: '', guests: '2', notes: '' })
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-background">
      <NavBar />

      <section className="bg-card border-b border-border py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Reservasi Meja"
            subtitle="Pesan tempat favoritmu sekarang untuk pengalaman ngopi yang lebih berkesan"
            centered
          />
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card p-8 rounded-2xl border border-border shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold">Nama Lengkap</label>
                  <Input name="name" value={formData.name} onChange={handleInputChange} required placeholder="Masukkan nama Anda" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold">Email</label>
                  <Input type="email" name="email" value={formData.email} onChange={handleInputChange} required placeholder="email@example.com" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold">Tanggal</label>
                  <Input type="date" name="date" value={formData.date} onChange={handleInputChange} required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold">Jam</label>
                  <Input type="time" name="time" value={formData.time} onChange={handleInputChange} required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold">Jumlah Tamu</label>
                  <Select name="guests" value={formData.guests} onValueChange={(val) => setFormData(p => ({ ...p, guests: val }))}>
                    <SelectTrigger><SelectValue placeholder="Jumlah Tamu" /></SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5, 6, 7, 8].map(n => (
                        <SelectItem key={n} value={n.toString()}>{n} Orang</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold">Catatan Tambahan (Opsional)</label>
                <Textarea name="notes" value={formData.notes} onChange={handleInputChange} rows={4} placeholder="Contoh: Meja di dekat jendela, perayaan ulang tahun, dsb." />
              </div>

              <Button type="submit" className="w-full h-12 text-lg font-bold" disabled={isLoading}>
                {isLoading ? 'Memproses...' : 'Konfirmasi Reservasi'}
              </Button>
            </form>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center space-y-2 text-sm text-muted-foreground">
              <Clock className="w-5 h-5 text-accent" />
              <p>Waktu Tunggu 15 Menit</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2 text-sm text-muted-foreground">
              <Users className="w-5 h-5 text-accent" />
              <p>Kapasitas Maksimal 8 Orang</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2 text-sm text-muted-foreground">
              <CheckCircle2 className="w-5 h-5 text-accent" />
              <p>Konfirmasi Instan</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
