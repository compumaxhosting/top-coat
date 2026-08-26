import { Label, SectionHeading } from "../SectionPrimitives";

export default function LifespanSection() {
  return (
    <section className="border-b border-charcoal-lighter py-16" id="lifespan">
      <Label>Durability &amp; Longevity</Label>
      <SectionHeading>How Long Does Epoxy Flooring Last in New Jersey?</SectionHeading>
      
      <div className="max-w-4xl space-y-5 font-sans text-base leading-relaxed text-secondary-foreground/70 md:text-lg">
        <p>
          A professionally installed epoxy floor can last many years, with service life depending on installation quality, concrete condition, traffic, chemical exposure, UV exposure, and maintenance.
        </p>
        <p>
          Residential garage floors may experience different wear patterns than warehouse or industrial floors. Choosing a coating system designed specifically for the environment can help maximize its useful life.
        </p>
        <p>
          Regular cleaning and addressing damage early can also help maintain the floor&apos;s appearance and performance.
        </p>
      </div>
    </section>
  );
}
