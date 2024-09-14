/* eslint-disable react/no-unescaped-entities */

export default function Hero() {
  return (
    <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
      <div>
        <h1 className="text-6xl font-bold leading-tight mb-6 text-[#103428]">
          On crée des formations d'excellence.
          <br />
          Pas des cours ordinaires.
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Notre objectif est simple : proposer à nos apprenants LA formation
          qui leur permettra d'acquérir des compétences essentielles en 60 jours
          et d'accélérer leur carrière.
        </p>
        <p className="text-lg font-semibold mb-4 text-[#2f795e]">
          Processus simple. Formation intensive. Résultats garantis.
        </p>
      </div>
      <div className="bg-white rounded-lg p-6 shadow-lg mt-[-70px]">
        <div className="aspect-video bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
          <span className="text-gray-500">Aperçu de la formation</span>
        </div>
        <p className="text-[#155642] font-semibold mb-2">Découvrez</p>
        <p className="text-lg font-bold text-[#103428]">notre méthode d'apprentissage en vidéo</p>
      </div>
    </div>
  )
}