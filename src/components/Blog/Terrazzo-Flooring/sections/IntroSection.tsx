import Image from "next/image";
import Link from "next/link";

export default function IntroSection() {
  return (
    <div className="w-full pt-8">
      <p className="mb-3 font-sans text-xs uppercase tracking-[0.2em] text-primary">Flooring Guide · Wayne & North Jersey</p>

      <h2 className="mb-4 font-serif text-2xl text-secondary-foreground">Introduction</h2>
      <p className="max-w-4xl font-sans text-base leading-relaxed text-secondary-foreground/70 md:text-lg">
        If you want a durable, elegant, and long-lasting flooring solution, <Link href="/services/terrazzo-flooring-wayne-nj" className="text-primary">
          terrazzo flooring services
        </Link>{" "} in Wayne & North Jersey are among the best options available today. Terrazzo combines natural stone chips with resin or cement to create a seamless, polished surface that can last for decades with minimal upkeep.
      </p>
      <p className="mt-5 max-w-4xl font-sans text-base leading-relaxed text-secondary-foreground/70 md:text-lg">
        In areas like Wayne, Newark, and Bergen County towns, terrazzo is gaining popularity for both residential and commercial spaces due to its modern appearance, sustainability, and high return on investment. Whether you’re remodeling your home or upgrading a commercial property, terrazzo flooring offers a timeless solution that blends style with strength.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="overflow-hidden rounded-lg border border-charcoal-lighter bg-charcoal-light">
          <div className="relative h-64">
            <Image
              src="/Images/terrazzo.webp"
              alt="Custom terrazzo floor in a luxury commercial space"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
        <div className="overflow-hidden rounded-lg border border-charcoal-lighter bg-charcoal-light">
          <div className="relative h-64">
            <Image
              src="/Images/church1.webp"
              alt="Polished terrazzo finish in an elegant interior"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
