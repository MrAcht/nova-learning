export default function TestimonialsSection() {
  const testimonials = [
    { name: "Philippe Cheng", role: "CEO Pratico", comment: "NOVA et ses équipes ont fait un travail remarquable en un temps record ! Nous avons travaillé main dans la main pendant 3 semaines pour présenter 2 formations lors de notre événement. Un vrai game changer !" },
    { name: "Rose-Marie CHAMIEH", role: "CMO Maddyness", comment: "NOVA et ses équipes ont fait un travail remarquable en un temps record ! Nous avons travaillé main dans la main pendant 3 semaines pour présenter 2 formations lors de notre événement. Un vrai game changer !" },
    { name: "Frédérique Doré", role: "Responsable Communication Nigloland", comment: "Bravo pour le travail accompli par NOVA et son équipe. Leur professionnalisme, leur créativité et leur réactivité ont répondu pleinement à nos attentes. Un grand merci à toute l'équipe pour l'engagement et la disponibilité ! À bientôt." },
    { name: "Théo Dorp", role: "Co-fondateur de pylote & crème de la crème", comment: "Belle collab' et belle formation" }
  ]

  return (
    <div className="my-10 sm:my-20 px-4 sm:px-0">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#103428] mb-8 sm:mb-12">Encore hésitant ? Voici nos avis clients :</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-3 sm:mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 rounded-full mr-3 sm:mr-4"></div>
              <div>
                <h3 className="font-bold text-sm sm:text-base text-[#103428]">{testimonial.name}</h3>
                <p className="text-xs sm:text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-sm sm:text-base text-gray-600">{testimonial.comment}</p>
          </div>
        ))}
      </div>
    </div>
  )
}