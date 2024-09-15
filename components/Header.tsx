"use client"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = ['Accueil', 'Formations', 'Méthode', 'Tarifs']

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'py-2' : 'py-4'
    }`}>
      <div className={`container mx-auto px-4 sm:px-6 transition-all duration-300 ${
        isScrolled ? 'max-w-6xl' : 'max-w-7xl mt-4'
      }`}>
        <div className="bg-[#2f795e] rounded-full px-4 sm:px-8 py-2 sm:py-4 flex flex-col sm:flex-row items-center justify-between">
          <Link href="/" className="text-2xl sm:text-3xl font-bold text-white hidden sm:block">
            NOVA.
          </Link>
          <nav className="flex items-center justify-center w-full sm:w-auto space-x-4 sm:space-x-6">
            {navItems.map((item) => (
              <div key={item} className="relative group">
                <Link href="#" className="text-sm font-medium text-white group-hover:text-[#103428] transition-colors">
                  {item}
                </Link>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                {item === 'Méthode' && (
                  <span className="absolute -top-2 -right-6 bg-[#155642] text-white text-xs px-1 rounded">
                    New
                  </span>
                )}
              </div>
            ))}
          </nav>
          <div className="hidden sm:block relative">
            <Button className="rounded-full bg-white text-[#2f795e] border border-white hover:bg-[#103428] hover:text-white transition-colors px-6 sm:px-8 py-2 sm:py-4 text-sm sm:text-lg">
              Prendre un rendez-vous
            </Button>
            <span className="absolute -top-2 -right-1 bg-[#155642] text-white text-xs px-2 py-1 rounded-full">
              1
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}