import { Label, SectionHeading } from "../SectionPrimitives";

export default function SystemsSection() {
  return (
    <section className="border-b border-charcoal-lighter py-16">
      <Label>Systems</Label>
      <SectionHeading>Types of Building Facade Systems</SectionHeading>
      <div className="mt-8 overflow-x-auto rounded-lg border border-charcoal-lighter bg-charcoal-light p-4">
        <table className="w-full border-collapse text-left font-sans text-sm text-secondary-foreground/70">
          <thead>
            <tr className="border-b border-charcoal-lighter">
              {["System", "Best For", "Main Benefit"].map((heading) => (
                <th
                  key={heading}
                  className="px-0 py-3 text-xs font-medium uppercase tracking-[0.18em] text-primary"
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              ["Cladding", "Commercial buildings", "Protection and design"],
              ["Curtain wall", "Office towers", "Modern appearance"],
              ["Masonry restoration", "Older properties", "Structural repair"],
              ["Waterproofing", "All building types", "Moisture control"],
              ["Insulated panels", "Large facilities", "Energy savings"],
            ].map(([system, bestFor, benefit]) => (
              <tr key={system} className="border-b border-charcoal-lighter">
                <td className="px-0 py-4 font-medium text-secondary-foreground">
                  {system}
                </td>
                <td className="px-0 py-4">{bestFor}</td>
                <td className="px-0 py-4">{benefit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
