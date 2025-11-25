import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nathalie Stocker | Supervision & Coaching',
  description: 'Raum für Reflexion und Entwicklung. Supervision, Coaching und Organisationsberatung.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  )
}
