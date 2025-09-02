import './globals.css'
import localFont from 'next/font/local'
import type { Metadata } from 'next'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
  display: 'swap',
})

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: "NOVA — Formations d'excellence",
    template: "%s — NOVA",
  },
  description: "Créateurs de formations d'excellence pour accélérer votre carrière",
  openGraph: {
    title: "NOVA — Formations d'excellence",
    description: "Créateurs de formations d'excellence pour accélérer votre carrière",
    url: '/',
    siteName: 'NOVA',
    locale: 'fr_FR',
    type: 'website',
    images: ['/og'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "NOVA — Formations d'excellence",
    description: "Créateurs de formations d'excellence pour accélérer votre carrière",
    creator: '@nova',
    images: ['/og'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 bg-white text-[#103428] px-3 py-2 rounded">
          Aller au contenu principal
        </a>
        {children}
        {/* Analytics */}
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script suppressHydrationWarning>
          {`try{var s=document.createElement('script');s.src='https://va.vercel-scripts.com/v1/script.debug.js';s.defer=true;document.body.appendChild(s);}catch(e){}`}
        </script>
      </body>
    </html>
  )
}