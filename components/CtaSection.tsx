import { Button } from "@/components/ui/button"
import { CheckIcon, CalendarIcon } from 'lucide-react'

export default function CtaSection() {
  return (
    <div className="my-20 bg-white p-8 rounded-lg shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold text-[#103428] mb-4">Et si on discutait de votre projet de formation ?</h2>
          <p className="text-gray-600 mb-4">
            Pour commander votre formation, rien de plus simple ; vous prenez rendez-vous dans notre calendrier, on détermine ensemble la durée de la formation que vous voulez ainsi que la deadline. Et on peut directement commencer votre projet !
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-center"><CheckIcon className="w-5 h-5 mr-2 text-[#2f795e]" /> Prenez rendez-vous</li>
            <li className="flex items-center"><CheckIcon className="w-5 h-5 mr-2 text-[#2f795e]" /> On discute de votre projet</li>
            <li className="flex items-center"><CheckIcon className="w-5 h-5 mr-2 text-[#2f795e]" /> Et on peut commencer à travailler !</li>
          </ul>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <div className="text-center p-8">
            <CalendarIcon className="w-16 h-16 mx-auto mb-4 text-[#2f795e]" />
            <h3 className="text-xl font-bold mb-4">Choisissez un jour</h3>
            <Button className="bg-[#2f795e] hover:bg-[#155642] text-white rounded-full px-8 py-3 text-lg transition-colors">
              Voir les disponibilités
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}