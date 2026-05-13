import { Label, SectionHeading } from "../SectionPrimitives";

export default function ComparisonSection() {
  return (
    <section className="border-b border-charcoal-lighter py-16">
      <Label>Case Study</Label>
      <SectionHeading>Real-World Example: Commercial Building Upgrade</SectionHeading>
      <p className="font-sans text-base leading-relaxed text-secondary-foreground/70">
        A mid-sized office building in New Jersey upgraded its outdated exterior
        with insulated aluminum composite panels and waterproof sealing systems.
      </p>
      <div className="mt-8 rounded-lg border border-charcoal-lighter bg-charcoal-light p-6">
        <p className="mb-3 font-sans text-xs uppercase tracking-[0.16em] text-primary">
          Results
        </p>
        <ul className="grid grid-cols-1 gap-2 md:grid-cols-2">
          {[
            "18% reduction in energy costs",
            "Improved modern appearance",
            "Increased tenant occupancy",
            "Reduced water leakage issues",
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
