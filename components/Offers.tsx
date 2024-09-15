'use client'

import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { FolderOpen, Layers, X, Clock, Users, ChevronUp } from 'lucide-react'

interface Offer {
  name: string;
  logo: string;
  description: string;
  color: string;
  detailedDescription: string;
  courses: number;
  modules: number;
  duration: string;
  level: string;
}

const offers: Offer[] = [
  {
    name: 'PHP',
    logo: '/images/php-logo.svg',
    description: 'PHP est un langage de programmation polyvalent et largement utilisé pour le développement web. Créez des sites web dynamiques et des applications robustes avec ce langage puissant et flexible.',
    color: '#2f795e',
    detailedDescription: 'PHP, créé en 1994, est un langage de script côté serveur conçu pour le développement web, mais également utilisé comme langage de programmation généraliste. PHP est un acronyme récursif pour PHP: Hypertext Preprocessor. Il permet de créer des pages web dynamiques interagissant avec une large variété de bases de données.',
    courses: 3,
    modules: 15,
    duration: '10 semaines',
    level: 'Débutant à Intermédiaire'
  },
  {
    name: 'Python',
    logo: '/images/python-logo.svg',
    description: 'Python est un langage de programmation haute performance connu pour sa simplicité et sa polyvalence. Idéal pour le développement web, l\'analyse de données, l\'intelligence artificielle et bien plus encore.',
    color: '#2f795e',
    detailedDescription: 'Python, créé par Guido van Rossum et publié pour la première fois en 1991, est un langage de programmation interprété, multi-paradigme et polyvalent. Sa philosophie met l\'accent sur la lisibilité du code avec l\'utilisation significative de l\'indentation. Python est largement utilisé dans le développement web, la science des données, l\'intelligence artificielle, et bien d\'autres domaines.',
    courses: 4,
    modules: 20,
    duration: '12 semaines',
    level: 'Débutant à Avancé'
  },
  {
    name: 'Tableau',
    logo: '/images/tableau-logo.svg',
    description: 'Tableau est une plateforme d\'analytique visuelle qui transforme l\'utilisation des données pour répondre à des problématiques diverses. Rejoignez sa communauté mondiale !',
    color: '#2f795e',
    detailedDescription: 'Tableau, fondé en 2003, est un outil de visualisation de données interactif qui aide les utilisateurs à voir et comprendre leurs données. Il permet de créer une variété de visualisations, de tableaux de bord et de rapports sans nécessiter de compétences avancées en programmation. Tableau est largement utilisé dans le monde des affaires pour l\'analyse de données et la business intelligence.',
    courses: 3,
    modules: 18,
    duration: '8 semaines',
    level: 'Intermédiaire'
  }
]

export default function OffersSection(): JSX.Element {
  const [activeOffer, setActiveOffer] = useState<string | null>(null)
  const detailsRef = useRef<HTMLDivElement | null>(null)

  const handleDiscoverClick = (offerName: string): void => {
    setActiveOffer(prevOffer => prevOffer === offerName ? null : offerName)
  }

  useEffect(() => {
    if (activeOffer && detailsRef.current) {
      detailsRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }, [activeOffer])

  return (
    <div className="py-8 sm:py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#103428] mb-6 sm:mb-8">Nos offres de formation</h2>
        
        {activeOffer && (
          <div 
            ref={detailsRef}
            className="bg-white rounded-lg shadow-lg p-4 sm:p-8 mb-6 sm:mb-8 relative"
          >
            <button 
              onClick={() => setActiveOffer(null)} 
              className="absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-500 hover:text-gray-700"
            >
              <X className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
            <h3 className="text-[#103428] text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Offre {activeOffer}</h3>
            <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">{offers.find(o => o.name === activeOffer)?.detailedDescription}</p>
            <p className="text-[#103428] text-base sm:text-lg font-semibold mb-3 sm:mb-4">
              Venez découvrir nos parcours {activeOffer} qui vous aideront à maîtriser cette technologie. Nous vous proposons {offers.find(o => o.name === activeOffer)?.courses} parcours avec un total de {offers.find(o => o.name === activeOffer)?.modules} modules.
            </p>
            <div className="bg-[#2f795e] text-white p-4 sm:p-6 rounded-lg">
              <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Formations</h4>
              <div className="flex justify-between items-center mb-3 sm:mb-4">
                <div className="flex items-center">
                  <FolderOpen className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="text-sm sm:text-base">{offers.find(o => o.name === activeOffer)?.courses} parcours</span>
                </div>
                <div className="flex items-center">
                  <Layers className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="text-sm sm:text-base">{offers.find(o => o.name === activeOffer)?.modules} modules</span>
                </div>
              </div>
              <button className="w-full sm:w-auto bg-white text-[#2f795e] border border-white hover:bg-[#103428] hover:text-white transition-colors font-semibold rounded py-2 sm:py-3 px-3 sm:px-4 text-sm sm:text-base">
                EN SAVOIR PLUS
              </button>
            </div>
          </div>
        )}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {offers.map((offer, index) => (
            <div key={index} className={`bg-white rounded-lg shadow-xxl overflow-hidden transition-all duration-300 hover:shadow-xl`}>
              <div className={`h-1 sm:h-2 bg-[${offer.color}]`}></div>
              <div className="p-4 sm:p-6">
                <div className="h-12 sm:h-16 flex items-center justify-center mb-3 sm:mb-4">
                  <Image src={offer.logo} alt={`${offer.name} logo`} width={150} height={50} className="object-contain h-full"/>
                </div>
                <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4">{offer.description}</p>
                <div className="flex flex-col space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">
                  <div className="flex items-center">
                    <FolderOpen className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                    <span>{offer.courses} parcours</span>
                  </div>
                  <div className="flex items-center">
                    <Layers className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                    <span>{offer.modules} modules</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                    <span>{offer.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                    <span>{offer.level}</span>
                  </div>
                </div>
              </div>
              <div className="px-4 sm:px-6 py-3 sm:py-4 bg-gray-50 border-t border-gray-100">
                <button 
                  className={`w-full flex items-center justify-center text-white font-semibold bg-[#2f795e] hover:text-[#103428] rounded-md py-2 transition-colors duration-300 text-sm sm:text-base`}
                  onClick={() => handleDiscoverClick(offer.name)}
                >
                  {activeOffer === offer.name ? 'FERMER' : 'DECOUVRIR'}
                  <ChevronUp className={`ml-2 h-3 w-3 sm:h-4 sm:w-4 transition-transform ${activeOffer === offer.name ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}