'use client'

import { Button } from "@/components/ui/button"
import { CheckIcon } from 'lucide-react'
import { useState } from 'react'

export default function PricingSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const plans = [
    { duration: '3 jours', price: '1480€ HT', popular: false },
    { duration: '5 jours', price: '1980€ HT', popular: true },
    { duration: '10 jours', price: '2980€ HT', popular: false },
  ]

  return (
    <div className="mb-10 sm:mb-20 px-4 sm:px-0">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#103428] mb-8 sm:mb-12">Des prix transparents et valables sur 100% de nos formations</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {plans.map((plan, index) => (
          <div 
            key={index} 
            className={`bg-white p-4 sm:p-6 rounded-lg shadow-lg transition-all duration-300 ${
              plan.duration === '5 jours' || hoveredIndex === index ? 'border-2 border-[#2f795e]' : 'border-2 border-transparent'
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {plan.popular && (
              <div className="bg-[#2f795e] text-white text-xs sm:text-sm font-semibold px-2 sm:px-3 py-1 rounded-full inline-block mb-3 sm:mb-4">
                POPULAIRE
              </div>
            )}
            <h3 className="text-xl text-[#103428] sm:text-2xl font-bold mb-3 sm:mb-4">Formation {plan.duration}</h3>
            <p className="text-2xl text-[#103428] sm:text-3xl font-bold mb-4 sm:mb-6">{plan.price}</p>
            <ul className="space-y-2 mb-4 sm:mb-6 text-[#103428]">
              <li className="flex items-center text-sm sm:text-base"><CheckIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-[#103428]" /> {plan.duration} de formation</li>
              <li className="flex items-center text-sm sm:text-base"><CheckIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-[#103428]" /> Exercices pratiques</li>
              <li className="flex items-center text-sm sm:text-base"><CheckIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-[#103428]" /> Suivi formateur</li>
              <li className="flex items-center text-sm sm:text-base"><CheckIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-[#103428]" /> Certification</li>
            </ul>
            <Button className="w-full bg-[#103428] hover:bg-[#155642] text-white rounded-full py-2 text-sm sm:text-base transition-colors">
              Discuter de mon projet
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}