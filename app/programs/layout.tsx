
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
      <div lang="en" className='bg-white text-black'>
        <div className={inter.className}>
          {children}
        </div>
      </div>
  )
}
