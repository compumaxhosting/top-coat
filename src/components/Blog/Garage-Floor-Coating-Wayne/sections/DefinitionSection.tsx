import { Label, SectionHeading } from "../SectionPrimitives";

export default function DefinitionSection() {
  return (
    <section className="border-b border-charcoal-lighter py-16">
      <Label>Quick Answer</Label>
      <SectionHeading>What Is Garage Floor Coating?</SectionHeading>
      <p className="font-sans text-base leading-relaxed text-secondary-foreground/70">
        Garage floor coating is a protective system applied over concrete using
        epoxy or polyaspartic materials. It seals the surface, helps prevent
        staining and cracking, improves appearance, increases durability, and
        provides a long-lasting finish for residential and commercial garages.
      </p>
      <blockquote className="mt-8 border-l-2 border-primary pl-6 font-serif text-lg italic leading-relaxed text-secondary-foreground/75">
        Unlike ordinary paint, professional coatings chemically bond with
        properly prepared concrete to create an extremely durable floor that
        lasts for years.
      </blockquote>
    </section>
  );
}
