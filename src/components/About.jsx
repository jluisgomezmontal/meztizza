import { MapPin, Utensils, Wine } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="w-full py-24 md:py-32 bg-gray-900">
      <div className="container max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Quiénes Somos
              </h2>
              <div className="h-1 w-24 bg-amber-500 mx-auto"></div>
            </div>

            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto text-center">
              Meztizza es un espacio único en Acapulco donde la gastronomía de mar, 
              carnes de primera calidad y un ambiente elegante se fusionan para crear 
              experiencias inolvidables.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto text-center">
              Ubicados en una posición privilegiada con vistas panorámicas al mar, 
              ofrecemos lo mejor de la cocina mexicana regional, mediterránea y carnes 
              selectas en un ambiente sofisticado y acogedor.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 max-w-3xl mx-auto">
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="w-16 h-16 bg-amber-600/20 rounded-full flex items-center justify-center">
                  <Utensils className="text-amber-500" size={28} />
                </div>
                <h3 className="text-white font-semibold">Alta Cocina</h3>
                <p className="text-gray-400 text-sm">Gastronomía de mar y carnes premium</p>
              </div>

              <div className="flex flex-col items-center text-center space-y-2">
                <div className="w-16 h-16 bg-amber-600/20 rounded-full flex items-center justify-center">
                  <Wine className="text-amber-500" size={28} />
                </div>
                <h3 className="text-white font-semibold">Bar Premium</h3>
                <p className="text-gray-400 text-sm">Cocteles exclusivos y vinos selectos</p>
              </div>

              <div className="flex flex-col items-center text-center space-y-2">
                <div className="w-16 h-16 bg-amber-600/20 rounded-full flex items-center justify-center">
                  <MapPin className="text-amber-500" size={28} />
                </div>
                <h3 className="text-white font-semibold">Vista Única</h3>
                <p className="text-gray-400 text-sm">Panorámica al mar de Acapulco</p>
              </div>
            </div>

            {/* Location */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 space-y-3">
              <h3 className="text-xl font-semibold text-amber-500">Nuestra Ubicación</h3>
              <p className="text-gray-300 flex items-start gap-2">
                <MapPin className="text-amber-500 flex-shrink-0 mt-1" size={20} />
                <span>La Pinzona 195, Las Playas, 39370 Acapulco de Juárez, Gro.</span>
              </p>
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-6">
            <div className="col-span-2 h-72 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070"
                alt="Interior elegante"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="h-56 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974"
                alt="Ambiente nocturno"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="h-56 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=2057"
                alt="Vista al mar"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="h-56 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1738"
                alt="Ambiente nocturno"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="h-56 rounded-lg overflow-hidden">
              <img 
                src="https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bHV4dXJ5JTIwcmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"
                alt="Vista al mar"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
