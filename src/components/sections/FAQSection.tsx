'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { faqs } from '@/constants/faq'
import { cn } from '@/lib/utils'

function FAQItem({ question, answer, isOpen, onToggle }: {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div
      className={cn(
        'border rounded-2xl overflow-hidden transition-all duration-200',
        isOpen ? 'border-primary/30 shadow-card' : 'border-slate-100 shadow-soft hover:border-slate-200'
      )}
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between gap-4 p-6 text-left bg-white hover:bg-slate-50/50 transition-colors"
      >
        <span className={cn('font-display font-semibold text-base', isOpen ? 'text-primary' : 'text-slate-900')}>
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className={cn(
            'flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors',
            isOpen ? 'bg-primary text-white' : 'bg-slate-100 text-slate-500'
          )}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 text-slate-500 text-sm leading-relaxed border-t border-slate-50 pt-4 bg-white">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FAQSection() {
  const [openId, setOpenId] = useState<string | null>('1')

  return (
    <section id="faq" className="section-padding bg-slate-50/50">
      <div className="container-custom">
        <SectionHeading
          badge="FAQ"
          title="Frequently Asked "
          highlight="Questions"
          subtitle="Everything you need to know before we start working together."
        />

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <FAQItem
                question={faq.question}
                answer={faq.answer}
                isOpen={openId === faq.id}
                onToggle={() => setOpenId(openId === faq.id ? null : faq.id)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
