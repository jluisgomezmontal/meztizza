import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { ChefHat } from 'lucide-react'

const MenuHighlight = () => {
  const dishes = [
    {
      name: 'Porterhouse',
      description: 'Corte premium de 800g, cocción perfecta, acompañado de guarniciones gourmet',
      image: 'https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=2031',
      category: 'Carnes'
    },
    {
      name: 'Pulpo Zarandeado',
      description: 'Pulpo fresco a las brasas con salsa especial de la casa y vegetales asados',
      image: 'https://scontent-qro3-1.xx.fbcdn.net/v/t39.30808-6/485175732_1052434186929171_5777344881493499582_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=R2zUI6FnIIMQ7kNvwE8L67n&_nc_oc=AdnmBb4yUbJSWozslcf1vAS-Ai7dEFSvimDQ_sv5DOctKL9fAzuhiVOoSeFniMEOMG5agI6BwIeDPIFMk_UsSxbf&_nc_zt=23&_nc_ht=scontent-qro3-1.xx&_nc_gid=xK_fKqWsPEZIMNyPNNuUdQ&oh=00_AfeYWKN2LYsZ817p8TvP5Mty9isnrjrrxoc9q-ETFEWnrA&oe=690AAC74',
      category: 'Mar'
    },
    {
      name: 'Camarones Costeños',
      description: 'Camarones jumbo al ajillo con toque de chile de árbol y mantequilla aromática',
      image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?q=80&w=2070',
      category: 'Mar'
    },
    {
      name: 'Lasagna de Mariscos',
      description: 'Lasagna artesanal con mezcla de mariscos frescos en salsa bechamel',
      image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=2070',
      category: 'Especialidades'
    },
    {
      name: 'Rib Eye',
      description: 'Rib Eye de 450g con costra de especias, papas rostizadas y chimichurri',
      image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=2070',
      category: 'Carnes'
    },
    {
      name: 'Atún Sellado',
      description: 'Atún grado sushi con costra de ajonjolí, salsa teriyaki y vegetales orientales',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2080',
      category: 'Mar'
    }
  ]

  return (
    <section id="menu" className="w-full py-24 md:py-32 bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="container max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <ChefHat className="text-amber-500" size={40} />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Menú Destacado
            </h2>
          </div>
          <div className="h-1 w-24 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Descubre nuestros platos estrella preparados con ingredientes frescos y técnicas culinarias de primera clase
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:[grid-template-columns:repeat(auto-fit,minmax(300px,1fr))] gap-8 max-w-5xl mx-auto justify-items-stretch">
          {dishes.map((dish, index) => (
            <Card key={index} className="group hover:scale-105 transition-transform duration-300 overflow-hidden">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {dish.category}
                  </span>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">{dish.name}</CardTitle>
                <CardDescription className="text-base">{dish.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-400 text-lg">
            Y muchos platillos más en nuestro menú completo
          </p>
        </div>
      </div>
    </section>
  )
}

export default MenuHighlight
