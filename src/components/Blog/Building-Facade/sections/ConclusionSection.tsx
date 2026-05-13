import Link from "next/link";
import { Label, SectionHeading } from "../SectionPrimitives";

export default function ConclusionSection() {
  return (
    <section className="border-b border-charcoal-lighter py-16">
      <Label>Conclusion</Label>
      <SectionHeading>Final Thoughts</SectionHeading>
      <p className="font-sans text-base leading-relaxed text-secondary-foreground/70">
              <Link href="/building-facade-contractors-wayne-nj">
                  Building facade solutions
                  in New Jersey
        </Link>{" "} are essential for protecting
              structures, improving energy efficiency, and enhancing architectural appeal. Whether for commercial properties, residential buildings, or renovation projects, a well-designed facade system increases durability, safety, and long-term value.
      </p>
      <p className="mt-4 font-sans text-base leading-relaxed text-secondary-foreground/70">
              From cladding systems and curtain walls to waterproofing and restoration, professional facade services help buildings withstand New Jersey’s climate while maintaining modern design standards.
      </p>
    </section>
  );
}
