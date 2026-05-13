import { Label, SectionHeading } from "../SectionPrimitives";

export default function ProcessSection() {
  return (
    <section className="border-b border-charcoal-lighter py-16">
      <Label>Process</Label>
      <SectionHeading>How a Facade Project Works</SectionHeading>
      <div className="space-y-4">
        {[
          "Site Inspection: experts assess building condition and exterior damage.",
          "Design Planning: architects and engineers develop improvement plans.",
          "Material Selection: systems are selected for budget and performance goals.",
          "Installation or Restoration: certified crews execute approved methods.",
          "Final Inspection: quality and code-compliance verification.",
        ].map((step, index) => (
          <div
            key={step}
            className="rounded-lg border border-charcoal-lighter bg-charcoal-light p-5"
          >
            <p className="mb-1 font-sans text-xs uppercase tracking-[0.12em] text-primary">
              Step {index + 1}
            </p>
            <p className="font-sans text-sm leading-relaxed text-secondary-foreground/70">
              {step}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-8 rounded-lg border border-charcoal-lighter bg-charcoal-light p-6">
        <p className="mb-3 font-sans text-xs uppercase tracking-[0.16em] text-primary">
          How-To Summary
        </p>
        <p className="font-sans text-sm leading-relaxed text-secondary-foreground/70">
          Facade projects follow inspection, design, material selection,
          installation, and quality verification stages.
        </p>
      </div>
    </section>
  );
}
