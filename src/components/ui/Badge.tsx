'use client'

import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'blue' | 'green' | 'purple' | 'amber' | 'sky'
  className?: string
}

const variantClasses = {
  default: 'bg-slate-100 text-slate-600',
  blue: 'bg-primary-50 text-primary border border-primary-100',
  green: 'bg-emerald-50 text-emerald-700 border border-emerald-100',
  purple: 'bg-violet-50 text-violet-700 border border-violet-100',
  amber: 'bg-amber-50 text-amber-700 border border-amber-100',
  sky: 'bg-sky-50 text-sky-700 border border-sky-100',
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold',
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
