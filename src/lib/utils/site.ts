import type { SiteConfig, Project, Experience, Testimonial } from '$types/site';

export const site: SiteConfig = {
  name: 'Dev Moe Kyawaung',
  title: 'Dev Moe Kyawaung | Premium SvelteKit Portfolio',
  description: 'Luxury SvelteKit SSR portfolio with premium visuals, SEO, and polished sections.',
  url: 'https://example.com',
  email: 'hello@example.com',
  location: 'Gangseo-gu, Seoul, KR',
  social: {
    github: 'https://github.com/Dev-moe-kyawaung',
    linkedin: 'https://www.linkedin.com',
    x: 'https://x.com'
  }
};

export const projects: Project[] = [
  {
    title: 'Astra Studio',
    slug: 'astra-studio',
    description: 'High-end brand site with sleek motion and conversion-focused structure.',
    year: '2026',
    stack: ['SvelteKit', 'Tailwind', 'TypeScript'],
    featured: true
  },
  {
    title: 'Nova SaaS',
    slug: 'nova-saas',
    description: 'Product launch site with crisp hierarchy and premium UI details.',
    year: '2025',
    stack: ['SvelteKit', 'SSR', 'SEO'],
    featured: true
  },
  {
    title: 'Portfolio OS',
    slug: 'portfolio-os',
    description: 'Personal brand portfolio designed for speed and elegance.',
    year: '2025',
    stack: ['SvelteKit', 'Vite', 'Playwright']
  }
];

export const experiences: Experience[] = [
  {
    role: 'Frontend Developer',
    company: 'Independent',
    period: '2024 — Present',
    summary: 'Building premium websites, design systems, and fast SSR experiences.'
  },
  {
    role: 'UI Engineer',
    company: 'Freelance',
    period: '2022 — 2024',
    summary: 'Shipped polished client sites with strong performance and accessibility.'
  }
];

export const testimonials: Testimonial[] = [
  {
    name: 'Client One',
    role: 'Founder',
    quote: 'A premium, elegant site that feels far more expensive than it was.'
  },
  {
    name: 'Client Two',
    role: 'Product Lead',
    quote: 'Fast, clean, and confident. The experience felt top-tier from start to finish.'
  }
];
