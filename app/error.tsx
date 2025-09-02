"use client"

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <main className="min-h-[60vh] flex flex-col items-center justify-center text-center gap-6 px-6 py-16">
      <p className="text-sm font-mono text-muted-foreground">Une erreur est survenue</p>
      <h1 className="text-3xl md:text-5xl font-bold tracking-tight">Oups, quelque chose s'est mal passé</h1>
      <p className="max-w-xl text-muted-foreground">
        Réessayez l'action précédente. Si le problème persiste, contactez-nous.
      </p>
      <div className="flex items-center gap-3">
        <button
          onClick={() => reset()}
          className="inline-flex items-center justify-center rounded-md bg-black text-white px-4 py-2 text-sm font-medium hover:opacity-90 transition"
        >
          Réessayer
        </button>
        <a
          href="/"
          className="inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm font-medium hover:bg-accent transition"
        >
          Retour à l'accueil
        </a>
      </div>
      {process.env.NODE_ENV !== 'production' && (
        <pre className="text-left text-xs text-muted-foreground whitespace-pre-wrap break-words max-w-2xl bg-muted/40 rounded-md p-4">
          {error?.message}
          {error?.digest ? `\n\nDigest: ${error.digest}` : ''}
        </pre>
      )}
    </main>
  )
}


