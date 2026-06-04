# Pearl Nails & Spa — Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

> **Approval rule:** Present each task to the user and wait for explicit approval before writing any code.

**Goal:** Build a fast, modern, mobile-first single-page website for Pearl Nails & Spa Ltd (Calgary, AB) with service showcase, Instagram gallery, placeholder booking section, and full local SEO.

**Architecture:** Next.js 15 App Router with static site generation (SSG) pre-renders every page at build time and serves from Vercel's CDN. All sections are React Server Components except Navbar (needs scroll listener). Framer Motion animations are isolated to a thin `SectionWrapper` client component per section.

**Tech Stack:** Next.js 15 · TypeScript · Tailwind CSS · Framer Motion · next/font/google · next/image · Vercel

---

## File Map

| File | Responsibility |
|---|---|
| `app/layout.tsx` | Root HTML shell, fonts, global metadata, JSON-LD schema |
| `app/page.tsx` | Assembles all section components in order |
| `app/sitemap.ts` | Generates `/sitemap.xml` for Google |
| `app/robots.ts` | Generates `/robots.txt` |
| `app/globals.css` | Tailwind base imports, global overrides |
| `lib/constants.ts` | All business data: address, hours, services, testimonials, gallery |
| `tailwind.config.ts` | Custom colors, font variables, content paths |
| `components/Navbar.tsx` | Sticky nav with scroll effect + mobile hamburger (client component) |
| `components/Hero.tsx` | Full-screen hero, tagline, CTA buttons |
| `components/Services.tsx` | 4-card service grid |
| `components/Gallery.tsx` | Static image grid from downloaded Instagram photos |
| `components/Booking.tsx` | Fresha embed placeholder section |
| `components/Testimonials.tsx` | Review quote cards |
| `components/About.tsx` | Salon blurb + walk-ins callout |
| `components/Footer.tsx` | Address, hours, map, social links |
| `components/SectionWrapper.tsx` | Framer Motion fade-in-up wrapper (client component) |
| `public/images/gallery/` | 9 downloaded Instagram photos |
| `public/images/hero.jpg` | Hero background image |

---

## Task 1: Project Scaffold

**Files:**
- Create: entire Next.js project in `D:\Claude\PearNails\`

- [ ] **Step 1: Scaffold Next.js 15 inside the existing repo**

Run inside `D:\Claude\PearNails\`:
```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --no-src-dir --import-alias="@/*" --yes
```

Expected output ends with: `Success! Created next app at D:\Claude\PearNails`

- [ ] **Step 2: Verify dev server starts**

```bash
npm run dev
```

Open `http://localhost:3000` — should show default Next.js welcome page. Stop with `Ctrl+C`.

- [ ] **Step 3: Remove boilerplate**

Delete generated files that will be replaced:
```bash
Remove-Item app/page.tsx
Remove-Item -Recurse -Force app/fonts
Remove-Item public/next.svg
Remove-Item public/vercel.svg
```

- [ ] **Step 4: Commit scaffold**

```bash
git add -A
git commit -m "feat: scaffold Next.js 15 project"
```

---

## Task 2: Tailwind Config + Business Constants

**Files:**
- Modify: `tailwind.config.ts`
- Create: `lib/constants.ts`
- Modify: `app/globals.css`

- [ ] **Step 1: Update `tailwind.config.ts` with brand colors and font variables**

```ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7EC850',
        'primary-dark': '#5fa832',
        surface: '#F9F9F9',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'],
      },
    },
  },
  plugins: [],
}

export default config
```

- [ ] **Step 2: Update `app/globals.css`**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  scroll-behavior: smooth;
}

body {
  color: #1A1A1A;
  background: #FFFFFF;
}
```

- [ ] **Step 3: Create `lib/constants.ts`**

```ts
export const BUSINESS = {
  name: 'Pearl Nails & Spa',
  tagline: 'Where Beauty Meets Precision',
  address: '30 Springborough Blvd SW #142, Calgary, AB T3H 0N9',
  addressStreet: '30 Springborough Blvd SW #142',
  addressCity: 'Calgary',
  addressRegion: 'AB',
  addressPostal: 'T3H 0N9',
  addressCountry: 'CA',
  phone: '(403) 242-8402',
  phoneHref: 'tel:+14032428402',
  instagram: 'https://www.instagram.com/pearl_nailsspa/',
  instagramHandle: '@pearl_nailsspa',
  facebook: 'https://www.facebook.com/PearlNailsandSpaLtd',
}

export const HOURS = [
  { days: 'Monday – Friday', time: '10:00 AM – 7:00 PM' },
  { days: 'Saturday', time: '10:00 AM – 6:00 PM' },
  { days: 'Sunday', time: '10:00 AM – 5:00 PM' },
]

export const SERVICES = [
  {
    id: 'manicure',
    name: 'Manicure',
    description:
      'Classic and gel manicures with a flawless finish. Nail shaping, cuticle care, and your choice of colour.',
    price: 'From $35',
  },
  {
    id: 'pedicure',
    name: 'Pedicure',
    description:
      'Relaxing pedicure treatments to soften, nourish, and beautify your feet from heel to toe.',
    price: 'From $45',
  },
  {
    id: 'nail-art',
    name: 'Nail Art',
    description:
      'Custom nail art designs — from subtle accents to intricate full-hand artwork tailored to you.',
    price: 'From $15',
  },
  {
    id: 'waxing',
    name: 'Waxing',
    description:
      'Smooth, long-lasting hair removal for brows, lip, underarm, and body.',
    price: 'From $12',
  },
]

export const TESTIMONIALS = [
  {
    name: 'Sarah M.',
    rating: 5,
    text: 'The staff is very knowledgeable on foot care. Highly recommend for pedis and manis.',
    source: 'Google',
  },
  {
    name: 'Jessica L.',
    rating: 5,
    text: 'Long-lasting quality nail sets and the most welcoming atmosphere. I keep coming back!',
    source: 'Google',
  },
  {
    name: 'Amanda K.',
    rating: 5,
    text: 'Mike and Brenda are amazing. Always leave feeling pampered and happy with my nails.',
    source: 'Facebook',
  },
]

export const GALLERY_IMAGES = [
  { src: '/images/gallery/nail-1.jpg', alt: 'Nail art design 1' },
  { src: '/images/gallery/nail-2.jpg', alt: 'Nail art design 2' },
  { src: '/images/gallery/nail-3.jpg', alt: 'Nail art design 3' },
  { src: '/images/gallery/nail-4.jpg', alt: 'Nail art design 4' },
  { src: '/images/gallery/nail-5.jpg', alt: 'Nail art design 5' },
  { src: '/images/gallery/nail-6.jpg', alt: 'Nail art design 6' },
  { src: '/images/gallery/nail-7.jpg', alt: 'Nail art design 7' },
  { src: '/images/gallery/nail-8.jpg', alt: 'Nail art design 8' },
  { src: '/images/gallery/nail-9.jpg', alt: 'Nail art design 9' },
]
```

- [ ] **Step 4: Install Framer Motion**

```bash
npm install framer-motion
```

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: configure tailwind brand tokens and business constants"
```

---

## Task 3: Root Layout — Fonts, Metadata, JSON-LD

**Files:**
- Modify: `app/layout.tsx`

- [ ] **Step 1: Write `app/layout.tsx`**

```tsx
import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Pearl Nails & Spa | Nail Salon in Calgary, AB',
  description:
    "Calgary's premier nail salon. Expert manicures, pedicures, nail art & waxing in SW Calgary. Walk-ins welcome. Book your appointment today.",
  keywords: ['nail salon Calgary', 'manicure Calgary', 'pedicure Calgary', 'nail art Calgary', 'Pearl Nails Spa'],
  openGraph: {
    title: 'Pearl Nails & Spa | Nail Salon in Calgary, AB',
    description: 'Expert manicures, pedicures, nail art & waxing in SW Calgary. Walk-ins welcome.',
    url: 'https://pearlnailsspa.ca',
    siteName: 'Pearl Nails & Spa',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
    locale: 'en_CA',
    type: 'website',
  },
  metadataBase: new URL('https://pearlnailsspa.ca'),
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'NailSalon',
  name: 'Pearl Nails & Spa',
  url: 'https://pearlnailsspa.ca',
  telephone: '(403) 242-8402',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '30 Springborough Blvd SW #142',
    addressLocality: 'Calgary',
    addressRegion: 'AB',
    postalCode: 'T3H 0N9',
    addressCountry: 'CA',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '10:00',
      closes: '19:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '10:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Sunday',
      opens: '10:00',
      closes: '17:00',
    },
  ],
  sameAs: [
    'https://www.instagram.com/pearl_nailsspa/',
    'https://www.facebook.com/PearlNailsandSpaLtd',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
```

- [ ] **Step 2: Verify fonts load**

```bash
npm run dev
```

Open `http://localhost:3000` → DevTools → Network → confirm Inter and Playfair Display font files load.

- [ ] **Step 3: Commit**

```bash
git add app/layout.tsx
git commit -m "feat: root layout with metadata, JSON-LD schema, and Google fonts"
```

---

## Task 4: SEO Files — Sitemap & Robots

**Files:**
- Create: `app/sitemap.ts`
- Create: `app/robots.ts`

- [ ] **Step 1: Create `app/sitemap.ts`**

```ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://pearlnailsspa.ca',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
```

- [ ] **Step 2: Create `app/robots.ts`**

```ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://pearlnailsspa.ca/sitemap.xml',
  }
}
```

- [ ] **Step 3: Verify**

```bash
npm run dev
```

Visit `http://localhost:3000/sitemap.xml` — should return XML.
Visit `http://localhost:3000/robots.txt` — should return plain text with `Sitemap:` line.

- [ ] **Step 4: Commit**

```bash
git add app/sitemap.ts app/robots.ts
git commit -m "feat: SEO sitemap and robots.txt"
```

---

## Task 5: Navbar Component

**Files:**
- Create: `components/Navbar.tsx`
- Create: `app/page.tsx` (shell)

- [ ] **Step 1: Create `components/Navbar.tsx`**

```tsx
'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="#hero"
          className={`font-serif text-xl font-bold tracking-tight transition-colors ${
            scrolled ? 'text-[#1A1A1A]' : 'text-white'
          }`}
        >
          Pearl Nails <span className="text-primary">&</span> Spa
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  scrolled ? 'text-[#1A1A1A]' : 'text-white'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#booking"
              className="bg-primary text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-primary-dark transition-colors"
            >
              Book Now
            </a>
          </li>
        </ul>

        <button
          className={`md:hidden flex flex-col gap-1.5 p-2 transition-colors ${
            scrolled ? 'text-[#1A1A1A]' : 'text-white'
          }`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-current transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-current transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-current transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-6 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-base font-medium text-[#1A1A1A] hover:text-primary"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#booking"
            className="mt-2 bg-primary text-white text-sm font-semibold px-5 py-3 rounded-full text-center hover:bg-primary-dark transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Book Now
          </a>
        </div>
      )}
    </header>
  )
}
```

- [ ] **Step 2: Create shell `app/page.tsx`**

```tsx
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>{/* sections added in subsequent tasks */}</main>
    </>
  )
}
```

- [ ] **Step 3: Verify in browser**

- Desktop: nav links + green Book Now pill visible
- Mobile: hamburger icon, tap opens/closes overlay
- Scroll 60px+: navbar transitions to white with shadow

- [ ] **Step 4: Commit**

```bash
git add components/Navbar.tsx app/page.tsx
git commit -m "feat: sticky navbar with mobile hamburger menu"
```

---

## Task 6: Hero Section

**Files:**
- Create: `components/Hero.tsx`
- Add: `public/images/hero.jpg`
- Modify: `app/page.tsx`

- [ ] **Step 1: Add hero image**

Download a nail art photo from `https://www.instagram.com/pearl_nailsspa/` or use a royalty-free placeholder from Unsplash. Save as `public/images/hero.jpg` (minimum 1920×1080px).

- [ ] **Step 2: Create `components/Hero.tsx`**

```tsx
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

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-white/40" />
      </div>
    </section>
  )
}
```

- [ ] **Step 3: Add Hero to `app/page.tsx`**

```tsx
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
      </main>
    </>
  )
}
```

- [ ] **Step 4: Verify in browser**

- Full-screen hero, background image with dark overlay
- Tagline centred, two CTA buttons
- Mobile: text scales down, buttons stack vertically
- Navbar transparent over hero, turns white on scroll

- [ ] **Step 5: Commit**

```bash
git add components/Hero.tsx app/page.tsx public/images/
git commit -m "feat: full-screen hero section with CTA buttons"
```

---

## Task 7: Services Section

**Files:**
- Create: `components/Services.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Create `components/Services.tsx`**

```tsx
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
```

- [ ] **Step 2: Add Services to `app/page.tsx`**

```tsx
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
      </main>
    </>
  )
}
```

- [ ] **Step 3: Verify in browser**

- 4 service cards below hero
- Mobile: 1-col · Tablet: 2-col · Desktop: 4-col
- Each card: icon, name, description, green price label

- [ ] **Step 4: Commit**

```bash
git add components/Services.tsx app/page.tsx
git commit -m "feat: services section with 4-card responsive grid"
```

---

## Task 8: Gallery Section

**Files:**
- Create: `components/Gallery.tsx`
- Add: `public/images/gallery/nail-1.jpg` … `nail-9.jpg`
- Modify: `app/page.tsx`

- [ ] **Step 1: Download gallery images**

Visit `https://www.instagram.com/pearl_nailsspa/` and save 9 nail art photos to `public/images/gallery/` named `nail-1.jpg` through `nail-9.jpg`. Minimum 600×600px, square crop preferred.

- [ ] **Step 2: Create `components/Gallery.tsx`**

```tsx
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
```

- [ ] **Step 3: Add Gallery to `app/page.tsx`**

```tsx
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Gallery from '@/components/Gallery'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Gallery />
      </main>
    </>
  )
}
```

- [ ] **Step 4: Verify in browser**

- 9 square images in grid, hover zoom + overlay
- Mobile: 2-col · Tablet+: 3-col
- All images link to Instagram in new tab

- [ ] **Step 5: Commit**

```bash
git add components/Gallery.tsx app/page.tsx public/images/gallery/
git commit -m "feat: nail art gallery section with Instagram-linked image grid"
```

---

## Task 9: Booking Section (Placeholder)

**Files:**
- Create: `components/Booking.tsx`
- Modify: `app/page.tsx`

> Fresha account not yet set up. Placeholder section built now; swap in real widget when embed code is available.

- [ ] **Step 1: Create `components/Booking.tsx`**

```tsx
export default function Booking() {
  return (
    <section id="booking" className="py-20 md:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-primary font-medium text-sm tracking-[0.2em] uppercase mb-3">
            Appointments
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
            Ready to Treat Yourself?
          </h2>
          <p className="text-[#6B6B6B] text-lg max-w-xl mx-auto">
            Book your appointment online — choose your service, pick a time, and we'll take care of the rest.
          </p>
        </div>

        {/* FRESHA EMBED — replace this div with the Fresha widget script once account is set up */}
        <div className="rounded-2xl border-2 border-dashed border-primary/30 bg-surface min-h-[300px] flex flex-col items-center justify-center gap-4 p-10 text-center">
          <span className="text-4xl">📅</span>
          <p className="text-[#6B6B6B] font-medium">Online booking coming soon</p>
          <p className="text-[#6B6B6B] text-sm">
            In the meantime, call us at{' '}
            <a href="tel:+14032428402" className="text-primary font-semibold hover:underline">
              (403) 242-8402
            </a>{' '}
            or walk in — we'd love to see you.
          </p>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Add Booking to `app/page.tsx`**

```tsx
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Gallery from '@/components/Gallery'
import Booking from '@/components/Booking'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Booking />
      </main>
    </>
  )
}
```

- [ ] **Step 3: Verify in browser**

- Placeholder box with dashed green border, phone number link visible
- Mobile: full-width, no overflow

- [ ] **Step 4: Commit**

```bash
git add components/Booking.tsx app/page.tsx
git commit -m "feat: booking section with Fresha placeholder"
```

---

## Task 10: Testimonials Section

**Files:**
- Create: `components/Testimonials.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Create `components/Testimonials.tsx`**

```tsx
import { TESTIMONIALS } from '@/lib/constants'

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
                "{t.text}"
              </p>
              <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                <span className="font-semibold text-sm text-[#1A1A1A]">{t.name}</span>
                <span className="text-xs text-[#6B6B6B]">{t.source}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Add Testimonials to `app/page.tsx`**

```tsx
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Gallery from '@/components/Gallery'
import Booking from '@/components/Booking'
import Testimonials from '@/components/Testimonials'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Booking />
        <Testimonials />
      </main>
    </>
  )
}
```

- [ ] **Step 3: Verify in browser**

- 3 white cards with green star ratings on off-white background
- Mobile: stacked · Desktop: 3-col grid

- [ ] **Step 4: Commit**

```bash
git add components/Testimonials.tsx app/page.tsx
git commit -m "feat: testimonials section with review cards"
```

---

## Task 11: About Section

**Files:**
- Create: `components/About.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Create `components/About.tsx`**

```tsx
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
              About Pearl Nails & Spa
            </h2>
            <p className="text-[#6B6B6B] text-lg leading-relaxed mb-6">
              Nestled in the heart of SW Calgary, Pearl Nails & Spa is your neighbourhood destination for expert nail care and beauty treatments. Our skilled team is passionate about delivering long-lasting, beautiful results in a warm, welcoming environment.
            </p>
            <p className="text-[#6B6B6B] text-lg leading-relaxed mb-8">
              Whether you're coming in for a quick polish refresh or a luxurious pedicure, we treat every client with the attention and care they deserve.
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
                <a href={BUSINESS.instagram} target="_blank" rel="noopener noreferrer" className="text-[#6B6B6B] hover:text-primary transition-colors font-medium">
                  Instagram
                </a>
                <a href={BUSINESS.facebook} target="_blank" rel="noopener noreferrer" className="text-[#6B6B6B] hover:text-primary transition-colors font-medium">
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
```

- [ ] **Step 2: Add About to `app/page.tsx`**

```tsx
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Gallery from '@/components/Gallery'
import Booking from '@/components/Booking'
import Testimonials from '@/components/Testimonials'
import About from '@/components/About'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Booking />
        <Testimonials />
        <About />
      </main>
    </>
  )
}
```

- [ ] **Step 3: Verify in browser**

- 2-col on desktop (text + info panel), stacked on mobile
- Walk-ins badge in green pill
- Address and phone link to Google Maps / phone dialler

- [ ] **Step 4: Commit**

```bash
git add components/About.tsx app/page.tsx
git commit -m "feat: about section with salon story and info panel"
```

---

## Task 12: Footer

**Files:**
- Create: `components/Footer.tsx`
- Modify: `app/page.tsx` (final assembly)

- [ ] **Step 1: Create `components/Footer.tsx`**

```tsx
import { BUSINESS, HOURS } from '@/lib/constants'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="contact" className="bg-[#1A1A1A] text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <p className="font-serif text-2xl font-bold mb-3">
              Pearl Nails <span className="text-primary">&</span> Spa
            </p>
            <p className="text-white/60 text-sm leading-relaxed">
              Calgary's premier nail salon for manicures, pedicures, nail art & waxing.
            </p>
            <div className="flex gap-4 mt-5">
              <a href={BUSINESS.instagram} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-primary transition-colors text-sm font-medium">
                Instagram
              </a>
              <a href={BUSINESS.facebook} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-primary transition-colors text-sm font-medium">
                Facebook
              </a>
            </div>
          </div>

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
          <p>© {year} Pearl Nails & Spa Ltd. All rights reserved.</p>
          <a href="#hero" className="hover:text-white transition-colors">Back to top ↑</a>
        </div>
      </div>
    </footer>
  )
}
```

- [ ] **Step 2: Complete final `app/page.tsx`**

```tsx
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Gallery from '@/components/Gallery'
import Booking from '@/components/Booking'
import Testimonials from '@/components/Testimonials'
import About from '@/components/About'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Booking />
        <Testimonials />
        <About />
      </main>
      <Footer />
    </>
  )
}
```

- [ ] **Step 3: Verify in browser**

- Dark footer: brand name, hours table, address, phone, map iframe
- Mobile: 3 sections stack vertically
- Back to top smooth-scrolls to hero

- [ ] **Step 4: Commit**

```bash
git add components/Footer.tsx app/page.tsx
git commit -m "feat: footer with hours, contact, and Google Map embed"
```

---

## Task 13: Mobile Responsiveness Pass

**Files:**
- Modify: any component with issues found during testing

- [ ] **Step 1: Test all breakpoints in Chrome DevTools**

Open DevTools → Device toolbar. Test each section at 375px, 768px, 1280px.

| Section | Check |
|---|---|
| Navbar | Hamburger at mobile, no text overflow |
| Hero | Buttons stack vertically at 375px, image covers full viewport |
| Services | 1-col → 2-col → 4-col transitions |
| Gallery | 2-col → 3-col, square images, no overflow |
| Booking | Centered placeholder, full width |
| Testimonials | Stacked → 3-col |
| About | Stacked → 2-col |
| Footer | 3 sections stack cleanly on mobile |

- [ ] **Step 2: Add overflow guard to root if needed**

In `app/layout.tsx` body tag, add `overflow-x-hidden` if any section causes horizontal scroll:
```tsx
<body className="font-sans antialiased overflow-x-hidden">
```

- [ ] **Step 3: Commit fixes**

```bash
git add -A
git commit -m "fix: mobile responsiveness pass — all breakpoints verified"
```

---

## Task 14: Framer Motion Scroll Animations

**Files:**
- Create: `components/SectionWrapper.tsx`
- Modify: `components/Services.tsx`, `Gallery.tsx`, `Booking.tsx`, `Testimonials.tsx`, `About.tsx`

- [ ] **Step 1: Create `components/SectionWrapper.tsx`**

```tsx
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface SectionWrapperProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export default function SectionWrapper({ children, className, delay = 0 }: SectionWrapperProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
```

- [ ] **Step 2: Wrap inner content in Services, Gallery, Booking, Testimonials, About**

Pattern to apply in each component (wrap the inner `max-w-6xl` div, not the `<section>` tag):

```tsx
// In Services.tsx — import and wrap:
import SectionWrapper from '@/components/SectionWrapper'

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-white">
      <SectionWrapper>
        <div className="max-w-6xl mx-auto px-6">
          {/* existing content unchanged */}
        </div>
      </SectionWrapper>
    </section>
  )
}
```

Apply the same pattern to `Gallery.tsx`, `Booking.tsx`, `Testimonials.tsx`, `About.tsx`.

- [ ] **Step 3: Verify animations**

Scroll down — each section fades in and rises up as it enters the viewport. Animation plays once only.

- [ ] **Step 4: Commit**

```bash
git add components/SectionWrapper.tsx components/Services.tsx components/Gallery.tsx components/Booking.tsx components/Testimonials.tsx components/About.tsx
git commit -m "feat: Framer Motion fade-in-up scroll animations"
```

---

## Task 15: Performance Audit

**Files:**
- Modify: as needed based on findings

- [ ] **Step 1: Run production build**

```bash
npm run build && npm run start
```

- [ ] **Step 2: Lighthouse audit**

Chrome → DevTools → Lighthouse → check all categories → Generate report.

Targets: Performance 90+ · SEO 95+ · Accessibility 90+ · Best Practices 95+

- [ ] **Step 3: Fix common issues**

| Issue | Fix |
|---|---|
| Missing alt text | Ensure every `<Image>` has a descriptive `alt` |
| LCP slow | `priority` prop already on hero image |
| CLS | All images use `fill` + `aspect-square` containers |
| Low contrast | Verify text/background combinations pass WCAG AA |

- [ ] **Step 4: Commit fixes**

```bash
git add -A
git commit -m "perf: Lighthouse audit fixes"
```

---

## Task 16: SEO Final Check

- [ ] **Step 1: Verify meta tags in page source**

```bash
npm run build && npm run start
```

`Ctrl+U` to view source. Confirm:
- `<title>Pearl Nails & Spa | Nail Salon in Calgary, AB</title>`
- `<meta name="description" ...>`
- `<meta property="og:title" ...>`
- `<script type="application/ld+json">` with NailSalon schema

- [ ] **Step 2: Validate JSON-LD**

Copy JSON-LD block from source → paste into `https://validator.schema.org/` → confirm no errors.

- [ ] **Step 3: Verify sitemap**

`http://localhost:3000/sitemap.xml` → homepage URL appears.

- [ ] **Step 4: Commit if fixes needed**

```bash
git add -A
git commit -m "seo: final meta and schema validation pass"
```

---

## Task 17: Deploy to Vercel

- [ ] **Step 1: Push to GitHub**

Create repo `pearl-nails-spa` on GitHub, then:
```bash
git remote add origin https://github.com/<username>/pearl-nails-spa.git
git push -u origin master
```

- [ ] **Step 2: Deploy on Vercel**

1. Go to `https://vercel.com/new`
2. Import `pearl-nails-spa` repo
3. Framework: **Next.js** (auto-detected)
4. Click **Deploy** — wait ~60 seconds

- [ ] **Step 3: Verify live URL**

Visit the `*.vercel.app` URL — test full page on mobile and desktop.

- [ ] **Step 4: Submit sitemap to Google Search Console**

1. `https://search.google.com/search-console` → Add property
2. Submit `https://pearlnailsspa.ca/sitemap.xml`

---

## Post-Launch: Swap Fresha Widget

When Fresha account is ready:

1. Fresha dashboard → Online Booking → Get Widget Code → copy `<script>` snippet
2. In `components/Booking.tsx`, replace the placeholder `div` with:

```tsx
<div
  dangerouslySetInnerHTML={{
    __html: `<!-- paste Fresha embed script here -->`,
  }}
/>
```

3. Commit and push — Vercel auto-deploys within ~60 seconds.
