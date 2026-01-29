export default function Loading() {
  return (
    <div className="min-h-screen bg-mp-black">
      {/* Navigation Skeleton */}
      <header className="fixed top-0 z-50 w-full border-b border-mp-white/10 bg-mp-black/80 backdrop-blur-md">
        <div className="container-custom flex h-16 items-center justify-between md:h-20">
          <div className="h-10 w-32 animate-pulse rounded bg-mp-white/10" />
          <nav className="hidden items-center gap-8 md:flex">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-4 w-16 animate-pulse rounded bg-mp-white/10" />
            ))}
          </nav>
          <div className="h-10 w-36 animate-pulse rounded-full bg-mp-neon/20" />
        </div>
      </header>

      {/* Hero Skeleton */}
      <section className="relative flex min-h-screen items-center justify-center pt-16">
        <div className="container-custom flex flex-col items-center text-center">
          <div className="mb-4 h-12 w-48 animate-pulse rounded bg-mp-white/10 md:mb-6" />
          <div className="mb-4 h-16 w-full max-w-3xl animate-pulse rounded bg-mp-white/10 md:h-24" />
          <div className="mb-8 h-6 w-full max-w-xl animate-pulse rounded bg-mp-white/10" />
          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="h-12 w-44 animate-pulse rounded-full bg-mp-neon/20" />
            <div className="h-12 w-44 animate-pulse rounded-full bg-mp-white/10" />
          </div>
        </div>
      </section>
    </div>
  );
}
