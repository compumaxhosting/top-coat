import { Label, SectionHeading } from "../SectionPrimitives";

export default function MaintenanceSection() {
  return (
    <section className="border-b border-charcoal-lighter py-16">
      <Label>Longevity</Label>
      <SectionHeading>Maintenance and Long-Term Performance</SectionHeading>
      <p className="font-sans text-base leading-relaxed text-secondary-foreground/70">
        Proper material selection, installation quality, and routine maintenance
        help facade systems stay durable and reduce lifecycle costs.
      </p>
      <p className="mt-4 font-sans text-base leading-relaxed text-secondary-foreground/70">
        Waterproof coatings and preventive inspections significantly reduce
        moisture-related damage over time.
      </p>
    </section>
  );
}
