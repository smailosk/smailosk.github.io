import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import CustomCursor from '@/components/CustomCursor'
import ParticlesBackground from '@/components/ParticlesBackground'
import ThemeProvider from '@/components/ThemeProvider'
import StructuredData from '@/components/StructuredData'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  title: 'Ismail Amor - Flutter Developer Germany | Mobile App Development Europe',
  description: 'Expert Flutter developer in Germany offering mobile app development services across Europe. 3+ years building iOS & Android apps. Available for projects in EU, UK, Switzerland. German work permit, speaks English, German, French.',
  keywords: 'Flutter developer Germany, Flutter developer Europe, Flutter entwickler Deutschland, mobile app developer Berlin, Flutter developer Dortmund, Flutter freelancer EU, European Flutter expert, Flutter Entwicklung, développeur Flutter, Flutter developer Netherlands, Flutter developer UK, Flutter developer Switzerland, mobile app development Germany, cross-platform apps Europe, healthcare app developer Germany, Flutter consultant Europe, German Flutter programmer, EU mobile developer, Flutter remote developer Europe, Dart developer Germany',
  authors: [{ name: 'Ismail Amor', url: 'https://ismailamor.com' }],
  metadataBase: new URL('https://ismailamor.com'),
  alternates: {
    canonical: 'https://ismailamor.com',
    languages: {
      'en-EU': 'https://ismailamor.com',
      'de-DE': 'https://ismailamor.com/de',
      'fr-FR': 'https://ismailamor.com/fr',
      'en-GB': 'https://ismailamor.com/uk',
      'en-US': 'https://ismailamor.com/us',
    },
  },
  openGraph: {
    title: 'Ismail Amor - Flutter Developer Germany | European Mobile App Expert',
    description: 'Flutter developer based in Germany, serving clients across Europe. 3+ years experience building apps for EU companies. Available for remote & on-site projects in Germany, Netherlands, UK, France.',
    url: 'https://ismailamor.com',
    siteName: 'Ismail Amor - Flutter Developer Europe',
    type: 'website',
    locale: 'en_GB',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Ismail Amor - Expert Flutter Developer for Cross-Platform Mobile Apps',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ismail Amor - Expert Flutter Developer for Hire',
    description: 'Professional Flutter developer building cross-platform mobile apps. 3+ years experience. Available for freelance projects.',
    creator: '@ismailamor',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body className={`${inter.variable} font-body antialiased`}>
        <ThemeProvider>
          <CustomCursor />
          <ParticlesBackground />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}