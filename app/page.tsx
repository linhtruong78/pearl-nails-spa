import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Gallery from '@/components/Gallery'
import Booking from '@/components/Booking'
import Testimonials from '@/components/Testimonials'
import About from '@/components/About'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Booking />
        <Testimonials />
        <About />
      </main>
      <Footer />
    </>
  )
}
