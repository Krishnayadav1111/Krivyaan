import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { WhyChooseUs } from '@/components/sections/WhyChooseUs'
import { ProcessSection } from '@/components/sections/ProcessSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { CTASection } from '@/components/sections/CTASection'
import { EnquirySection } from '@/components/sections/EnquirySection'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <WhyChooseUs />
        <ProcessSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
        <EnquirySection />
      </main>
      <Footer />
      {/* Floating WhatsApp button */}
      <WhatsAppButton phoneNumber="918802484350" />
    </>
  )
}
