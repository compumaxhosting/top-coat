import { Label, SectionHeading } from "../SectionPrimitives";

export default function MaintenanceSection() {
  const tips = [
    "Sweep or dust-mop regularly to remove abrasive dirt and debris.",
    "Clean spills as soon as possible to prevent surface film formation.",
    "Use manufacturer-approved, pH-neutral cleaning products.",
    "Avoid unnecessary harsh chemicals or solvents that can dull the shine.",
    "Use appropriate protective pads under heavy machinery and equipment.",
    "Address chips, cracks, or other physical impact damage promptly.",
    "Follow your flooring contractor's custom maintenance recommendations.",
  ];

  return (
    <section className="border-b border-charcoal-lighter py-16" id="maintenance">
      <Label>Maintenance Guide</Label>
      <SectionHeading>Epoxy Flooring Maintenance Tips</SectionHeading>
      
      <div className="max-w-4xl space-y-6 font-sans text-base leading-relaxed text-secondary-foreground/70 md:text-lg">
        <p>
          Epoxy floors are relatively easy to maintain. To keep the surface looking its best and protect your investment:
        </p>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tips.map((tip, idx) => (
            <li 
              key={idx} 
              className="flex items-start gap-3 p-4 rounded-lg bg-charcoal-light/10 border border-charcoal-lighter/40"
            >
              <span className="text-primary font-bold">✓</span>
              <span className="text-sm leading-relaxed text-secondary-foreground/75">{tip}</span>
            </li>
          ))}
        </ul>

        <p className="mt-4 text-sm italic">
          With proper care, an epoxy floor can remain attractive and functional for years.
        </p>
      </div>
    </section>
  );
}
