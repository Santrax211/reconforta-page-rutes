//app/servicios/page.tsx
import Image from "next/image"
import { Playfair_Display } from 'next/font/google'
import { MapPin } from 'lucide-react'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['400', '500', '600'],
})

export default function Servicios() {
  const distritos = [
    "San Isidro",
    "Barranco",
    "Miraflores",
    "Surco",
    "La Molina"
  ]

  return (
    <main className="min-h-screen bg-[#FFF8E7] pt-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 text-center">
        <h1 className={`text-4xl md:text-5xl text-amber-800 mb-8 ${playfair.className}`}>
          Soluciones a tu medida para momentos únicos
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-800 leading-relaxed">
          En Reconforta Coffee Catering, sabemos que cada evento es único. 
          Por eso, ofrecemos servicios personalizados que se adaptan a tus 
          necesidades y presupuesto. Nuestro enfoque no es solo ofrecer un 
          catering, sino crear una experiencia memorable, con una atención 
          que combina profesionalismo y empatía.
        </p>
      </section>

      {/* Servicios Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="space-y-16">
          {/* Catering de bocadillos */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h2 className={`text-3xl text-amber-800 ${playfair.className}`}>
                Catering de bocadillos
              </h2>
              <ul className="space-y-4 text-gray-800">
                <li className="flex items-start space-x-2">
                  <span className="text-amber-800 mt-1">•</span>
                  <span>Variedad de opciones dulces y saladas, seleccionadas para satisfacer todos los gustos.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-amber-800 mt-1">•</span>
                  <span>Incluye presentación elegante y montajes que se ajustan al evento.</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/bocadillos.jpg"
                alt="Variedad de bocadillos"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Servicio de mozos */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg md:order-1">
              <Image
                src="/mozos.jpg"
                alt="Servicio de mozos"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className={`text-3xl text-amber-800 ${playfair.className}`}>
                Servicio de mozos
              </h2>
              <ul className="space-y-4 text-gray-800">
                <li className="flex items-start space-x-2">
                  <span className="text-amber-800 mt-1">•</span>
                  <span>Personal capacitado para atender con discreción y profesionalismo en momentos solemnes.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cobertura Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg">
          <h2 className={`text-3xl text-amber-800 mb-8 ${playfair.className}`}>
            Cobertura en distritos de Lima
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <ul className="space-y-4">
              {distritos.map((distrito, index) => (
                <li key={index} className="flex items-center space-x-2 text-gray-800">
                  <MapPin className="w-5 h-5 text-amber-800" />
                  <span>{distrito}</span>
                </li>
              ))}
            </ul>
            <div className="relative h-[200px] rounded-lg overflow-hidden bg-[#E5D5B7]/20">
              <Image
                src="/mapa-lima.jpg"
                alt="Mapa de cobertura"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}