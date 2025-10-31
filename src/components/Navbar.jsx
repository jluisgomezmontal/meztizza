import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from './ui/button'
import logo from '../assets/logo.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showSticky, setShowSticky] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById('hero')
      const heroHeight = hero ? hero.offsetHeight : 600
      setShowSticky(window.scrollY > heroHeight - 80)
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  const menuItems = [
    { name: 'Inicio', id: 'hero' },
    { name: 'Nosotros', id: 'about' },
    { name: 'Menú', id: 'menu' },
    { name: 'Reservaciones', id: 'reservations' },
    { name: 'Galería', id: 'gallery' },
    { name: 'Contacto', id: 'footer' },
  ]

  // No mostrar la barra mientras está en el Hero
  if (!showSticky) return null

  return (
    <nav className="fixed top-0 left-0 right-0 w-full z-50 bg-gray-900/95 backdrop-blur-md border-b border-gray-800 shadow-lg animate-fade-in">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-3 items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 justify-self-start">
            <button 
              onClick={() => scrollToSection('hero')}
              className="flex items-center gap-2 group"
            >
              <img
                src={logo}
                alt="Meztizza"
                className="h-10 sm:h-12 md:h-14 w-auto object-contain drop-shadow"
              />
            </button>
          </div>

          {/* Desktop Menu (center) */}
          <div className="hidden md:flex items-center justify-center gap-8 md:col-start-2 justify-self-center">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-300 hover:text-amber-500 transition-colors text-sm font-medium"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Desktop CTA (right) */}
          <div className="hidden md:flex justify-end md:col-start-3 justify-self-end">
            <Button onClick={() => scrollToSection('reservations')} size="sm">
              Reserva Ahora
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex justify-end col-start-2">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-3 py-2 text-gray-300 hover:text-amber-500 hover:bg-gray-800 rounded-md transition-colors"
              >
                {item.name}
              </button>
            ))}
            <div className="px-3 pt-2">
              <Button 
                onClick={() => scrollToSection('reservations')} 
                className="w-full"
              >
                Reserva Ahora
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
