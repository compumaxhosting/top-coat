import { Label, SectionHeading } from "../SectionPrimitives";
import Link from "next/link";

export default function HowToChooseSection() {
  return (
    <section className="border-b border-charcoal-lighter py-16">
      <Label>Hiring</Label>
      <SectionHeading>How to Choose the Right Terrazzo Contractor in Wayne NJ</SectionHeading>

      <p className="mb-4 font-sans text-base leading-relaxed text-secondary-foreground/70">Choose a contractor with proven experience, transparent pricing, and verifiable references to ensure a high-quality terrazzo installation.</p>

      <p className="mb-3 font-sans text-sm uppercase tracking-[0.12em] text-primary">Checklist</p>
      <ul className="mb-6 space-y-2 text-sm text-secondary-foreground/70">
        <li>• Check online reviews</li>
        <li>• Ask for past project photos</li>
        <li>• Verify licenses and insurance</li>
        <li>• Compare multiple quotes</li>
        <li>• Ask about warranties</li>
      </ul>

      <SectionHeading>Service Area</SectionHeading>
      <p className="font-sans text-sm leading-relaxed text-secondary-foreground/70 mb-4">TopCoat Artistry LLC serves:</p>
      <ul className="mb-6 space-y-1 text-sm text-secondary-foreground/70">
        {[
          "Wayne",
          "Newark",
          "Paterson",
          "Jersey City",
          "Bergen County towns (Paramus, Ridgewood, Mahwah, etc.)",
          "NYC & Montville",
        ].map((place) => (
          <li key={place}>• {place}</li>
        ))}
      </ul>

      <SectionHeading>Contact (NAP)</SectionHeading>
      <p className="font-sans text-sm leading-relaxed text-secondary-foreground/70">Business Name: TopCoat Artistry LLC<br />Phone: 201 315 2633<br />Address: 108 Fairfield Rd, Wayne, NJ 07470</p>

      <p className="mt-6 font-sans text-sm leading-relaxed text-secondary-foreground/70">For a free consultation, <Link href="/contact" className="text-primary underline">contact us</Link> or request a quote online.</p>
    </section>
  );
}
