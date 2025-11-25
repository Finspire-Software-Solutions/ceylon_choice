export type HeroSlide = {
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  image: string;
};

export const heroSlides: HeroSlide[] = [
  {
    title: 'Taste of Sri Lanka',
    subtitle: 'Authentic snacks and groceries',
    description: 'Discover premium quality products crafted with care.',
    ctaText: 'Shop Products',
    ctaLink: '/products',
    image: '/images/slider/s1.jpg',
  },
  {
    title: 'Quality You Can Trust',
    subtitle: 'Made in Sri Lanka',
    description: 'From ingredients to packaging, we ensure top standards.',
    ctaText: 'Learn More',
    ctaLink: '/about',
    image: '/images/slider/s2.jpg',
  },
  {
    title: 'Fresh and Flavorful',
    subtitle: 'From local farms to you',
    description: 'Experience the richness of Sri Lankan ingredients.',
    ctaText: 'Explore Groceries',
    ctaLink: '/products',
    image: '/images/slider/s1.jpg',
  },
  {
    title: 'Snack Time Perfected',
    subtitle: 'Crunch, spice, and delight',
    description: 'Our chips are crafted for bold flavor and crispness.',
    ctaText: 'View Snacks',
    ctaLink: '/products',
    image: '/images/slider/s2.jpg',
  },
];