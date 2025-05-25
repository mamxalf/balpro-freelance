import type React from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { GoogleAnalytics } from "@/app/lib/analytics";
import { MusicPlayer } from "@/components/MusicPlayer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://balpro.id"),
  title: "Balpro - Wedding Organizer Indonesia | #semuabisamenikah",
  description:
    "Balpro Wedding Enterprise menyediakan jasa Wedding Organizer & Consultation di Temanggung dan sekitarnya. Paket mulai dari Rp 2.000.000.",
  keywords:
    "wedding organizer, wedding planner, Balpro, Temanggung, Indonesia, wedding consultation, wedding packages, #semuabisamenikah",
  authors: [{ name: "Balpro Wedding Enterprise" }],
  creator: "Balpro Wedding Enterprise",
  publisher: "Balpro Wedding Enterprise",
  openGraph: {
    title: "Balpro - Wedding Organizer Indonesia | #semuabisamenikah",
    description:
      "Balpro Wedding Enterprise menyediakan jasa Wedding Organizer & Consultation di Temanggung dan sekitarnya. Paket mulai dari Rp 2.000.000.",
    url: "https://balpro.id",
    siteName: "Balpro Wedding Enterprise",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Balpro Wedding Enterprise",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Balpro - Wedding Organizer Indonesia | #semuabisamenikah",
    description:
      "Balpro Wedding Enterprise menyediakan jasa Wedding Organizer & Consultation di Temanggung dan sekitarnya. Paket mulai dari Rp 2.000.000.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  generator: "Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
        <link rel="icon" type="image/svg+xml" href="/favicon/icon0.svg" />
        <link rel="icon" type="image/png" href="/favicon/icon1.png" />
        <link rel="apple-touch-icon" href="/favicon/apple-icon.png" />
        <link rel="manifest" href="/favicon/manifest.json" />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicon/web-app-manifest-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/favicon/web-app-manifest-512x512.png"
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
          forcedTheme="light"
        >
          <GoogleAnalytics />
          {children}
          <MusicPlayer />
        </ThemeProvider>
      </body>
    </html>
  );
}
