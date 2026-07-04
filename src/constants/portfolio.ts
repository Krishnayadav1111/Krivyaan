import type { PortfolioItem } from '@/types'

export const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    title: 'NovaTech Solutions',
    category: 'Corporate Website',
    description:
      'A sleek corporate website for a US-based SaaS company, featuring animated sections and lead capture.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    liveUrl: '#',
    featured: true,
  },
  {
    id: '2',
    title: 'Greenfield Organics',
    category: 'E-commerce Website',
    description:
      'Full-featured e-commerce store for an Australian organic food brand with subscription model.',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80',
    technologies: ['Next.js', 'Shopify API', 'Stripe'],
    liveUrl: '#',
    featured: true,
  },
  {
    id: '3',
    title: 'Hartley & Associates',
    category: 'Business Website',
    description:
      'Professional law firm website for a UK-based firm with appointment booking integration.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    technologies: ['React', 'Node.js', 'PostgreSQL'],
    liveUrl: '#',
    featured: false,
  },
  {
    id: '4',
    title: 'PulseMarketing Co.',
    category: 'Landing Page',
    description:
      'High-converting lead generation landing page that increased client conversions by 340%.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80',
    technologies: ['Next.js', 'Framer Motion', 'HubSpot'],
    liveUrl: '#',
    featured: true,
  },
  {
    id: '5',
    title: 'Summit Financial Group',
    category: 'Corporate Website',
    description:
      'Enterprise financial services website with secure client portal integration for a Canadian firm.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    technologies: ['Next.js', 'TypeScript', 'Auth0'],
    liveUrl: '#',
    featured: false,
  },
  {
    id: '6',
    title: 'Bloom Beauty Studio',
    category: 'Website Redesign',
    description:
      'Complete redesign of a beauty brand website resulting in 210% increase in online bookings.',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=80',
    technologies: ['Next.js', 'Tailwind CSS', 'Calendly API'],
    liveUrl: '#',
    featured: false,
  },
]
