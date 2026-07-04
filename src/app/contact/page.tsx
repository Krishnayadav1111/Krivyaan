import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { EnquirySection } from '@/components/sections/EnquirySection'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'

export const metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Krivyaan for a free quote on your next website or app project.',
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 md:pt-18 bg-slate-900 min-h-[80vh] flex flex-col">
        <div className="flex-grow flex flex-col justify-center">
          <EnquirySection />
        </div>
      </main>
      <Footer />
      <WhatsAppButton phoneNumber="918802484350" />
    </>
  )
}
