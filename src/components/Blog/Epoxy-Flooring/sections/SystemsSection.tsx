import { Label, SectionHeading } from "../SectionPrimitives";

export default function SystemsSection() {
	return (
		<section className="border-b border-charcoal-lighter py-16">
			<Label>Systems</Label>
			<SectionHeading>Types of Epoxy Flooring</SectionHeading>
			<div className="mt-8 overflow-x-auto rounded-lg border border-charcoal-lighter bg-charcoal-light p-4">
				<table className="w-full border-collapse text-left font-sans text-sm text-secondary-foreground/70">
					<thead>
						<tr className="border-b border-charcoal-lighter">
							{["System", "Best For", "Key Feature"].map((heading) => (
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
							["Self-Leveling", "Commercial spaces", "Smooth, seamless finish"],
							[
								"Epoxy Mortar Floors",
								"Industrial environments",
								"Heavy-duty durability",
							],
							["Flake Epoxy", "Garages & homes", "Decorative and slip-resistant"],
							[
								"Metallic Epoxy",
								"Showrooms & interiors",
								"High-end gloss appearance",
							],
						].map(([type, best, feature]) => (
							<tr key={type} className="border-b border-charcoal-lighter">
								<td className="px-0 py-4 font-medium text-secondary-foreground">
									{type}
								</td>
								<td className="px-0 py-4">{best}</td>
								<td className="px-0 py-4">{feature}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</section>
	);
}
