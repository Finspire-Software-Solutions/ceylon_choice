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
    image: '/images/slider/1.webp',
  },
  {
    title: 'Quality You Can Trust',
    subtitle: 'Made in Sri Lanka',
    description: 'From ingredients to packaging, we ensure top standards.',
    ctaText: 'Learn More',
    ctaLink: '/about',
    image: '/images/slider/2.webp',
  },
   {
    title: 'Quality You Can Trust',
    subtitle: 'Made in Sri Lanka',
    description: 'From ingredients to packaging, we ensure top standards.',
    ctaText: 'Learn More',
    ctaLink: '/about',
    image: '/images/slider/3.webp',
  },
   {
    title: 'Quality You Can Trust',
    subtitle: 'Made in Sri Lanka',
    description: 'From ingredients to packaging, we ensure top standards.',
    ctaText: 'Learn More',
    ctaLink: '/about',
    image: '/images/slider/4.webp',
  }

];