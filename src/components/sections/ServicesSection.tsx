'use client'

import { motion } from 'framer-motion'
import {
  Globe,
  Building2,
  LayoutTemplate,
  ShoppingCart,
  RefreshCw,
  Wrench,
  ArrowRight,
  CheckCircle,
} from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { AnimatedCard } from '@/components/ui/AnimatedCard'
import { services } from '@/constants/services'
import { cn } from '@/lib/utils'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Globe,
  Building2,
  LayoutTemplate,
  ShoppingCart,
  RefreshCw,
  Wrench,
}

const colorMap: Record<string, string> = {
  blue: 'from-blue-500 to-blue-600',
  indigo: 'from-indigo-500 to-indigo-600',
  sky: 'from-sky-500 to-sky-600',
  violet: 'from-violet-500 to-violet-600',
  cyan: 'from-cyan-500 to-cyan-600',
  emerald: 'from-emerald-500 to-emerald-600',
}

const bgMap: Record<string, string> = {
  blue: 'bg-blue-50 group-hover:bg-blue-100',
  indigo: 'bg-indigo-50 group-hover:bg-indigo-100',
  sky: 'bg-sky-50 group-hover:bg-sky-100',
  violet: 'bg-violet-50 group-hover:bg-violet-100',
  cyan: 'bg-cyan-50 group-hover:bg-cyan-100',
  emerald: 'bg-emerald-50 group-hover:bg-emerald-100',
}

export function ServicesSection() {
  const handleClick = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading
          badge="Our Services"
          title="Everything You Need to "
          highlight="Grow Online"
          subtitle="From a simple business website to a complex e-commerce platform, we deliver high-quality digital solutions tailored to your goals."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Globe
            const gradientClass = colorMap[service.color] || colorMap.blue
            const bgClass = bgMap[service.color] || bgMap.blue

            return (
              <AnimatedCard
                key={service.id}
                delay={index * 0.08}
                className="group relative bg-white rounded-2xl border border-slate-100 shadow-card hover:shadow-card-hover hover:border-slate-200 p-7 transition-all duration-300 cursor-pointer flex flex-col"
                onClick={handleClick}
              >
                {/* Icon */}
                <div
                  className={cn(
                    'w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300',
                    bgClass
                  )}
                >
                  <div
                    className={cn(
                      'w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br text-white',
                      gradientClass
                    )}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-display text-lg font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-5 flex-1">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-1.5 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-xs text-slate-500">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-3 transition-all duration-200">
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </div>

                {/* Hover border accent */}
                <div
                  className={cn(
                    'absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300',
                    gradientClass
                  )}
                />
              </AnimatedCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}
