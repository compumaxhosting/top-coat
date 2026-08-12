import Image from "next/image";
import Link from "next/link";
import { Label, SectionHeading } from "../SectionPrimitives";

export default function IntroSection() {
  return (
    <section className="border-b border-charcoal-lighter py-16">
      <Label>Decorative Concrete Guide · NJ &amp; NYC</Label>
      <SectionHeading>
        Stamped Concrete Contractor NJ &amp; NYC: Driveway, Patio &amp; Walkway Ideas
      </SectionHeading>
      <p className="font-sans text-base leading-relaxed text-secondary-foreground/70">
        If you&apos;re looking for a{" "}
        <Link href="/services/stamped-concrete-contractors-wayne-nj" className="text-primary hover:underline">Stamped Concrete Contractor Wayne NJ</Link>,
        stamped concrete is a versatile option for creating attractive driveways, patios, walkways,
        pool decks, and other outdoor surfaces. It can reproduce the appearance of natural stone,
        brick, slate, or tile while giving property owners greater flexibility in color, pattern,
        and texture.
      </p>
      <p className="mt-5 font-sans text-base leading-relaxed text-secondary-foreground/70">
        For homeowners and businesses in Wayne, Newark, Paterson, Jersey City, Bergen County,
        Morris County, and NYC, a successful project depends on proper surface preparation,
        drainage, pattern selection, installation, curing, and sealing.
      </p>
      <p className="mt-5 font-sans text-base leading-relaxed text-secondary-foreground/70">
        Stamped concrete is decorative concrete that is textured and patterned while it is still
        workable. It can be designed to resemble stone, brick, slate, or tile and is commonly
        used for driveways, patios, walkways, and other outdoor areas. Professional preparation
        and installation are important for durability and appearance.
      </p>
      <div className="mt-8 overflow-hidden rounded-lg">
        <div className="relative h-72 w-full md:h-96">
          <Image
            src="/Images/stamped-concrete-contractor-nj-nyc-ideas.webp"
            alt="Stamped concrete driveway, patio and walkway ideas in NJ and NYC"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 80vw"
          />
        </div>
      </div>
    </section>
  );
}
