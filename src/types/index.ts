// Core shared types for the Krivyaan agency website

export interface Service {
  id: string
  icon: string
  title: string
  description: string
  features: string[]
  color: string
}

export interface PortfolioItem {
  id: string
  title: string
  category: string
  description: string
  image: string
  technologies: string[]
  liveUrl?: string
  featured?: boolean
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  avatar: string
  review: string
  rating: number
  location: string
}

export interface PricingPlan {
  id: string
  name: string
  price: number
  currency: string
  period: string
  description: string
  features: string[]
  notIncluded?: string[]
  highlighted?: boolean
  badge?: string
  cta: string
}

export interface FAQItem {
  id: string
  question: string
  answer: string
}

export interface ProcessStep {
  id: string
  step: number
  title: string
  description: string
  icon: string
  color: string
}

export interface WhyUsFeature {
  id: string
  icon: string
  title: string
  description: string
  color: string
}

export interface NavLink {
  label: string
  href: string
}

export interface ContactFormData {
  name: string
  email: string
  phone?: string
  company?: string
  message: string
  service?: string
  budget?: string
}

export interface SocialLink {
  platform: string
  url: string
  icon: string
}

export interface TrustedCompany {
  id: string
  name: string
  logo: string
}
