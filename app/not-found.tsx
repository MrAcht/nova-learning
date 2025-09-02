export default function NotFound() {
  return (
    <main className="min-h-[60vh] flex flex-col items-center justify-center text-center gap-6 px-6 py-16">
      <p className="text-sm font-mono text-muted-foreground">Erreur 404</p>
      <h1 className="text-3xl md:text-5xl font-bold tracking-tight">Page introuvable</h1>
      <p className="max-w-xl text-muted-foreground">
        Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
      </p>
      <div className="flex items-center gap-3">
        <a
          href="/"
          className="inline-flex items-center justify-center rounded-md bg-black text-white px-4 py-2 text-sm font-medium hover:opacity-90 transition"
        >
          Retour à l'accueil
        </a>
        <a
          href="#cta"
          className="inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm font-medium hover:bg-accent transition"
        >
          Nous contacter
        </a>
      </div>
    </main>
  )
}


