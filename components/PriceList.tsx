import { PRICE_LIST } from '@/lib/constants'
import SectionWrapper from '@/components/SectionWrapper'

export default function PriceList() {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-surface">
      <SectionWrapper>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-primary font-medium text-sm tracking-[0.2em] uppercase mb-3">
              Transparent Pricing
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
              Price List
            </h2>
            <p className="text-[#6B6B6B] text-lg max-w-xl mx-auto">
              All prices listed below. Gift certificates available.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PRICE_LIST.map((category) => (
              <div key={category.category} className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="font-serif text-xl font-bold text-[#1A1A1A] mb-6 pb-3 border-b border-gray-100">
                  {category.category}
                </h3>
                <ul className="flex flex-col gap-3">
                  {category.items.map((item) => (
                    <li key={item.name} className="flex justify-between items-baseline gap-4">
                      <span className="text-[#6B6B6B] text-sm">{item.name}</span>
                      <span className="text-primary font-semibold text-sm whitespace-nowrap">
                        {item.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="text-center text-[#6B6B6B] text-sm mt-8">
            All instruments are discarded after one use. Group &amp; spa party available.
          </p>
        </div>
      </SectionWrapper>
    </section>
  )
}
