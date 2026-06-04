# Pearl Nails & Spa Ltd — Website Design Spec
**Date:** 2026-06-04  
**Status:** Approved

---

## Business Context

**Client:** Pearl Nails & Spa Ltd  
**Location:** 30 Springborough Blvd SW #142, Calgary, AB T3H 0N9  
**Phone:** (403) 242-8402  
**Hours:** Mon–Fri 10AM–7PM · Sat 10AM–6PM · Sun 10AM–5PM  
**Services:** Manicures, Pedicures, Nail Art, Waxing  
**Social:** [@pearl_nailsspa](https://www.instagram.com/pearl_nailsspa/) · [Facebook](https://www.facebook.com/PearlNailsandSpaLtd)

---

## Goals

- Showcase nail art and services to attract new clients
- Drive bookings via an embedded third-party booking widget (Fresha)
- Load fast on mobile and desktop
- Rank in local search for Calgary nail salon keywords
- Keep content fresh automatically via Instagram feed integration

---

## Design Theme

**Style:** Modern, minimalist, clean — comfortable and welcoming feel  
**Color palette:**

| Token | Value | Usage |
|---|---|---|
| Background | `#FFFFFF` | Page background |
| Primary accent | `#7EC850` | Buttons, highlights, borders |
| Text primary | `#1A1A1A` | Headings, body |
| Text secondary | `#6B6B6B` | Subtext, captions |
| Surface | `#F9F9F9` | Cards, section backgrounds |

**Typography:**
- Headings: `Playfair Display` (elegant serif)
- Body: `Inter` (clean sans-serif)
- Loaded via `next/font/google` — zero layout shift

---

## Tech Stack

| Layer | Choice | Reason |
|---|---|---|
| Framework | Next.js 15 (App Router) | SSG, SEO metadata API, `next/image` |
| Styling | Tailwind CSS | Mobile-first, utility-first, fast iteration |
| Animations | Framer Motion | Subtle scroll fade-ins |
| Booking | Fresha embed | No custom backend, handles payments/reminders |
| Gallery | Instagram oembed API | Auto-updates from existing Instagram posts |
| Hosting | Vercel | Zero-config CDN, Git auto-deploy |
| Fonts | next/font/google | Playfair Display + Inter, no layout shift |

---

## Page Structure

Single-page scrolling layout. Sections top to bottom:

### 1. Navbar
- Logo (left) · nav links (Services, Gallery, Book Now) · right
- Sticky — transparent on hero, solid white on scroll
- Mobile: hamburger menu → full-screen overlay

### 2. Hero
- Full-screen section with nail art background image
- Tagline: *"Where Beauty Meets Precision"* (placeholder — confirm with client)
- Primary CTA button: **"Book Now"** → scrolls to Booking section
- Overlay gradient to ensure text readability

### 3. Services
- Section heading + intro line
- 4-card grid: Manicure · Pedicure · Nail Art · Waxing
- Each card: icon, service name, short description, price range
- Grid: 1 col (mobile) → 2 col (tablet) → 4 col (desktop)

### 4. Gallery
- Section heading + "Follow us @pearl_nailsspa"
- Instagram oembed feed — latest 9–12 posts
- Grid: 2 col (mobile) → 3 col (tablet) → 4 col (desktop)
- Clicking a photo opens Instagram post in new tab

### 5. Booking
- Section heading: *"Ready to treat yourself?"*
- Fresha booking widget embedded via script tag
- Full-width, no login required for clients, real-time availability

### 6. Testimonials
- 3–4 review quote cards (sourced from Google/Facebook reviews)
- Reviewer name, star rating, quote excerpt
- Horizontal scroll on mobile, 3-col grid on desktop

### 7. About
- Short paragraph about the salon — welcoming tone
- Optional: team photo
- Walk-ins welcome callout

### 8. Footer
- Address, phone, hours
- Embedded Google Map (iframe)
- Social icons: Instagram, Facebook
- Copyright line

---

## Responsiveness

Mobile-first. Tailwind breakpoints used throughout:
- `sm` — 640px
- `md` — 768px  
- `lg` — 1024px

Every section tested at 375px (iPhone SE), 768px (iPad), 1280px (desktop).

---

## SEO Strategy

- `<title>`: `Pearl Nails & Spa | Nail Salon in Calgary, AB`
- `<meta description>`: 155-char description targeting Calgary nail salon keywords
- Open Graph tags for social sharing (og:title, og:description, og:image)
- JSON-LD `LocalBusiness` schema in `layout.tsx`:
  - name, address, phone, hours, geo coordinates, URL
- `sitemap.ts` — auto-generated, submitted to Google Search Console
- `robots.ts` — allow all crawlers
- `next/image` for all images — WebP format, lazy loading, proper alt tags
- Semantic HTML: header, main, section, footer, h1–h3

---

## Performance Targets

- Lighthouse Performance score: **90+**
- Largest Contentful Paint (LCP): **< 2.5s**
- Cumulative Layout Shift (CLS): **< 0.1**
- Strategy: SSG + Vercel CDN, next/image optimization, next/font, minimal JS

---

## File Structure

```
pearnails/
├── app/
│   ├── layout.tsx          ← root layout, fonts, metadata, JSON-LD
│   ├── page.tsx            ← assembles all section components
│   ├── sitemap.ts          ← SEO sitemap
│   └── robots.ts           ← SEO robots.txt
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── Gallery.tsx
│   ├── Booking.tsx
│   ├── Testimonials.tsx
│   ├── About.tsx
│   └── Footer.tsx
├── public/
│   └── images/
├── lib/
│   └── instagram.ts        ← Instagram oembed fetch helper
└── tailwind.config.ts
```

---

## Step-by-Step Build Plan

Each step requires explicit approval before implementation.

### Phase 1 — Project Foundation
- **Step 1** — Scaffold Next.js 15 + Tailwind CSS + configure custom colors/fonts
- **Step 2** — Install dependencies (Framer Motion, next/font)
- **Step 3** — Set up layout.tsx — metadata, JSON-LD schema, Open Graph tags
- **Step 4** — Set up sitemap.ts + robots.ts

### Phase 2 — Core Components
- **Step 5** — Navbar — logo, nav links, sticky scroll effect, mobile hamburger
- **Step 6** — Hero — full-screen section, tagline, Book Now CTA
- **Step 7** — Services — card grid with service name, description, price range
- **Step 8** — Gallery — Instagram oembed feed grid
- **Step 9** — Booking — Fresha widget embed section
- **Step 10** — Testimonials — review quote cards
- **Step 11** — About — blurb + optional team photo
- **Step 12** — Footer — address, hours, phone, map, social icons

### Phase 3 — Polish & Responsiveness
- **Step 13** — Mobile responsiveness pass
- **Step 14** — Framer Motion scroll animations
- **Step 15** — Performance audit (Lighthouse)

### Phase 4 — SEO & Deploy
- **Step 16** — SEO final check
- **Step 17** — Deploy to Vercel

---

## Decisions Log

- [x] Hero tagline: *"Where Beauty Meets Precision"* — approved
- [x] Logo: text-based logo for now (no image file)
- [x] Hero/gallery images: scrape from [@pearl_nailsspa](https://www.instagram.com/pearl_nailsspa/) Instagram via oembed for development; client will supply hi-res photos later
- [x] Booking platform: set up new **Fresha** account (free for businesses) — booking widget embed added once account is live; placeholder section used during development
- [ ] Confirm which testimonials to feature (3–4 reviews from Google/Facebook)
