//app/contactanos/page.tsx
"use client"

import Image from "next/image"
import { Playfair_Display } from 'next/font/google'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['400', '500', '600'],
})

export default function Contactanos() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      nombre: formData.get('nombre'),
      email: formData.get('email'),
      mensaje: formData.get('mensaje'),
    }

    // Simular envío del formulario
    await new Promise(resolve => setTimeout(resolve, 1000))
    toast.success('Mensaje enviado correctamente')
    setIsSubmitting(false)
    e.currentTarget.reset()
  }

  return (
    <main className="min-h-screen bg-[#FFF8E7] pt-20">
      <section className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h1 className={`text-4xl text-amber-800 ${playfair.className}`}>
              Contáctanos
            </h1>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Input
                    type="text"
                    name="nombre"
                    placeholder="Nombre"
                    required
                    className="border-amber-200 focus:border-amber-400 bg-white"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    className="border-amber-200 focus:border-amber-400 bg-white"
                  />
                </div>
                <div>
                  <Textarea 
                    name="mensaje"
                    placeholder="Mensaje"
                    required
                    className="min-h-[150px] border-amber-200 focus:border-amber-400 bg-white"
                  />
                </div>
              </div>
              <Button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-amber-800 hover:bg-amber-900 text-white"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar'}
              </Button>
            </form>
          </div>
          <div className="relative rounded-lg overflow-hidden shadow-lg h-[500px]">
            <Image
              src="/contactanos.jpg"
              alt="Servicio de Catering Profesional"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  )
}

