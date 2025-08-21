import './globals.css'

import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'

import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import UserSync from '@/components/ui/UserSync'
import { Providers } from '@/lib/components/utilities/providers'
import { ServiceWorkerRegistration } from '@/lib/components/utilities/service-worker'

// Optimized font loading with preload
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
})

export const metadata: Metadata = {
  title: 'Noventa Bakery - Artisan Baked Goods Since 1928',
  description:
    'Experience the finest handcrafted breads, pastries, and treats made with love and traditional recipes. Fresh daily from our master bakers.',
  keywords: 'bakery, artisan bread, pastries, fresh baked goods, traditional recipes',
  authors: [{ name: 'Noventa Bakery' }],
  metadataBase: new URL('https://noventa.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Noventa Bakery - Artisan Baked Goods Since 1928',
    description:
      'Experience the finest handcrafted breads, pastries, and treats made with love and traditional recipes.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Noventa Bakery - Artisan Baked Goods Since 1928',
    description:
      'Experience the finest handcrafted breads, pastries, and treats made with love and traditional recipes.',
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
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ed7c47',
  maximumScale: 5,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        {}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://img.chefkoch-cdn.de" />
        <link rel="preconnect" href="https://cdn.tasteatlas.com" />

        {}
        <link rel="dns-prefetch" href="https://image.brigitte.de" />
        <link rel="dns-prefetch" href="https://c.rewe-static.de" />
        <link rel="dns-prefetch" href="https://www.baeckerei-kolls.de" />
        <link rel="dns-prefetch" href="https://static.cordonbleu.edu" />
        <link rel="dns-prefetch" href="https://www.hormelfoods.com" />
        <link rel="dns-prefetch" href="https://www.baeckerei-stoelzel.de" />
        <link rel="dns-prefetch" href="https://www.froneri-schoeller.de" />
        <link rel="dns-prefetch" href="https://www.leckerschmecker.me" />
        <link rel="dns-prefetch" href="https://external-content.duckduckgo.com" />

        {}
        <link rel="preload" href="/favicon.ico" as="image" type="image/x-icon" />

        {}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Noventa Bakery" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#ed7c47" />

        {}
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Providers attribute="class" defaultTheme="light" enableSystem>
          {}
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          <UserSync />
          <Header />
          <main id="main-content" className="min-h-screen">
            {children}
          </main>
          <Footer />
          <ServiceWorkerRegistration />
        </Providers>
      </body>
    </html>
  )
}
