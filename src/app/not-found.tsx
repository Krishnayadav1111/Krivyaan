import Link from 'next/link'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Button } from '@/components/ui/Button'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center bg-slate-50 pt-16">
        <div className="container-custom text-center py-20">
          <p className="text-8xl font-display font-bold gradient-text mb-4">404</p>
          <h1 className="text-2xl font-display font-bold text-slate-900 mb-3">Page Not Found</h1>
          <p className="text-slate-500 mb-8 max-w-md mx-auto">
            The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back on track.
          </p>
          <Link href="/">
            <Button variant="primary" size="lg" leftIcon={<ArrowLeft className="w-4 h-4" />}>
              Back to Home
            </Button>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
