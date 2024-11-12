/* eslint-disable camelcase */
import ClientLayout from '@/components/ClientLayout'
import type { Metadata } from 'next'
import { League_Spartan } from 'next/font/google'
import './globals.css'

const league_spartan = League_Spartan({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio VK',
  description: 'Desenvolvedor Full-Stack',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={league_spartan.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
