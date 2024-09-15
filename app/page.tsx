"use client"
import Header from '../components/Header'
import Hero from '../components/Hero'
import MethodSection from '../components/MethodSection'
import ProcessSection from '../components/ProcessSection'
import PricingSection from '../components/PricingSection'
import WorkflowSection from '../components/WorkflowSection'
import FaqSection from '../components/FaqSection'
import TestimonialsSection from '../components/TestimonialsSection'
import CtaSection from '../components/CtaSection'
import Footer from '../components/Footer'
import Offers from '../components/Offers'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="w-full mx-auto px-4 pt-32 pb-16">
        <Hero />
        <Offers />
        <MethodSection />
        <ProcessSection />
        <PricingSection />
        <WorkflowSection />
        <FaqSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}