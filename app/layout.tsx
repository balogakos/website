import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Akos Balog — Geographic Data Science',
  description:
    'PhD Student in Geographic Data Science. Research in spatial data, urban systems, and digital planning.',
  generator: 'v0.app',
  keywords: ['Geographic Data Science', 'Spatial Analysis', 'Urban Systems', 'PhD', 'Research'],
  openGraph: {
    title: 'Akos Balog — Geographic Data Science',
    description: 'PhD Student in Geographic Data Science researching spatial data, urban systems, and digital planning.',
    type: 'website',
  },
}
import { Background } from '@/components/background'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.variable} font-sans antialiased bg-background text-foreground`}>
        <Background />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
