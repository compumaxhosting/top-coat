import Link from "next/link";
import { Label, SectionHeading } from "../SectionPrimitives";

export default function ConclusionSection() {
  return (
    <section className="py-16">
      <Label>Conclusion</Label>
      <SectionHeading>Invest in a Better Garage Floor</SectionHeading>
      <p className="font-sans text-base leading-relaxed text-secondary-foreground/70">
              Upgrading to <Link href="/services/garage-floor-coating-contractors-in-wayne-nj" className="text-primary">Garage Floor Coating Wayne NJ</Link> is an effective way to protect your
        concrete while enhancing your home&apos;s appearance and functionality.
        Epoxy and polyaspartic coatings provide durability, easy maintenance,
        chemical resistance, and visual appeal, while professional installation
        ensures lasting results.
      </p>
    </section>
  );
}
