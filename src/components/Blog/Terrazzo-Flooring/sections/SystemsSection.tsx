import Link from "next/link";
import { Label, SectionHeading } from "../SectionPrimitives";

export default function SystemsSection() {
  return (
    <section className="border-b border-charcoal-lighter py-16">
      <Label>Systems</Label>
      <SectionHeading>Types of Terrazzo Flooring</SectionHeading>
      <p className="mt-4 font-sans text-base leading-relaxed text-secondary-foreground/70"><strong>Quick Answer:</strong> There are three main types of <Link href="/services/terrazzo-flooring-contractors-wayne-nj" className="text-primary">
          terrazzo flooring
        </Link>: epoxy terrazzo, cement terrazzo, and sand cushion terrazzo.</p>

      <div className="mt-6 space-y-6">
        <div>
          <h3 className="font-serif text-lg font-semibold text-secondary-foreground">1. Epoxy Terrazzo</h3>
          <ul className="mt-2 list-inside list-disc text-secondary-foreground/70">
            <li>Best for indoor use</li>
            <li>Lightweight and flexible</li>
            <li>Wide color options</li>
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-lg font-semibold text-secondary-foreground">2. Cement Terrazzo</h3>
          <ul className="mt-2 list-inside list-disc text-secondary-foreground/70">
            <li>Suitable for outdoor areas</li>
            <li>Thicker and more traditional</li>
            <li>More prone to cracking</li>
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-lg font-semibold text-secondary-foreground">3. Sand Cushion Terrazzo</h3>
          <ul className="mt-2 list-inside list-disc text-secondary-foreground/70">
            <li>Ideal for large commercial spaces</li>
            <li>Helps absorb structural movement</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
