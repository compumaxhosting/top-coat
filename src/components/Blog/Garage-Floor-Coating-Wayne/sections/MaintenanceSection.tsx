import { Label, SectionHeading } from "../SectionPrimitives";

export default function MaintenanceSection() {
  return (
    <section className="border-b border-charcoal-lighter py-16">
      <Label>Care</Label>
      <SectionHeading>Garage Floor Maintenance Tips</SectionHeading>
      <p className="font-sans text-base leading-relaxed text-secondary-foreground/70">
        Maintain your long-lasting floor finish by sweeping regularly, cleaning
        spills immediately with pH-neutral cleaners, avoiding dragging heavy
        metal equipment, washing away road salt during winter, and scheduling
        periodic inspections.
      </p>
    </section>
  );
}
