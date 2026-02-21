import './globals.css'

export const metadata = {
  title: 'Luke Kemp Video Analytics',
  description: 'Email outreach performance dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
