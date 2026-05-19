import type { ReactNode } from 'react'

export const metadata = {
  title: 'Next.js App',
  description: 'Created with AI Forge',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
