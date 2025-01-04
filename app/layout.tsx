import type { Metadata, Viewport } from "next"
import { Playfair_Display } from 'next/font/google'
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import "./globals.css"
import { Toaster } from "sonner"

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: "Reconforta - Coffee Catering",
  description: "Servicio profesional de café para eventos especiales en Lima Metropolitana. Ofrecemos una experiencia única con calidad y elegancia.",
  keywords: "coffee catering, eventos, café, Lima, catering, eventos especiales, servicio de café",
  authors: [{ name: "Reconforta" }],
  openGraph: {
    title: "Reconforta - Coffee Catering",
    description: "Servicio profesional de café para eventos especiales en Lima Metropolitana",
    type: "website",
    locale: "es_PE",
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={playfair.variable}>
      <body className={`flex flex-col min-h-screen font-sans antialiased`}>
        <Navigation />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
        <Toaster position="top-center" />
      </body>
    </html>
  )
}

