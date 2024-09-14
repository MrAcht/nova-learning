export default function WorkflowSection() {
    const steps = [
      { title: 'Prise de contact', description: 'Planifiez un rendez-vous via Calendly pour directement discuter de votre projet de formation avec nos équipes.' },
      { title: 'Call de lancement', description: 'Une fois le devis signé, on discutera plus en détail du contenu que doit transmettre votre formation et des ressources dont on a besoin.' },
      { title: 'Onboarding', description: "C'est ici que vous choisissez un modèle de formation, répondez à nos questions pour le programme et que vous pourrez upload votre branding (logo, typo & branding) ainsi que votre Figma." },
      { title: 'Feedback et livraison', description: 'Nous vous envoyons directement la V1 de la formation et vous pouvez faire tous vos feedbacks et retours.' },
    ]
  
    return (
      <div className="bg-white p-8 rounded-lg shadow-lg mb-20">
        <h2 className="text-3xl font-bold text-center text-[#103428] mb-12">Notre processus de travail</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="bg-[#103428] text-white text-xl font-bold w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4">
                {index + 1}
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }