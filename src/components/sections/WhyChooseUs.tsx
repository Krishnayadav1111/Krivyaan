'use client'

import {
  Zap,
  TrendingUp,
  Smartphone,
  Gauge,
  Sparkles,
  Shield,
  DollarSign,
  Headphones,
} from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { AnimatedCard } from '@/components/ui/AnimatedCard'
import { whyUsFeatures } from '@/constants/whyUs'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Zap,
  TrendingUp,
  Smartphone,
  Gauge,
  Sparkles,
  Shield,
  DollarSign,
  HeadphonesIcon: Headphones,
}

const colorStyles: Record<
  string,
  { bg: string; icon: string; text: string }
> = {
  yellow: { bg: 'bg-amber-50', icon: 'text-amber-600', text: 'text-amber-600' },
  green: { bg: 'bg-emerald-50', icon: 'text-emerald-600', text: 'text-emerald-600' },
  blue: { bg: 'bg-blue-50', icon: 'text-blue-600', text: 'text-blue-600' },
  orange: { bg: 'bg-orange-50', icon: 'text-orange-600', text: 'text-orange-600' },
  purple: { bg: 'bg-violet-50', icon: 'text-violet-600', text: 'text-violet-600' },
  red: { bg: 'bg-rose-50', icon: 'text-rose-600', text: 'text-rose-600' },
  teal: { bg: 'bg-teal-50', icon: 'text-teal-600', text: 'text-teal-600' },
  indigo: { bg: 'bg-indigo-50', icon: 'text-indigo-600', text: 'text-indigo-600' },
}

export function WhyChooseUs() {
  return (
    <section id="why-us" className="section-padding bg-slate-50/60">
      <div className="container-custom">
        <SectionHeading
          badge="Why Choose Us"
          title="Built For Business "
          highlight="Results"
          subtitle="We combine beautiful design with performance engineering to deliver websites that don't just look great — they generate real business growth."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {whyUsFeatures.map((feature, index) => {
            const Icon = iconMap[feature.icon] || Zap
            const styles = colorStyles[feature.color] || colorStyles.blue

            return (
              <AnimatedCard
                key={feature.id}
                delay={index * 0.07}
                className="group bg-white rounded-2xl border border-slate-100 shadow-card hover:shadow-card-hover p-6 transition-all duration-300"
              >
                <div
                  className={`w-11 h-11 rounded-xl ${styles.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}
                >
                  <Icon className={`w-5 h-5 ${styles.icon}`} />
                </div>
                <h3 className="font-display text-base font-bold text-slate-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {feature.description}
                </p>
              </AnimatedCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}
