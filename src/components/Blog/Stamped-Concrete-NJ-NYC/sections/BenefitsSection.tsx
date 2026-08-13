import { Label, SectionHeading } from "../SectionPrimitives";

export default function BenefitsSection() {
  return (
    <section className="border-b border-charcoal-lighter py-16" id="four">
      <Label>Advantages</Label>
      <SectionHeading>Benefits of Decorative Concrete</SectionHeading>
      <p className="font-sans text-base leading-relaxed text-secondary-foreground/70">
        One reason property owners choose decorative concrete Wayne New Jersey is the combination
        of design flexibility and concrete&apos;s established durability.
      </p>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-8">
        {[
          ["Custom Appearance", "Choose from numerous patterns, textures, and colors."],
          ["Design Flexibility", "Combine borders, colors, and patterns."],
          ["Versatility", "Suitable for residential and commercial applications."],
          ["Continuous Surface", "Creates a unified appearance compared with individual pavers."],
          ["Customization", "Designs can be matched to the surrounding property."],
          ["Maintenance", "Routine cleaning and appropriate resealing can help preserve the finish."],
        ].map(([title, description]) => (
          <div key={title}>
            <h3 className="mb-2 font-serif text-xl text-secondary-foreground">{title}</h3>
            <p className="font-sans leading-relaxed text-secondary-foreground/70">{description}</p>
          </div>
        ))}
      </div>

      <h3 className="mb-4 mt-10 font-serif text-2xl text-secondary-foreground">
        Why Choose Stamped Concrete?
      </h3>
      <ul className="ml-6 list-disc space-y-2 font-sans text-secondary-foreground/70">
        <li>Stone, brick, slate, and tile appearance</li>
        <li>Custom patterns and colors</li>
        <li>Suitable for patios and driveways</li>
        <li>Decorative walkway options</li>
        <li>Residential and commercial applications</li>
        <li>Custom borders and textured finishes</li>
        <li>Can complement existing landscaping and architecture</li>
      </ul>
    </section>
  );
}
