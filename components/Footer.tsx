import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#103428] text-white py-6 sm:py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="mb-4 sm:mb-0">
            <Link href="/" className="text-xl sm:text-2xl font-bold">NOVA.</Link>
          </div>
          <nav className="flex flex-wrap justify-center sm:justify-end space-x-2 sm:space-x-4">
            <Link href="#" className="text-sm sm:text-base hover:text-[#2f795e] transition-colors">Accueil</Link>
            <Link href="#" className="text-sm sm:text-base hover:text-[#2f795e] transition-colors">Formations</Link>
            <Link href="#" className="text-sm sm:text-base hover:text-[#2f795e] transition-colors">Méthode</Link>
            <Link href="#" className="text-sm sm:text-base hover:text-[#2f795e] transition-colors">Tarifs</Link>
          </nav>
        </div>
        <div className="mt-6 sm:mt-8 text-center text-xs sm:text-sm">
          <p>2024 - NOVA. All rights reserved</p>
          <div className="mt-2">
            <Link href="#" className="hover:text-[#2f795e] transition-colors">Mentions légales</Link>
            {' - '}
            <Link href="#" className="hover:text-[#2f795e] transition-colors">Politique de confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}