import { Button } from './ui/button'
import { MapPin, Clock } from 'lucide-react'

const Hero = () => {
  const scrollToReservations = () => {
    const element = document.getElementById('reservations')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="w-full relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-900/50 to-gray-900"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6 animate-fade-in">
          {/* Logo */}
          <div className="mb-8">
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-amber-500 mb-2 tracking-tight">
              MEZTIZZA
            </h1>
            <div className="h-1 w-32 bg-amber-500 mx-auto"></div>
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Tu nuevo lugar favorito en Acapulco
          </h2>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Restaurante panorámico con la mejor gastronomía del puerto de Acapulco
          </p>

          {/* Features */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-gray-300 text-sm sm:text-base pt-4">
            <div className="flex items-center gap-2">
              <MapPin className="text-amber-500" size={20} />
              <span>Vista Panorámica al Mar</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="text-amber-500" size={20} />
              <span>Mar-Dom 14:00-01:00</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-8">
            <Button 
              onClick={scrollToReservations}
              size="lg"
              className="text-lg px-8 py-6 shadow-2xl hover:shadow-amber-500/50 transition-all duration-300"
            >
              Reserva tu mesa
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-amber-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-amber-500 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
