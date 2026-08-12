import { Label, SectionHeading } from "../SectionPrimitives";

export default function DefinitionSection() {
  return (
    <section className="border-b border-charcoal-lighter py-16">
      <Label>Overview</Label>
      <SectionHeading>What Is Stamped Concrete?</SectionHeading>
      <p className="font-sans text-base leading-relaxed text-secondary-foreground/70">
        Stamped concrete is a concrete surface that is colored and textured with specialized
        stamping tools before the material fully hardens. Different patterns can create the
        appearance of materials such as flagstone, slate, cobblestone, brick, and tile.
      </p>
      <h3 className="mb-4 mt-8 font-serif text-2xl text-secondary-foreground">
        Common Applications
      </h3>
      <ul className="ml-6 list-disc space-y-2 font-sans text-secondary-foreground/70">
        <li>Driveways</li>
        <li>Patios</li>
        <li>Walkways</li>
        <li>Pool decks</li>
        <li>Outdoor entertaining areas</li>
        <li>Entryways</li>
        <li>Commercial pedestrian areas</li>
      </ul>
      <p className="mt-5 font-sans text-base leading-relaxed text-secondary-foreground/70">
        Unlike individual pavers, stamped concrete creates a continuous concrete surface while
        still allowing for extensive design customization.
      </p>
      <blockquote className="mt-8 border-l-2 border-primary pl-6 font-serif text-lg italic leading-relaxed text-secondary-foreground/75">
        When choosing a stamped concrete pattern, consider the architecture and exterior colors
        of your property. Natural stone patterns often work well with traditional homes, while
        clean slate or geometric patterns can complement modern properties.
      </blockquote>
    </section>
  );
}
