import { Button } from "@/components/ui/button"

export default function MethodSection() {
  return (
    <div className="text-center space-y-8 mb-20">
      <h2 className="text-4xl font-bold text-[#103428]">Alors on commence quand ?</h2>
      <div className="flex justify-center space-x-4">
        <Button className="bg-[#2f795e] hover:bg-[#155642] text-white rounded-full px-8 py-3 text-lg transition-colors">
          Voir nos tarifs
        </Button>
        <Button className="bg-[#103428] hover:bg-[#155642] text-white rounded-full px-8 py-3 text-lg transition-colors">
          Prendre un rendez-vous
        </Button>
      </div>
      <p className="text-xl font-semibold mt-12 text-[#2f795e]">+ de 300 entreprises nous font déjà confiance</p>
      <div className="flex flex-wrap justify-center items-center gap-8">
        {['ddyness', 'submagic', 'jcplp', 'Mercedes-Benz', 'sellsy', 'zario', 'pylote', 'Juno'].map((company, index) => (
          <div key={index} className="w-24 h-12 bg-gray-200 rounded flex items-center justify-center">
            <span className="text-sm font-medium text-[#103428]">{company}</span>
          </div>
        ))}
      </div>
    </div>
  )
}