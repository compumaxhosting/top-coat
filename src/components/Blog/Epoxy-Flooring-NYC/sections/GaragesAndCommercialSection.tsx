import { Label, SectionHeading } from "../SectionPrimitives";

export default function GaragesAndCommercialSection() {
  const commercialFactors = [
    "Foot and vehicle traffic",
    "Chemical exposure",
    "Impact and abrasion",
    "Moisture conditions",
    "Slip resistance",
    "Cleaning requirements",
    "UV exposure",
    "Desired appearance",
  ];

  return (
    <section className="border-b border-charcoal-lighter py-16" id="garages-and-commercial">
      <Label>Applications</Label>
      <SectionHeading>Is Epoxy Flooring Good for Garages & Commercial Spaces?</SectionHeading>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
        <div>
          <h3 className="font-serif text-2xl text-white/90 mb-4">
            Is Epoxy Flooring Good for Garages in Wayne, NJ?
          </h3>
          <div className="space-y-4 font-sans text-base leading-relaxed text-secondary-foreground/70">
            <p>
              Yes. Epoxy flooring is one of the most popular options for concrete garages because it can help protect the floor from vehicle traffic, oil, road salt, dirt, and stains.
            </p>
            <p>
              For New Jersey garages, durability is particularly important because winter weather can bring snow, ice, salt, and moisture into the garage. Epoxy can also give an older concrete garage a cleaner, more finished appearance while making routine cleaning easier.
            </p>
            <blockquote className="border-l-2 border-primary pl-4 font-serif text-base italic leading-relaxed text-secondary-foreground/75">
              However, the existing concrete should always be evaluated first. Significant cracks, moisture problems, or damaged concrete may need to be addressed before coating installation.
            </blockquote>
          </div>
        </div>

        <div>
          <h3 className="font-serif text-2xl text-white/90 mb-4">
            What Type of Epoxy Flooring Is Best for Commercial Spaces?
          </h3>
          <div className="space-y-4 font-sans text-base leading-relaxed text-secondary-foreground/70">
            <p>
              The best epoxy flooring system depends on the specific commercial environment. A retail showroom may prioritize appearance and easy maintenance, while a warehouse may need greater abrasion resistance and durability. An automotive facility may require resistance to oils and chemicals, while a food or industrial facility may have additional hygiene or chemical-resistance requirements.
            </p>
            <p className="font-semibold text-white/95">
              Commercial flooring should therefore be selected based on:
            </p>
            <ul className="grid grid-cols-2 gap-2 pl-4 list-disc text-sm text-secondary-foreground/70">
              {commercialFactors.map((factor) => (
                <li key={factor}>{factor}</li>
              ))}
            </ul>
            <p className="text-sm italic">
              There is no single epoxy system that is ideal for every commercial property.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
