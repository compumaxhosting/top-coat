import Link from "next/link";
import { Label, SectionHeading } from "../SectionPrimitives";

export default function DefinitionSection() {
  return (
    <section className="border-b border-charcoal-lighter py-16" id="what-is-epoxy">
      <Label>Overview</Label>
      <SectionHeading>What Is Epoxy Flooring?</SectionHeading>
      <div className="max-w-4xl space-y-5 font-sans text-base leading-relaxed text-secondary-foreground/70 md:text-lg">
        <p>
          Epoxy flooring is a resin-based floor coating applied over properly prepared concrete. When epoxy resin and hardener are combined, they create a strong, bonded surface that can resist abrasion, stains, moisture, and everyday wear.
        </p>
        <p>
          Unlike basic concrete paint, <Link href="/services/epoxy-flooring-wayne-new-jersey" className="text-primary hover:underline">professional epoxy flooring</Link> is typically installed as a complete coating system. Depending on the application, it may include a primer, epoxy base coat, decorative flakes or metallic effects, and a protective topcoat.
        </p>
        <p>
          This makes epoxy a popular flooring solution for residential garages as well as commercial and industrial properties throughout New Jersey and the NYC area.
        </p>
      </div>
    </section>
  );
}
