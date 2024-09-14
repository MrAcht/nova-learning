"use client"
import { useState } from 'react'
import { PlusIcon } from 'lucide-react'

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState<string | null>(null)

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id)
  }

  const faqs = [
    { id: 'faq1', question: "J'ai pas d'idée de programme, est-ce un problème ?", answer: "Non, ce n'est pas un problème. Nous travaillons avec vous pour développer un programme adapté à vos besoins et objectifs." },
    { id: 'faq2', question: "Comment faites-vous pour livrer en 7 jours ?", answer: "Notre processus optimisé et notre équipe expérimentée nous permettent de créer des formations de qualité dans des délais courts." },
    { id: 'faq3', question: "Quel style de formations faites-vous ?", answer: "Nous proposons une variété de styles de formation, adaptés à vos besoins spécifiques et à votre public cible." },
    { id: 'faq4', question: "Quel modèle choisir ? Startup ou Corpo ?", answer: "Le choix dépend de votre entreprise et de vos objectifs. Nous vous guidons pour sélectionner le modèle le plus approprié." }
  ]

  return (
    <div className="my-20">
      <h2 className="text-3xl font-bold text-center text-[#103428] mb-12">Vous avez des questions ? Nous avons les réponses :</h2>
      <div className="max-w-3xl mx-auto">
        {faqs.map((faq) => (
          <div key={faq.id} className="mb-4 border-b border-gray-200 pb-4">
            <button
              className="flex justify-between items-center w-full text-left"
              onClick={() => toggleFaq(faq.id)}
            >
              <span className="text-lg font-semibold text-[#103428]">{faq.question}</span>
              <PlusIcon className={`w-5 h-5 text-[#2f795e] transform transition-transform ${openFaq === faq.id ? 'rotate-45' : ''}`} />
            </button>
            {openFaq === faq.id && (
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}