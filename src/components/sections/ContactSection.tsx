'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'
import { Send, CheckCircle, Mail, Phone, MapPin, Clock } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { siteConfig } from '@/constants/navigation'
import { cn } from '@/lib/utils'
import type { ContactFormData } from '@/types'

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(20, 'Message must be at least 20 characters'),
})

type FormSchema = z.infer<typeof schema>

const services = [
  'Business Website',
  'Corporate Website',
  'Landing Page',
  'E-commerce Website',
  'Website Redesign',
  'Maintenance & Support',
  'Other',
]

const budgets = [
  'Under $2,000',
  '$2,000 – $5,000',
  '$5,000 – $10,000',
  '$10,000+',
  'Not Sure Yet',
]

const contactInfo = [
  {
    icon: Mail,
    label: 'Email Us',
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Phone,
    label: 'Call Us',
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone}`,
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: siteConfig.address,
    href: undefined,
    color: 'bg-violet-50 text-violet-600',
  },
  {
    icon: Clock,
    label: 'Response Time',
    value: 'Within 24 hours',
    href: undefined,
    color: 'bg-amber-50 text-amber-600',
  },
]

function InputField({
  label,
  error,
  required,
  children,
  id,
}: {
  label: string
  error?: string
  required?: boolean
  children: React.ReactNode
  id: string
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-slate-700">
        {label}
        {required && <span className="text-primary ml-0.5">*</span>}
      </label>
      {children}
      {error && (
        <p className="text-xs text-rose-500 mt-0.5">{error}</p>
      )}
    </div>
  )
}

const inputClass = (hasError?: boolean) =>
  cn(
    'w-full rounded-xl border bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 transition-all duration-150 outline-none',
    hasError
      ? 'border-rose-300 focus:border-rose-400 focus:ring-2 focus:ring-rose-100'
      : 'border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/10 hover:border-slate-300'
  )

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormSchema>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: FormSchema) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1200))
    console.log('Form data:', data)
    setSubmitted(true)
    reset()
  }

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading
          badge="Get In Touch"
          title="Let's Build Something "
          highlight="Amazing"
          subtitle="Tell us about your project and we'll get back to you within 24 hours with a tailored proposal."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <div>
              <h3 className="font-display text-xl font-bold text-slate-900 mb-2">
                Ready to start your project?
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Fill out the form and our team will reach out within one business day to schedule your free consultation.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((item) => {
                const Icon = item.icon
                const content = (
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors group">
                    <div className={cn('w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0', item.color)}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-0.5">{item.label}</p>
                      <p className="text-sm font-medium text-slate-700 group-hover:text-primary transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </div>
                )

                return item.href ? (
                  <a key={item.label} href={item.href}>
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                )
              })}
            </div>

            {/* Trust note */}
            <div className="mt-2 p-5 rounded-2xl bg-primary-50 border border-primary-100">
              <p className="text-sm text-slate-600 leading-relaxed">
                <span className="font-semibold text-primary">Free Consultation</span> — No commitment required.
                We&apos;ll analyze your needs and provide honest recommendations.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center rounded-2xl border border-emerald-100 bg-emerald-50 p-12"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="font-display text-xl font-bold text-slate-900 mb-2">
                  Message Sent!
                </h3>
                <p className="text-sm text-slate-500 mb-6 max-w-xs">
                  Thank you for reaching out. We&apos;ll get back to you within 24 hours to discuss your project.
                </p>
                <Button
                  variant="outline"
                  size="md"
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Message
                </Button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-white rounded-2xl border border-slate-100 shadow-card p-7 md:p-8 space-y-5"
                noValidate
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <InputField label="Full Name" error={errors.name?.message} required id="contact-name">
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="John Smith"
                      {...register('name')}
                      className={inputClass(!!errors.name)}
                    />
                  </InputField>

                  <InputField label="Email Address" error={errors.email?.message} required id="contact-email">
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="john@company.com"
                      {...register('email')}
                      className={inputClass(!!errors.email)}
                    />
                  </InputField>

                  <InputField label="Phone Number" error={errors.phone?.message} id="contact-phone">
                    <input
                      id="contact-phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      {...register('phone')}
                      className={inputClass(!!errors.phone)}
                    />
                  </InputField>

                  <InputField label="Company Name" error={errors.company?.message} id="contact-company">
                    <input
                      id="contact-company"
                      type="text"
                      placeholder="Your Company"
                      {...register('company')}
                      className={inputClass(!!errors.company)}
                    />
                  </InputField>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <InputField label="Service Needed" error={errors.service?.message} id="contact-service">
                    <select
                      id="contact-service"
                      {...register('service')}
                      className={cn(inputClass(!!errors.service), 'cursor-pointer appearance-none bg-white')}
                    >
                      <option value="">Select a service…</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </InputField>

                  <InputField label="Budget Range" error={errors.budget?.message} id="contact-budget">
                    <select
                      id="contact-budget"
                      {...register('budget')}
                      className={cn(inputClass(!!errors.budget), 'cursor-pointer appearance-none bg-white')}
                    >
                      <option value="">Select budget…</option>
                      {budgets.map((b) => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                  </InputField>
                </div>

                <InputField label="Project Details" error={errors.message?.message} required id="contact-message">
                  <textarea
                    id="contact-message"
                    rows={5}
                    placeholder="Tell us about your project, goals, timeline, and any specific requirements…"
                    {...register('message')}
                    className={cn(inputClass(!!errors.message), 'resize-none')}
                  />
                </InputField>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  id="contact-submit"
                  isLoading={isSubmitting}
                  rightIcon={<Send className="w-4 h-4" />}
                  className="w-full"
                >
                  {isSubmitting ? 'Sending…' : 'Send Message'}
                </Button>

                <p className="text-center text-xs text-slate-400">
                  By submitting, you agree to our Privacy Policy. We never share your data.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
