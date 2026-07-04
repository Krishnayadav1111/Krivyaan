import type { NavLink, SocialLink } from '@/types'

export const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/#services' },
  { label: 'Portfolio', href: '/#portfolio' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'About', href: '/#why-us' },
  { label: 'Contact', href: '/contact' },
]

export const socialLinks: SocialLink[] = [
  { platform: 'Twitter', url: 'https://twitter.com', icon: 'Twitter' },
  { platform: 'LinkedIn', url: 'https://linkedin.com', icon: 'Linkedin' },
  { platform: 'Instagram', url: 'https://instagram.com', icon: 'Instagram' },
  { platform: 'GitHub', url: 'https://github.com', icon: 'Github' },
]

export const footerServices = [
  'Business Websites',
  'Corporate Websites',
  'Landing Pages',
  'E-commerce Websites',
  'Website Redesign',
  'Maintenance & Support',
]

export const footerQuickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/#services' },
  { label: 'Portfolio', href: '/#portfolio' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Contact', href: '/contact' },
]

export const trustedCompanies = [
  { id: '1', name: 'TechCorp', logo: 'TC' },
  { id: '2', name: 'Greenfield', logo: 'GF' },
  { id: '3', name: 'Hartley & Co', logo: 'HC' },
  { id: '4', name: 'PulseMedia', logo: 'PM' },
  { id: '5', name: 'Summit Group', logo: 'SG' },
  { id: '6', name: 'NovaTech', logo: 'NT' },
  { id: '7', name: 'Bloom Studio', logo: 'BS' },
  { id: '8', name: 'Apex Digital', logo: 'AD' },
]

export const siteConfig = {
  name: 'Krivyaan',
  tagline: 'Websites That Turn Visitors Into Customers',
  description:
    'We build fast, modern business websites that help companies across India, USA, UK, Australia, and Canada grow online and attract more clients.',
  email: 'zenix.krishna@gmail.com',
  phone: '+1 (555) 234-5678',
  address: 'Remote-first · Serving India, USA, UK, AU & CA',
  url: 'https://krivyaan.com',
}
