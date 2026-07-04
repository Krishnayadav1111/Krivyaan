'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play, ChevronDown, Star, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const stats = [
  { value: '150+', label: 'Projects Delivered' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '5 Countries', label: 'IN · USA · UK · AU · CA' },
]

const socialProof = [
  'Fast delivery',
  'Mobile-first design',
  'SEO optimized',
]

export function HeroSection() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/40 to-sky-50/30 pt-16"
    >
      {/* Decorative background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
        <div className="absolute -top-40 -right-32 w-[600px] h-[600px] rounded-full bg-blue-100/50 blur-3xl" />
        <div className="absolute -bottom-40 -left-32 w-[500px] h-[500px] rounded-full bg-sky-100/40 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      {/* Floating animated shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
        {/* Grid dots */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.03]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1.5" fill="#2563EB" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>

        {/* Floating elements */}
        <motion.div
          animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-28 right-[12%] w-14 h-14 rounded-2xl bg-white shadow-card flex items-center justify-center"
        >
          <div className="w-6 h-6 rounded-lg bg-primary/20 flex items-center justify-center">
            <div className="w-3 h-3 rounded-sm bg-primary" />
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [8, -8, 8], rotate: [0, -5, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute top-48 left-[8%] w-12 h-12 rounded-2xl bg-white shadow-card flex items-center justify-center"
        >
          <Star className="w-5 h-5 text-amber-400" fill="currentColor" />
        </motion.div>

        <motion.div
          animate={{ y: [-12, 12, -12] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-32 right-[20%] w-16 h-16 rounded-full bg-white shadow-card flex items-center justify-center"
        >
          <CheckCircle className="w-7 h-7 text-emerald-500" />
        </motion.div>

        <motion.div
          animate={{ y: [6, -6, 6], x: [-4, 4, -4] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="absolute bottom-48 left-[15%] w-10 h-10 rounded-xl bg-primary/10 border border-primary/20"
        />

        <motion.div
          animate={{ y: [-8, 8, -8], rotate: [0, 90, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
          className="absolute top-1/3 right-[6%] w-8 h-8 rounded-lg border-2 border-primary/30 bg-primary/5"
        />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 py-20 md:py-28">
        <div className="max-w-4xl mx-auto text-center">
          {/* Top badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 inline-flex items-center gap-2"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white border border-primary-100 shadow-soft px-4 py-2 text-sm font-medium text-slate-700">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Available for new projects in July 2026
              <span className="text-slate-300">·</span>
              <span className="text-primary font-semibold">4 spots left</span>
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-slate-900 text-balance leading-[1.05]"
          >
            Websites That{' '}
            <br className="hidden sm:block" />
            <span className="gradient-text">Turn Visitors</span>
            <br />
            Into Customers.
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 text-lg sm:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed text-balance"
          >
            We build fast, modern business websites that help companies across{' '}
            <span className="text-slate-700 font-medium">India, USA, UK, Australia, and Canada</span>{' '}
            grow online and attract more clients.
          </motion.p>

          {/* Social proof pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-6 flex flex-wrap justify-center gap-2"
          >
            {socialProof.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-1.5 rounded-full bg-white border border-slate-200 px-3 py-1 text-xs font-medium text-slate-600 shadow-soft"
              >
                <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                {item}
              </span>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              variant="primary"
              size="xl"
              id="hero-cta-primary"
              onClick={() => scrollTo('#enquiry')}
              rightIcon={<ArrowRight className="w-5 h-5" />}
              className="w-full sm:w-auto min-w-[220px]"
            >
              Get Free Consultation
            </Button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + i * 0.1 }}
                className="flex flex-col items-center"
              >
                <span className="font-display text-2xl md:text-3xl font-bold gradient-text">
                  {stat.value}
                </span>
                <span className="mt-1 text-xs text-slate-500 text-center">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={() => scrollTo('#trusted-by')}
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-400 hover:text-primary transition-colors"
      >
        <span className="text-xs font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.button>
    </section>
  )
}
