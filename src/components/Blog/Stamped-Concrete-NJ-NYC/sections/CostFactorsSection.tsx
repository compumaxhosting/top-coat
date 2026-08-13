import { Label, SectionHeading } from "../SectionPrimitives";

export default function CostFactorsSection() {
  return (
    <section className="border-b border-charcoal-lighter py-16" id="six">
      <Label>Budgeting</Label>
      <SectionHeading>What Affects Stamped Concrete Cost?</SectionHeading>
      <p className="font-sans text-base leading-relaxed text-secondary-foreground/70">
        There is no single price that applies to every stamped concrete project. A professional
        estimate should consider the actual property and scope of work. A simple walkway will
        generally have different requirements from a large decorative driveway or commercial
        installation.
      </p>
      <ul className="mt-6 ml-6 list-disc space-y-2 font-sans text-secondary-foreground/70">
        <li>Total square footage</li>
        <li>Existing concrete removal</li>
        <li>Site preparation and base preparation</li>
        <li>Concrete thickness</li>
        <li>Pattern complexity</li>
        <li>Number of colors</li>
        <li>Borders and custom details</li>
        <li>Site accessibility</li>
        <li>Drainage requirements</li>
        <li>Finishing and sealing</li>
      </ul>
      <p className="mt-5 font-sans text-base leading-relaxed text-secondary-foreground/70">
        Before comparing estimates, make sure you understand what is included: surface
        preparation, concrete, pattern, color, reinforcement and joints, finishing, sealing, and
        cleanup. Comparing the complete scope of work is more useful than comparing only the
        price per square foot.
      </p>
    </section>
  );
}
