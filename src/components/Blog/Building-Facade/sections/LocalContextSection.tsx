import { Label, SectionHeading } from "../SectionPrimitives";

export default function LocalContextSection() {
  return (
    <section className="border-b border-charcoal-lighter py-16">
      <Label>Local Context</Label>
      <SectionHeading>Building Facade Solutions in Wayne, New Jersey</SectionHeading>
      <p className="font-sans text-base leading-relaxed text-secondary-foreground/70">
        Local contractors understand regional building codes, climate conditions,
        and architectural styles.
      </p>
      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-charcoal-lighter bg-charcoal-light p-6">
          <p className="mb-3 font-sans text-xs uppercase tracking-[0.16em] text-primary">
            Local Considerations
          </p>
          <ul className="space-y-2 font-sans text-sm text-secondary-foreground/70">
            <li>• Snow load requirements</li>
            <li>• Energy efficiency compliance</li>
            <li>• Historic district guidelines</li>
            <li>• Commercial zoning regulations</li>
          </ul>
        </div>
        <div className="rounded-lg border border-charcoal-lighter bg-charcoal-light p-6">
          <p className="mb-3 font-sans text-xs uppercase tracking-[0.16em] text-primary">
            Google Business Profile Tips
          </p>
          <ul className="space-y-2 font-sans text-sm text-secondary-foreground/70">
            <li>• Add facade service categories</li>
            <li>• Upload before-and-after project images</li>
            <li>• Collect customer reviews</li>
            <li>• Include service areas like Wayne and nearby towns</li>
            <li>• Keep NAP details consistent</li>
          </ul>
          <p className="mt-4 font-sans text-sm text-secondary-foreground/70">
            Name, Address, Phone
          </p>
        </div>
      </div>
      <div className="mt-6 rounded-lg border border-charcoal-lighter bg-charcoal-light p-6">
        <p className="mb-3 font-sans text-xs uppercase tracking-[0.16em] text-primary">
          Local SEO Example Phrase
        </p>
        <p className="font-sans text-sm leading-relaxed text-secondary-foreground/70">
          Building facade solutions in Wayne, NJ for commercial and residential
          properties.
        </p>
      </div>
    </section>
  );
}
