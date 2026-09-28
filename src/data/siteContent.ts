export interface CollectionItem {
  id: string;
  title: string;
  category: string;
  description: string;
  details: string;
  image: string;
  aspect: 'large' | 'standard' | 'portrait';
  materials: string[];
  dimensions: string;
  badge?: string;
}

export interface WorkshopDetails {
  title: string;
  subtitle: string;
  sessionName: string;
  description: string;
  extendedDescription: string;
  schedule: Array<{
    date: string;
    day: string;
    time: string;
    seatsLeft: number;
    totalSeats: number;
  }>;
  duration: string;
  location: string;
  inclusions: string[];
  level: string;
  pricePerSeat: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Crochet Bouquets' | 'Velvet Sticks' | 'Gift Boxes' | 'Atelier';
  aspectRatio: 'portrait' | 'landscape' | 'square';
  image: string;
  caption: string;
  dimensions?: string;
  craftTime?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  location: string;
  occasion: string;
}

export const SITE_CONFIG = {
  brandName: 'Floral Twistella',
  brandTagline: 'Crochet & Velvet Stems, Made to Last.',
  brandSubtitle: 'Thoughtfully handcrafted crochet blooms and sculpted velvet pipe cleaner flowers designed to turn everyday moments into plush, everlasting keepsakes.',
  contact: {
    email: 'shifafaheem97@gmail.com',
    phone: '',
    phoneDisplay: '',
    phoneTel: '',
    whatsapp: '', // Phone number removed
    whatsappDisplay: '',
    address: '42 Gardenia Walk, Artisan Quarter, Studio 3B',
    hours: 'Monday – Saturday: 10:00 AM – 6:00 PM',
    timezone: 'Studio Appointments & Online Inquiries Welcome',
  },
  socials: {
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
    pinterest: 'https://pinterest.com',
  },
};

export const COLLECTIONS_DATA: CollectionItem[] = [
  {
    id: 'signature-crochet-bouquets',
    title: 'Signature Crochet & Velvet Bouquets',
    category: 'Crochet & Velvet Blooms',
    description: 'Intricately knit crochet roses paired with sculpted plush velvet pipe cleaner tulips and fuzzy chenille foliage.',
    details: 'Each piece blends soft combed cotton crochet stitches with dense, ultra-soft velvet chenille sticks twisted by hand into perpetual petals that never wilt or shed.',
    image: '/images/collection-crochet-bouquet.jpg',
    aspect: 'large',
    materials: ['Soft combed cotton yarn', 'Dense velvet pipe cleaners', 'Flexible floral wire core', 'Raw silk ribbon'],
    dimensions: 'Approx. 42cm H × 30cm W',
    badge: 'Atelier Signature',
  },
  {
    id: 'velvet-pipe-cleaner-gift-boxes',
    title: 'Velvet Pipe Cleaner Floral Gift Boxes',
    category: 'Plush Keepsakes',
    description: 'Delicate velvet pipe cleaner flowers and miniature crochet blossoms nestled in linen-wrapped presentation chests.',
    details: 'Crafted with tactile velvet chenille sticks in warm pastels, finished with crochet accent buds and personal wax-sealed calligraphy notes.',
    image: '/images/collection-velvet-box.jpg',
    aspect: 'standard',
    materials: ['Plush velvet chenille sticks', 'Crochet cotton florets', 'Archival linen gift box', 'Wax seal'],
    dimensions: '22cm × 22cm × 15cm',
  },
  {
    id: 'sculpted-velvet-arrangements',
    title: 'Sculpted Velvet & Crochet Arrangements',
    category: 'Vessel Compositions',
    description: 'Everlasting tabletop centerpieces styled into textured stoneware ceramics with plush velvet stems.',
    details: 'Featuring hand-bent velvet wire peonies, fuzzy lavender sprigs, and crochet daisy accents that bring warmth and cozy texture to desks and shelves.',
    image: '/images/gallery-velvet-arrangement.jpg',
    aspect: 'standard',
    materials: ['Handmade ceramic vessel', 'Velvet wire pipe cleaners', 'Combed cotton yarn', 'Brass stem armature'],
    dimensions: 'Approx. 48cm H × 34cm W',
  },
  {
    id: 'custom-crochet-creations',
    title: 'Bespoke Crochet & Velvet Commissions',
    category: 'Bespoke Commissions',
    description: 'Custom color-matched crochet bridal bouquets, velvet flower gift baskets, and plush floral sculptures.',
    details: 'Collaborate with our studio craftswoman to pick specific yarn weights, velvet stick tones, and floral varieties for weddings, birthdays, and anniversaries.',
    image: '/images/hero-crochet-velvet.jpg',
    aspect: 'large',
    materials: ['Custom selected yarn palette', 'Premium velvet craft sticks', 'Reinforced wire stems'],
    dimensions: 'Tailored to your space',
    badge: 'Custom Commission',
  },
];

export const WORKSHOP_DATA: WorkshopDetails = {
  title: 'Create something beautiful, by hand.',
  subtitle: 'UPCOMING EXPERIENCE',
  sessionName: 'The Art of Velvet Pipe Cleaner Flowers & Crochet Petals',
  description: 'Join an intimate Floral Twistella workshop and learn how to shape plush velvet pipe cleaners and knit delicate crochet blooms in a relaxed, cozy setting.',
  extendedDescription: 'Step into our sunlit atelier where you will discover the joyful tactile art of fiber flowers. You will learn petal-curling techniques for high-density velvet chenille sticks, crochet edge sculpting, and how to assemble your own everlasting plush bouquet to take home.',
  schedule: [
    {
      date: 'Saturday, October 11',
      day: 'Morning Atelier',
      time: '10:30 AM – 1:30 PM',
      seatsLeft: 3,
      totalSeats: 8,
    },
    {
      date: 'Saturday, October 25',
      day: 'Afternoon Atelier',
      time: '2:30 PM – 5:30 PM',
      seatsLeft: 5,
      totalSeats: 8,
    },
    {
      date: 'Saturday, November 8',
      day: 'Morning Atelier',
      time: '10:30 AM – 1:30 PM',
      seatsLeft: 6,
      totalSeats: 8,
    },
  ],
  duration: '3 Hours of Guided Hands-On Craft',
  location: 'Floral Twistella Atelier, 42 Gardenia Walk (Studio 3B)',
  inclusions: [
    'Curated bundle of premium plush velvet pipe cleaners (15+ pastel & botanical shades)',
    'Soft combed cotton crochet yarn, bamboo crochet hooks & floral tape',
    'Custom ceramic display vase for your completed plush bouquet',
    'Artisanal tea, sparkling botanical water & light pastries',
  ],
  level: 'Beginner friendly · No prior crochet or craft experience required',
  pricePerSeat: '$145 per guest',
};

export const WORKSHOP_BENEFITS = [
  {
    title: 'Learn Velvet & Crochet Craft',
    description: 'Master twisting velvet chenille wire into realistic petals and simple crochet fluting.',
    icon: 'flower',
  },
  {
    title: 'All Plush Materials Provided',
    description: 'Premium fuzzy velvet sticks, combed cotton yarns, hooks, snips, and ceramic vase included.',
    icon: 'scissors',
  },
  {
    title: 'Take Your Creation Home',
    description: 'Leave with a finished, everlasting plush bouquet that will never fade, wilt, or gather dust.',
    icon: 'gift',
  },
  {
    title: 'Relaxed Small Group',
    description: 'Limited to just 8 seats per session for personal guidance and a soothing, friendly space.',
    icon: 'sparkle',
  },
];

export const SERVICES_DATA = [
  {
    number: '01',
    title: 'Custom Crochet Bouquets',
    description: 'Personalized crochet bouquets and velvet stem arrangements created around your favorite flowers and palette.',
    details: 'From everlasting bridal keepsakes to birthday gifts, crafted with premium combed cotton and plush velvet wire.',
  },
  {
    number: '02',
    title: 'Velvet Floral Event Styling',
    description: 'Unique tactile floral accents for cozy celebrations, photo backdrops, book launches, and intimate parties.',
    details: 'Handmade velvet pipe cleaner table runners, photo-worthy arches, and bespoke guest favors.',
  },
  {
    number: '03',
    title: 'Plush Floral Gifting',
    description: 'Handcrafted crochet and velvet flower gift sets designed to feel warm, personal, and unforgettable.',
    details: 'Presented inside linen boxes with wax-sealed messages and velvet ribbon detailing.',
  },
  {
    number: '04',
    title: 'Private Craft Workshops',
    description: 'Creative velvet wire and crochet flower making sessions for bridal showers, birthdays, and team gatherings.',
    details: 'Hosted in our airy atelier or brought to your private event venue with full toolkits.',
  },
];

export const PROCESS_STEPS = [
  {
    step: '01',
    label: 'DISCOVER',
    description: 'Tell us about your occasion, yarn tones, and flower vision.',
    note: 'We discuss desired flower types (roses, tulips, daisies, peonies) and coordinate crochet and velvet wire textures.',
  },
  {
    step: '02',
    label: 'CRAFT',
    description: 'Our atelier hand-twists velvet chenille wire and crochets delicate yarn petals.',
    note: 'Each petal is sculpted with care, shaped over flexible wire stems, and bound into sturdy plush blossoms.',
  },
  {
    step: '03',
    label: 'DELIVER',
    description: 'Your finished creation is wrapped in luxury kraft paper and boxed for keeps.',
    note: 'Prepared in protective keepsake packaging, ready to gift or place in your favorite vase forever.',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Atelier Crochet & Velvet Keepsake',
    category: 'Crochet Bouquets',
    aspectRatio: 'portrait',
    image: '/images/hero-crochet-velvet.jpg',
    caption: 'Soft combed cotton crochet roses intertwined with plush dusty rose velvet pipe cleaner tulips.',
    dimensions: '42cm × 30cm',
    craftTime: '16 crafting hours',
  },
  {
    id: 'gal-2',
    title: 'The Velvet Craft Table',
    category: 'Atelier',
    aspectRatio: 'landscape',
    image: '/images/workshop-craft.jpg',
    caption: 'Artisans hand-twisting plush chenille craft sticks and crocheting botanical stems with wooden hooks.',
    dimensions: 'Studio Experience',
    craftTime: '3-hour Workshop',
  },
  {
    id: 'gal-3',
    title: 'Artisanal Blush Velvet Bouquet',
    category: 'Crochet Bouquets',
    aspectRatio: 'square',
    image: '/images/collection-crochet-bouquet.jpg',
    caption: 'Tactile bouquet featuring fuzzy velvet pipe cleaner roses and delicate knit buds in muted blush.',
    dimensions: '38cm × 28cm',
    craftTime: '12 crafting hours',
  },
  {
    id: 'gal-4',
    title: 'Velvet Sticks Floral Keepsake Box',
    category: 'Gift Boxes',
    aspectRatio: 'landscape',
    image: '/images/collection-velvet-box.jpg',
    caption: 'Plush velvet chenille wire flowers nestled in a natural linen presentation box with silk ribbons.',
    dimensions: '22cm × 22cm',
    craftTime: '9 crafting hours',
  },
  {
    id: 'gal-5',
    title: 'Ceramic Stem Arrangement',
    category: 'Velvet Sticks',
    aspectRatio: 'portrait',
    image: '/images/gallery-velvet-arrangement.jpg',
    caption: 'Sculptural velvet pipe cleaner floral stems and crochet blossoms styled in a matte ceramic vase.',
    dimensions: '48cm × 32cm',
    craftTime: '14 crafting hours',
  },
  {
    id: 'gal-6',
    title: 'Pastel Crochet & Velvet Posy',
    category: 'Crochet Bouquets',
    aspectRatio: 'square',
    image: '/images/collection_crochet_bouquet_1790198019963.jpg',
    caption: 'Delicate combination of crochet knit texture and velvety fuzzy pipe cleaner flower petals.',
    dimensions: '32cm × 24cm',
    craftTime: '10 crafting hours',
  },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    quote: 'The crochet roses and velvet pipe cleaner tulips are even fluffier and more charming in person. They look magical on my bedside table.',
    author: 'Ayesha M.',
    location: 'Custom Crochet Keepsake Bouquet',
    occasion: 'Anniversary Gift',
  },
  {
    quote: 'Learning how to twist velvet sticks into realistic flower petals was so therapeutic and fun! The workshop was welcoming and cozy.',
    author: 'Hira K.',
    location: 'Velvet Wire & Crochet Workshop',
    occasion: 'Weekend Studio Guest',
  },
  {
    quote: 'I ordered a velvet floral gift box for my sister. The plush texture and craftsmanship are outstanding — a gift she keeps forever.',
    author: 'Sara K.',
    location: 'Velvet Floral Keepsake Box',
    occasion: 'Graduation Keepsake',
  },
];
