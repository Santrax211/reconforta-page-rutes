//components/ui/navigation.tsx
"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { Playfair_Display } from 'next/font/google'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['400', '500', '600'],
})

export function Navigation() {
  const pathname = usePathname()
  
  const links = [
    { href: "/", label: "Inicio" },
    { href: "/quienes-somos", label: "Quiénes somos" },
    { href: "/servicios", label: "Servicios" },
    { href: "/planes", label: "Planes" },
    { href: "/contactanos", label: "Contáctanos" },
  ]

  return (
    <nav className="bg-[#1A1A1A] w-full fixed top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo Text */}
          <Link href="/" className="flex items-center">
            <div className={`text-amber-400 ${playfair.className}`}>
              <span className="text-2xl font-semibold">Reconforta</span>
              <span className="block text-sm">COFFEE CATERING</span>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center justify-center flex-1 mx-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-sm font-medium transition-colors
                  ${pathname === link.href 
                    ? "text-amber-400" 
                    : "text-amber-200 hover:text-amber-400"
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Logo */}
          <div className="relative w-12 h-12">
            <Image
              src="/logo-circle.png"
              alt="Reconforta Logo"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </nav>
  )
}

