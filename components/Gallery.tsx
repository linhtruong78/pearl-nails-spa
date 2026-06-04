import Image from 'next/image'
import { GALLERY_IMAGES, BUSINESS } from '@/lib/constants'

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 md:py-28 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
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

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
          {GALLERY_IMAGES.map((img, i) => (
            <a
              key={img.src}
              href={BUSINESS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-xl"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, 33vw"
                loading={i < 4 ? 'eager' : 'lazy'}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </a>
          ))}
        </div>

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
    </section>
  )
}
