import './globals.css'
import { Figtree } from 'next/font/google'
import type { Metadata } from 'next'

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['400', '600'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'NOVA - Formations d\'excellence',
  description: 'Créateurs de formations d\'excellence pour accélérer votre carrière',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={figtree.className}>{children}</body>
    </html>
  )
}