//apps/quienes-somos/page.tsx
import Image from "next/image"
import { Playfair_Display } from 'next/font/google'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['400', '500', '600'],
})

export default function QuienesSomos() {
  const valores = [
    {
      titulo: "Empatía",
      descripcion: "Estamos contigo en los momentos que más importan."
    },
    {
      titulo: "Excelencia",
      descripcion: "Cada detalle cuenta, y nos aseguramos de que sea perfecto."
    },
    {
      titulo: "Profesionalismo",
      descripcion: "Desde el primer contacto hasta el último servicio, nuestra dedicación es total."
    },
    {
      titulo: "Creatividad",
      descripcion: "Cada evento tendrá experiencia única, innovando para superar tus expectativas."
    }
  ]

  return (
    <main className="min-h-screen bg-[#FFF8E7] pt-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className={`text-4xl md:text-5xl text-amber-800 ${playfair.className}`}>
              Nuestra pasión es servirte
            </h1>
            <p className="text-gray-800 text-lg leading-relaxed">
              Reconforta Coffee Catering nace con la misión de ofrecer un servicio cálido y 
              profesional en los momentos más significativos de la vida. Entendemos la 
              importancia de los detalles y trabajamos para brindar un catering que no solo 
              alimente el cuerpo, sino también el alma. Con un equipo altamente 
              capacitado y un enfoque en la excelencia, transformamos cada evento 
              en una experiencia única.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/quienes-somos-1.jpg"
              alt="Servicio de Catering Profesional"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Valores Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className={`text-3xl md:text-4xl text-amber-800 mb-12 text-center ${playfair.className}`}>
          Nuestros valores
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/quienes-somos-2.jpg"
              alt="Nuestro Equipo"
              fill
              className="object-cover"
            />
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg">
            <div className="space-y-6">
              {valores.map((valor, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="text-xl font-semibold text-amber-800">
                    • {valor.titulo}
                  </h3>
                  <p className="text-gray-700 pl-6">
                    {valor.descripcion}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Historia Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className={`text-3xl md:text-4xl text-amber-800 mb-12 text-center ${playfair.className}`}>
          Nuestra Historia
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg">
            <div className="space-y-6">
              {valores.map((valor, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="text-xl font-semibold text-amber-800">
                    • {valor.titulo}
                  </h3>
                  <p className="text-gray-700 pl-6">
                    {valor.descripcion}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/quienes-somos-3.jpg"
              alt="Nuestro Servicio"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  )
}