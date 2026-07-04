'use client'

import Image from 'next/image'
import { Mail, Phone, MapPin, Twitter, Linkedin, Instagram, Github } from 'lucide-react'
import { useRouter, usePathname } from 'next/navigation'
import { footerQuickLinks, footerServices, siteConfig } from '@/constants/navigation'

export function Footer() {
  const router = useRouter()
  const pathname = usePathname()

  const handleNavClick = (href: string) => {
    if (href.startsWith('/#')) {
      const hash = href.substring(1)
      const el = document.querySelector(hash)
      if (el && pathname === '/') {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        window.history.pushState({}, '', href)
        return
      }
    } else if (href.startsWith('#')) {
      const el = document.querySelector(href)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        window.history.pushState({}, '', `/${href}`)
        return
      }
    }
    
    router.push(href)
  }

  const year = new Date().getFullYear()

  return (
    <footer className="bg-slate-950 text-slate-400">
      {/* Main footer */}
      <div className="container-custom py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <button
              onClick={() => handleNavClick('/#home')}
              className="flex items-center mb-4 group"
              aria-label="Krivyaan home"
            >
              <Image
                src="/logo.png"
                alt="Krivyaan"
                width={160}
                height={56}
                className="h-11 w-auto object-contain brightness-0 invert group-hover:opacity-90 transition-opacity"
              />
            </button>
            <p className="text-sm leading-relaxed mb-6 text-slate-400">
              We build premium business websites that help companies across USA, UK, Australia, and Canada grow online.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3">
              {[
                { icon: Twitter, href: '#', label: 'Twitter' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Instagram, href: '#', label: 'Instagram' },
                { icon: Github, href: '#', label: 'GitHub' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex items-center justify-center w-9 h-9 rounded-lg bg-slate-800 text-slate-400 hover:bg-primary hover:text-white transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {footerQuickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Services
            </h3>
            <ul className="space-y-2.5">
              {footerServices.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => handleNavClick('/#services')}
                    className="text-sm text-slate-400 hover:text-white transition-colors text-left"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 text-sm text-slate-400 hover:text-white transition-colors group"
                >
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <Mail className="w-4 h-4" />
                  </span>
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-3 text-sm text-slate-400 hover:text-white transition-colors group"
                >
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <Phone className="w-4 h-4" />
                  </span>
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center mt-0.5">
                  <MapPin className="w-4 h-4" />
                </span>
                {siteConfig.address}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="container-custom py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © {year} Krivyaan. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-slate-500 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-slate-500 hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-slate-500 hover:text-white transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
