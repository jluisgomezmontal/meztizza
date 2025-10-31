import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import MenuHighlight from './components/MenuHighlight'
import Reservations from './components/Reservations'
import Gallery from './components/Gallery'
import Experiences from './components/Experiences'
import Footer from './components/Footer'
import FloatingActions from './components/FloatingActions'

function App() {
  return (
    <div className="bg-gray-950 w-full min-h-screen">
      <Navbar />
      <Hero />
      <div className="w-full space-y-0">
        <About />
        <MenuHighlight />
        <Reservations />
        <Gallery />
        <Experiences />
      </div>
      <FloatingActions />
      <Footer />
    </div>
  )
}

export default App
