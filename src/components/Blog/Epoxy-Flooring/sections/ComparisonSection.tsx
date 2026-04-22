import { Label, SectionHeading } from "../SectionPrimitives";

export default function ComparisonSection() {
	return (
		<section className="border-b border-charcoal-lighter py-16">
			<Label>Comparison</Label>
			<SectionHeading>Epoxy vs. Traditional Flooring</SectionHeading>
			<div className="mt-8 overflow-x-auto rounded-lg border border-charcoal-lighter bg-charcoal-light p-4">
				<table className="w-full border-collapse text-left font-sans text-sm text-secondary-foreground/70">
					<thead>
						<tr className="border-b border-charcoal-lighter">
							{["Feature", "Epoxy Flooring", "Tiles / Vinyl"].map(
								(heading, index) => (
									<th
										key={heading}
										className={`px-0 py-3 text-xs font-medium uppercase tracking-[0.18em] ${
											index === 1 ? "text-primary" : "text-secondary-foreground/60"
										}`}
									>
										{heading}
									</th>
								)
							)}
						</tr>
					</thead>
					<tbody>
						{[
							["Durability", "High", "Medium"],
							["Maintenance", "Low", "Medium"],
							["Lifespan", "10-20 years", "5-10 years"],
							["Water Resistance", "Excellent", "Moderate"],
							["Appearance", "Modern", "Standard"],
						].map(([feature, epoxy, traditional]) => (
							<tr key={feature} className="border-b border-charcoal-lighter">
								<td className="px-0 py-4 text-xs uppercase tracking-[0.06em] text-secondary-foreground/60">
									{feature}
								</td>
								<td className="px-0 py-4 font-medium text-secondary-foreground">
									{epoxy}
								</td>
								<td className="px-0 py-4">{traditional}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</section>
	);
}
