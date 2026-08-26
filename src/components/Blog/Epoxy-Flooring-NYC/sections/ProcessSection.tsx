import { Label, SectionHeading } from "../SectionPrimitives";

export default function ProcessSection() {
  const steps = [
    {
      num: "01",
      title: "Concrete Inspection",
      desc: "The floor is checked for cracks, damage, contamination, old coatings, and moisture concerns.",
    },
    {
      num: "02",
      title: "Surface Preparation",
      desc: "Diamond grinding or another appropriate preparation method removes contaminants and creates the necessary surface profile.",
    },
    {
      num: "03",
      title: "Concrete Repairs",
      desc: "Cracks, pits, and damaged areas are repaired where appropriate.",
    },
    {
      num: "04",
      title: "Primer Application",
      desc: "A compatible primer may be applied to improve adhesion.",
    },
    {
      num: "05",
      title: "Epoxy Application",
      desc: "The selected epoxy system is installed according to the manufacturer's specifications.",
    },
    {
      num: "06",
      title: "Decorative Finish",
      desc: "Decorative flakes, colors, or metallic effects can be added depending on the desired appearance.",
    },
    {
      num: "07",
      title: "Protective Topcoat",
      desc: "A compatible topcoat can provide additional protection against abrasion, chemicals, and everyday wear.",
    },
  ];

  return (
    <section className="border-b border-charcoal-lighter py-16" id="how-it-works">
      <Label>Installation</Label>
      <SectionHeading>How Does Professional Epoxy Flooring Installation Work?</SectionHeading>
      
      <p className="max-w-4xl font-sans text-base leading-relaxed text-secondary-foreground/70 md:text-lg mb-10">
        A successful epoxy floor starts with proper concrete preparation. The coating needs a clean, properly profiled surface to achieve strong adhesion. Proper preparation is one of the most important factors affecting the performance and longevity of an epoxy floor.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {steps.map((step) => (
          <div 
            key={step.num} 
            className="flex gap-4 p-6 rounded-xl border border-charcoal-lighter bg-charcoal-light/35 transition-all duration-300 hover:border-primary/30"
          >
            <div className="font-mono text-xl font-bold text-primary shrink-0 pt-0.5">
              {step.num}
            </div>
            <div>
              <h3 className="font-serif text-lg font-semibold text-white/90 mb-2">
                {step.title}
              </h3>
              <p className="font-sans text-sm leading-relaxed text-secondary-foreground/70">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
