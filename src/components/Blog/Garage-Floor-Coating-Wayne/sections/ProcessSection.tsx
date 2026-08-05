import { Label, SectionHeading } from "../SectionPrimitives";

export default function ProcessSection() {
  return (
    <section className="border-b border-charcoal-lighter py-16">
      <Label>Installation</Label>
      <SectionHeading>How Does Garage Floor Coating Work?</SectionHeading>
      <p className="font-sans text-base leading-relaxed text-secondary-foreground/70">
        Professional garage floor coating involves repairing damaged concrete,
        mechanically grinding the surface, applying an epoxy primer and
        decorative elements if selected, and finishing with a protective topcoat
        for maximum durability.
      </p>
      <h3 className="mb-4 mt-8 font-serif text-2xl text-secondary-foreground">
        Installation Process
      </h3>
      <ol className="ml-6 list-decimal space-y-2 font-sans text-secondary-foreground/70">
        <li>Concrete inspection and moisture testing</li>
        <li>Concrete crack repair and diamond grinding</li>
        <li>Surface cleaning and epoxy primer application</li>
        <li>Base coat installation</li>
        <li>Decorative flakes or metallic finish, if selected</li>
        <li>Polyaspartic topcoat, final inspection, and curing</li>
      </ol>
    </section>
  );
}
