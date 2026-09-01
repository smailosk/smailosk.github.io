import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import CustomCursor from '@/components/CustomCursor'
import ParticlesBackground from '@/components/ParticlesBackground'
import ThemeProvider from '@/components/ThemeProvider'
import StructuredData from '@/components/StructuredData'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  title: 'Ismail Amor | Flutter Engineer for Mobile Products',
  description: 'Flutter engineer in Germany building secure, maintainable mobile products for iOS and Android—from product design and architecture through delivery.',
  keywords: ['Flutter engineer', 'mobile app developer', 'Flutter developer Germany', 'cross-platform apps', 'healthcare software', 'Dart developer'],
  authors: [{ name: 'Ismail Amor', url: 'https://ismailamor.com' }],
  metadataBase: new URL('https://ismailamor.com'),
  alternates: {
    canonical: 'https://ismailamor.com',
  },
  openGraph: {
    title: 'Ismail Amor | Flutter Apps Built for Real-World Products',
    description: 'Secure mobile engineering, product thinking, and cross-platform delivery with Flutter.',
    url: 'https://ismailamor.com',
    siteName: 'Ismail Amor — Flutter Engineer',
    type: 'website',
    locale: 'en_GB',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Ismail Amor — Flutter apps built for real-world products',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ismail Amor | Flutter Apps Built for Real-World Products',
    description: 'Secure mobile engineering, product thinking, and cross-platform delivery with Flutter.',
    images: ['/og.png'],
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
  category: 'technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <StructuredData />
      </head>
      <body className={`${inter.variable} ${jetBrainsMono.variable} font-body antialiased`}>
        <ThemeProvider>
          <CustomCursor />
          <ParticlesBackground />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
