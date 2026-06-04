import Image from 'next/image'
import { BUSINESS } from '@/lib/constants'
import SectionWrapper from '@/components/SectionWrapper'

const BEHOLD_FEED_URL = 'https://feeds.behold.so/tOoqvyj7p3LpzG0t7AWS'

interface BeholdPost {
  id: string
  permalink: string
  mediaType: string
  caption?: string
  sizes: {
    medium?: { url: string; width: number; height: number }
    large?: { url: string; width: number; height: number }
  }
  children?: Array<{
    sizes: {
      medium?: { url: string; width: number; height: number }
    }
  }>
}

async function getPosts(): Promise<BeholdPost[]> {
  try {
    const res = await fetch(BEHOLD_FEED_URL, {
      next: { revalidate: 3600 },
    })
    if (!res.ok) return []
    const data = await res.json()
    // Behold returns { posts: [...] } or an array directly
    if (Array.isArray(data)) return data
    if (Array.isArray(data?.posts)) return data.posts
    return []
  } catch {
    return []
  }
}

export default async function Gallery() {
  const posts = await getPosts()
  const displayPosts = posts.slice(0, 9)

  return (
    <section id="gallery" className="py-20 md:py-28 bg-surface">
      <SectionWrapper>
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

          {displayPosts.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
              {displayPosts.map((post, i) => {
                const imgUrl =
                  post.sizes?.large?.url ||
                  post.sizes?.medium?.url ||
                  post.children?.[0]?.sizes?.medium?.url
                if (!imgUrl) return null
                return (
                  <a
                    key={post.id}
                    href={post.permalink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative aspect-square overflow-hidden rounded-xl"
                  >
                    <Image
                      src={imgUrl}
                      alt={post.caption || `Pearl Nails & Spa nail art ${i + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 50vw, 33vw"
                      loading={i < 4 ? 'eager' : 'lazy'}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  </a>
                )
              })}
            </div>
          ) : (
            <p className="text-center text-[#6B6B6B]">Gallery loading…</p>
          )}

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
    </section>
  )
}
