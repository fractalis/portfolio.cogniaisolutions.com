import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Digital Horizons',
  description: 'Unleashing Innovations',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script type="text/javascript" src="js/parallax.js"/>
      </head>
      <body className={inter.className}>
        <div className="body-container">
          {children}
        </div>
      </body>
    </html>
  )
}
