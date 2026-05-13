import { Label, SectionHeading } from "../SectionPrimitives";

export default function ApplicationsSection() {
  return (
    <section className="border-b border-charcoal-lighter py-16">
      <Label>Materials</Label>
      <SectionHeading>Common Materials Used in Modern Facades</SectionHeading>
      <p className="mb-8 font-sans text-base leading-relaxed text-secondary-foreground/70">
        Modern facade systems use advanced materials designed for durability and
        aesthetics.
      </p>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {[
          "Aluminum composite panels",
          "Fiber cement boards",
          "Glass curtain walls",
          "High-pressure laminate panels",
          "Natural stone",
          "Brick veneer",
          "Stainless steel elements",
        ].map((item) => (
          <div
            key={item}
            className="rounded-lg border border-charcoal-lighter bg-charcoal-light px-4 py-3 font-sans text-sm text-secondary-foreground/70"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
