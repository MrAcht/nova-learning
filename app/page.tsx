"use client"
import dynamic from 'next/dynamic'
import Header from '../components/Header'
import Hero from '../components/Hero'
import CtaSection from '../components/CtaSection'
import Footer from '../components/Footer'

const MethodSection = dynamic(() => import('../components/MethodSection'), { ssr: false })
const ProcessSection = dynamic(() => import('../components/ProcessSection'), { ssr: false })
const PricingSection = dynamic(() => import('../components/PricingSection'), { ssr: false })
const WorkflowSection = dynamic(() => import('../components/WorkflowSection'), { ssr: false })
const FaqSection = dynamic(() => import('../components/FaqSection'), { ssr: false })
const TestimonialsSection = dynamic(() => import('../components/TestimonialsSection'), { ssr: false })
import Offers from '../components/Offers'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main id="main" className="w-full mx-auto px-4 pt-32 pb-16" role="main">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'NOVA',
              url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
              logo: (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000') + '/favicon.ico',
              sameAs: [
                'https://x.com/nova',
              ],
            }),
          }}
        />
        <section id="hero" aria-labelledby="hero-heading">
          <Hero />
        </section>
        <section id="offres" aria-label="Offres de formation">
          <Offers />
        </section>
        <section id="method" aria-label="Méthode">
          <MethodSection />
        </section>
        <section id="process" aria-label="Processus">
          <ProcessSection />
        </section>
        <section id="pricing" aria-label="Tarifs">
          <PricingSection />
        </section>
        <section id="workflow" aria-label="Workflow">
          <WorkflowSection />
        </section>
        <section id="faq" aria-label="FAQ">
          <FaqSection />
        </section>
        <section id="temoignages" aria-label="Témoignages">
          <TestimonialsSection />
        </section>
        <section id="cta" aria-label="Appel à l'action">
          <CtaSection />
        </section>
      </main>
      <Footer />
    </div>
  )
}