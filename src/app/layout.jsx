import '../styles/index.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Gif Generator App By Rafacli',
  description: 'Uses JavaScript, Next.js, React.js, Gif.js, html2canvas and tailwindcss. The gif creation is maded in client side. &#128516;',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
