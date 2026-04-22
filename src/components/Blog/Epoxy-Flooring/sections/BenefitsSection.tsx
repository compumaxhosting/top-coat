import { benefits } from "../data";
import { Label, SectionHeading } from "../SectionPrimitives";

export default function BenefitsSection() {
	return (
		<section className="border-b border-charcoal-lighter py-16">
			<Label>Advantages</Label>
			<SectionHeading>Key Benefits</SectionHeading>
			<p className="mb-10 font-sans text-base leading-relaxed text-secondary-foreground/70">
				Epoxy outperforms traditional flooring options like tiles or vinyl in
				demanding environments, combining resilience with a refined aesthetic.
			</p>
			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
				{benefits.map((benefit) => (
					<div
						key={benefit.title}
						className="rounded-lg border border-charcoal-lighter bg-charcoal-light p-6"
					>
						<span className="mb-4 block text-xl leading-none text-primary">
							{benefit.icon}
						</span>
						<h3 className="mb-2 font-sans text-xs font-semibold uppercase tracking-[0.08em] text-secondary-foreground">
							{benefit.title}
						</h3>
						<p className="font-sans text-sm leading-relaxed text-secondary-foreground/70">
							{benefit.body}
						</p>
					</div>
				))}
			</div>
			<div className="mt-8 rounded-lg border border-charcoal-lighter bg-charcoal-light p-6">
				<p className="mb-4 font-sans text-xs uppercase tracking-[0.16em] text-primary">
					Summary of Benefits
				</p>
				<ul className="grid grid-cols-1 gap-2 md:grid-cols-2">
					{[
						"Long lifespan",
						"High resistance",
						"Modern look",
						"Budget-friendly",
					].map((item) => (
						<li
							key={item}
							className="font-sans text-sm text-secondary-foreground/70"
						>
							• {item}
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
