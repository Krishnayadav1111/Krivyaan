'use client'

import { motion, type HTMLMotionProps } from 'framer-motion'
import { cn } from '@/lib/utils'

interface AnimatedCardProps extends HTMLMotionProps<'div'> {
  delay?: number
  children: React.ReactNode
  className?: string
  hoverEffect?: boolean
}

export function AnimatedCard({
  delay = 0,
  children,
  className,
  hoverEffect = true,
  ...props
}: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      whileHover={
        hoverEffect
          ? { y: -4, transition: { duration: 0.2 } }
          : undefined
      }
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}
