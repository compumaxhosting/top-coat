export default function BlogPostHero() {
  return (
    <section className="relative w-full border-b border-[#ffffff1a] bg-linear-to-b from-[#1a1d23] to-[#0D0F12] py-8 md:py-12">
      <div className="container mx-auto px-4 pt-10 md:px-8 md:pt-20">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-center space-y-3 text-center md:space-y-4">
          <p className="pt-8 text-sm uppercase tracking-[0.3em] text-white/70">
            Featured Article
          </p>

          <h1 className="font-serif text-4xl font-bold leading-tight text-white/95 md:text-5xl lg:text-6xl">
            How Much Does Epoxy Garage Flooring Cost in New Jersey in 2027?
          </h1>

          <p className="max-w-3xl text-lg text-white/70">
            Epoxy garage flooring in New Jersey is estimated to cost approximately $4–$12 per square foot for professional installation, depending on concrete condition, surface preparation, coating type, and project size.
          </p>

          <div className="pt-1 text-sm text-white/60">
            Published 28 October 2026 · 9 min read
          </div>
        </div>
      </div>
    </section>
  );
}

