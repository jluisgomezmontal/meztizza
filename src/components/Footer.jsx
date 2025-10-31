import { MapPin, Phone, Clock, Mail, Instagram, Facebook } from 'lucide-react'

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer id="footer" className="w-full bg-gray-950 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo and Description */}
          <div className="space-y-4">
            <h3 className="text-3xl font-bold text-amber-500">MEZTIZZA</h3>
            <p className="text-gray-400">
              Tu nuevo lugar favorito en Acapulco. Restaurante panorámico con la mejor 
              gastronomía del puerto.
            </p>
            {/* Social Media */}
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/meztizza"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-amber-600 hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/meztizza"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-amber-600 hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </a>

            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Navegación</h4>
            <ul className="space-y-2">
              {[
                { name: 'Inicio', id: 'hero' },
                { name: 'Nosotros', id: 'about' },
                { name: 'Menú', id: 'menu' },
                { name: 'Reservaciones', id: 'reservations' },
                { name: 'Galería', id: 'gallery' },
                { name: 'Experiencias', id: 'experiences' }
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-gray-400 hover:text-amber-500 transition-colors"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-400">
                <MapPin className="text-amber-500 flex-shrink-0 mt-1" size={18} />
                <span className="text-sm">
                  La Pinzona 195, Las Playas<br />
                  39370 Acapulco de Juárez, Gro.
                </span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Phone className="text-amber-500 flex-shrink-0" size={18} />
                <a href="tel:+527445312736" className="text-sm hover:text-amber-500">
                  744 531 2736
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Mail className="text-amber-500 flex-shrink-0" size={18} />
                <a href="mailto:info@meztizza.com.mx" className="text-sm hover:text-amber-500">
                  info@meztizza.com.mx
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Horarios</h4>
            <div className="flex items-start gap-2 text-gray-400 mb-4">
              <Clock className="text-amber-500 flex-shrink-0 mt-1" size={18} />
              <div className="text-sm">
                <p className="font-semibold text-white mb-1">Martes - Domingo</p>
                <p className="text-amber-500 font-semibold">14:00 - 01:00</p>
                <p className="mt-2">Lunes cerrado</p>
              </div>
            </div>
            <div className="mt-6">
              <a
                href="https://maps.google.com/?q=La+Pinzona+195,+Las+Playas,+39370+Acapulco+de+Juárez,+Gro."
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-amber-500 hover:text-amber-400 underline"
              >
                Ver ubicación en mapa
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-500 text-sm text-center md:text-left">
              <p>&copy; {new Date().getFullYear()} Meztizza. Todos los derechos reservados.</p>
              <p className="mt-1">
                Sitio creado y diseñado por 
                <a href="https://luminadigitalstudio.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-amber-500 hover:text-amber-400 font-medium ml-1">
                  Luminá Digital Studio
                </a>
              </p>
            </div>
            <div className="flex gap-6 text-sm">
              <button className="text-gray-500 hover:text-amber-500 transition-colors">
                Política de Privacidad
              </button>
              <button className="text-gray-500 hover:text-amber-500 transition-colors">
                Términos y Condiciones
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
