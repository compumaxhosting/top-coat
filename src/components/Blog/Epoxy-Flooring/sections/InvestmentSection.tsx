import { Label, SectionHeading } from "../SectionPrimitives";

export default function InvestmentSection() {
	return (
		<section className="border-b border-charcoal-lighter py-16">
			<Label>Investment</Label>
			<SectionHeading>Cost of Epoxy Flooring</SectionHeading>
			<p className="mb-4 font-sans text-base leading-relaxed text-secondary-foreground/70">
				Pricing varies by floor size, surface condition, and epoxy type. Below is a
				general guide for budgeting your project.
			</p>
			<p className="mb-3 font-sans text-sm uppercase tracking-[0.12em] text-primary">
				The cost depends on:
			</p>
			<ul className="mb-8 grid grid-cols-1 gap-2 md:grid-cols-3">
				{["Floor size", "Surface condition", "Type of epoxy used"].map((item) => (
					<li key={item} className="font-sans text-sm text-secondary-foreground/70">
						• {item}
					</li>
				))}
			</ul>
			<p className="mb-4 font-sans text-sm uppercase tracking-[0.12em] text-primary">
				Average Pricing
			</p>
			<div className="grid grid-cols-1 gap-4 md:grid-cols-3">
				{[
					{ tier: "Basic Epoxy", price: "$3 - $7", note: "per sq. ft." },
					{ tier: "Decorative", price: "$7 - $12", note: "per sq. ft." },
					{ tier: "Industrial Grade", price: "$10 - $15+", note: "per sq. ft." },
				].map((row) => (
					<div
						key={row.tier}
						className="rounded-lg border border-charcoal-lighter bg-charcoal-light p-6"
					>
						<p className="mb-2 font-sans text-xs uppercase tracking-[0.16em] text-secondary-foreground/60">
							{row.tier}
						</p>
						<p className="mb-1 font-serif text-3xl text-primary">{row.price}</p>
						<p className="font-sans text-xs text-secondary-foreground/60">
							{row.note}
						</p>
					</div>
				))}
			</div>
		</section>
	);
}
