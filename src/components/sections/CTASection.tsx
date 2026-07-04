'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Star } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function CTASection() {
  const handleClick = () => {
    document.querySelector('#enquiry')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="cta" className="py-20 md:py-28 overflow-hidden">
      <div className="container-custom">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary via-blue-700 to-accent p-1">
          <div className="relative rounded-[22px] bg-gradient-to-br from-primary-600 to-blue-800 px-8 py-16 md:px-16 md:py-20 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden>
              <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/5 blur-2xl" />
              <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-accent/20 blur-2xl" />
              <svg
                className="absolute inset-0 w-full h-full opacity-[0.04]"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern id="cta-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <circle cx="1" cy="1" r="1.5" fill="white" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#cta-grid)" />
              </svg>

              {/* Floating star */}
              <motion.div
                animate={{ y: [-8, 8, -8], rotate: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute top-8 right-12 md:right-24 hidden md:block"
              >
                <Star className="w-10 h-10 text-amber-300/60" fill="currentColor" />
              </motion.div>
              <motion.div
                animate={{ y: [6, -6, 6] }}
                transition={{ duration: 7, repeat: Infinity, delay: 1 }}
                className="absolute bottom-8 left-12 md:left-24 hidden md:block"
              >
                <div className="w-8 h-8 rounded-xl border-2 border-white/20" />
              </motion.div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              {/* Rating */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-6 inline-flex items-center gap-2"
              >
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <span className="text-sm font-medium text-blue-100">
                  5.0 · Trusted by 150+ businesses
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white text-balance leading-tight mb-4"
              >
                Ready to Grow Your
                <br />
                <span className="text-blue-200">Business Online?</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg text-blue-100 mb-10 text-balance leading-relaxed"
              >
                Book your free consultation today. We&apos;ll discuss your goals, recommend the
                right solution, and give you a clear project plan — no obligation.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <Button
                  variant="dark"
                  size="xl"
                  id="cta-book"
                  onClick={handleClick}
                  rightIcon={<ArrowRight className="w-5 h-5" />}
                  className="bg-white text-primary hover:bg-blue-50 w-full sm:w-auto min-w-[240px] shadow-lg"
                >
                  Book Free Consultation
                </Button>
                <Button
                  variant="ghost"
                  size="xl"
                  id="cta-portfolio"
                  onClick={() =>
                    document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="text-white hover:bg-white/10 w-full sm:w-auto"
                >
                  View Our Portfolio
                </Button>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mt-6 text-sm text-blue-300"
              >
                Free consultation · No commitment · Response within 24 hours
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
