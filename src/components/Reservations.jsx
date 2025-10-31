import { useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Phone, Clock, MapPin, Calendar } from 'lucide-react'

const Reservations = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Crear mensaje para WhatsApp
    const message = `Hola, me gustaría hacer una reservación:%0A
Nombre: ${formData.name}%0A
Email: ${formData.email}%0A
Teléfono: ${formData.phone}%0A
Fecha: ${formData.date}%0A
Hora: ${formData.time}%0A
Personas: ${formData.guests}`
    
    window.open(`https://wa.me/527445312736?text=${message}`, '_blank')
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="reservations" className="w-full py-24 md:py-32 bg-gray-900">
      <div className="container max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Haz tu Reservación
          </h2>
          <div className="h-1 w-24 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Asegura tu mesa en el mejor restaurante panorámico de Acapulco
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="text-amber-500" />
                  Teléfono
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a href="tel:+527445312736" className="text-xl text-amber-500 hover:text-amber-400">
                  744 531 2736
                </a>
                <CardDescription className="mt-2">
                  Llámanos para reservar o consultar disponibilidad
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="text-amber-500" />
                  Horarios
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-white text-lg">Martes - Domingo</p>
                  <p className="text-amber-500 text-xl font-semibold">14:00 - 01:00</p>
                  <CardDescription>Lunes cerrado</CardDescription>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="text-amber-500" />
                  Ubicación
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white mb-3">
                  La Pinzona 195, Las Playas<br />
                  39370 Acapulco de Juárez, Gro.
                </p>
                <a 
                  href="https://maps.google.com/?q=La+Pinzona+195,+Las+Playas,+39370+Acapulco+de+Juárez,+Gro."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-500 hover:text-amber-400 underline"
                >
                  Ver en Google Maps
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Reservation Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Calendar className="text-amber-500" />
                Formulario de Reservación
              </CardTitle>
              <CardDescription>
                Completa el formulario y nos pondremos en contacto contigo
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Nombre completo *
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Juan Pérez"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="correo@ejemplo.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Teléfono *
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="744 123 4567"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Fecha *
                    </label>
                    <Input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Hora *
                    </label>
                    <Input
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Número de personas *
                  </label>
                  <Input
                    type="number"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    placeholder="2"
                    min="1"
                    max="20"
                    required
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Enviar Reservación por WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Map */}
        <div className="mt-16 lg:mt-20">
          <Card>
            <CardHeader>
              <CardTitle>Encuéntranos</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="w-full h-96 rounded-b-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3795.845!2d-99.8889!3d16.8632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDUxJzQ3LjUiTiA5OcKwNTMnMjAuMCJX!5e0!3m2!1ses!2smx!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de Meztizza"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Reservations
