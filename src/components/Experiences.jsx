import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Music, Sparkles, Users, PartyPopper } from 'lucide-react'

const Experiences = () => {
  const experiences = [
    {
      icon: <Music className="text-amber-500" size={32} />,
      title: 'Live DJ',
      description: 'Música en vivo todos los fines de semana con los mejores DJs de Acapulco'
    },
    {
      icon: <Sparkles className="text-amber-500" size={32} />,
      title: 'Fiesta Hechizos Meztizza',
      description: 'Eventos especiales con shows en vivo, gastronomía exclusiva y ambiente único'
    },
    {
      icon: <Users className="text-amber-500" size={32} />,
      title: 'Eventos Privados',
      description: 'El espacio perfecto para celebraciones, reuniones empresariales y eventos especiales'
    },
    {
      icon: <PartyPopper className="text-amber-500" size={32} />,
      title: 'Happy Hour',
      description: 'Promociones especiales en cocteles selectos de martes a viernes'
    }
  ]

  const scrollToReservations = () => {
    const element = document.getElementById('reservations')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="experiences" className="w-full py-24 md:py-32 bg-gradient-to-b from-gray-950 to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #f59e0b 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Experiencias & Eventos
          </h2>
          <div className="h-1 w-24 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Vive momentos inolvidables en Meztizza
          </p>
        </div>

        {/* Featured Event */}
        <div className="mb-16">
          <Card className="overflow-hidden bg-gradient-to-r from-amber-900/20 to-amber-800/20 border-amber-700">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="h-64 lg:h-auto">
                <img
                  src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070"
                  alt="Evento especial"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="text-amber-500" size={28} />
                  <h3 className="text-3xl font-bold text-white">Fiesta Hechizos Meztizza</h3>
                </div>
                <p className="text-gray-300 text-lg mb-6">
                  Nuestra experiencia exclusiva donde la gastronomía, música en vivo y el mejor 
                  ambiente nocturno se fusionan para crear momentos mágicos. Cada fin de semana, 
                  vive una noche única con vistas espectaculares al mar de Acapulco.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button onClick={scrollToReservations} size="lg">
                    Reservar para Evento
                  </Button>
                  <Button variant="outline" size="lg">
                    Ver Calendario
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Experiences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="text-center hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-amber-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  {exp.icon}
                </div>
                <CardTitle className="text-xl">{exp.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {exp.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-gradient-to-r from-amber-900/30 to-amber-800/30 border border-amber-700 rounded-xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-white mb-4">
            ¿Buscas un espacio para tu evento especial?
          </h3>
          <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
            Contamos con espacios privados y semiprivados para celebraciones, eventos corporativos 
            y ocasiones especiales. Nuestro equipo te ayudará a crear la experiencia perfecta.
          </p>
          <Button onClick={scrollToReservations} size="lg" className="text-lg px-8">
            Consulta Disponibilidad
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Experiences
