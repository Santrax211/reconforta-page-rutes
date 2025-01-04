//components/ui/footer.tsx
import Image from "next/image"
import { Phone, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5 text-amber-200" />
              <a href="tel:966669614" className="hover:text-amber-200">
                966 669 614
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5 text-amber-200" />
              <a href="tel:922510588" className="hover:text-amber-200">
                922 510 588
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-5 h-5 text-amber-200" />
              <a href="mailto:sahurragutierrezrosas@gmail.com" className="hover:text-amber-200">
                sahurragutierrezrosas@gmail.com
              </a>
            </div>
          </div>
          <div className="relative w-60 h-20">
            <Image
              src="/images/logo-footer.png"
              alt="Reconforta Logo"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </footer>
  )
}