
import './globals.css'
import { motion, AnimatePresence } from 'framer-motion'
import { Raleway } from 'next/font/google'
import Navbar from './components/navbar'
import Footer from './components/footer'


const inter = Raleway({ subsets: ['latin'] })

export const metadata = {
  title: 'Intrasu Indonesia',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en" className='bg-white text-black'>
        <body className={inter.className}>
          {children}
        </body>
      </html>

  )
}
