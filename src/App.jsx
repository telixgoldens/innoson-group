import './App.css'
import Design from './components/Design'
import Dreams from './components/Dreams'
import Hero from './components/Hero'
import Products from './components/Products'
import Footer from './layouts/Footer'
import Navbar from './layouts/Navbar'

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Dreams/>
      <Products/>
      <Design/>
      <Footer/>
    </>
  )
}

export default App
