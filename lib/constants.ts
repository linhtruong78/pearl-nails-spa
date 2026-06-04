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
  { days: 'Saturday & Holidays', time: '10:00 AM – 6:00 PM' },
  { days: 'Sunday', time: '10:00 AM – 5:00 PM' },
]

// Overview cards shown in the Services section
export const SERVICES = [
  {
    id: 'nails',
    name: 'Nail Services',
    description:
      'Bio Gel, Sculpture, Solar, Acrylic, Dipping Powder, Ombre & Shellac sets — new sets and fills available.',
    price: 'From $33',
  },
  {
    id: 'spa',
    name: 'Spa Manicure & Pedicure',
    description:
      'Relaxing spa manicures and pedicures including French, Shellac, and Herbal Spa treatments.',
    price: 'From $25',
  },
  {
    id: 'nail-art',
    name: 'Nail Art & Design',
    description:
      'Custom nail art, chrome powder, colour change, and eyelash extensions for a flawless finishing touch.',
    price: 'From $8',
  },
  {
    id: 'waxing',
    name: 'Waxing',
    description:
      'Full waxing menu — brows, lip, face, arms, legs, bikini, Brazilian, and Paraffin Wax treatments.',
    price: 'From $10',
  },
]

// Full price list sourced from salon menu
export const PRICE_LIST = [
  {
    category: 'Nail Services',
    items: [
      { name: 'Clear Bio Gel New Set', price: '$75' },
      { name: 'Clear Bio Gel Nails Fill', price: '$40' },
      { name: 'Bio Gel Nails Fill White Tip', price: '$60' },
      { name: 'Clear Sculpture Nails New Set', price: '$75' },
      { name: 'Clear Gel Nails New Set', price: '$60' },
      { name: 'Clear Gel Nails Fill', price: '$35' },
      { name: 'Gel Nails Fill White Tip', price: '$55' },
      { name: 'Clear Solar Nails New Set', price: '$55' },
      { name: 'Clear Solar Nails Fill', price: '$35' },
      { name: 'Solar Nails Fill White Tip', price: '$35' },
      { name: 'Solar Nails New Set', price: '$75' },
      { name: 'Ombre Nails Fill', price: '$55' },
      { name: 'Ombre Nails New Set', price: '$55' },
      { name: 'Clear Acrylic Nails New Set', price: '$53' },
      { name: 'Clear Acrylic Nails Fill', price: '$33' },
      { name: 'Acrylic Fill White Tip', price: '$55' },
      { name: 'Dipping Powder', price: '$10 & up' },
      { name: 'Nails Repair', price: '$50' },
      { name: 'Manicure Shellac Ombre', price: '$20 & up' },
      { name: 'Artificial Nails Take Off', price: '$15' },
      { name: 'Shellac Take Off', price: '$15' },
    ],
  },
  {
    category: 'Spa Services',
    items: [
      { name: 'Spa Pedicure French Shellac', price: '$60' },
      { name: 'Manicure French Shellac', price: '$45' },
      { name: 'Manicure Shellac', price: '$40' },
      { name: 'Spa Pedicure & Manicure', price: '$55' },
      { name: 'Spa Pedicure', price: '$40' },
      { name: 'Spa Manicure', price: '$25' },
      { name: 'Spa Pedicure French', price: '$50' },
      { name: 'Spa Manicure French', price: '$35' },
      { name: 'Herbal Spa Pedicure', price: '$55' },
      { name: 'Ingrown Nails Removal', price: '$10' },
      { name: 'Spa Pedicure Shellac', price: '$55' },
    ],
  },
  {
    category: 'Nail Art & Design',
    items: [
      { name: 'Shellac Color Only', price: '$35' },
      { name: 'Shellac French / Color Only', price: '$30' },
      { name: 'Shellac Color Change / French', price: '$40' },
      { name: 'Shellac Color Change', price: '$20' },
      { name: 'Regular Color Change', price: '$10 & up' },
      { name: 'Chrome', price: '$15 & up' },
      { name: 'Nails Cut & Shape', price: '$8' },
      { name: 'Nails Art Design', price: '$95' },
      { name: 'Eyelash New Set', price: '$75' },
      { name: 'Eyelash Fill', price: '$30' },
      { name: 'Eyelash Take Off', price: '$15' },
    ],
  },
  {
    category: 'Waxing',
    items: [
      { name: 'Eyebrow', price: '$15' },
      { name: 'Eyebrow Tinting', price: '$20' },
      { name: 'Eyelash Tinting', price: '$25' },
      { name: 'Forehead', price: '$15' },
      { name: 'Chin', price: '$10' },
      { name: 'Upper Lip', price: '$10' },
      { name: 'Face', price: '$45' },
      { name: 'Chest', price: '$40' },
      { name: 'Back', price: '$45' },
      { name: 'Under Arm', price: '$20' },
      { name: 'Sideburns', price: '$20' },
      { name: 'Upper Arm', price: '$30' },
      { name: 'Lower Arm', price: '$30' },
      { name: 'Full Arm', price: '$55 & up' },
      { name: 'Upper Leg', price: '$40' },
      { name: 'Lower Leg', price: '$40' },
      { name: 'Full Leg', price: '$75 & up' },
      { name: 'Bikini', price: '$45' },
      { name: 'Brazilian', price: '$55' },
      { name: 'Paraffin Wax', price: '$15' },
    ],
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
