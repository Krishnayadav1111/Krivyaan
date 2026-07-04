'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { navLinks } from '@/constants/navigation'
import { cn } from '@/lib/utils'
import { useScrollDirection } from '@/hooks/useScrollDirection'

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { scrolled } = useScrollDirection()

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-soft border-b border-slate-100'
            : 'bg-transparent'
        )}
      >
        <div className="container-custom">
          <nav className="flex h-16 md:h-18 items-center justify-between gap-4">
            {/* Logo */}
            <button
              onClick={() => handleNavClick('#home')}
              className="flex items-center flex-shrink-0 group"
              aria-label="Krivyaan home"
            >
              <Image
                src="/logo.png"
                alt="Krivyaan"
                width={140}
                height={48}
                className="h-10 w-auto object-contain group-hover:opacity-90 transition-opacity duration-200"
                priority
              />
            </button>

            {/* Desktop nav */}
            <ul className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-primary rounded-lg hover:bg-primary-50 transition-all duration-150"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleNavClick('#enquiry')}
                className="text-slate-600"
              >
                Sign In
              </Button>
              <Button
                variant="primary"
                size="sm"
                onClick={() => handleNavClick('#enquiry')}
                id="navbar-cta"
              >
                Get Free Consultation
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle mobile menu"
              aria-expanded={mobileOpen}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl hover:bg-slate-100 transition-colors text-slate-700"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white pt-16 flex flex-col md:hidden"
          >
            <div className="flex-1 overflow-y-auto px-6 py-8">
              <ul className="flex flex-col gap-2 mb-8">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="w-full text-left px-4 py-3.5 text-lg font-semibold text-slate-700 hover:text-primary hover:bg-primary-50 rounded-xl transition-all"
                    >
                      {link.label}
                    </button>
                  </motion.li>
                ))}
              </ul>

              <div className="flex flex-col gap-3 pt-4 border-t border-slate-100">
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => handleNavClick('#enquiry')}
                  className="w-full"
                >
                  Contact Us
                </Button>
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => handleNavClick('#enquiry')}
                  className="w-full"
                  id="mobile-cta"
                >
                  Get Free Consultation
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
