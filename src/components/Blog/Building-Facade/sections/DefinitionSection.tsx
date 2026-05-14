import Link from "next/link";
import { Label, SectionHeading } from "../SectionPrimitives";

export default function DefinitionSection() {
  return (
    <section className="border-b border-charcoal-lighter py-16">
      <Label>Definition</Label>
      <SectionHeading>What Are Building Facade Solutions?</SectionHeading>
      <p className="font-sans text-base leading-relaxed text-secondary-foreground/70">
        <Link href="/services/building-facade-contractors-wayne-nj">
          Building facade
        </Link>{" "} solutions refer to exterior systems and services designed
        to protect and enhance a building&apos;s outer shell. This includes cladding,
        insulation, waterproofing, restoration, and architectural upgrades.
      </p>
      <blockquote className="mt-8 border-l-2 border-primary pl-6 font-serif text-lg italic leading-relaxed text-secondary-foreground/75">
        A building facade is the exterior surface of a structure that protects it
        from weather while contributing to design, energy efficiency, and
        structural durability.
      </blockquote>

      <div className="mt-8 rounded-lg border border-charcoal-lighter bg-charcoal-light p-6">
        <p className="mb-3 font-sans text-xs uppercase tracking-[0.16em] text-primary">
          Facade Solutions May Include
        </p>
        <ul className="grid grid-cols-1 gap-2 md:grid-cols-2">
          {[
            "Exterior cladding systems",
            "Curtain wall systems",
            "Stone or brick restoration",
            "Waterproof coatings",
            "Thermal insulation upgrades",
            "Structural repairs",
            "Window replacement integration",
          ].map((item) => (
            <li
              key={item}
              className="font-sans text-sm text-secondary-foreground/70"
            >
              • {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
