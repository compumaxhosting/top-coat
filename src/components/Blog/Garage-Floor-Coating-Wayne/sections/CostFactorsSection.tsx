import { Label, SectionHeading } from "../SectionPrimitives";

export default function CostFactorsSection() {
  return (
    <section className="border-b border-charcoal-lighter py-16">
      <Label>Planning</Label>
      <SectionHeading>Cost Factors</SectionHeading>
      <p className="font-sans text-base leading-relaxed text-secondary-foreground/70">
        Garage floor coating costs depend on garage size, concrete condition,
        repair requirements, coating type, decorative options, and labor.
        Investing in professional installation often saves money by preventing
        premature coating failure.
      </p>
      <ul className="mt-6 ml-6 list-disc space-y-2 font-sans text-secondary-foreground/70">
        <li>Square footage and existing concrete damage</li>
        <li>Crack repairs and project complexity</li>
        <li>Flake or metallic finish and custom colors</li>
        <li>Polyaspartic topcoat selection</li>
      </ul>
    </section>
  );
}
