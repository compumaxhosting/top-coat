import { Label, SectionHeading } from "../SectionPrimitives";

export default function LocalContextSection() {
  return (
    <section className="border-b border-charcoal-lighter py-16">
      <Label>Local Context</Label>
      <SectionHeading>Terrazzo in Wayne & North Jersey</SectionHeading>
      <p className="mb-12 font-sans text-base leading-relaxed text-secondary-foreground/70">
        Terrazzo works well in Wayne and North Jersey because it withstands heavy foot traffic
        and delivers long-term value in public and commercial spaces.
      </p>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-lg border border-charcoal-lighter bg-charcoal-light p-6">
          <p className="mb-4 font-sans text-xs uppercase tracking-[0.16em] text-primary">Why It Works Here</p>
          <ul className="space-y-3">
            {["Durable under heavy use", "Suitable for humid climates when sealed", "Works well in lobbies and public spaces"].map((item) => (
              <li key={item} className="flex gap-3 font-sans text-sm text-secondary-foreground/70"><span className="pt-1 text-primary">◆</span>{item}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-lg border border-charcoal-lighter bg-charcoal-light p-6">
          <p className="mb-4 font-sans text-xs uppercase tracking-[0.16em] text-secondary-foreground/60">Real-World Result</p>
          <p className="mb-5 font-serif text-base italic leading-relaxed text-secondary-foreground/70">A homeowner in Wayne upgraded from outdated tile to terrazzo and experienced a modern, seamless appearance, an estimated 10–15% increase in property value, and reduced long-term maintenance costs.</p>
          <ul className="space-y-2">
            {["Modern, seamless appearance","Increased property value (~10–15%)","Reduced long-term maintenance costs"].map((item) => (
              <li key={item} className="flex gap-2 font-sans text-sm text-secondary-foreground/70"><span className="text-primary">↗</span>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
