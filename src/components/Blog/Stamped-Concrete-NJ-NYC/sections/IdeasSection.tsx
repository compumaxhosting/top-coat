import { Label, SectionHeading } from "../SectionPrimitives";

export default function IdeasSection() {
  return (
    <section className="border-b border-charcoal-lighter py-16" id="three">
      <Label>Design Inspiration</Label>
      <SectionHeading>Stamped Concrete Driveway, Patio &amp; Walkway Ideas</SectionHeading>

      <h3 className="mb-3 mt-8 font-serif text-2xl text-secondary-foreground">
        Stamped Driveways Wayne NJ
      </h3>
      <p className="font-sans text-base leading-relaxed text-secondary-foreground/70">
        A driveway can have a major impact on curb appeal. Popular designs include:
      </p>
      <ul className="ml-6 mt-3 list-disc space-y-2 font-sans text-secondary-foreground/70">
        <li>Ashlar slate</li>
        <li>Cobblestone</li>
        <li>Brick patterns</li>
        <li>Flagstone</li>
        <li>Natural stone</li>
        <li>Decorative borders</li>
      </ul>
      <p className="mt-4 font-sans text-base leading-relaxed text-secondary-foreground/70">
        A contrasting border can be used to visually define the driveway and create a more
        finished appearance.
      </p>

      <h3 className="mb-3 mt-10 font-serif text-2xl text-secondary-foreground">
        Concrete Patio Ideas
      </h3>
      <p className="font-sans text-base leading-relaxed text-secondary-foreground/70">
        A stamped patio can transform an ordinary backyard into an outdoor living area.
        Homeowners can combine colors, patterns, and borders to complement landscaping, outdoor
        kitchens, seating areas, or fire pits.
      </p>

      <h3 className="mb-3 mt-10 font-serif text-2xl text-secondary-foreground">
        Concrete Walkway Installation
      </h3>
      <p className="font-sans text-base leading-relaxed text-secondary-foreground/70">
        A decorative walkway can connect a driveway to the front entrance or create a path
        through a backyard or garden. Smaller stone patterns and borders can create a structured
        appearance without making the walkway look overly complicated.
      </p>

      <h3 className="mb-3 mt-10 font-serif text-2xl text-secondary-foreground">
        Commercial Concrete Installation
      </h3>
      <p className="font-sans text-base leading-relaxed text-secondary-foreground/70">
        Businesses can use decorative concrete around entrances, courtyards, walkways,
        hospitality areas, and other visible locations. Commercial projects should balance
        appearance with factors such as pedestrian traffic, drainage, maintenance, and expected
        wear.
      </p>

      <blockquote className="mt-8 border-l-2 border-primary pl-6 font-serif text-lg italic leading-relaxed text-secondary-foreground/75">
        Combine a primary stone or slate pattern with a contrasting border. This simple design
        approach can make a driveway, patio, or walkway look more defined without requiring an
        overly complicated pattern.
      </blockquote>
    </section>
  );
}
