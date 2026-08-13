import { Label, SectionHeading } from "../SectionPrimitives";

export default function ServicesSection() {
  return (
    <section className="border-b border-charcoal-lighter py-16" id="ten">
      <Label>Service Areas</Label>
      <SectionHeading>Stamped Concrete Services in NJ &amp; NYC</SectionHeading>
      <p className="font-sans text-base leading-relaxed text-secondary-foreground/70">
        TopCoat Artistry LLC provides stamped and decorative concrete solutions for residential
        and commercial properties throughout New Jersey. The company&apos;s current website
        highlights <strong>20+ years of experience</strong> and services including stamped concrete patios and
        driveways, custom decorative concrete, epoxy flooring, terrazzo, and other surface
        solutions.
      </p>
      <p className="mt-5 font-sans text-base leading-relaxed text-secondary-foreground/70">
        The company serves <strong>Wayne, Newark, Paterson, Jersey City, Bergen County communities, and
          surrounding areas</strong>, with service coverage extending to NYC and communities including
        Paramus, Ridgewood, Glen Rock, Saddle River, Upper Saddle River, Ramsey, Mahwah,
        Midland Park, Hillsdale, Teaneck, Montvale, River Vale, Westwood, Park Ridge, and
        Montville.
      </p>
    </section>
  );
}
