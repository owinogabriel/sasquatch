import Navbar from './components/common/navbar/navbar'
import Hero from './components/common/hero/hero'
import Creation  from './components/creations/creation'
import { Footer } from './components/common/footer/Footer'



function App() {


  return (
    <main className="space-y-10 md:space-y-20">
      <Navbar />
      <Hero />
      <Creation />
      <Footer />
    </main>
  )
}

export default App
