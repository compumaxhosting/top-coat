import Link from "next/link";
import Image from "next/image";

export default function IntroSection() {
  return (
    <section className="border-b border-charcoal-lighter py-12 md:py-16">
      <p className="mb-3 font-sans text-xs uppercase tracking-[0.2em] text-primary">
        Introduction
      </p>
      <h2 className="mb-6 font-serif text-3xl leading-tight text-secondary-foreground md:text-5xl">
        A Durable & Premium Flooring Solution for NY & NJ Properties
      </h2>
      <p className="max-w-4xl font-sans text-base leading-relaxed text-secondary-foreground/70 md:text-lg">
        Yes. <Link href="/services/epoxy-flooring-wayne-new-jersey" className="text-primary hover:underline">Epoxy flooring</Link> is an excellent choice for many NYC and New Jersey homes and businesses because it creates a durable, seamless, low-maintenance surface over concrete. It is especially well suited for garages, warehouses, showrooms, workshops, retail spaces, and other areas exposed to heavy traffic, moisture, stains, or chemicals.
      </p>
      <p className="mt-5 max-w-4xl font-sans text-base leading-relaxed text-secondary-foreground/70 md:text-lg">
        For properties in Wayne, Newark, Paterson, Jersey City, Bergen County, and surrounding NYC communities, the right epoxy flooring system can protect concrete while improving the overall appearance of the space.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="overflow-hidden rounded-lg border border-charcoal-lighter bg-charcoal-light">
          <div className="relative h-64 md:h-80">
            <Image
              src="/Images/epoxy-flooring-nyc-homes-businesses.webp"
              alt="Professional epoxy flooring installation"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
        <div className="overflow-hidden rounded-lg border border-charcoal-lighter bg-charcoal-light">
          <div className="relative h-64 md:h-80">
            <Image
              src="/Images/commercial-epoxy.webp"
              alt="Commercial epoxy floor application"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
