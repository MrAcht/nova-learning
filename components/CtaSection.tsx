import { Button } from "@/components/ui/button"
import { CheckIcon, CalendarIcon } from 'lucide-react'

export default function CtaSection() {
  return (
    <div className="my-10 sm:my-20 bg-white p-4 sm:p-8 rounded-lg shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#103428] mb-4">Et si on discutait de votre projet de formation ?</h2>
          <p className="text-sm sm:text-base text-gray-600 mb-4">
            Pour commander votre formation, rien de plus simple ; vous prenez rendez-vous dans notre calendrier, on détermine ensemble la durée de la formation que vous voulez ainsi que la deadline. Et on peut directement commencer votre projet !
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-center"><CheckIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-[#103428]" /> <span className="text-sm sm:text-base">Prenez rendez-vous</span></li>
            <li className="flex items-center"><CheckIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-[#103428]" /> <span className="text-sm sm:text-base">On discute de votre projet</span></li>
            <li className="flex items-center"><CheckIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-[#103428]" /> <span className="text-sm sm:text-base">Et on peut commencer à travailler !</span></li>
          </ul>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <div className="text-center p-4 sm:p-8">
            <CalendarIcon className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 text-[#2f795e]" />
            <h3 className="text-lg sm:text-xl font-bold mb-4 text-[#103428]">Choisissez un jour</h3>
            <Button className="bg-[#2f795e] hover:bg-[#155642] text-white rounded-full px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-lg transition-colors">
              Voir les disponibilités
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}