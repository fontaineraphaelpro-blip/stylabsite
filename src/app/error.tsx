"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <div className="max-w-md text-center space-y-4">
        <h1 className="text-2xl font-bold">Something went wrong</h1>
        <p className="text-sm text-zinc-400">
          The page hit an unexpected error. You can reload or return to the homepage.
        </p>
        {process.env.NODE_ENV === "development" && (
          <pre className="text-left text-xs text-red-400/80 overflow-auto max-h-32 p-3 rounded-lg bg-white/5">
            {error.message}
          </pre>
        )}
        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <button type="button" className="btn btn--primary" onClick={() => reset()}>
            Try again
          </button>
          <a href="/" className="btn btn--ghost">
            Home
          </a>
        </div>
      </div>
    </div>
  );
}
