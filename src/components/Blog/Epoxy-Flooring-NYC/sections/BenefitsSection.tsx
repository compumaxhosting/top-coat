import { Label, SectionHeading } from "../SectionPrimitives";

export default function BenefitsSection() {
  const benefits = [
    {
      title: "Durability",
      desc: "A properly installed epoxy floor can withstand regular foot traffic, vehicle traffic, equipment, and everyday abrasion. This makes it particularly useful for garages, workshops, warehouses, and commercial facilities.",
    },
    {
      title: "Chemical & Stain Resistance",
      desc: "Epoxy flooring can provide resistance to many common chemicals, automotive fluids, oils, and stains. This makes it a practical option for garages and industrial environments.",
    },
    {
      title: "Easy Maintenance",
      desc: "The seamless surface makes sweeping and cleaning relatively simple. Dirt, dust, and spills are also easier to manage than on many traditional flooring surfaces.",
    },
    {
      title: "Attractive Appearance",
      desc: "Epoxy does not have to look industrial. Homeowners and business owners can choose from solid colors, decorative flakes, metallic finishes, and other design options.",
    },
    {
      title: "Moisture & Concrete Protection",
      desc: "A properly selected and installed coating can help protect the concrete surface from moisture exposure, staining, and everyday wear.",
    },
    {
      title: "Slip-Resistant Options",
      desc: "Slip-resistant additives or aggregates can be incorporated into an epoxy system when additional traction is required.",
    },
  ];

  return (
    <section className="border-b border-charcoal-lighter py-16" id="benefits">
      <Label>Benefits</Label>
      <SectionHeading>What Are the Benefits of Epoxy Flooring in Wayne, NJ?</SectionHeading>
      
      <p className="max-w-4xl font-sans text-base leading-relaxed text-secondary-foreground/70 md:text-lg mb-10">
        Epoxy flooring offers several advantages for homeowners and businesses in Wayne and throughout North Jersey.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((b) => (
          <div 
            key={b.title} 
            className="p-6 rounded-xl border border-charcoal-lighter bg-charcoal-light/20 flex flex-col justify-between"
          >
            <div>
              <h3 className="font-serif text-xl font-semibold text-white/90 mb-3">
                {b.title}
              </h3>
              <p className="font-sans text-sm leading-relaxed text-secondary-foreground/70">
                {b.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
