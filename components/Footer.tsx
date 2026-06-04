import { BUSINESS, HOURS } from '@/lib/constants'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="contact" className="bg-[#1A1A1A] text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <p className="font-serif text-2xl font-bold mb-3">
              Pearl Nails <span className="text-primary">&</span> Spa
            </p>
            <p className="text-white/60 text-sm leading-relaxed">
              Calgary&apos;s premier nail salon for manicures, pedicures, nail art &amp; waxing.
            </p>
            <div className="flex gap-4 mt-5">
              <a
                href={BUSINESS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-primary transition-colors text-sm font-medium"
              >
                Instagram
              </a>
              <a
                href={BUSINESS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-primary transition-colors text-sm font-medium"
              >
                Facebook
              </a>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Hours</h3>
            <ul className="flex flex-col gap-2">
              {HOURS.map((h) => (
                <li key={h.days} className="flex justify-between text-sm text-white/70">
                  <span>{h.days}</span>
                  <span>{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Map */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Contact</h3>
            <address className="not-italic flex flex-col gap-3 text-sm text-white/70">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(BUSINESS.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                {BUSINESS.address}
              </a>
              <a href={BUSINESS.phoneHref} className="hover:text-primary transition-colors">
                {BUSINESS.phone}
              </a>
            </address>
            <div className="mt-5 rounded-xl overflow-hidden h-36">
              <iframe
                title="Pearl Nails & Spa location"
                src={`https://www.google.com/maps?q=${encodeURIComponent(BUSINESS.address)}&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/40">
          <p>© {year} Pearl Nails &amp; Spa Ltd. All rights reserved.</p>
          <a href="#hero" className="hover:text-white transition-colors">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  )
}
