import Image from 'next/image'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      <Image
        src="/images/hero.jpg"
        alt="Pearl Nails & Spa — beautiful nail art"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/45" />

      <div className="relative z-10 text-center text-white px-6 max-w-2xl mx-auto">
        <p className="text-primary font-medium text-sm tracking-[0.2em] uppercase mb-4">
          Calgary's Premier Nail Salon
        </p>
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
          Where Beauty Meets Precision
        </h1>
        <p className="text-white/80 text-lg md:text-xl mb-10">
          Expert manicures, pedicures, nail art & waxing in SW Calgary.
          Walk-ins welcome.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#booking"
            className="bg-primary text-white font-semibold px-8 py-4 rounded-full text-base hover:bg-primary-dark transition-colors"
          >
            Book an Appointment
          </a>
          <a
            href="#services"
            className="border-2 border-white text-white font-semibold px-8 py-4 rounded-full text-base hover:bg-white hover:text-[#1A1A1A] transition-colors"
          >
            View Services
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-white/40" />
      </div>
    </section>
  )
}
