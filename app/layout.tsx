import type { Metadata } from 'next'
import { Navbar, Footer } from '@/components'
import './globals.css'


export const metadata: Metadata = {
  title: 'GetItFast',
  description: 'Discover and get your car fastly',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='relative'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
