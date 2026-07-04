'use client'

import { motion } from 'framer-motion'
import { trustedCompanies } from '@/constants/navigation'

// Duplicate for seamless marquee
const companies = [...trustedCompanies, ...trustedCompanies]

export function TrustedBy() {
  return (
    <section
      id="trusted-by"
      className="py-16 border-y border-slate-100 bg-white overflow-hidden"
    >
      <div className="container-custom mb-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm font-medium text-slate-400 uppercase tracking-widest"
        >
          Trusted by businesses across 4 countries
        </motion.p>
      </div>

      {/* Marquee */}
      <div className="relative flex overflow-hidden">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-10 items-center"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            x: { duration: 30, repeat: Infinity, ease: 'linear' },
          }}
          style={{ width: 'max-content' }}
        >
          {companies.map((company, i) => (
            <div
              key={`${company.id}-${i}`}
              className="flex items-center gap-3 px-6 py-3 rounded-xl bg-slate-50 border border-slate-100 flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity duration-300 group"
            >
              <div className="w-8 h-8 rounded-lg bg-slate-200 flex items-center justify-center group-hover:bg-primary-100 transition-colors">
                <span className="text-xs font-bold text-slate-500 group-hover:text-primary transition-colors">
                  {company.logo}
                </span>
              </div>
              <span className="text-sm font-semibold text-slate-500 whitespace-nowrap group-hover:text-slate-700 transition-colors">
                {company.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
