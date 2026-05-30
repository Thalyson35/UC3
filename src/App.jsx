import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Banner from './components/Banner'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './styles/global.css'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Banner />
      <Blog />
      <Contact />
      <Footer />
    </>
  )
}
