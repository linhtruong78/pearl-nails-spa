import { SERVICES } from '@/lib/constants'

const SERVICE_ICONS: Record<string, string> = {
  manicure: '💅',
  pedicure: '🦶',
  'nail-art': '✨',
  waxing: '🌿',
}

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-primary font-medium text-sm tracking-[0.2em] uppercase mb-3">
            What We Offer
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
            Our Services
          </h2>
          <p className="text-[#6B6B6B] text-lg max-w-xl mx-auto">
            Treatments crafted to make you look and feel your best — every visit.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-surface rounded-2xl p-8 flex flex-col gap-4 hover:shadow-md transition-shadow"
            >
              <span className="text-3xl">{SERVICE_ICONS[service.id]}</span>
              <div>
                <h3 className="font-serif text-xl font-bold text-[#1A1A1A] mb-2">
                  {service.name}
                </h3>
                <p className="text-[#6B6B6B] text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
              <span className="mt-auto text-primary font-semibold text-sm">
                {service.price}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#booking"
            className="inline-block bg-primary text-white font-semibold px-8 py-4 rounded-full hover:bg-primary-dark transition-colors"
          >
            Book a Service
          </a>
        </div>
      </div>
    </section>
  )
}
