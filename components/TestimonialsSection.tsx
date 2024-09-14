export default function TestimonialsSection() {
    const testimonials = [
      { name: "Philippe Cheng", role: "CEO Pratico", comment: "NOVA et ses équipes ont fait un travail remarquable en un temps record ! Nous avons travaillé main dans la main pendant 3 semaines pour présenter 2 formations lors de notre événement. Un vrai game changer !" },
      { name: "Rose-Marie CHAMIEH", role: "CMO Maddyness", comment: "NOVA et ses équipes ont fait un travail remarquable en un temps record ! Nous avons travaillé main dans la main pendant 3 semaines pour présenter 2 formations lors de notre événement. Un vrai game changer !" },
      { name: "Frédérique Doré", role: "Responsable Communication Nigloland", comment: "Bravo pour le travail accompli par NOVA et son équipe. Leur professionnalisme, leur créativité et leur réactivité ont répondu pleinement à nos attentes. Un grand merci à toute l'équipe pour l'engagement et la disponibilité ! À bientôt." },
      { name: "Théo Dorp", role: "Co-fondateur de pylote & crème de la crème", comment: "Belle collab' et belle formation" }
    ]
  
    return (
      <div className="my-20">
        <h2 className="text-3xl font-bold text-center text-[#103428] mb-12">Encore hésitant ? Voici nos avis clients :</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <h3 className="font-bold text-[#103428]">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600">{testimonial.comment}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }