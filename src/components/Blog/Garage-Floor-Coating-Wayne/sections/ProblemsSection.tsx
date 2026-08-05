import { Label, SectionHeading } from "../SectionPrimitives";

const problems = [
    ["Oil stains", "Chemical-resistant epoxy"],
    ["Concrete dust", "Complete surface sealing"],
    ["Surface cracks", "Professional crack repair"],
    ["Moisture intrusion", "Moisture-resistant coatings"],
    ["Tire marks", "High-performance topcoat"],
    ["Peeling paint", "Industrial-grade coating system"],
] as const;

export default function ProblemsSection() {
    return (
        <section className="border-b border-charcoal-lighter py-16">
            <Label>Concrete Protection</Label>
            <SectionHeading>Common Problems Garage Floor Coatings Solve</SectionHeading>
            <div className="overflow-x-auto">
                <table className="w-full min-w-135 text-left">
                    <thead className="border-b border-charcoal-lighter">
                        <tr>
                            <th className="px-4 py-3 font-serif text-secondary-foreground">
                                Problem
                            </th>
                            <th className="px-4 py-3 font-serif text-secondary-foreground">
                                Solution
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {problems.map(([problem, solution]) => (
                            <tr key={problem} className="border-b border-charcoal-lighter">
                                <td className="px-4 py-3 text-secondary-foreground/70">
                                    {problem}
                                </td>
                                <td className="px-4 py-3 text-secondary-foreground/70">
                                    {solution}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}
