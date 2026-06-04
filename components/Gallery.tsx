'use client'

import Script from 'next/script'
import { BUSINESS } from '@/lib/constants'
import SectionWrapper from '@/components/SectionWrapper'

const INSTAGRAM_POSTS = [
  'https://www.instagram.com/pearl_nailsspa/p/DSdohRfknS9/',
  'https://www.instagram.com/pearl_nailsspa/p/CjjqPD9L9ZN/',
  'https://www.instagram.com/pearl_nailsspa/p/DMBRNKfS0-o/',
  'https://www.instagram.com/pearl_nailsspa/p/C95T7fGPIOA/',
  'https://www.instagram.com/pearl_nailsspa/p/C6_5ssQpPac/',
  'https://www.instagram.com/pearl_nailsspa/p/CgVw61rMoBE/',
  'https://www.instagram.com/pearl_nailsspa/p/Cdmqd5PuBLR/',
  'https://www.instagram.com/pearl_nailsspa/p/Cd7UeXGucFX/',
  'https://www.instagram.com/pearl_nailsspa/p/CUJc_qzFrEY/',
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 md:py-28 bg-surface">
      <SectionWrapper>
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-14">
            <p className="text-primary font-medium text-sm tracking-[0.2em] uppercase mb-3">
              Our Work
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
              Nail Art Gallery
            </h2>
            <a
              href={BUSINESS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6B6B6B] hover:text-primary transition-colors text-base"
            >
              Follow us {BUSINESS.instagramHandle} →
            </a>
          </div>

          {/* Instagram embed grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {INSTAGRAM_POSTS.map((url) => (
              <blockquote
                key={url}
                className="instagram-media !w-full !min-w-0 !max-w-full"
                data-instgrm-permalink={`${url}?utm_source=ig_embed`}
                data-instgrm-version="14"
                style={{
                  background: '#FFF',
                  border: 0,
                  borderRadius: '12px',
                  boxShadow: '0 0 0 1px rgba(0,0,0,0.08)',
                  margin: 0,
                  width: '100%',
                  minWidth: 0,
                  maxWidth: '100%',
                }}
              >
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary text-sm"
                >
                  View on Instagram
                </a>
              </blockquote>
            ))}
          </div>

          {/* View more */}
          <div className="text-center mt-10">
            <a
              href={BUSINESS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-primary text-primary font-semibold px-8 py-3 rounded-full hover:bg-primary hover:text-white transition-colors"
            >
              View More on Instagram
            </a>
          </div>
        </div>
      </SectionWrapper>

      {/* Instagram embed script — loads after page is interactive */}
      <Script src="https://www.instagram.com/embed.js" strategy="lazyOnload" />
    </section>
  )
}
