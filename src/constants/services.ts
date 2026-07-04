import type { Service } from '@/types'

export const services: Service[] = [
  {
    id: 'business-website',
    icon: 'Globe',
    title: 'Business Websites',
    description:
      'Professional, high-converting business websites that establish your brand credibility and drive growth.',
    features: ['Custom Design', 'Mobile Responsive', 'SEO Ready', 'Fast Loading'],
    color: 'blue',
  },
  {
    id: 'corporate-website',
    icon: 'Building2',
    title: 'Corporate Websites',
    description:
      'Enterprise-grade corporate websites that reflect your brand values and impress stakeholders.',
    features: ['Multi-page', 'CMS Integration', 'Team Pages', 'Annual Reports'],
    color: 'indigo',
  },
  {
    id: 'landing-pages',
    icon: 'LayoutTemplate',
    title: 'Landing Pages',
    description:
      'High-performance landing pages engineered to maximize conversions and capture qualified leads.',
    features: ['A/B Testing Ready', 'Fast Load Time', 'Lead Forms', 'Analytics'],
    color: 'sky',
  },
  {
    id: 'ecommerce',
    icon: 'ShoppingCart',
    title: 'E-commerce Websites',
    description:
      'Powerful online stores that deliver seamless shopping experiences and boost your sales.',
    features: ['Product Catalog', 'Secure Checkout', 'Inventory Mgmt', 'Payment Gateway'],
    color: 'violet',
  },
  {
    id: 'website-redesign',
    icon: 'RefreshCw',
    title: 'Website Redesign',
    description:
      'Transform your outdated website into a modern, high-performing digital asset.',
    features: ['UX Audit', 'Modern UI', 'Speed Boost', 'SEO Preservation'],
    color: 'cyan',
  },
  {
    id: 'maintenance',
    icon: 'Wrench',
    title: 'Maintenance & Support',
    description:
      'Keep your website secure, updated, and performing at its best with our ongoing support.',
    features: ['Monthly Updates', 'Security Scans', 'Backups', 'Priority Support'],
    color: 'emerald',
  },
]
