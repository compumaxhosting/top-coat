import { steps } from "../data";
import { Label, SectionHeading } from "../SectionPrimitives";

export default function ProcessSection() {
  return (
    <section className="border-b border-charcoal-lighter py-16">
      <Label>Process</Label>
      <SectionHeading>How is Terrazzo Flooring Installed?</SectionHeading>
      <p className="mt-4 font-sans text-base leading-relaxed text-secondary-foreground/70"><strong>Quick Answer:</strong> Terrazzo installation involves surface preparation, pouring the mix, grinding, polishing, and sealing for a smooth finish.</p>

      <div className="mt-6">
        <h3 className="font-serif text-lg font-semibold text-secondary-foreground mb-3">Step-by-Step Process</h3>
        <ol className="list-decimal list-inside space-y-2 text-secondary-foreground/70">
          <li>Surface preparation</li>
          <li>Installation of divider strips</li>
          <li>Mixing aggregates and binder</li>
          <li>Pouring the terrazzo mixture</li>
          <li>Grinding and polishing</li>
          <li>Sealing for protection</li>
        </ol>
      </div>

      <p className="mt-6 font-sans text-base leading-relaxed text-secondary-foreground/70">Professional installation ensures durability, precision, and a flawless finish, making it essential to hire experienced contractors.</p>
    </section>
  );
}
