'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import Image from 'next/image'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { AnimatedCard } from '@/components/ui/AnimatedCard'
import { testimonials } from '@/constants/testimonials'
import { cn } from '@/lib/utils'

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            'w-4 h-4',
            i < rating ? 'text-amber-400 fill-amber-400' : 'text-slate-200'
          )}
        />
      ))}
    </div>
  )
}

export function TestimonialsSection() {
  const [active, setActive] = useState(0)

  const prev = () => setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1))
  const next = () => setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1))

  return (
    <section id="testimonials" className="section-padding bg-slate-50/60 overflow-hidden">
      <div className="container-custom">
        <SectionHeading
          badge="Client Testimonials"
          title="What Our Clients "
          highlight="Say About Us"
          subtitle="Real feedback from real businesses we've helped grow across 4 countries."
        />

        {/* Featured testimonial */}
        <div className="max-w-4xl mx-auto mb-12">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-3xl border border-slate-100 shadow-card p-8 md:p-10 lg:p-12 relative"
          >
            <Quote className="absolute top-8 right-8 w-10 h-10 text-primary/10" />

            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-slate-100">
                  <Image
                    src={testimonials[active].avatar}
                    alt={testimonials[active].name}
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="flex-1">
                <StarRating rating={testimonials[active].rating} />
                <p className="mt-4 text-lg md:text-xl text-slate-700 leading-relaxed font-medium italic">
                  &ldquo;{testimonials[active].review}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <div>
                    <p className="font-display font-bold text-slate-900">
                      {testimonials[active].name}
                    </p>
                    <p className="text-sm text-slate-500">
                      {testimonials[active].role} at{' '}
                      <span className="text-primary font-medium">
                        {testimonials[active].company}
                      </span>{' '}
                      · {testimonials[active].location}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-8 flex items-center justify-between">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    className={cn(
                      'h-2 rounded-full transition-all duration-300',
                      i === active ? 'w-6 bg-primary' : 'w-2 bg-slate-200 hover:bg-slate-300'
                    )}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  aria-label="Previous testimonial"
                  className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:border-primary hover:text-primary hover:bg-primary-50 transition-all"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={next}
                  aria-label="Next testimonial"
                  className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:border-primary hover:text-primary hover:bg-primary-50 transition-all"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mini cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, index) => (
            <AnimatedCard
              key={t.id}
              delay={index * 0.07}
              onClick={() => setActive(index)}
              className={cn(
                'bg-white rounded-2xl border p-5 cursor-pointer transition-all duration-200',
                index === active
                  ? 'border-primary shadow-card-hover'
                  : 'border-slate-100 shadow-card hover:border-slate-200 hover:shadow-card-hover'
              )}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl overflow-hidden border border-slate-100 flex-shrink-0">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.company}</p>
                </div>
              </div>
              <StarRating rating={t.rating} />
              <p className="mt-2 text-xs text-slate-500 leading-relaxed line-clamp-2">
                &ldquo;{t.review}&rdquo;
              </p>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  )
}
