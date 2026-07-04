import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import { siteConfig } from '@/constants/navigation'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — Premium Business Website Design Agency`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    'Krivyaan builds fast, modern, and high-converting business websites for companies in India, USA, UK, Australia, and Canada. From corporate sites to e-commerce — we deliver premium digital experiences.',
  keywords: [
    'business website design',
    'web design agency',
    'web design agency India',
    'website design India',
    'corporate website',
    'landing page design',
    'e-commerce website',
    'website redesign',
    'Next.js agency',
    'India web design',
    'USA web design',
    'UK web design',
    'Australia web design',
    'Canada web design',
  ],
  authors: [{ name: 'Krivyaan', url: siteConfig.url }],
  creator: 'Krivyaan',
  publisher: 'Krivyaan',
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — Premium Business Website Design Agency`,
    description:
      'We build fast, modern business websites that help companies across India, USA, UK, Australia, and Canada grow online.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Krivyaan — Premium Business Website Design Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} — Premium Business Website Design Agency`,
    description:
      'We build fast, modern business websites that help companies grow online — serving India, USA, UK, Australia & Canada.',
    images: ['/og-image.png'],
    creator: '@krivyaan',
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
  icons: {
    icon: [
      { url: '/logo.png', type: 'image/png' },
    ],
    apple: '/logo.png',
    shortcut: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${plusJakarta.variable} font-sans antialiased bg-white text-slate-900`}
      >
        {children}
      </body>
    </html>
  )
}
