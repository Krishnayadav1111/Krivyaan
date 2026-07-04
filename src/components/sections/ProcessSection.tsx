'use client'

import { motion } from 'framer-motion'
import {
  Search,
  FileText,
  Palette,
  Code2,
  TestTube,
  Rocket,
  HeartHandshake,
} from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { processSteps } from '@/constants/process'
import { cn } from '@/lib/utils'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Search,
  FileText,
  Palette,
  Code2,
  TestTube,
  Rocket,
  HeartHandshake,
}

const colorMap: Record<string, { bg: string; border: string; text: string; connector: string }> = {
  blue: {
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    text: 'text-blue-600',
    connector: 'bg-blue-200',
  },
  indigo: {
    bg: 'bg-indigo-50',
    border: 'border-indigo-200',
    text: 'text-indigo-600',
    connector: 'bg-indigo-200',
  },
  violet: {
    bg: 'bg-violet-50',
    border: 'border-violet-200',
    text: 'text-violet-600',
    connector: 'bg-violet-200',
  },
  sky: {
    bg: 'bg-sky-50',
    border: 'border-sky-200',
    text: 'text-sky-600',
    connector: 'bg-sky-200',
  },
  cyan: {
    bg: 'bg-cyan-50',
    border: 'border-cyan-200',
    text: 'text-cyan-600',
    connector: 'bg-cyan-200',
  },
  emerald: {
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    text: 'text-emerald-600',
    connector: 'bg-emerald-200',
  },
  green: {
    bg: 'bg-green-50',
    border: 'border-green-200',
    text: 'text-green-600',
    connector: 'bg-green-200',
  },
}

export function ProcessSection() {
  return (
    <section id="process" className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading
          badge="Our Process"
          title="How We Build Your "
          highlight="Dream Website"
          subtitle="A transparent, structured process designed for smooth collaboration and exceptional results from start to finish."
        />

        {/* Desktop stepper */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connector line */}
            <div className="absolute top-10 left-[calc(100%/14)] right-[calc(100%/14)] h-0.5 bg-slate-100" />

            <div className="grid grid-cols-7 gap-4">
              {processSteps.map((step, index) => {
                const Icon = iconMap[step.icon] || Search
                const colors = colorMap[step.color] || colorMap.blue

                return (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex flex-col items-center text-center"
                  >
                    {/* Step circle */}
                    <div className="relative z-10 mb-4">
                      <div
                        className={cn(
                          'w-20 h-20 rounded-2xl border-2 flex items-center justify-center shadow-soft transition-transform hover:scale-105 duration-200',
                          colors.bg,
                          colors.border
                        )}
                      >
                        <Icon className={cn('w-8 h-8', colors.text)} />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center shadow-button">
                        {step.step}
                      </div>
                    </div>

                    <h3 className="font-display text-sm font-bold text-slate-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Mobile / tablet timeline */}
        <div className="lg:hidden">
          <div className="relative ml-4">
            {/* Vertical line */}
            <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-slate-100" />

            <div className="space-y-8">
              {processSteps.map((step, index) => {
                const Icon = iconMap[step.icon] || Search
                const colors = colorMap[step.color] || colorMap.blue

                return (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="flex gap-5 relative"
                  >
                    {/* Icon */}
                    <div className="relative z-10 flex-shrink-0">
                      <div
                        className={cn(
                          'w-10 h-10 rounded-xl border-2 flex items-center justify-center',
                          colors.bg,
                          colors.border
                        )}
                      >
                        <Icon className={cn('w-4 h-4', colors.text)} />
                      </div>
                      <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-primary text-white text-[10px] font-bold flex items-center justify-center">
                        {step.step}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="pt-1 pb-2">
                      <h3 className="font-display text-base font-bold text-slate-900 mb-1">
                        {step.title}
                      </h3>
                      <p className="text-sm text-slate-500 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
