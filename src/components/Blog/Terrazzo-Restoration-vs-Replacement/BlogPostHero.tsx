export default function BlogPostHero() {
  return (
    <section className="relative w-full border-b border-[#ffffff1a] bg-linear-to-b from-[#1a1d23] to-[#0D0F12] py-8 md:py-12">
      <div className="container mx-auto px-4 pt-10 md:px-8 md:pt-20">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-center space-y-3 text-center md:space-y-4">
          <p className="pt-8 text-sm uppercase tracking-[0.3em] text-white/70">
            Flooring Guide
          </p>

          <h1 className="font-serif text-4xl font-bold leading-tight text-white/95 md:text-5xl lg:text-6xl">
            Terrazzo Floor Restoration vs. Replacement: Which Is the Better
            Option?
          </h1>

          <p className="max-w-3xl text-lg text-white/70">
            In most cases, terrazzo floor restoration is the better option when
            the existing flooring remains structurally sound, while replacement
            makes more sense when extensive damage or severe deterioration is
            involved.
          </p>

          <div className="pt-1 text-sm text-white/60">
            Published 4 November 2026 · 9 min read
          </div>
        </div>
      </div>
    </section>
  );
}

