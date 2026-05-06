import { Label, SectionHeading } from "../SectionPrimitives";

export default function MaintenanceSection() {
  return (
    <section className="border-b border-charcoal-lighter py-16">
      <Label>Care</Label>
      <SectionHeading>Maintenance Tips</SectionHeading>
      <p className="mb-9 font-sans text-base leading-relaxed text-secondary-foreground/70">
        Terrazzo requires minimal upkeep; regular cleaning preserves the finish and reduces long-term maintenance costs.
      </p>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {[
          "Sweep regularly",
          "Mop with mild detergent",
          "Avoid harsh chemicals",
          "Polish periodically",
        ].map((tip) => (
          <div key={tip} className="flex items-start gap-3 rounded-lg border border-charcoal-lighter bg-charcoal-light p-5">
            <span className="pt-1 text-primary">-</span>
            <p className="font-sans text-sm leading-relaxed text-secondary-foreground/70">{tip}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
