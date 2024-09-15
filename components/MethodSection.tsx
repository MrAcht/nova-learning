import { Button } from "@/components/ui/button"

export default function MethodSection() {
  return (
    <div className="text-center space-y-6 sm:space-y-8 mb-10 sm:mb-20 px-4 sm:px-0">
      <h2 className="text-3xl sm:text-4xl font-bold text-[#103428]">Alors on commence quand ?</h2>
      <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        <Button className="bg-[#2f795e] hover:bg-[#155642] text-white rounded-full px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg transition-colors">
          Voir nos tarifs
        </Button>
        <Button className="bg-[#103428] hover:bg-[#155642] text-white rounded-full px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg transition-colors">
          Prendre un rendez-vous
        </Button>
      </div>
      <p className="text-lg sm:text-xl font-semibold mt-8 sm:mt-12 text-[#2f795e]">+ de 300 entreprises nous font déjà confiance</p>
      <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8">
        {['ddyness', 'submagic', 'jcplp', 'Mercedes-Benz', 'sellsy', 'zario', 'pylote', 'Juno'].map((company, index) => (
          <div key={index} className="w-20 sm:w-24 h-10 sm:h-12 bg-gray-200 rounded flex items-center justify-center">
            <span className="text-xs sm:text-sm font-medium text-[#103428]">{company}</span>
          </div>
        ))}
      </div>
    </div>
  )
}