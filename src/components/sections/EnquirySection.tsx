'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'
import { Send, CheckCircle, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

const WHATSAPP_NUMBER = '918802484350'

const websiteTypes = [
  'Business Website',
  'Corporate Website',
  'Landing Page / Lead Generation',
  'E-commerce Store',
  'Portfolio Website',
  'Restaurant / Food Website',
  'Real Estate Website',
  'Healthcare / Clinic Website',
  'Education / Coaching Website',
  'SaaS / Web Application',
  'Mobile App (Android / iOS)',
  'Website Redesign',
  'Blog / News Website',
  'Other',
]

const budgets = [
  'Under $500',
  '$500 – $1,500',
  '$1,500 – $3,500',
  '$3,500 – $7,000',
  '$7,000+',
  'Not Sure Yet',
]

const schema = z.object({
  name: z.string().min(2, 'Please enter your full name'),
  phone: z
    .string()
    .min(7, 'Please enter a valid phone number')
    .regex(/^[+\d\s\-()]+$/, 'Invalid phone number'),
  email: z.string().email('Please enter a valid email address'),
  websiteType: z.string().min(1, 'Please select what you want to build'),
  budget: z.string().optional(),
  message: z.string().optional(),
})

type FormValues = z.infer<typeof schema>

const inputClass = (hasError?: boolean) =>
  cn(
    'w-full rounded-xl border px-4 py-3.5 text-sm text-slate-900 placeholder:text-slate-400',
    'bg-white/10 backdrop-blur-sm transition-all duration-150 outline-none',
    hasError
      ? 'border-rose-400 focus:border-rose-400 focus:ring-2 focus:ring-rose-400/20'
      : 'border-white/20 focus:border-white/50 focus:ring-2 focus:ring-white/20 hover:border-white/30'
  )

const selectClass = (hasError?: boolean) =>
  cn(inputClass(hasError), 'cursor-pointer appearance-none bg-slate-800/80')

export function EnquirySection() {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormValues) => {
    await new Promise((r) => setTimeout(r, 600))

    // Build WhatsApp message
    const lines = [
      `👋 *New Project Enquiry — Krivyaan*`,
      ``,
      `👤 *Name:* ${data.name}`,
      `📞 *Phone:* ${data.phone}`,
      `📧 *Email:* ${data.email}`,
      `🖥️ *Project Type:* ${data.websiteType}`,
      data.budget ? `💰 *Budget:* ${data.budget}` : null,
      data.message ? `💬 *Message:* ${data.message}` : null,
    ]
      .filter(Boolean)
      .join('\n')

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines)}`
    window.open(url, '_blank')
    setSubmitted(true)
    reset()
  }

  return (
    <section
      id="enquiry"
      className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]">
          <defs>
            <pattern id="enq-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1.5" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#enq-grid)" />
        </svg>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">

          {/* Left — Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-semibold text-white">Free Consultation</span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-5 text-balance">
              Get a Free Quote{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-sky-300">
                in Minutes
              </span>
            </h2>

            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Tell us what you need and we&apos;ll send a detailed proposal directly to your WhatsApp — serving clients across <strong className="text-white">India, USA, UK, Australia & Canada</strong>.
            </p>

            {/* Benefits */}
            <ul className="space-y-3">
              {[
                '✅ Response within 1 hour',
                '✅ Free project consultation',
                '✅ Transparent pricing, no surprises',
                '✅ Dedicated point of contact',
              ].map((item) => (
                <li key={item} className="text-sm text-slate-300 font-medium">
                  {item}
                </li>
              ))}
            </ul>

            {/* WhatsApp direct link */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2.5 text-sm font-semibold text-[#25D366] hover:text-emerald-400 transition-colors"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#25D366]/20">
                <WhatsAppSVG className="w-4 h-4 text-[#25D366]" />
              </span>
              Or just message us on WhatsApp directly →
            </a>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-10 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#25D366]/20 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-[#25D366]" />
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-2">
                  WhatsApp Opened! 🎉
                </h3>
                <p className="text-slate-300 text-sm mb-6 max-w-xs mx-auto">
                  Your details have been formatted and ready to send. Just hit <strong className="text-white">Send</strong> on WhatsApp to complete your enquiry.
                </p>
                <Button
                  variant="outline"
                  size="md"
                  onClick={() => setSubmitted(false)}
                  className="border-white/30 text-white hover:bg-white/10 hover:border-white/50"
                >
                  Submit Another Enquiry
                </Button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-7 md:p-8 space-y-4"
              >
                <h3 className="font-display text-xl font-bold text-white mb-1">
                  Get Free Consultation
                </h3>
                <p className="text-sm text-slate-400 mb-2">
                  Fill in your details — your info goes straight to our WhatsApp.
                </p>

                {/* Name + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                      Full Name <span className="text-primary-300">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="John Smith"
                      {...register('name')}
                      className={cn(inputClass(!!errors.name), 'text-white placeholder:text-slate-500')}
                    />
                    {errors.name && <p className="text-xs text-rose-400">{errors.name.message}</p>}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                      Phone / WhatsApp <span className="text-primary-300">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 555 000 0000"
                      {...register('phone')}
                      className={cn(inputClass(!!errors.phone), 'text-white placeholder:text-slate-500')}
                    />
                    {errors.phone && <p className="text-xs text-rose-400">{errors.phone.message}</p>}
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    Email Address <span className="text-primary-300">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="john@company.com"
                    {...register('email')}
                    className={cn(inputClass(!!errors.email), 'text-white placeholder:text-slate-500')}
                  />
                  {errors.email && <p className="text-xs text-rose-400">{errors.email.message}</p>}
                </div>

                {/* Website / App type */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    What do you want to build? <span className="text-primary-300">*</span>
                  </label>
                  <select
                    {...register('websiteType')}
                    className={cn(selectClass(!!errors.websiteType), 'text-white')}
                    defaultValue=""
                  >
                    <option value="" disabled className="bg-slate-900">
                      — Select website or app type —
                    </option>
                    {websiteTypes.map((t) => (
                      <option key={t} value={t} className="bg-slate-900">
                        {t}
                      </option>
                    ))}
                  </select>
                  {errors.websiteType && (
                    <p className="text-xs text-rose-400">{errors.websiteType.message}</p>
                  )}
                </div>

                {/* Budget */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    Budget Range <span className="text-slate-500">(optional)</span>
                  </label>
                  <select
                    {...register('budget')}
                    className={cn(selectClass(), 'text-slate-300')}
                    defaultValue=""
                  >
                    <option value="" className="bg-slate-900">— Select a budget —</option>
                    {budgets.map((b) => (
                      <option key={b} value={b} className="bg-slate-900">
                        {b}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    Additional Details <span className="text-slate-500">(optional)</span>
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us more about your project, goals, or any specific features you need…"
                    {...register('message')}
                    className={cn(inputClass(), 'resize-none text-white placeholder:text-slate-500')}
                  />
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  size="lg"
                  id="enquiry-submit"
                  isLoading={isSubmitting}
                  className="w-full bg-[#25D366] hover:bg-[#20b858] text-white shadow-lg border-0 rounded-xl h-13"
                  rightIcon={
                    !isSubmitting ? <WhatsAppSVG className="w-5 h-5" /> : undefined
                  }
                >
                  {isSubmitting ? 'Opening WhatsApp…' : 'Send via WhatsApp'}
                </Button>

                <p className="text-center text-xs text-slate-500">
                  Your details will open in WhatsApp — tap <strong className="text-slate-400">Send</strong> to submit.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function WhatsAppSVG({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
