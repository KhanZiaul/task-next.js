import Footer from '@/Components/Footer/Footer'
import './globals.css'
import { Inter } from 'next/font/google'
import Nav from '@/Components/Nav/Nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'job task',
  description: 'job task',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='bg-[#F7F6F2] font-serif'>
          <Nav></Nav>
          {children}
          <Footer></Footer>
        </div>
      </body>
    </html>
  )
}
