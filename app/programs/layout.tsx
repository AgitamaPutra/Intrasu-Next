"use client"
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import { motion, AnimatePresence } from 'framer-motion'
import { Raleway } from 'next/font/google'

const inter = Raleway({ subsets: ['latin'] })

export const metadata = {
  title: 'Our Programs',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AnimatePresence mode='wait'>
      <motion.div lang="en" className='bg-white text-black'>
        <motion.div className={inter.className}>
          {children}
          <motion.div
            className='slide-in'
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          ></motion.div>
          <motion.div
            className='slide-out'
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          ></motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
