import NoteContextProvider from '@/context/NoteContext'
import './globals.css'
import ThemeContextProvider from '@/context/ThemeContext'

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
      <ThemeContextProvider>
        <NoteContextProvider>
          <body>{children}</body>
        </NoteContextProvider>
      </ThemeContextProvider>

    </html>
  )
}
