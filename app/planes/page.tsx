//app/planes/page.tsx
import Image from "next/image"
import { Playfair_Display } from 'next/font/google'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['400', '500', '600'],
})

export default function Planes() {
  const planes = [
    {
      nombre: "Plan Básico",
      color: "bg-[#FFE4D6]",
      items: [
        "50 und de café",
        "Infusiones y Chocolates",
        "2 Gaseosas de 1 1/2 lt",
        "2 lt de agua mineral",
        "Galletas",
        "Cortesía de café (10 und)"
      ],
      imagen: "/plan-basico.jpg"
    },
    {
      nombre: "Plan Regular",
      color: "bg-[#E5E5E5]",
      items: [
        "50 und de café",
        "Infusiones y chocolates",
        "2 Gaseosas de 3 lt",
        "3 lt de agua mineral",
        "50 Sanguchitos de pollo",
        "50 Sanguchitos de jamón y queso",
        "Galletas",
        "Cortesía de café (20 und)"
      ],
      imagen: "/plan-regular.jpg"
    },
    {
      nombre: "Plan Premium",
      color: "bg-[#FFF3B0]",
      items: [
        "100 und de café",
        "Infusiones y chocolates",
        "3 Gaseosas de 3 lt",
        "4 - 5 lt de agua mineral",
        "100 sanguchitos de pollo, jamón y queso",
        "100 bocaditos salado",
        "100 bocaditos dulces",
        "Galletas, wafer, palito de jonjolí, etc",
        "Cortesía: Galletas bañadas de chocolate, 30 und de café"
      ],
      imagen: "/plan-premium.jpg"
    }
  ]

  return (
    <main className="min-h-screen bg-[#FFF8E7] pt-20">
      <section className="container mx-auto px-4 py-12">
        <h1 className={`text-4xl md:text-5xl text-amber-800 text-center mb-12 ${playfair.className}`}>
          Nuestros Planes
        </h1>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {planes.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl overflow-hidden shadow-lg ${plan.color} p-6 flex flex-col`}
            >
              <h2 className={`text-2xl text-amber-800 mb-6 text-center ${playfair.className}`}>
                {plan.nombre}
              </h2>
              <ul className="space-y-3 mb-6 flex-grow">
                {plan.items.map((item, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <span className="text-amber-800 mt-1">•</span>
                    <span className="text-gray-800">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="relative h-48 rounded-lg overflow-hidden mt-auto">
                <Image
                  src={plan.imagen}
                  alt={plan.nombre}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="bg-amber-100/50 rounded-lg p-6 mt-8">
          <p className="text-amber-800 text-center">
            <span className="font-semibold">Nota:</span> Las gaseosa son servidas en vasos de plásticos descartables y el café en vasos 
            biodegradables. Tiempo de servicio es de 2h a 2h media aproximadamente o al término 
            de las raciones
          </p>
        </div>
      </section>
    </main>
  )
}