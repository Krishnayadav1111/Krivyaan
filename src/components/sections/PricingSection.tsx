'use client'

import { motion } from 'framer-motion'
import { Check, X, ArrowRight, Zap } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { AnimatedCard } from '@/components/ui/AnimatedCard'
import { Button } from '@/components/ui/Button'
import { pricingPlans } from '@/constants/pricing'
import { cn } from '@/lib/utils'

export function PricingSection() {
  const handleCTA = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading
          badge="Transparent Pricing"
          title="Simple, Honest "
          highlight="Pricing"
          subtitle="No hidden fees. No surprises. Choose the plan that fits your business and budget."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <AnimatedCard
              key={plan.id}
              delay={index * 0.1}
              className={cn(
                'relative rounded-2xl border p-7 flex flex-col transition-all duration-300',
                plan.highlighted
                  ? 'bg-gradient-to-b from-primary to-primary-700 border-primary text-white shadow-button scale-[1.02]'
                  : 'bg-white border-slate-100 shadow-card hover:shadow-card-hover'
              )}
            >
              {/* Popular badge */}
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-400 text-amber-900 px-4 py-1 text-xs font-bold shadow-soft whitespace-nowrap">
                    <Zap className="w-3 h-3" fill="currentColor" />
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Header */}
              <div className="mb-6">
                <p
                  className={cn(
                    'text-sm font-semibold uppercase tracking-wider mb-1',
                    plan.highlighted ? 'text-blue-200' : 'text-primary'
                  )}
                >
                  {plan.name}
                </p>
                <div className="flex items-end gap-2 mb-2">
                  {plan.price === 0 ? (
                    <span
                      className={cn(
                        'font-display text-4xl font-bold',
                        plan.highlighted ? 'text-white' : 'text-slate-900'
                      )}
                    >
                      Custom
                    </span>
                  ) : (
                    <>
                      <span
                        className={cn(
                          'font-display text-4xl font-bold',
                          plan.highlighted ? 'text-white' : 'text-slate-900'
                        )}
                      >
                        ${plan.price.toLocaleString()}
                      </span>
                      <span
                        className={cn(
                          'text-sm mb-1.5',
                          plan.highlighted ? 'text-blue-200' : 'text-slate-400'
                        )}
                      >
                        {plan.period}
                      </span>
                    </>
                  )}
                </div>
                <p
                  className={cn(
                    'text-sm leading-relaxed',
                    plan.highlighted ? 'text-blue-100' : 'text-slate-500'
                  )}
                >
                  {plan.description}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-2.5 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <Check
                      className={cn(
                        'w-4 h-4 flex-shrink-0 mt-0.5',
                        plan.highlighted ? 'text-blue-200' : 'text-emerald-500'
                      )}
                    />
                    <span
                      className={cn(
                        'text-sm',
                        plan.highlighted ? 'text-blue-50' : 'text-slate-600'
                      )}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
                {plan.notIncluded?.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 opacity-40">
                    <X className="w-4 h-4 flex-shrink-0 mt-0.5 text-slate-400" />
                    <span className={cn('text-sm', plan.highlighted ? 'text-blue-200' : 'text-slate-400')}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant={plan.highlighted ? 'dark' : 'primary'}
                size="lg"
                id={`pricing-cta-${plan.id}`}
                onClick={handleCTA}
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className={cn(
                  'w-full',
                  plan.highlighted
                    ? 'bg-white text-primary hover:bg-blue-50 shadow-soft'
                    : ''
                )}
              >
                {plan.cta}
              </Button>
            </AnimatedCard>
          ))}
        </div>

        {/* Money back note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center text-sm text-slate-400"
        >
          All prices in USD · No hidden fees · 100% transparent billing
        </motion.p>
      </div>
    </section>
  )
}
