import Link from "next/link";
import { Label, SectionHeading } from "../SectionPrimitives";

export default function ProfessionalInstallationSection() {
  return (
    <section className="border-b border-charcoal-lighter py-16">
      <Label>Professional Service</Label>
      <SectionHeading>Why Professional Installation Matters</SectionHeading>
      <p className="font-sans text-base leading-relaxed text-secondary-foreground/70">
        Stamped concrete may appear straightforward, but timing and preparation are critical
        during installation. The stamping process must be performed at the right stage of the
        concrete&apos;s setting process, while the underlying base, grading, joints, and drainage
        also need proper attention.
      </p>
      <p className="mt-5 font-sans text-base leading-relaxed text-secondary-foreground/70">
        <Link href="/"
          className="text-primary hover:underline"
        >
          TopCoat Artistry LLC
        </Link> has 20+ years of experience providing epoxy flooring and decorative
        concrete solutions in New Jersey. The company offers stamped concrete for patios,
        walkways, and driveways designed to replicate stone, brick, and tile finishes.
      </p>
      <p className="mt-5 font-sans text-base leading-relaxed text-secondary-foreground/70">
        A professional residential concrete contractor can help evaluate the site, recommend
        appropriate designs, and identify potential issues before installation begins.
      </p>
    </section>
  );
}
