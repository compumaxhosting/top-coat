import { Label, SectionHeading } from "../SectionPrimitives";

export default function MaintenanceSection() {
  return (
    <section className="border-b border-charcoal-lighter py-16" id="eight">
      <Label>Care &amp; Longevity</Label>
      <SectionHeading>Stamped Concrete Maintenance Tips</SectionHeading>
      <p className="font-sans text-base leading-relaxed text-secondary-foreground/70">
        Proper maintenance can help preserve both the appearance and performance of an outdoor
        concrete surface. Regular cleaning and appropriate maintenance can help protect the
        decorative finish and allow potential problems to be identified earlier.
      </p>
      <ol className="mt-6 ml-6 list-decimal space-y-2 font-sans text-secondary-foreground/70">
        <li>Sweep dirt and leaves regularly.</li>
        <li>Clean spills promptly.</li>
        <li>Avoid unsuitable chemicals or aggressive cleaning methods.</li>
        <li>Inspect the surface periodically.</li>
        <li>Address cracks or deterioration early.</li>
        <li>Keep drainage areas clear.</li>
        <li>Follow the contractor&apos;s recommendations for resealing.</li>
      </ol>
    </section>
  );
}
