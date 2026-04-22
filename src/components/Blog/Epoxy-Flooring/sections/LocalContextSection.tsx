import { Label, SectionHeading } from "../SectionPrimitives";

export default function LocalContextSection() {
	return (
		<section className="border-b border-charcoal-lighter py-16">
			<Label>Local Context</Label>
			<SectionHeading>Epoxy in Wayne & North Jersey</SectionHeading>
			<p className="mb-12 font-sans text-base leading-relaxed text-secondary-foreground/70">
				If you&apos;re located in Wayne or North Jersey, epoxy flooring is especially
				beneficial due to seasonal weather changes.
			</p>
			<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
				<div className="rounded-lg border border-charcoal-lighter bg-charcoal-light p-6">
					<p className="mb-4 font-sans text-xs uppercase tracking-[0.16em] text-primary">
						Why It Works Here
					</p>
					<ul className="space-y-3">
						{[
							"Handles moisture and humidity",
							"Resistant to salt damage (winter)",
							"Ideal for garages and basements",
						].map((item) => (
							<li key={item} className="flex gap-3 font-sans text-sm text-secondary-foreground/70">
								<span className="pt-1 text-primary">◆</span>
								{item}
							</li>
						))}
					</ul>
				</div>
				<div className="rounded-lg border border-charcoal-lighter bg-charcoal-light p-6">
					<p className="mb-4 font-sans text-xs uppercase tracking-[0.16em] text-secondary-foreground/60">
						Real-World Result
					</p>
					<p className="mb-5 font-serif text-base italic leading-relaxed text-secondary-foreground/70">
						A North Jersey retail store upgraded to epoxy and saw significant gains.
					</p>
					<ul className="space-y-2">
						{[
							"40% reduction in maintenance costs",
							"Improved customer experience due to clean aesthetics",
							"Increased durability under high foot traffic",
						].map((item) => (
							<li key={item} className="flex gap-2 font-sans text-sm text-secondary-foreground/70">
								<span className="text-primary">↗</span>
								{item}
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
}
