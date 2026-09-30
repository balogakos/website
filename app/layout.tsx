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
  title: 'Ákos Balog — Geographic Data Science',
  description:
    'Research Data Scientist & Postdoctoral Researcher in Geographic Data Science at the University of Liverpool. Research in spatial data, urban systems, and simulation.',
  generator: 'v0.app',
  keywords: [
    'Geographic Data Science',
    'Spatial Analysis',
    'Urban Systems',
    'Agent-Based Modelling',
    'Postdoctoral Researcher',
    'Research Data Scientist',
    'Research',
  ],
  openGraph: {
    title: 'Ákos Balog — Geographic Data Science',
    description:
      'Research Data Scientist & Postdoctoral Researcher at the University of Liverpool working in spatial data, urban analytics, and simulation.',
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
