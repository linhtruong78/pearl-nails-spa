import { BUSINESS } from '@/lib/constants'
import SectionWrapper from '@/components/SectionWrapper'

export default function Booking() {
  return (
    <section id="booking" className="py-20 md:py-28 bg-white">
      <SectionWrapper>
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-primary font-medium text-sm tracking-[0.2em] uppercase mb-3">
            Appointments
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
            Ready to Treat Yourself?
          </h2>
          <p className="text-[#6B6B6B] text-lg max-w-xl mx-auto">
            Book your appointment online — choose your service, pick a time, and we&apos;ll take care of the rest.
          </p>
        </div>
        {/* FRESHA EMBED — replace this div with the Fresha widget script once account is set up */}
        <div className="rounded-2xl border-2 border-dashed border-primary/30 bg-surface min-h-[300px] flex flex-col items-center justify-center gap-4 p-10 text-center">
          <span className="text-4xl">📅</span>
          <p className="text-[#6B6B6B] font-medium">Online booking coming soon</p>
          <p className="text-[#6B6B6B] text-sm">
            In the meantime, call us at{' '}
            <a href={BUSINESS.phoneHref} className="text-primary font-semibold hover:underline">
              {BUSINESS.phone}
            </a>{' '}
            or walk in — we&apos;d love to see you.
          </p>
        </div>
      </div>
      </SectionWrapper>
    </section>
  )
}
