//components/ui/navigation.tsx
"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"

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
    <nav className="bg-[#1A1A1A] w-full">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="relative w-32 h-12">
            <Image
              src="/logo-white.png"
              alt="Reconforta Logo"
              fill
              className="object-contain"
            />
          </Link>
          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-amber-400
                  ${pathname === link.href ? "text-amber-400" : "text-amber-200"}`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}