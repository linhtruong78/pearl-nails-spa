import { BUSINESS } from '@/lib/constants'

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-primary font-medium text-sm tracking-[0.2em] uppercase mb-3">
              Our Story
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
              About Pearl Nails &amp; Spa
            </h2>
            <p className="text-[#6B6B6B] text-lg leading-relaxed mb-6">
              Nestled in the heart of SW Calgary, Pearl Nails &amp; Spa is your neighbourhood destination for expert nail care and beauty treatments. Our skilled team is passionate about delivering long-lasting, beautiful results in a warm, welcoming environment.
            </p>
            <p className="text-[#6B6B6B] text-lg leading-relaxed mb-8">
              Whether you&apos;re coming in for a quick polish refresh or a luxurious pedicure, we treat every client with the attention and care they deserve.
            </p>
            <div className="inline-flex items-center gap-3 bg-primary/10 text-primary font-semibold px-6 py-3 rounded-full">
              <span className="text-xl">🚶</span>
              Walk-ins Welcome
            </div>
          </div>

          <div className="bg-surface rounded-2xl p-8 flex flex-col gap-6">
            <div>
              <h3 className="font-serif text-lg font-bold text-[#1A1A1A] mb-2">Location</h3>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(BUSINESS.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6B6B6B] hover:text-primary transition-colors"
              >
                {BUSINESS.address}
              </a>
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-[#1A1A1A] mb-2">Phone</h3>
              <a href={BUSINESS.phoneHref} className="text-[#6B6B6B] hover:text-primary transition-colors">
                {BUSINESS.phone}
              </a>
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-[#1A1A1A] mb-2">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href={BUSINESS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#6B6B6B] hover:text-primary transition-colors font-medium"
                >
                  Instagram
                </a>
                <a
                  href={BUSINESS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#6B6B6B] hover:text-primary transition-colors font-medium"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
