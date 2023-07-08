import { Josefin_Sans } from 'next/font/google'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>ToDo App</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </head>
      <body>{children}</body>
    </html>
  )
}
