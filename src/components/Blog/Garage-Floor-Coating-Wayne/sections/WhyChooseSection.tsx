import Link from "next/link";
import { Label, SectionHeading } from "../SectionPrimitives";

export default function WhyChooseSection() {
  return (
    <section className="border-b border-charcoal-lighter py-16">
      <Label>TopCoat Artistry LLC</Label>
      <SectionHeading>Why Choose TopCoat Artistry LLC</SectionHeading>
      <p className="font-sans text-base leading-relaxed text-secondary-foreground/70">
        <Link href="/" className="text-primary">
          TopCoat Artistry LLC
        </Link>{" "}
        specializes in Garage Floor Coating Wayne NJ using premium epoxy and
        polyaspartic systems designed for long-term performance. Serving Wayne,
        Newark, Paterson, Jersey City, Bergen County, and nearby communities,
        the team focuses on meticulous concrete preparation, professional
        installation, and durable finishes tailored to each property.
      </p>
    </section>
  );
}
