import Image from 'next/image'
import { NavBar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { SectionHeading } from '@/components/section-heading'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />

      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden flex items-center justify-center">
        <Image
          src="/images/cafe-hero.jpg"
          alt="About BazzCafe"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-3">
            Tentang BazzCafe
          </h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Cerita kopi kami dimulai dari dedikasi dan cinta terhadap cita rasa nusantara.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/cafe-hero.jpg"
                alt="Our Story"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <SectionHeading
                title="Kisah Kami"
                subtitle="Perjalanan membangun budaya kopi"
              />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  BazzCafe didirikan pada tahun 2020 dengan visi membawa pengalaman kopi premium ke setiap pecinta kopi di Jakarta. Kami percaya setiap cangkir kopi adalah cerita yang layak dinikmati.
                </p>
                <p>
                  Dimulai dari kecintaan terhadap biji kopi lokal, kami terus mengeksplorasi berbagai teknik roasting dan brewing untuk menghasilkan rasa yang seimbang dan nikmat.
                </p>
                <p>
                  Kini BazzCafe hadir sebagai ruang ketiga bagi pelanggan untuk bersantai, bekerja, dan terhubung kembali dengan diri sendiri maupun orang lain.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Visi & Misi"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-background p-8 rounded-2xl border border-border space-y-4">
              <h3 className="font-serif text-2xl font-bold">Visi Kami</h3>
              <p className="text-muted-foreground">
                Menjadi destinasi kopi terdepan yang menginspirasi gaya hidup modern dengan tetap menjunjung tinggi nilai-nilai lokal.
              </p>
            </div>
            <div className="bg-background p-8 rounded-2xl border border-border space-y-4">
              <h3 className="font-serif text-2xl font-bold">Misi Kami</h3>
              <p className="text-muted-foreground">
                Menyediakan kopi berkualitas tinggi, menciptakan ruang yang inklusif, dan mendukung petani kopi lokal untuk keberlanjutan masa depan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Basic Gallery */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Suasana Cafe"
            centered
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12">
            {[1, 2, 3, 4, 5, 6].map((idx) => (
              <div key={idx} className="relative aspect-square rounded-xl overflow-hidden bg-muted">
                <Image
                  src={`/images/${['espresso', 'cappuccino', 'croissant', 'iced-coffee', 'tiramisu', 'cafe-hero'][idx - 1]}.jpg`}
                  alt={`Gallery ${idx}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
