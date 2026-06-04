import { TESTIMONIALS } from '@/lib/constants'
import SectionWrapper from '@/components/SectionWrapper'

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: rating }).map((_, i) => (
        <span key={i} className="text-primary text-lg">★</span>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-surface">
      <SectionWrapper>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-primary font-medium text-sm tracking-[0.2em] uppercase mb-3">
            Happy Clients
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1A1A1A]">
            What Our Clients Say
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="bg-white rounded-2xl p-8 flex flex-col gap-4 shadow-sm">
              <StarRating rating={t.rating} />
              <p className="text-[#1A1A1A] text-base leading-relaxed flex-1">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                <span className="font-semibold text-sm text-[#1A1A1A]">{t.name}</span>
                <span className="text-xs text-[#6B6B6B]">{t.source}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      </SectionWrapper>
    </section>
  )
}
