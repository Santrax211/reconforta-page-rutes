//app/page.tsx
import Image from "next/image"
import { Playfair_Display } from 'next/font/google'

const playfair = Playfair_Display({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`min-h-screen bg-[#FFF8E7] ${playfair.className}`}>
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-28 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-amber-800">Reconforta</h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-amber-700">Coffee Catering</h2>
          <h3 className="text-amber-800 italic text-xl md:text-2xl">
            &quot;Porque cada momento merece ser especial&quot;
          </h3>
        </div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            <div className="bg-[#E5D5B7]/60 backdrop-blur-sm rounded-lg p-6">
              <p className="text-gray-800 text-center">
                En los momentos más significativos de la vida, te acompañamos con nuestro servicio 
                profesional de catering. Con más de un año de experiencia, estamos 
                comprometidos a llevar calidez, calidad y elegancia a cada evento 
                en Lima Metropolitana.
              </p>
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image
                src="/images/catering-service.png"
                alt="Servicio de Catering"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image
                src="/images/food.png"
                alt="Presentación de Comida"
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-[#E5D5B7]/60 backdrop-blur-sm rounded-lg p-6">
              <p className="text-gray-800 text-center">
                Cada detalle cuenta. Con un servicio de catering impecable, 
                nos encargamos de todos los aspectos logísticos para que tú 
                puedas concentrarte en lo más importante: honrar la memoria 
                de tu ser querido.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conocenos Section */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold text-amber-800 mb-8">Conócenos:</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl text-amber-800">¿Quiénes somos?</h3>
            <div className="relative h-[250px] rounded-lg overflow-hidden">
              <Image
                src="/team-service.jpg"
                alt="Nuestro Equipo"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl text-amber-800">Conoce nuestros servicios</h3>
            <div className="relative h-[250px] rounded-lg overflow-hidden">
              <Image
                src="/food-service.jpg"
                alt="Nuestros Servicios"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

