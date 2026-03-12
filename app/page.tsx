import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { NavBar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { SectionHeading } from '@/components/section-heading'
import { StatusBadge } from '@/components/status-badge'
import { ProductCard } from '@/components/product-card'
import { ArrowRight, MapPin, Clock } from 'lucide-react'

export default function Home() {
  const featuredItems = [
    {
      id: '1',
      name: 'Espresso',
      description: 'Rich and bold single shot of premium coffee',
      price: 25000,
      image: '/images/espresso.jpg',
      category: 'Coffee',
    },
    {
      id: '2',
      name: 'Cappuccino',
      description: 'Creamy cappuccino with perfect latte art',
      price: 35000,
      image: '/images/cappuccino.jpg',
      category: 'Coffee',
    },
    {
      id: '3',
      name: 'Croissant',
      description: 'Fresh baked French-style croissant',
      price: 28000,
      image: '/images/croissant.jpg',
      category: 'Pastry',
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <NavBar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <Image
          src="/images/cafe-hero.jpg"
          alt="BazzCafe Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6">
            Ngopi Santai, Rasa Juara
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            Nikmati perpaduan biji kopi pilihan nusantara dengan teknik penyeduhan terbaik di Jakarta.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/menu">
              <Button size="lg" className="h-12 px-8 rounded-full">
                Explore Menu
              </Button>
            </Link>
            <Link href="/reservation">
              <Button size="lg" variant="outline" className="h-12 px-8 rounded-full border-white text-white hover:bg-white/10">
                Book a Table
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Pilihan Terpopuler"
            subtitle="Menu favorit pilihan pelanggan setia BazzCafe"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {featuredItems.map((item) => (
              <ProductCard key={item.id} {...item} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/menu">
              <Button variant="outline" className="gap-2">
                Lihat Semua Menu <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Brief */}
      <section className="py-20 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="/images/cafe-hero.jpg"
                alt="About BazzCafe"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="font-serif text-4xl font-bold">Cerita di Balik BazzCafe</h2>
              <p className="text-muted-foreground leading-relaxed">
                BazzCafe didirikan dengan semangat untuk menghadirkan kopi berkualitas tinggi yang dapat dinikmati semua kalangan. Kami bekerja sama langsung dengan petani lokal untuk memastikan setiap biji kopi dikelola dengan penuh cinta.
              </p>
              <Link href="/about">
                <Button className="rounded-full">Baca Selengkapnya</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Hours */}
            <div className="bg-card p-8 rounded-2xl border border-border flex gap-6">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent">
                <Clock className="w-6 h-6" />
              </div>
              <div className="space-y-4 flex-1">
                <h3 className="text-xl font-bold font-serif">Jam Buka</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Senin - Jumat</span>
                    <span>08:00 - 21:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sabtu - Minggu</span>
                    <span>09:00 - 22:00</span>
                  </div>
                </div>
                <StatusBadge status="open" time="Ayo mampir sekarang!" />
              </div>
            </div>

            {/* Location */}
            <div className="bg-card p-8 rounded-2xl border border-border flex gap-6">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold font-serif">Lokasi</h3>
                <p className="text-sm text-muted-foreground">
                  Jl. Kopi Premium No. 42,<br />
                  Jakarta, Indonesia
                </p>
                <a href="#" className="text-accent text-sm font-semibold hover:underline flex items-center gap-1">
                  Buka di Maps <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
