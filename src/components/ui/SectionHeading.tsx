'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  badge?: string
  title: string
  highlight?: string
  subtitle?: string
  centered?: boolean
  className?: string
  titleClassName?: string
}

export function SectionHeading({
  badge,
  title,
  highlight,
  subtitle,
  centered = true,
  className,
  titleClassName,
}: SectionHeadingProps) {
  const renderTitle = () => {
    if (!highlight) {
      return title
    }
    const parts = title.split(highlight)
    return (
      <>
        {parts[0]}
        <span className="gradient-text">{highlight}</span>
        {parts[1]}
      </>
    )
  }

  return (
    <div className={cn('mb-14', centered && 'text-center', className)}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4 inline-flex items-center gap-2"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-50 border border-primary-100 px-4 py-1.5 text-sm font-semibold text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-slow" />
            {badge}
          </span>
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={cn(
          'font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 text-balance',
          titleClassName
        )}
      >
        {renderTitle()}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={cn(
            'mt-4 text-lg text-slate-500 max-w-2xl text-balance leading-relaxed',
            centered && 'mx-auto'
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
