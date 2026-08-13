import { Label, SectionHeading } from "../SectionPrimitives";

const problems = [
  ["Cracks", "Settlement, movement, or installation conditions"],
  ["Surface deterioration", "Moisture, weather, or poor installation"],
  ["Fading", "UV exposure or sealer deterioration"],
  ["Staining", "Oil, dirt, chemicals, or other contaminants"],
  ["Sealer failure", "Incorrect product or insufficient maintenance"],
  ["Drainage problems", "Improper grading or water management"],
  ["Uneven surface", "Poor base preparation"],
] as const;

export default function ProblemsSection() {
  return (
    <section className="border-b border-charcoal-lighter py-16" id="five">
      <Label>Troubleshooting</Label>
      <SectionHeading>Common Stamped Concrete Problems</SectionHeading>
      <p className="font-sans text-base leading-relaxed text-secondary-foreground/70">
        Stamped concrete can provide a long-lasting surface, but installation quality and
        maintenance matter. New Jersey&apos;s seasonal weather makes proper drainage, preparation,
        curing, and maintenance especially important.
      </p>
      <div className="mt-8 overflow-x-auto">
        <table className="w-full min-w-135 text-left">
          <thead className="border-b border-charcoal-lighter">
            <tr>
              <th className="px-4 py-3 font-serif text-secondary-foreground">Problem</th>
              <th className="px-4 py-3 font-serif text-secondary-foreground">Potential Cause</th>
            </tr>
          </thead>
          <tbody>
            {problems.map(([problem, cause]) => (
              <tr key={problem} className="border-b border-charcoal-lighter">
                <td className="px-4 py-3 text-secondary-foreground/70">{problem}</td>
                <td className="px-4 py-3 text-secondary-foreground/70">{cause}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <blockquote className="mt-8 border-l-2 border-primary pl-6 font-serif text-lg italic leading-relaxed text-secondary-foreground/75">
        Don&apos;t evaluate stamped concrete by appearance alone. Ask about the base preparation,
        concrete specifications, control joints, drainage, curing, sealer, and maintenance
        requirements. These factors can significantly influence the finished surface and its
        long-term performance.
      </blockquote>
    </section>
  );
}
