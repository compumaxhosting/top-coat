import { Label, SectionHeading } from "../SectionPrimitives";

export default function ChallengesSection() {
  const challenges = [
    {
      title: "Reflected Cracks",
      desc: "Existing cracks in the concrete slab may reappear on the surface if the concrete continues moving or settling.",
    },
    {
      title: "Excess Moisture",
      desc: "Hydrostatic pressure or high moisture vapor transmission rates can interfere with epoxy adhesion and performance.",
    },
    {
      title: "Contaminant Adhesion Concerns",
      desc: "Previous concrete coatings, oil, grease, paint, or dirt can affect how well the epoxy bonds to the substrate.",
    },
    {
      title: "Mixing & Application Errors",
      desc: "Improper mixing ratios or applying the product in unfavorable curing conditions can lead to premature floor failure.",
    },
    {
      title: "UV Exposure Limits",
      desc: "Standard epoxy products are subject to ambering or fading under prolonged, direct sunlight (UV exposure).",
    },
    {
      title: "High Demand Industrial Wear",
      desc: "Extremely heavy impact or thermal shock in certain industrial settings may require specialized polyurethane or urethane cement resin systems.",
    },
  ];

  return (
    <section className="border-b border-charcoal-lighter py-16" id="challenges">
      <Label>Challenges</Label>
      <SectionHeading>Common Epoxy Flooring Challenges</SectionHeading>
      
      <p className="max-w-4xl font-sans text-base leading-relaxed text-secondary-foreground/70 md:text-lg mb-8">
        Although epoxy is highly durable, it is not suitable for every concrete floor without proper evaluation. Professional surface preparation and product selection can significantly reduce these risks.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {challenges.map((c) => (
          <div key={c.title} className="p-5 border-l-2 border-primary bg-charcoal-light/10">
            <h3 className="font-serif text-lg font-bold text-white/90 mb-1">{c.title}</h3>
            <p className="font-sans text-sm text-secondary-foreground/70 leading-relaxed">{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
