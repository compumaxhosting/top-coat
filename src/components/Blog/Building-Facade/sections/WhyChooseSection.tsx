import { Label, SectionHeading } from "../SectionPrimitives";

export default function WhyChooseSection() {
  return (
    <section className="border-b border-charcoal-lighter py-16">
      <Label>Why It Matters</Label>
      <SectionHeading>Why Are Facade Solutions Important in New Jersey?</SectionHeading>
      <p className="mb-8 font-sans text-base leading-relaxed text-secondary-foreground/70">
        New Jersey buildings face seasonal extremes. Without proper facade systems,
        properties may experience water damage, heat loss, cracks, and structural
        deterioration.
      </p>
      <div className="rounded-lg border border-charcoal-lighter bg-charcoal-light p-6">
        <p className="mb-3 font-sans text-xs uppercase tracking-[0.16em] text-primary">
          Key Reasons
        </p>
        <ul className="grid grid-cols-1 gap-2 md:grid-cols-2">
          {[
            "Heavy snowfall and freeze-thaw cycles",
            "Coastal humidity in certain regions",
            "Storm exposure",
            "Aging commercial buildings",
            "Increasing energy-efficiency standards",
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
