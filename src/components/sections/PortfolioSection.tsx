'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { AnimatedCard } from '@/components/ui/AnimatedCard'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { portfolioItems } from '@/constants/portfolio'

const categories = ['All', 'Corporate Website', 'Business Website', 'E-commerce Website', 'Landing Page', 'Website Redesign']

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered =
    activeCategory === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory)

  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading
          badge="Our Portfolio"
          title="Work We're "
          highlight="Proud Of"
          subtitle="A curated selection of business websites we've built for clients across the USA, UK, Australia, and Canada."
        />

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-primary text-white shadow-button'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Portfolio grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((item, index) => (
              <AnimatedCard
                key={item.id}
                delay={index * 0.08}
                className="group bg-white rounded-2xl border border-slate-100 shadow-card hover:shadow-card-hover overflow-hidden transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <Badge variant="blue" className="bg-white/90 backdrop-blur-sm">
                      {item.category}
                    </Badge>
                    {item.liveUrl && (
                      <a
                        href={item.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/90 backdrop-blur-sm text-slate-700 hover:text-primary transition-colors"
                        aria-label={`View ${item.title} live`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-display text-base font-bold text-slate-900 mb-1.5 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-4 line-clamp-2">
                    {item.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-100 text-xs font-medium text-slate-500"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-3 transition-all duration-200">
                    View Project
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  )
}
