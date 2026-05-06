import { benefits } from "../data";
import { Label, SectionHeading } from "../SectionPrimitives";

export default function BenefitsSection() {
  return (
    <section className="border-b border-charcoal-lighter py-16">
      <Label>Advantages</Label>
      <SectionHeading>Key Benefits</SectionHeading>
      <p className="mb-6 font-sans text-base leading-relaxed text-secondary-foreground/70">Key Benefits</p>
      <ul className="mb-6 space-y-2 text-secondary-foreground/70">
        <li>• Extreme Durability: highly resistant to cracks and wear</li>
        <li>• Low Maintenance: no frequent replacements needed</li>
        <li>• Moisture Resistance: performs well in NJ climate</li>
        <li>• Design Flexibility: endless color and pattern options</li>
        <li>• Sustainability: often made from recycled materials</li>
      </ul>
      <p className="mt-4 font-sans text-base leading-relaxed text-secondary-foreground/70">Although terrazzo may cost more upfront, it becomes a cost-effective investment over time due to its longevity.</p>
    </section>
  );
}
