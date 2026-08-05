import Image from "next/image";
import Link from "next/link";

export default function IntroSection() {
  return (
    <section className="w-full">
      <p className="mb-3 font-sans text-xs uppercase tracking-[0.2em] text-primary">
        Garage Flooring Guide · Wayne &amp; Bergen County
      </p>
      <h2 className="mb-6 font-serif text-3xl leading-tight text-secondary-foreground md:text-5xl">
        Garage Floor Coating Wayne NJ
      </h2>
      <p className="max-w-4xl font-sans text-base leading-relaxed text-secondary-foreground/70 md:text-lg">
        If you&apos;re considering <Link href="/services/garage-floor-coating-contractors-in-wayne-nj" className="text-primary">Garage Floor Coating in Wayne</Link>, NJ, epoxy and
        polyaspartic flooring are among the smartest home upgrades in 2026.
        These high-performance coatings transform ordinary concrete into durable,
        attractive, low-maintenance surfaces that withstand heavy vehicles,
        chemicals, moisture, and daily wear.
      </p>
      <p className="mt-5 max-w-4xl font-sans text-base leading-relaxed text-secondary-foreground/70 md:text-lg">
        Whether you own a home in Wayne, Newark, Paterson, Jersey City, Bergen
        County, or nearby communities, professional garage floor coatings deliver
        long-lasting protection while improving your property&apos;s appearance
        and value.
      </p>
      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="overflow-hidden rounded-lg border border-charcoal-lighter bg-charcoal-light">
          <div className="relative h-64">
            <Image
              src="/Images/garage-floor-coating-wayne-nj.webp"
              alt="Garage Floor Coating Wayne NJ by TopCoat Artistry LLC"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
        <div className="overflow-hidden rounded-lg border border-charcoal-lighter bg-charcoal-light">
          <div className="relative h-64">
            <Image
              src="/Images/garage-floor2.webp"
              alt="Epoxy garage flooring with a decorative finish"
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
