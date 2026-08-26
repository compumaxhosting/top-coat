import Link from "next/link";
import { Label, SectionHeading } from "../SectionPrimitives";

export default function ConclusionSection() {
  return (
    <section className="border-b border-charcoal-lighter py-16" id="conclusion">
      <Label>Conclusion</Label>
      <SectionHeading>Epoxy Flooring for NY &amp; NJ Properties</SectionHeading>
      
      <div className="max-w-4xl space-y-5 font-sans text-base leading-relaxed text-secondary-foreground/70 md:text-lg">
        <p>
          <Link href="/" className="text-primary hover:underline">Epoxy flooring</Link> can be an excellent investment for many homes and businesses in NYC and New Jersey. Its durability, stain resistance, easy maintenance, attractive appearance, and ability to protect concrete make it especially useful for garages, commercial spaces, workshops, warehouses, and industrial facilities.
        </p>
        <p>
          The key is choosing the right coating system for the environment and having the concrete properly prepared before installation. If you&apos;re unsure whether epoxy is right for your property, a professional floor evaluation can help you make an informed decision.
        </p>
      </div>
    </section>
  );
}
