import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { CosmicBackground } from '@/components/cosmic-background'
import { PageLoader } from '@/components/page-loader'
import './globals.css'

import { Chelsea_Market } from 'next/font/google'

const chelseaMarket = Chelsea_Market({ 
  weight: "400",
  subsets: ["latin"],
  variable: '--font-chelsea-market'
})

export const metadata: Metadata = {
  title: 'Royal Enfield Hunter 350 MoonShot | Built for the Streets',
  description: 'Experience the all-new Royal Enfield Hunter 350 MoonShot White Edition. A perfect blend of retro styling and modern performance. 349cc engine, urban design, pure adrenaline.',
  keywords: ['Royal Enfield', 'Hunter 350', 'MoonShot', 'Motorcycle', 'Street Bike', 'Urban Rider'],
  openGraph: {
    title: 'Royal Enfield Hunter 350 MoonShot',
    description: 'Built for the Streets. Experience pure urban performance.',
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/tyre-favicon_io/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/tyre-favicon_io/favicon-16x16.png', sizes: '16x16', type: 'image/png' }
    ],
    apple: '/tyre-favicon_io/apple-touch-icon.png',
  },
  manifest: '/tyre-favicon_io/site.webmanifest',
}

export const viewport: Viewport = {
  themeColor: '#0d0d0f',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${chelseaMarket.variable} bg-background`}>
      <body className="font-sans antialiased overflow-x-hidden">
        <PageLoader />
        <CosmicBackground />
        <div className="noise-overlay" />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
