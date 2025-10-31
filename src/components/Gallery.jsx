import { useState } from 'react'
import { X } from 'lucide-react'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  const images = [
    {
      url: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070',
      title: 'Vista Panorámica al Mar',
      category: 'Vista'
    },
    {
      url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070',
      title: 'Ambiente Nocturno',
      category: 'Ambiente'
    },
    {
      url: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070',
      title: 'Bar Premium',
      category: 'Bar'
    },
    {
      url: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=2069',
      title: 'Terraza Lounge',
      category: 'Terraza'
    },
    {
      url: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=2057',
      title: 'Interior Elegante',
      category: 'Interior'
    },
    {
      url: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=2074',
      title: 'Experiencia Gastronómica',
      category: 'Gastronomía'
    },
    {
      url: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?q=80&w=2074',
      title: 'Cocteles Artesanales',
      category: 'Bar'
    },
    {
      url: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=2070',
      title: 'Vista al Atardecer',
      category: 'Vista'
    }
  ]

  return (
    <section id="gallery" className="w-full py-24 md:py-32 bg-gray-950">
      <div className="container max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Galería
          </h2>
          <div className="h-1 w-24 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Descubre el ambiente único de Meztizza
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="inline-block bg-amber-600 text-white text-xs px-2 py-1 rounded mb-2">
                    {image.category}
                  </span>
                  <h3 className="text-white font-semibold">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-amber-500 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <div className="max-w-5xl w-full">
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="w-full h-auto rounded-lg"
            />
            <div className="text-center mt-4">
              <span className="inline-block bg-amber-600 text-white text-sm px-3 py-1 rounded mb-2">
                {selectedImage.category}
              </span>
              <h3 className="text-white text-xl font-semibold">{selectedImage.title}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery
