import type { Metadata } from 'next'
import { Geist, Geist_Mono, Playfair_Display, Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const _playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });
const _poppins = Poppins({ weight: ["400", "500", "600", "700"], subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: 'BazzCafe - Premium Coffee Experience Jakarta',
  description: 'Nikmati kopi premium dan suasana otentik cafe Indonesia di BazzCafe. Ngopi Santai, Rasa Juara.',
  generator: 'BazzCafe Team',
}

import { ThemeProvider } from '@/components/theme-provider'

import { Toaster } from '@/components/ui/sonner'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" suppressHydrationWarning className={`${_poppins.variable} ${_playfair.variable}`}>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster position="top-center" richColors />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
