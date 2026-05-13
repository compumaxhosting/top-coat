import { Label, SectionHeading } from "../SectionPrimitives";

export default function InvestmentSection() {
  return (
    <section className="border-b border-charcoal-lighter py-16">
      <Label>Performance</Label>
      <SectionHeading>How Facades Improve Energy Efficiency</SectionHeading>
      <p className="font-sans text-base leading-relaxed text-secondary-foreground/70">
        Energy-efficient facades reduce heat transfer between interior and exterior
        environments by adding insulation, reducing air leakage, and supporting
        energy-efficient openings and glazing.
      </p>
      <div className="mt-8 rounded-lg border border-charcoal-lighter bg-charcoal-light p-6">
        <p className="mb-3 font-sans text-xs uppercase tracking-[0.16em] text-primary">
          They Help By
        </p>
        <ul className="grid grid-cols-1 gap-2 md:grid-cols-2">
          {[
            "Adding insulation layers",
            "Reducing air leakage",
            "Installing energy-efficient windows",
            "Using reflective exterior materials",
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
      <blockquote className="mt-8 border-l-2 border-primary pl-6 font-serif text-lg italic leading-relaxed text-secondary-foreground/75">
        An energy-efficient building envelope reduces heat loss in winter and heat
        gain in summer, improving comfort and lowering utility costs.
      </blockquote>
    </section>
  );
}
