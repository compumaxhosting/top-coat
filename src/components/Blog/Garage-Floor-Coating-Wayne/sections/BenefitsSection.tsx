import { Label, SectionHeading } from "../SectionPrimitives";

const reasons = [
  ["Exceptional Durability", "Epoxy resists impact, abrasion, and heavy vehicle traffic."],
  ["Easy Maintenance", "Dust, dirt, and oil wipe away easily, making cleaning fast and simple."],
  [
    "Chemical Resistance",
    "It protects concrete from gasoline, motor oil, road salt, brake fluid, and household chemicals.",
  ],
  [
    "Moisture Protection",
    "Moisture-resistant coatings help reduce water damage and surface deterioration.",
  ],
  [
    "Crack Restoration",
    "Cracks can be professionally repaired before coating for a smooth finish.",
  ],
  ["Better Appearance", "Choose decorative finishes, custom colors, and premium textures."],
  [
    "Flake Epoxy Systems",
    "Decorative flakes hide imperfections while improving durability and traction.",
  ],
  [
    "Metallic Epoxy Floors",
    "Create a luxurious, showroom-quality floor with unique metallic designs.",
  ],
  [
    "Improved Safety",
    "Textured finishes provide better traction, especially in wet conditions.",
  ],
  [
    "Increased Home Value",
    "Modern garages are attractive selling features that appeal to buyers.",
  ],
  [
    "UV-Stable Polyaspartic Coatings",
    "Polyaspartic topcoats resist yellowing and cure faster than traditional systems.",
  ],
  [
    "Commercial Performance",
    "The technology used in commercial garages is also available for homes.",
  ],
  [
    "Long Service Life",
    "Properly installed coatings often last 10–20 years with minimal maintenance.",
  ],
  [
    "Custom Garage Designs",
    "Create showroom garage floors with personalized colors and finishes.",
  ],
  [
    "Better Return on Investment",
    "Restoration is more affordable than replacing concrete while improving function.",
  ],
] as const;

export default function BenefitsSection() {
  return (
    <section className="border-b border-charcoal-lighter py-16">
      <Label>Benefits</Label>
      <SectionHeading>
        15 Reasons Homeowners Are Upgrading to Epoxy in 2026
      </SectionHeading>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {reasons.map(([title, description], index) => (
          <div key={title}>
            <h3 className="mb-2 font-serif text-xl text-secondary-foreground">
              {index + 1}. {title}
            </h3>
            <p className="font-sans leading-relaxed text-secondary-foreground/70">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
