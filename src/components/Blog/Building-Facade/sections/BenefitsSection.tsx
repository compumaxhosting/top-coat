import { Label, SectionHeading } from "../SectionPrimitives";

export default function BenefitsSection() {
  return (
    <section className="border-b border-charcoal-lighter py-16">
      <Label>Advantages</Label>
      <SectionHeading>Benefits of Professional Facade Services</SectionHeading>
      <p className="mb-10 font-sans text-base leading-relaxed text-secondary-foreground/70">
        Professional facade contractors in New Jersey provide technical expertise,
        safety compliance, and long-term durability.
      </p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {[
          "Improved structural protection",
          "Enhanced curb appeal",
          "Increased property value",
          "Better energy efficiency",
          "Reduced maintenance costs",
          "Compliance with local codes",
          "Improved tenant satisfaction",
        ].map((benefit) => (
          <div
            key={benefit}
            className="rounded-lg border border-charcoal-lighter bg-charcoal-light p-6"
          >
            <p className="font-sans text-sm leading-relaxed text-secondary-foreground/70">
              {benefit}
            </p>
          </div>
        ))}
      </div>
      <blockquote className="mt-8 border-l-2 border-primary pl-6 font-serif text-lg italic leading-relaxed text-secondary-foreground/75">
        Professional building facade solutions improve durability, reduce energy
        costs, enhance appearance, and protect structures from weather damage.
      </blockquote>
    </section>
  );
}
