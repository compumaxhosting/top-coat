import { Label, SectionHeading } from "../SectionPrimitives";

export default function ConclusionSection() {
  return (
    <section className="border-b border-charcoal-lighter py-16">
      <Label>Summary</Label>
      <SectionHeading>Conclusion</SectionHeading>
      <p className="font-sans text-base leading-relaxed text-secondary-foreground/70">
        Terrazzo is a long-term investment offering durability, style, and functionality. From bespoke residential installs to large commercial projects, it provides lasting value.
      </p>
      <p className="mt-5 font-sans text-base leading-relaxed text-secondary-foreground/70">
        If you're in Wayne or North Jersey, terrazzo is especially practical for high-traffic and design-forward spaces.
      </p>
    </section>
  );
}
