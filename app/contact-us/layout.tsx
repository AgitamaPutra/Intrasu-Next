
import { Raleway } from 'next/font/google'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

const inter = Raleway({ subsets: ['latin'] })

export const metadata = {
  title: 'Contact Us',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
      <div lang="en" className='bg-white text-black'>
        <div className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </div>
      </div>

  )
}
