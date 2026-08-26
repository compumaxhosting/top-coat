import { Label, SectionHeading } from "../SectionPrimitives";

export default function CostSection() {
  const factors = [
    "Total square footage / floor size",
    "Concrete substrate condition & age",
    "Surface preparation requirements (grinding, shot blasting)",
    "Required concrete repairs (cracks, pitting, spalling)",
    "Epoxy system type (solid color, metallic, flake, quartz)",
    "Number of layers & thickness specification",
    "Choice of topcoat (polyurethane, polyaspartic)",
    "Site access, location, and scheduling conditions",
  ];

  return (
    <section className="border-b border-charcoal-lighter py-16" id="cost">
      <Label>Cost Factors</Label>
      <SectionHeading>How Much Does Epoxy Flooring Cost in Wayne, NJ?</SectionHeading>
      
      <div className="max-w-4xl space-y-6 font-sans text-base leading-relaxed text-secondary-foreground/70 md:text-lg">
        <p>
          Epoxy flooring costs vary from project to project. For that reason, homeowners and businesses should be cautious about relying on a single price per square foot without having the floor inspected. A professional evaluation provides a more accurate estimate and helps determine which flooring system is appropriate for the property.
        </p>

        <div className="rounded-xl border border-charcoal-lighter bg-charcoal-light/10 p-6">
          <h3 className="font-serif text-lg font-bold text-white/95 mb-4">
            Key Pricing Factors Include:
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 list-inside list-disc text-sm text-secondary-foreground/75">
            {factors.map((factor) => (
              <li key={factor} className="leading-relaxed">
                {factor}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
