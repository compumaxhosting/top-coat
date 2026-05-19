import Link from "next/link";
import { Label, SectionHeading } from "../SectionPrimitives";

export default function InvestmentSection() {
  return (
    <section className="border-b border-charcoal-lighter py-16">
      <Label>Investment</Label>
      <SectionHeading>Cost of Terrazzo Flooring</SectionHeading>
      <p className="mb-4 font-sans text-base leading-relaxed text-secondary-foreground/70"><strong>Quick Answer:</strong> <Link href="/services/terrazzo-flooring-contractors-wayne-nj" className="text-primary">
          Terrazzo flooring
        </Link> typically costs $20 to $70 per square foot in North Jersey, depending on materials and design complexity.</p>

      <div className="mt-6 overflow-x-auto rounded-lg border border-charcoal-lighter bg-charcoal-light p-4">
        <table className="w-full border-collapse text-left font-sans text-sm text-secondary-foreground/70">
          <thead>
            <tr className="border-b border-charcoal-lighter">
              <th className="px-0 py-3 text-xs font-medium uppercase tracking-[0.18em] text-primary">Type of Terrazzo</th>
              <th className="px-0 py-3 text-xs font-medium uppercase tracking-[0.18em] text-primary">Average Cost (per sq ft)</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-charcoal-lighter">
              <td className="px-0 py-4">Epoxy Terrazzo</td>
              <td className="px-0 py-4">$25 – $70</td>
            </tr>
            <tr className="border-b border-charcoal-lighter">
              <td className="px-0 py-4">Cement Terrazzo</td>
              <td className="px-0 py-4">$20 – $60</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="mt-6 mb-3 font-sans text-sm uppercase tracking-[0.12em] text-primary">Factors Affecting Cost</h3>
      <ul className="mb-8 space-y-2 text-secondary-foreground/70">
        <li>• Design complexity</li>
        <li>• Area size</li>
        <li>• Material type</li>
        <li>• Labor and installation expertise</li>
      </ul>
    </section>
  );
}
