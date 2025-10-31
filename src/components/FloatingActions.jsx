import { useEffect, useState } from 'react'
import { Phone, MessageCircle } from 'lucide-react'

const FloatingActions = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const hero = document.getElementById('hero')
        const heroHeight = hero ? hero.offsetHeight : 600
        setVisible(window.scrollY > heroHeight - 80)
        ticking = false
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* WhatsApp - bottom left (round + smooth transition) */}
      <a
        href="https://wa.me/527445312736"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className={`fixed left-6 bottom-6 z-50 w-14 h-14 rounded-full bg-amber-600 text-white shadow-lg flex items-center justify-center transition-all duration-300 ease-out ${
          visible ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto' : 'opacity-0 translate-y-3 scale-95 pointer-events-none'
        } hover:bg-amber-700`}
      >
        <MessageCircle size={22} />
      </a>

      {/* Call - bottom right (round + smooth transition) */}
      <a
        href="tel:+527445312736"
        aria-label="Llamar"
        className={`fixed right-6 bottom-6 z-50 w-14 h-14 rounded-full bg-gray-800 text-white shadow-lg flex items-center justify-center transition-all duration-300 ease-out ${
          visible ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto' : 'opacity-0 translate-y-3 scale-95 pointer-events-none'
        } hover:bg-gray-700`}
      >
        <Phone size={22} />
      </a>
    </>
  )
}

export default FloatingActions
