import { Label, SectionHeading } from "../SectionPrimitives";

export default function ProcessSection() {
  return (
    <section className="border-b border-charcoal-lighter py-16" id="two">
      <Label>Installation Steps</Label>
      <SectionHeading>How Does Patterned Concrete Installation Work?</SectionHeading>
      <p className="font-sans text-base leading-relaxed text-secondary-foreground/70">
        A professional patterned concrete installation involves several important stages.
      </p>
      <h3 className="mb-4 mt-8 font-serif text-2xl text-secondary-foreground">
        Installation Process
      </h3>
      <ol className="ml-6 list-decimal space-y-2 font-sans text-secondary-foreground/70">
        <li>
          <strong className="text-secondary-foreground">Site Evaluation</strong> — The contractor
          evaluates the existing surface, soil conditions, drainage, access, grading, and project
          requirements.
        </li>
        <li>
          <strong className="text-secondary-foreground">Surface Preparation</strong> — Depending
          on the project, existing concrete may need to be removed or prepared. Proper base
          preparation is particularly important for exterior concrete exposed to traffic and
          changing weather.
        </li>
        <li>
          <strong className="text-secondary-foreground">Concrete Placement</strong> — The
          appropriate concrete is placed and leveled across the prepared area.
        </li>
        <li>
          <strong className="text-secondary-foreground">Color and Pattern Application</strong> —
          Color is incorporated according to the selected design, followed by stamping while the
          concrete is at the appropriate stage for creating the desired texture.
        </li>
        <li>
          <strong className="text-secondary-foreground">Curing and Sealing</strong> — The
          concrete is allowed to cure properly before finishing and sealing. A suitable sealer
          can help protect an exterior decorative surface against moisture, staining, UV
          exposure, and everyday wear.
        </li>
      </ol>
    </section>
  );
}
