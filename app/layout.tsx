import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { GoogleAnalytics } from "@/app/lib/analytics"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  metadataBase: new URL('https://balpro.id'),
  title: "Balpro - Wedding Organizer Indonesia | #semuabisamenikah",
  description: "Balpro Wedding Enterprise menyediakan jasa Wedding Organizer & Consultation di Temanggung dan sekitarnya. Paket mulai dari Rp 2.000.000.",
  keywords: "wedding organizer, wedding planner, Balpro, Temanggung, Indonesia, wedding consultation, wedding packages, #semuabisamenikah",
  authors: [{ name: "Balpro Wedding Enterprise" }],
  creator: "Balpro Wedding Enterprise",
  publisher: "Balpro Wedding Enterprise",
  openGraph: {
    title: "Balpro - Wedding Organizer Indonesia | #semuabisamenikah",
    description: "Balpro Wedding Enterprise menyediakan jasa Wedding Organizer & Consultation di Temanggung dan sekitarnya. Paket mulai dari Rp 2.000.000.",
    url: "https://balpro.id",
    siteName: "Balpro Wedding Enterprise",
    locale: "id_ID",
    type: "website",
    images: [{
      url: "/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Balpro Wedding Enterprise"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Balpro - Wedding Organizer Indonesia | #semuabisamenikah",
    description: "Balpro Wedding Enterprise menyediakan jasa Wedding Organizer & Consultation di Temanggung dan sekitarnya. Paket mulai dari Rp 2.000.000.",
    images: ["/og-image.jpg"]
  },
  robots: {
    index: true,
    follow: true
  },
  generator: 'Next.js'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className="light" style={{ colorScheme: "light" }}>
      <head>
        <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <GoogleAnalytics />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
